import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import MenuIcon from '@mui/icons-material/Menu';
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";



const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [categories, setCategories] = useState([])
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(()=>{
    const categories = collection(db, "categories")

    getDocs(categories)
    .then(res=>{
        const categorias = res.docs.map(cat => {
          return{
            ...cat.data(),
            id:res.id
          }
        })
        setCategories(categorias)
        console.log(categorias)
      })
      .catch(err => console.log(err))
    },[])

  return (
    <div >
      <nav className="container-navbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dx4qsxcb7/image/upload/v1692822093/facebook_cover_photo_1_yvwe2w.png"
            alt="logo"
          />
        </Link>
        <div className="links">
        <ul className={menu && "open"}>
         {
          categories.map((cat)=>{
            return(
          <NavLink
            key={cat.id}
            to={cat.path}
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            {cat.name}
          </NavLink>

            )
          })
         }
        </ul>
        </div>
        <div className="menu" onClick={()=>{
          setMenu(!menu)
        }}>
          <MenuIcon  fontSize="large"/>
        </div>
        <div className="cart">
          <Link to="/cart" className="link">
            <span>{cart.length}</span>
            <CartWidget />
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;

        //   <NavLink
        //     to="/category/auto"
        //     className={({ isActive }) => (isActive ? "active-link" : "link")}
        //   >
        //     Autos
        //   </NavLink>
        //   {/* <Button
        //     variant="contained"
        //     color="secondary"
        //     onClick={() => navigate("/category/auto")}
        //   >
        //   Autos
        // </Button> */}
        //   <NavLink
        //     to="category/suv"
        //     className={({ isActive }) => (isActive ? "active-link" : "link")}
        //   >
        //     Suvs
        //   </NavLink>