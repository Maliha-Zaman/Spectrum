import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MsksrAgd3wAxE6JSQUmlu0a4eCi6aTa6y2XDWDanIZ81IND85EdZfVAHS9fObF5G5mwsUT40b7x59qcAmReahYA00GrCiJmrk"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    // const userData = localStorage.getItem("user");
    // if (userData) {
    //   // User data exists
    //   const parsedUser = JSON.parse(userData);
    //   setUser(parsedUser);
    // } else {
    //   // User data does not exist
    //   setError("No user found");
    // }
    // if (error) {
    //   // Render an error message if there is no logged-in user
    //   return <div>{error}</div>;
    // } else {
    const makeRequest = async () => {
       try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
       } catch (err) {
        console.log(err);
        // if (
        //   error.response &&
        //   error.response.status == 400 
        // ) {
        //   setError(error.response.data.message);
        // }
        // else {

          setError(
            "You are not elligible for buying. Please sign in as a buyer to make a purchase"
          );
        // }
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="pay">
     
      {error && <div className="error">{error}</div>}
      {/* {msg && <div className="error">{setMsg}</div>} */}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
