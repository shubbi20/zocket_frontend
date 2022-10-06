import { AppointLogo } from "../../Logos/TimelineLogo/appointLogo";
import { Bag } from "../../Logos/TimelineLogo/bagLogo";
import { Lamp } from "../../Logos/TimelineLogo/LampLogo";
import { Tick } from "../../Logos/TimelineLogo/tickLogo";
import "../../styles/bottomSection.scss";
interface props {
  stepNo: number;
}
export const Timeline: React.FC<props> = ({ stepNo }) => {
  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        marginTop: "30px",
        // paddingLeft: "20px",
        padding: "0px 35px",
      }}
    >
      <div
        style={{
          border: "0",
          height: "2px",
          width: "auto",
          background: "linear-gradient(to right,orange 20%,#eee 0%)",
          marginBottom: "-30px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          //   className="timeline"
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: stepNo > 0 ? "orange" : "hsla(214, 16%, 72%, 1)",
            borderRadius: "50%",
            border: "6px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Lamp />
        </div>
        <div
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: stepNo > 1 ? "orange" : "hsla(214, 16%, 72%, 1)",
            border: "6px solid white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Bag />
        </div>
        <div
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: stepNo > 2 ? "orange" : "lightgrey",
            border: "6px solid white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppointLogo />
        </div>
        <div
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: stepNo > 3 ? "orange" : "lightgrey",
            border: "6px solid white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tick />
        </div>
      </div>
    </div>
  );
};
