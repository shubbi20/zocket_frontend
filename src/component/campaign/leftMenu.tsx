import { Menu } from "antd";
import "antd/dist/antd.min.css";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { useNavigate } from "react-router-dom";
import { CampLogo } from "../../Logos/campLogo";
import { CustomerLogo } from "../../Logos/cutomersLogo";
import { HomeLogo } from "../../Logos/homeLogo";
import { ProductLogo } from "../../Logos/productLogo";
import Zocklogo from "../../Logos/zoclogo";
import "../../styles/common.scss";

const LeftMenu = () => {
  const items: ItemType[] = [
    {
      key: "/campa",
      icon: <Zocklogo />,
      style: {
        height: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: 1,
        marginBottom: "70px",
        marginTop: "30px",
      },
      disabled: true,
    },
    {
      label: "Home",
      key: "/Home",
      icon: <HomeLogo />,
      className: "lmenuIcon",
      style: {
        lineHeight: 1,
        marginBottom: "18px",
      },
      disabled: true,
    },

    {
      label: "Campaign",
      key: "/campaign",
      icon: <CampLogo />,
      className: "lmenuIcon",
      style: {
        lineHeight: 1,
        marginBottom: "18px",
      },
    },

    {
      label: "Prooducts",
      key: "/product",
      icon: <ProductLogo />,
      className: "lmenuIcon",
      style: {
        lineHeight: 1,
        marginBottom: "18px",
      },
      disabled: true,
    },

    {
      label: "Customers",
      key: "/customers",
      icon: <CustomerLogo />,
      className: "lmenuIcon",
      style: {
        lineHeight: 1,
        marginBottom: "18px",
      },
      disabled: true,
    },
  ];
  const navigate = useNavigate();
  return (
    <Menu
      theme="dark"
      inlineCollapsed={true}
      style={{ height: "100%" }}
      items={items}
      onClick={({ key, keyPath, domEvent }) => {
        if (key === "/campaign") {
          navigate(key);
        }
      }}
    ></Menu>
  );
};

export default LeftMenu;
