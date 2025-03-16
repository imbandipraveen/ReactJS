import { Link, useLocation } from "react-router-dom";
import "../Components/Styles/styles.scss";

const Home = () => {
  const location = useLocation();
  const param = location.pathname.split("/").pop();
  return (
    <div className="home-container" style={{ marginBottom: "10px" }}>
      <Link to="/useState">
        <button className={`button ${param === "useState" ? "active" : ""}`}>
          useState
        </button>
      </Link>
      <Link to="/useEffect">
        <button className={`button ${param === "useEffect" ? "active" : ""}`}>
          useEffect
        </button>
      </Link>
      <Link to="/useContext">
        <button className={`button ${param === "useContext" ? "active" : ""}`}>
          useContext
        </button>
      </Link>
      <Link to="/useReducer">
        <button className={`button ${param === "useReducer" ? "active" : ""}`}>
          useReducer
        </button>
      </Link>
      <Link to="/useCallback">
        <button className={`button ${param === "useCallback" ? "active" : ""}`}>
          useCallback
        </button>
      </Link>
      <Link to="/useRef">
        <button className={`button ${param === "useRef" ? "active" : ""}`}>
          useRef
        </button>
      </Link>
      <Link to="/useMemo">
        <button className={`button ${param === "useMemo" ? "active" : ""}`}>
          useMemo
        </button>
      </Link>
      <Link to="/redux">
        <button className={`button ${param === "redux" ? "active" : ""}`}>
          Redux
        </button>
      </Link>
    </div>
  );
};

export default Home;
