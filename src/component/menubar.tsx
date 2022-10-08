import { Menu } from "antd";
import "antd/dist/antd.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const [items, setItems] = useState([
    {
      key: 1,
      label: "Login",
    },
    {
      key: 2,
      label: "Signup",
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("zocketSessionData")) {
      setItems([
        {
          key: 3,
          label: "campaign",
        },

        {
          key: 4,
          label: "Logout",
        },
      ]);
    }
  }, [localStorage.getItem("zocketSessionData")]);

  const navigate = useNavigate();
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={items}
      onClick={({ key, keyPath, domEvent }) => {
        if (key === "2") {
          navigate("signup");
        } else {
          navigate("login");
        }
      }}
    />
  );
};
export default MenuBar;
