import { useEffect, useState } from "react";
import { AppointLogo } from "../../Logos/TimelineLogo/appointLogo";
import { Bag } from "../../Logos/TimelineLogo/bagLogo";
import { Lamp } from "../../Logos/TimelineLogo/LampLogo";
import { Tick } from "../../Logos/TimelineLogo/tickLogo";
import "../../styles/bottomSection.scss";
interface props {
  stepNo: number;
}

//   return (
//     <div
//       style={{
//         height: "50px",
//         width: "100%",
//         marginTop: "30px",
//         padding: "0px 35px",
//       }}
//     >
//       <div
//         style={{
//           border: "0",
//           height: "2px",
//           width: "98%",
//           background: "linear-gradient(to right,orange 20%,#eee 0%)",
//           marginBottom: "-30px",
//         }}
//       ></div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <div
//           //   className="timeline"
//           style={{
//             height: "50px",
//             width: "50px",
//             backgroundColor: stepNo > 0 ? "orange" : "hsla(214, 16%, 72%, 1)",
//             borderRadius: "50%",
//             border: "6px solid white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Lamp />

//           <h4 style={{ margin: "0", color: "green" }}>Your Text</h4>
//         </div>
//         <div
//           style={{
//             height: "50px",
//             width: "50px",
//             backgroundColor: stepNo > 1 ? "orange" : "hsla(214, 16%, 72%, 1)",
//             border: "6px solid white",
//             borderRadius: "50%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Bag />
//         </div>
//         <div
//           style={{
//             height: "50px",
//             width: "50px",
//             backgroundColor: stepNo > 2 ? "orange" : "lightgrey",
//             border: "6px solid white",
//             borderRadius: "50%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <AppointLogo />
//         </div>
//         <div
//           style={{
//             height: "50px",
//             width: "50px",
//             backgroundColor: stepNo > 3 ? "orange" : "lightgrey",
//             border: "6px solid white",
//             borderRadius: "50%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Tick />
//         </div>
//       </div>
//     </div>
//   );
// };

// import "./styles.css";

export const TimelineSteps: React.FC<props> = ({ stepNo }) => {
  // let step=25%

  const [stepno, setStepNo] = useState<number>();

  useEffect(() => {
    if (stepNo === 1) {
      setStepNo(25);
    } else if (stepNo === 2) {
      setStepNo(50);
    } else if (stepNo === 3) {
      setStepNo(75);
    } else {
      setStepNo(100);
    }
  }, [stepNo]);

  return (
    <div
      style={{
        // height: "50px",
        // width: "auto",
        // marginTop: "100px",
        height: "50px",
        width: "100%",
        marginTop: "22px",
        padding: "0px 35px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          border: "0",
          height: "2px",
          width: "92%",
          background: `linear-gradient(to right,orange ${stepno}%,#eee 0%)`,
          marginBottom: "-30px",
          marginLeft: "38px",
          // marginRight: "38px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: stepNo > 0 ? "orange" : "hsla(214, 16%, 72%, 1)",
              borderRadius: "50%",
              border: "6px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "38px",
            }}
          >
            <Lamp />
          </div>
          <h4 style={{ margin: "0", color: "black" }}>
            What do you want to do?
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: stepNo > 1 ? "orange" : "hsla(214, 16%, 72%, 1)",
              borderRadius: "50%",
              border: "6px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bag />
          </div>
          <h4 style={{ margin: "0", color: "black", marginTop: "6px" }}>
            Choose product
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: stepNo > 2 ? "orange" : "lightgrey",
              borderRadius: "50%",
              border: "6px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AppointLogo />
          </div>
          <h4 style={{ margin: "0", color: "black", marginTop: "6px" }}>
            Campaign settings
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
              marginRight: "38px",
            }}
          >
            <Tick />
          </div>
          <h4
            style={{
              margin: "0",
              color: "black",
              marginTop: "6px",
              marginRight: "38px",
            }}
          >
            Ready to go
          </h4>
        </div>
      </div>
    </div>
  );
};
