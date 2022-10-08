import { DatePicker, Input, Timeline } from "antd";
import { One } from "../../../Logos/TimelineLogo/one";
import { Two } from "../../../Logos/two";
import "../../../styles/common.scss";
import { RangePickerProps } from "antd/lib/date-picker";
import moment from "moment";

interface Props {
  text: string;
  changeText: (val: string) => void;
  onOk: (value: any) => void;
}

export const SettingTimeLine: React.FC<Props> = ({
  text,
  changeText,
  onOk,
}) => {
  const { RangePicker } = DatePicker;
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  };

  return (
    <div className="settingTimeline">
      <Timeline style={{ marginTop: "5px", padding: "0" }}>
        <Timeline.Item dot={<One />} color="blue">
          <div className="timelineItem">
            <h3 style={{ textDecoration: "underline" }}>
              Budget and dates info
            </h3>
            <div>
              <RangePicker
                disabledDate={disabledDate}
                onCalendarChange={onOk}
                format="YYYY-MM-DD"
              />
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item dot={<Two />} pending={true}>
          <div className="timelineItem">
            <h3 style={{ textDecoration: "underline" }}>Location info</h3>
            <div>
              <Input
                size="middle"
                placeholder="Select a place name, address or coordinates"
                value={text}
                onChange={(e) => {
                  changeText(e.target.value);
                }}
                style={{ width: "155%", borderRadius: "10px" }}
                allowClear={true}
              />
            </div>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};
