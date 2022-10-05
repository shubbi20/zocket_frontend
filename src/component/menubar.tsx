import { Menu } from "antd";
import "antd/dist/antd.min.css";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserSession } from "../apiUtil/apiUrl";
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

  // useEffect(() => {
  //   if (localStorage.getItem("userApartmentSessionData")) {
  //     const userData: string | UserSession = JSON.parse(
  //       localStorage.getItem("userApartmentSessionData") || "s"
  //     );
  //     if (
  //       (userData as UserSession).role &&
  //       (userData as UserSession).role === "regular"
  //     ) {
  //       setItems([
  //         {
  //           key: 3,
  //           label: "Home",
  //         },
  //         {
  //           key: 5,
  //           label: "Logout",
  //         },
  //       ]);
  //     } else if (
  //       (userData as UserSession).role &&
  //       (userData as UserSession).role === "manager"
  //     ) {
  //       // if the role is of manager
  //       setItems([
  //         {
  //           key: 3,
  //           label: "Home",
  //         },

  //         {
  //           key: 6,
  //           label: "Apartment",
  //         },
  //         {
  //           key: 5,
  //           label: "Logout",
  //         },
  //       ]);
  //     } else {
  //       setItems([
  //         {
  //           key: 3,
  //           label: "Home",
  //         },
  //         {
  //           key: 4,
  //           label: "Users",
  //         },
  //         {
  //           key: 5,
  //           label: "Logout",
  //         },
  //       ]);
  //     }
  //   }
  // }, [localStorage.getItem("userApartmentSessionData")]);

  const navigate = useNavigate();
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={items}
      onClick={({ key, keyPath, domEvent }) => {
        if (key === "3") {
          navigate("home");
        } else if (key === "1") {
          navigate("login");
        } else if (key === "4") {
          navigate("User");
        } else if (key === "5") {
          navigate("logout");
        } else if (key === "8") {
          navigate("users");
        } else if (key === "6") {
          navigate("/Apartment");
        } else {
          navigate("signup");
        }
      }}
    />
  );
};
export default MenuBar;
