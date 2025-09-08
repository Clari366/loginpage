import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (user === "clarissa" && pass === "1234") {
      setMsg("✅ Login Success");
      setTimeout(() => navigate("/home"), 500);
    } else {
      setMsg("❌ Wrong details");
    }
  }

  return (
    <div>
      <h2>Login Page</h2>
      <input
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>{msg}</p>
    </div>
  );
}

export default Login;
