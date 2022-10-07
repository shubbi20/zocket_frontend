import { Button } from "antd";
import { Link } from "react-router-dom";
import { TimelineSteps } from "../timeline";
import { Timeline } from "antd";
import { WifiOutlined } from "@ant-design/icons";
import "../../../styles/common.scss";

export const CampaignSetting = () => {
  return (
    <div
      style={{
        height: "65%",
        width: "100%",
      }}
    >
      <TimelineSteps stepNo={3} />
      <div className="firstStep" style={{ width: "50%" }}>
        <div
          style={{ display: "flex", paddingTop: "3px", alignItems: "center" }}
        >
          <h3 style={{ fontSize: "bold" }}>Campaign Settings </h3>
          <h4 style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            (step 3 of 4)
          </h4>
        </div>

        <hr></hr>
        {/* timeline */}
        <div style={{ backgroundColor: "pink" }}>
          <Timeline style={{ margin: "0", padding: "0" }}>
            <Timeline.Item
              dot={<WifiOutlined />}
              style={{
                marginLeft: "0px",
                paddingLeft: "0px",
              }}
              color="red"
            >
              Budget and Date Info
            </Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
      <Link to="/campaign/preview">
        <Button
          type="primary"
          onClick={() => console.log("click")}
          size="large"
          className="buttonStyle"
          style={{ marginTop: "20px", width: "180px", marginLeft: "80%" }}
        >
          Continue
        </Button>
      </Link>
    </div>
  );
};
