import {
  CaretDownOutlined,
  DownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, MenuProps, message, Space } from "antd";
import Search from "antd/lib/input/Search";
import "../../styles/bottomSection.scss";

export const Filter = () => {
  const handleChnage = () => {
    console.log("click");
  };

  const handleMenuClick: MenuProps["onClick"] = (e: any) => {
    // message.info("Click on menu item.");
    console.log("click", e);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Youtube",
          key: "0",
        },
        {
          label: "Facebook",
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "Google",
          key: "2",
        },
        {
          label: "Instagram",
          key: "3",
        },
      ]}
    />
  );

  const StatusMenu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Live now",
          key: "0",
        },
        {
          label: "Paused",
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "Exhausted",
          key: "2",
        },
      ]}
    />
  );

  const dateMenu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Last 30 days",
          key: "0",
        },
        {
          label: "Last 60 days",
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "All",
          key: "2",
        },
      ]}
    />
  );

  const onSearch = (value: string) => console.log(value);

  return (
    <Space className="filter">
      <div>
        <Input
          size="large"
          placeholder="Search for the campaign"
          prefix={<SearchOutlined />}
          style={{ borderRadius: "10px" }}
          disabled={true}
        />
      </div>
      <div style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}>
        <span className="fontcolor">Platform:</span>{" "}
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          className="dropdown"
          autoFocus={false}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space style={{ color: "black" }}>
              All Platform
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
        <span className="fontcolor">Status:</span>{" "}
        <Dropdown
          overlay={StatusMenu}
          trigger={["click"]}
          className="dropdown"
          autoFocus={false}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space style={{ color: "black" }}>
              All Status
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          overlay={dateMenu}
          trigger={["click"]}
          className="datedropDown"
          autoFocus={false}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space style={{ color: "black" }}>
              Last 30 days
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </Space>
  );
};
