import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../../images/success.png";
import styles from "./styles.module.css";
import { Fragment } from "react/cjs/react.production.min";
const PasswordVerify = () => {
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  useEffect(() => {
    const validateConfirmPassword = async () => {
      if (password !== Confirmpassword) {
        setConfirmPasswordValid(false);
        return;
      }

      // Perform your asynchronous validation check here
      // For example, you can make a call to an API to check if the password is valid

      const isValid = await checkPasswordValidity(password);
      setConfirmPasswordValid(isValid);
    };

    validateConfirmPassword();
  }, [password, confirmPassword]);

  return (
    <Fragment>
      {validUrl ? (
        <div className={styles.container}>
          <img src={success} alt="success_img" className={styles.success_img} />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className={styles.green_btn}>Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  );
};

export default PasswordVerify;
