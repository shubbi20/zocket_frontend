import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import LeftMenu from "./leftMenu";
import { TopMenu } from "./topMenu";
import "../../styles/campaign.scss";
import "../../styles/middleSection.scss";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const Campaign = () => {
  return (
    <div className="mainBox">
      <div>
        <LeftMenu />
      </div>
      <div className="content">
        <TopMenu />

        {/* {middle } */}
        <div className="midContent">
          <div style={{ lineHeight: 0.9 }}>
            <h1 className="fontStyle">Your Camapaigns</h1>
            <p>Check the list of campaigns you created</p>
          </div>

          <div>
            <Link to="firstStep">
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={() => console.log("click")}
                size="large"
                className="buttonStyle"
              >
                Create new campaign
              </Button>
            </Link>
          </div>
        </div>

        {/* {bottom} */}
        <div className="bottom">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Campaign;