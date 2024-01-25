import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

Login.propTypes = {
  token: PropTypes.any,
  setToken: PropTypes.func.isRequired,
};

export default Login;

// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("https://fakestoreapi.com/auth/login", {
//         username: username,
//         password: password,
//       });

//       console.log(response.data);
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
