import styles from "./styles.module.css";
import Footer from "../footer/Footer"
const Main = () => {
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
			</nav>
		</div>
		<div className='stores'>
          <div className="card_container">
            <div className="image_container">
              <img src='' alt="" />
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>Aarong</h3>
              </div>
              <div className="card_body">
                <p>Aarong is one of the most reknowned clothing brand</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">View more</a>
              </button>
            </div>
          </div>
          <div className="card_container">
            <div className="image_container">
              <img src='' alt="" />
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>Aarong</h3>
              </div>
              <div className="card_body">
                <p>Aarong is one of the most reknowned clothing brand</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">View more</a>
              </button>
            </div>
          </div>
          <div className="card_container">
            <div className="image_container">
              <img src='' alt="" />
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>Aarong</h3>
              </div>
              <div className="card_body">
                <p>Aarong is one of the most reknowned clothing brand</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">View more</a>
              </button>
            </div>
          </div>
          <div className="card_container">
            <div className="image_container">
              <img src='' alt="" />
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>Aarong</h3>
              </div>
              <div className="card_body">
                <p>Aarong is one of the most reknowned clothing brand</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">View more</a>
              </button>
            </div>
          </div>
          <div className="card_container">
            <div className="image_container">
              <img src='' alt="" />
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>Aarong</h3>
              </div>
              <div className="card_body">
                <p>Aarong is one of the most reknowned clothing brand</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">View more</a>
              </button>
            </div>
          </div>
          <div className="card_container">
            <div className="image_container">
              <img src='' alt="" />
            </div>
            <div className="card_content">
              <div className="card_title">
                  <h3>Aarong</h3>
              </div>
              <div className="card_body">
                <p>Aarong is one of the most reknowned clothing brand</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href="">View more</a>
              </button>
            </div>
          </div>
		  </div>
		  <Footer />
		</>
	);
};

export default Main;
