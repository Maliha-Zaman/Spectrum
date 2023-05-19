import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ card }) {
  return (
    <>
    <div className="CartCategories">

    <Link to="/gigs?cat=animation">
    <div className="catCard">
      <div className="shirt">
        <img src="./img/shirt.png" alt="" />
        <span className="desc">Add talent to AI</span>
        <span className="title">Shirts</span>
      </div>
    </div>
    </Link>
    <Link to="/gigs?cat=design">
    <div className="catCard">
      <img src="./img/tshirt.png" alt="" />
      <span className="desc">Add talent to AI</span>
      <span className="title">T-shirts</span>
    </div>
    </Link>
    <Link to="/gigs?cat=design">
    <div className="catCard">
      <img src="./img/jeans.png" alt="" />
      <span className="desc">Add talent to AI</span>
      <span className="title">Pants</span>
    </div>
    </Link>
    <Link to="/gigs?cat=design">
    <div className="catCard">
      <img src="./img/shorts.png" alt="" />
      <span className="desc">Add talent to AI</span>
      <span className="title">Shorts</span>
    </div>
    </Link>
    <Link to="/gigs?cat=design">
    <div className="catCard">
      <img src="./img/shoes.png" alt="" />
      <span className="desc">Add talent to AI</span>
      <span className="title">Shoes</span>
    </div>
    </Link>
    <Link to="/gigs?cat=design">
    <div className="catCard">
      <img src="./img/wristwatch.png" alt="" />
      <span className="desc">Add talent to AI</span>
      <span className="title">Watches</span>
    </div>
    </Link>
    </div>
    </>
  );
}
export default CatCard;
    {/* <div className="catCard">
      <img src={card.img} alt="" />
      <span className="desc">{card.desc}</span>
      <span className="title">{card.title}</span>
    </div> */}
