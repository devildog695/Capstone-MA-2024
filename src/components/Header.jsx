import { Link } from "react-router-dom";
import PropTypes from "prop-types";

removeEventListener;
export default function Header({ token, setToken }) {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/ProductList">Products</Link>
        <Link to="/Cart">Cart</Link>
        {!token && <Link to="/Login">Login</Link>}
        {token && (
          <Link
            to="/"
            onClick={() => {
              localStorage.clear();
              setToken(null);
            }}
          >
            Logout
          </Link>
        )}
      </nav>
    </header>
  );
}
Header.propTypes = {
  token: PropTypes.any,
  setToken: PropTypes.func.isRequired,
};

// import { Link } from "react-router-dom";

// export default function Header({ token, setToken, clearCart }) {
//   const handleLogout = () => {
//     clearCart();
//     localStorage.clear();
//     setToken(null);
//   };
//   return (
//     <header>
//       <nav className="navbar">
//         <Link to="/">Home</Link>
//         <Link to="/About">About</Link>
//         <Link to="/ProductList">Products</Link>
//         <Link to="/Cart">Cart</Link>
//         {!token && <Link to="/Login">Login</Link>}
//         {token && (
//           <Link to="/" onClick={handleLogout}>
//             Logout
//           </Link>
//         )}
//       </nav>
//     </header>
//   );
// }
