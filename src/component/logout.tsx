import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    localStorage.removeItem("zocketSessionData");
    navigate("/login");
    window.location.reload();
    message.success("you are successfully logout");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "26px", marginTop: "35px" }}>
        Are you sure you want to logout?
      </div>
      <Button type="primary" size="large" onClick={handleOnClick}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
