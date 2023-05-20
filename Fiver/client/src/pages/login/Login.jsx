import React, { useState } from "react";
import "./Login.scss";

import { useNavigate } from "react-router-dom";

import newRequest from "../../../../api/utils/newRequest";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      console.log(res.data);
      setMsg(res.message);
      setTimeout(() => {
        setMsg("");
      }, 5000);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);

      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div className="login">
      <div className="contain">



      <form onSubmit={handleSubmit}>
        {/* <div className="contain">         */}
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        {/* {msg && <div className="error">{setMsg}</div>} */}

        <button type="submit">
          {/* Login */}
          {loading ? <>Loading..</> : <>Login</>}
        </button>
        {/* {error && error} */}
        {/* </div> */}
      </form>
      </div>
    </div>








  );
}

export default Login;
//rise er password user22

