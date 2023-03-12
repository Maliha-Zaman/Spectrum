import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "../common/heading/Header";
import { useEffect } from "react/cjs/react.production.min";
const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    Confirmpassword: "",
  });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  // function getInputValue() {
  //   let inputValue = document.getElementById("textInput1").value;
  //   document.getElementById("output").innerHTML = inputValue;
  // }
//   function validatePassword() {
//     let inputValue = document.getElementById("password").value;
//       let inputValue2 = document.getElementById("Confirmpassword").value;

//     if (inputValue !== inputValue2) {
//       return false;
//     }
//     return true;
//   }
// const isValid = validatePassword();
// if (!isValid) {
//   // return res.status(400).send("Passwords do not match");
//           throw new Error("Passwords must be same");

// }
  const handleSubmit = async (e) => {
 
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/users";
      const { data: res } = await axios.post(url, data);
      setMsg(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <h1>Welcome Back</h1>
            <Link to="/login">
              <button type="button" className={styles.white_btn}>
                Sign in
              </button>
            </Link>
            <Link to="/">
              <button type="button" className={styles.white_btn}>
                Home
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <br />
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                className={styles.input}
              />
              <input
                type="text"
                id="password"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                className={styles.input}
              />
              <input
                type="email"
                id="Confirmpassword"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="Confirmpassword"
                onChange={handleChange}
                value={data.Confirmpassword}
                required
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              {msg && <div className={styles.success_msg}>{msg}</div>}
              <br />
              <button type="submit" className={styles.green_btn}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
