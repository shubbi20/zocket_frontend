import { BuyLogo } from "../../Logos/buyPlanLogo";
import { GiftLogo } from "../../Logos/giftLogo";
import { LastLogo } from "../../Logos/lastLogo";
import { NotificationLogo } from "../../Logos/notificationLogo";
import { UserLogo } from "../../Logos/userLogo";

export const TopMenu = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "hsla(0, 0%, 100%, 1)",
        width: "100%",
        height: "8%",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <h5
        style={{
          backgroundColor: "hsla(0, 0%, 100%, 1)",
          fontFamily: "Eudoxus Sans",
        }}
      >
        free trials ends in 2days
      </h5>
      <div
        style={{
          display: "flex",
          backgroundColor: "rgba(242, 154, 46, 0.1)",
          padding: "3px",
        }}
      >
        <BuyLogo />
        <h5
          style={{
            fontWeight: "bold",
            fontFamily: "Eudoxus Sans",
            color: "hsla(33, 100%, 50%, 1)",
            marginLeft: "5px",
          }}
        >
          Buy Plan
        </h5>
      </div>

      <GiftLogo />
      <NotificationLogo />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <UserLogo />

        <h4
          style={{
            fontWeight: "400",
            fontFamily: "Eudoxus Sans",
            marginLeft: "5px",
          }}
        >
          Mukund cake shop
        </h4>
      </div>

      <LastLogo />
    </div>
  );
};
