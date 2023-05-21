import styles from "./styles.module.css";
import Footer from "../footer/Footer"
import { Component, useEffect } from "react";
export default class Main extends Component{

	// const handleLogout = () => {
	// 	localStorage.removeItem("token");
	// 	window.location.reload();
	// };
  constructor(props){
    super(props);
    this.state = {
        userData: {},
    };
}
componentDidMount(){
fetch("http://127.0.0.1:8000/userData", {
    method:"POST",
    crossDomain: true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      token: window.localStorage.getItem("token"),
    }),
  }).then((res)=>res.json())
  .then((data)=>{
    console.log(data, "userData");
    this.setState({userData:data.data});
  });
}
  render(){
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  
	return (
		<>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Welcome!!</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
        {/* <table>
          <tr>
            <th>name</th>
            <th>Email</th>
          </tr>
        </table> */}
			</nav>
		</div>
      <h1>{this.state.userData.firstName}</h1>
    {/* <div className='stores'>
          <div className="card_container">
            <div className="image_container">
              
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>Aarong</h3>
              </div>
              <div className="card_body">
                <p>Aarong - Number one lifestyle retailer in Bangladesh and social enterprise of BRAC</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">Shop here</a>
              </button>
            </div>
          </div>
          <div className="card_container">
            <div className="image_container6">
              <img src='' alt="" />
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>Artisan</h3>
              </div>
              <div className="card_body">
                <p>Artisan is the best clothing destination for every class of people. The best clothing brand to keep space with time and every season.</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">Shop here</a>
              </button>
            </div>
          </div>
          <div className="card_container">
            <div className="image_container1">
              <img src='' alt="" />
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>Apex</h3>
              </div>
              <div className="card_body">
                <p>Apex footwear brings you an exclusive range of shoes, slippers, sandals, and clothing for men, women & kids.</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">Shop here</a>
              </button>
            </div>
          </div>
          <div className="card_container">
            <div className="image_container2">
              <img src='' alt="" />
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>Bata</h3>
              </div>
              <div className="card_body">
                <p>Bata offers a huge range of Men's and Ladies formal shoes, sports shoes, heels, loafers etc.</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">Shop here</a>
              </button>
            </div>
          </div>
          <div className="card_container">
            <div className="image_container3">
              <img src='' alt="" />
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>iNFINITY</h3>
              </div>
              <div className="card_body">
                <p>iNFINITY Mega Mall is a leading fashion specialty retailer, offering customers one of the most extensive selections of clothing, shoes and accessories.</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">Shop here</a>
              </button>
            </div>
          </div>
          <div className="card_container">
            <div className="image_container4">
              <img src='' alt="" />
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>Rise</h3>
              </div>
              <div className="card_body">
                <p>RISE is a fashion forward retailer that blends local culture with global trends creating a unique spin on fashion.</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">Shop here</a>
              </button>
            </div>
          </div>
          <div className="card_container">
            <div className="image_container5">
              <img src='' alt="" />
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>Twelve</h3>
              </div>
              <div className="card_body">
                <p>Twelve Clothing puts a great effort into making clothes that fit and please every individual customer. </p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">Shop here</a>
              </button>
            </div>
          </div>
 */}
        {/* </div> */}
		  <Footer />
		</>
	);
  }
}


