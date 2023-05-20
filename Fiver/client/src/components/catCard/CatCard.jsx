import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ card }) {
  return (
    <>
    <div className="CartCategories">
    <Link to="/gigs?cat=animation">
    <div className="catCard">
        <div className="image">
          <img src="./img/shirt.png" alt="" />
        </div>
        <div className="info">
          <span className="title">Shirt</span>
        </div>
    </div>
    </Link>
    <Link to="/gigs?cat=tshirt">
    <div className="catCard">
      <img src="./img/tshirt.png" alt="" />
      <span className="title">T-shirt</span>
    </div>
    </Link>
    <Link to="/gigs?cat=design">
    <div className="catCard">
      <img src="./img/jeans.png" alt="" />
      <span className="title">Pant</span>
    </div>
    </Link>
    <Link to="/gigs?cat=shoes">
    <div className="catCard">
      <img src="./img/shoes.png" alt="" />
      <span className="title">Shoes</span>
    </div>
    </Link>
    <Link to="/gigs?cat=watches">
    <div className="catCard">
      <img src="./img/wristwatch.png" alt="" />
      <span className="title">Wristwatch</span>
    </div>
    </Link>
    <Link to="/gigs?cat=bag">
    <div className="catCard">
      <img src="./img/bag.png" alt="" />
      <span className="title">Bag</span>
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
