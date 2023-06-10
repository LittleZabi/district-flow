import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form";

const HomeMiddle = () => {
  const navigate = useNavigate()
  return (
    <div className="middle-view">
      <div className="page-size flex">
        <div className="fade-in mid-left">
          <h1>Welcome to DistrictFlow</h1>
          <h3>Empowering Citizens</h3>
          <p>
            Unlocking the Potential of Digital Governance DistrictFlow
            Empowering District Officers, Revolutionizing Citizen Services, and
            Transforming Administrative Processes for a Connected and Efficient
            Future!
          </p>
          <button onClick={()=>navigate('/application')} className="new-app-btn">New Application</button>
        </div>
        <div className="fade-in flex mid-right">
          <img src="/images/bg-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default HomeMiddle;
