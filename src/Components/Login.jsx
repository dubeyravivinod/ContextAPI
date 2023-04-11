import { useState } from "react";
import "./Login.css";
import { useAuthContext } from "../Context/AuthProvider";

const Login = (props) => {
  const { setLoginTrue, setUserFun } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(username === "admin" && password === "admin") {
        console.log(username, password);
        setLoginTrue(true);
        setUserFun(username);
        props.set(true);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label>Username</label>
      <input 
        type="text"
        name="username"
        placeholder="username" 
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password</label>
      <input 
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
       />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
