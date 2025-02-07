import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RedirectPage.css";
import Redirect from "../../Assets/logo/logo-animation.jpg";

const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/home", { replace: true });
      }, 2300); // 3 seconds delay

      return () => clearTimeout(timer);   
  }, [navigate]
);

  return (
    <div className="redirecte">
        <div className="img-containor">
            <img src={Redirect} alt="logo-animation" />
        </div>
    </div>
  )
};

export default RedirectPage;
