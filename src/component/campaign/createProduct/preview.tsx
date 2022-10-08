import { Button, message } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createCampaignApi } from "../../../apiUtil/campaignApi";
import "../../../styles/common.scss";
import { TimelineSteps } from "../timeline";
import { UserSession, ZocketCacheInterface } from "../utils/interface";
import { MiddleHeader } from "../utils/middleHeader";
import { PreviewCard } from "../utils/previewCard";

export const Preview = () => {
  const navigate = useNavigate();

  const [userSession, setUserSession] = useState<UserSession | string>("");
  const [zocketData, setZocketData] = useState<ZocketCacheInterface>();

  const createCampaign = async () => {
    if (zocketData) {
      const [data, error] = await createCampaignApi({
        campaignName: zocketData.campaignName,
        isOn: true,
        startDate: zocketData.startDate,
        endDate: zocketData.endDate,
        clicks: 300,
        budget: zocketData.budget,
        location: zocketData.location,
        platform: zocketData.platform,
        createdOn: new Date(),
        token: (userSession as UserSession).token,
      });
      if (data) {
        navigate("/campaign");
        message.success("Your campaign has started");
      } else {
        message.error(error);
        console.log("error:", error);
      }
    }
  };

  useEffect(() => {
    const session: UserSession = JSON.parse(
      localStorage.getItem("zocketSessionData") || "s"
    );
    setUserSession(session);
    if (localStorage.getItem("zocketCache")) {
      setZocketData(JSON.parse(localStorage.getItem("zocketCache") || "s"));
    }
  }, []);

  return (
    <div
      style={{
        height: "70%",
        width: "100%",
      }}
    >
      <TimelineSteps stepNo={4} />
      <div className="firstStep">
        <MiddleHeader />

        <hr></hr>
        <div className="Box" style={{ height: "84%" }}>
          <PreviewCard />
        </div>
      </div>

      <Button
        type="primary"
        onClick={() => createCampaign()}
        size="middle"
        className="mainButton"
      >
        Start Campaign
      </Button>
    </div>
  );
};
