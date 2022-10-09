import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { TimelineSteps } from "../timeline";
import "../../../styles/common.scss";
import moment from "moment";
import { useEffect, useState } from "react";
import { chooseData } from "../utils/interface";
import { SettingTimeLine } from "../utils/previewTimeline";
import { MiddleHeader } from "../utils/middleHeader";

export const CampaignSetting = () => {
  const [fromDate, setFromDate] = useState<String>();
  const [toDate, setToDate] = useState<String>();
  const [text, setText] = useState("");
  const [zocketData, setZocketData] = useState<chooseData>();
  const navigate = useNavigate();

  const submit = () => {
    if (!fromDate || !toDate) {
      message.warn("choose date correctly");
    } else if (!text) {
      message.warn("fill your location correctly");
    } else if (text && text.trim().length < 3) {
      message.warn("fill your location correctly");
    } else {
      if (zocketData) {
        const data = {
          campaignName: zocketData.name,
          startDate: fromDate,
          endDate: toDate,
          location: text,
          budget: zocketData.price,
          platform: zocketData.platform,
        };
        localStorage.setItem("zocketCache", JSON.stringify(data));
        navigate("/campaign/preview");
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("zocketCache")) {
      setZocketData(JSON.parse(localStorage.getItem("zocketCache") || "s"));
    }
  }, []);

  const onOk = (value: any) => {
    const [startDate, endDate] = value;
    if (startDate && endDate) {
      console.log("onOk: ", value);
      setFromDate(moment(startDate).format("YYYY-MM-DD"));
      setToDate(moment(endDate).format("YYYY-MM-DD"));
    }
  };

  const changeText = (val: string) => {
    setText(val);
  };

  return (
    <div
      style={{
        height: "94.5%",
        width: "100%",
      }}
    >
      <TimelineSteps stepNo={3} />

      <div
        style={{
          display: "flex",
          height: "369px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "60%",
            height: "95%",
            borderRadius: "10px",
            backgroundColor: "#fafafa",
          }}
        >
          <MiddleHeader heading="Campaign Settings" step="(Step 3 of 4)" />
          <hr></hr>
          <SettingTimeLine changeText={changeText} onOk={onOk} text={text} />
        </div>

        <Button
          type="primary"
          onClick={() => submit()}
          size="large"
          className="mainButton"
          style={{ marginTop: "280px" }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
