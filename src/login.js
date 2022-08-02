import Logo from './Assets/logo';

function Login() {
  return (
    <>
      <div className="container">
        <div className="div1">
          <div className="forms">
            <label for="uid">User id</label>
            <input type="text" name="uid" id="uid" />
            <label className="password-text" for="password">
              Password
            </label>
            <input type="password" name="password" id="password" />
            <a href="#" className="login-btn">
              Log in
            </a>
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="div2">
          <Logo/>
          <h1>GOD WANTS</h1>
          <h1>YOU TO KNOW</h1>
          <h2>that its handled</h2>
        </div>
      </div>
    </>
  );
}

export default Login;
