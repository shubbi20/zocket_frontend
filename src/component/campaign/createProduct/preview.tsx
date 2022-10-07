import { Button, message } from "antd";
import { Link } from "react-router-dom";
import "../../../styles/common.scss";
import { TimelineSteps } from "../timeline";
import { PreviewCard } from "../utils/previewCard";

export const Preview = () => {
  return (
    <div
      style={{
        height: "70%",
        width: "100%",
      }}
    >
      <TimelineSteps stepNo={4} />
      <div className="firstStep">
        <div
          style={{ display: "flex", paddingTop: "2px", alignItems: "center" }}
        >
          <h3 style={{ fontSize: "bold" }}>Ready to go</h3>
          <h4 style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            (step 4 of 4)
          </h4>
        </div>

        <hr></hr>
        <div className="Box" style={{ height: "84%" }}>
          <PreviewCard />
        </div>
      </div>
      <Link to="/product">
        <Button
          type="primary"
          onClick={() => message.success("Campaign has started")}
          size="middle"
          className="buttonStyle"
          style={{
            marginTop: "10px",
            width: "180px",
            float: "right",
            marginRight: "20px",
          }}
        >
          Start Campaign
        </Button>
      </Link>
    </div>
  );
};
