import {
  CaretDownOutlined,
  SearchOutlined,
  TagsFilled,
} from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, MenuProps, message, Space } from "antd";
import { useState } from "react";
import "../../styles/bottomSection.scss";
import { UserSession } from "./utils/interface";

interface props {
  createQuery: ({
    platform,
    tags,
    day,
  }: {
    platform?: string;
    tags?: string;
    day?: string;
  }) => Promise<void>;

  toggle: (checked: boolean) => void;
}

export const Filter: React.FC<props> = ({ createQuery, toggle }) => {
  const [platform, setPlatform] = useState<string>("All Platform");
  const [status, setStatus] = useState<string>("All Status");
  const [day, setDay] = useState<string>("Last 30 days");

  const handleMenuClick: MenuProps["onClick"] = (e: any) => {
    if (e.key === "-1") {
      setPlatform("All Platform");
      createQuery({ tags: status, day: day });
    } else {
      setPlatform(e.key);
      createQuery({ platform: e.key, tags: status, day: day });
    }
    console.log("click", e.key);
  };

  const handleClick: MenuProps["onClick"] = (e: any) => {
    if (e.key === "-1") {
      setStatus("All Status");
      createQuery({ platform: platform, day: day });
    } else {
      setStatus(e.key);
      createQuery({ platform: platform, tags: e.key, day: day });
    }
  };

  const handleDay: MenuProps["onClick"] = (e: any) => {
    if (e.key === "-1") {
      setDay("All");
      createQuery({ platform: platform, tags: status });
    } else {
      setDay(e.key);
      createQuery({ platform: platform, tags: status, day: e.key });
    }
    console.log("click", e.key);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Youtube",
          key: "Youtube",
        },
        {
          label: "Facebook",
          key: "FB",
        },
        {
          label: "Google",
          key: "Google",
        },
        {
          label: "Instagram",
          key: "Instagram",
        },
        {
          label: "All Platform",
          key: "-1",
        },
      ]}
    />
  );

  const StatusMenu = (
    <Menu
      onClick={handleClick}
      items={[
        {
          label: "Live Now",
          key: "Live-Now",
        },
        {
          label: "Paused",
          key: "Paused",
        },
        {
          label: "Exhausted",
          key: "Exhausted",
        },
        {
          label: "All Status",
          key: "-1",
        },
      ]}
    />
  );

  const dateMenu = (
    <Menu
      onClick={handleDay}
      items={[
        {
          label: "Last 30 days",
          key: "Last 30 days",
        },
        {
          label: "Last 60 days",
          key: "Last 60 days",
        },
        {
          label: "All",
          key: "-1",
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
        <Dropdown overlay={menu} trigger={["click"]} className="dropdown">
          <a onClick={(e) => e.preventDefault()}>
            <Space
              style={{
                color: "black",
                width: "100px",
              }}
            >
              {platform}
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
            <Space style={{ color: "black", width: "100px" }}>
              {status}
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
            <Space style={{ color: "black", width: "100px" }}>
              {day}
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </Space>
  );
};
