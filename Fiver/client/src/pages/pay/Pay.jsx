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
  const [msg, setMsg] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
        // setMsg(res.message);
        // setTimeout(() => {
        //   setMsg("");
        // }, 5000);
        // setLoading(false);
      } catch (err) {
        console.log(err);
        // setTimeout(() => {
        //   setErrorMessage("");
        // }, 5000);
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
      {/* <div>ggg</div> */}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
