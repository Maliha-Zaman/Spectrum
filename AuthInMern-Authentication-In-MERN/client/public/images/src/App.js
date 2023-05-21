import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import UserDetails from "./components/Main/userDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Team from "./components/team/Team";
import Store from "./components/stores/Stores";
import Form from "./components/form/Form";

import "./App.css";
function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/stores" exact element={<Store />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/form" exact element={<Form />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/team" exact element={<Team />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  );
}

export default App;
