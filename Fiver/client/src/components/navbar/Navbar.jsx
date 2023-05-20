import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../../../api/utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Spectrum</span>
          </Link>
          {/* <span className="dot">.</span> */}
        </div>
        <div className="links">
          {/* <span>Liverr Business</span>
          <span>Explore</span> */}
          {/* <span>English</span> */}
          {!currentUser?.isSeller 
          // && 
          // <span>Become a Seller</span>
          }
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                <button>Login</button>
              </Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/gigs?cat=shirt">
              Shirt
            </Link>
            <Link className="link menuLink" to="/gigs?cat=tshirt">
              T-shirts
            </Link>
            <Link className="link menuLink" to="/gigs?cat=pant">
              Pants
            </Link>
            {/* <Link className="link menuLink" to="/">
              
            </Link> */}
            <Link className="link menuLink" to="/gigs?cat=shoes">
              Shoes
            </Link>
            <Link className="link menuLink" to="/gigs?cat=bag">
              Bags
            </Link>
            <Link className="link menuLink" to="/gigs?cat=watches">
              Watches
            </Link>
            {/* <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link> */}
          </div>
          {/* <hr /> */}
        </>
      )}
    </div>
  );
}

export default Navbar;
