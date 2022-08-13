import Logo from "./Assets/logo";
import axios from "axios";

function Login() {
  const data = {
    loginId: "123456",
    password: "pass12345",
  };
  function authentication() {
    fetch("http://localhost:5000/api/v1/users/login", {
      method: "POST",
      credentials:'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));

    // axios
    //   .post(
    //     "http://localhost:5000/api/v1/users/login",
    //     { loginId: "123456", password: "pass12345" },
    //     { withCredentials: true }
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //   });
  }
  return (
    <>
      <div className="container">
        <div className="div1">
          <div className="forms">
            <label htmlFor="uid">User id</label>
            <input type="text" name="uid" id="uid" />
            <label className="password-text" htmlFor="password">
              Password
            </label>
            <input type="password" name="password" id="password" />
            <a href="/family" className="login-btn">
              Log in
            </a>
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="div2">
          <div className="logo-login">
            <Logo />
          </div>
          <h1>GOD WANTS</h1>
          <h1>YOU TO KNOW</h1>
          <h2>that its handled</h2>
        </div>
      </div>
    </>
  );
}

export default Login;
// onClick={() => authentication()}