import { Button } from "antd";
import { Link } from "react-router-dom";
import { TimelineSteps } from "../timeline";
import { CampaignCard } from "../utils/campaignCard";
import { CampaignPlatform } from "./firstStep";
import "../../../styles/common.scss";

export const ChooseProduct = () => {
  const platform: CampaignPlatform[] = [
    {
      campaignName: "Get Leads as Call",
      platform: "Google",
      overview: "Reach broad audience and get leads through calls",
      logo: (
        <svg
          width="22"
          height="50"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.66667 0C1.64162 0 0 1.64162 0 3.66667V6.6C0 15.1052 6.89481 22 15.4 22H18.3333C20.3584 22 22 20.3584 22 18.3333V16.3064C22 15.4732 21.5292 14.7114 20.7839 14.3387L17.2405 12.567C16.043 11.9683 14.5929 12.569 14.1695 13.8391L13.7328 15.1492C13.5669 15.647 13.0562 15.9434 12.5417 15.8405C9.32108 15.1964 6.80364 12.6789 6.15952 9.45832C6.05661 8.94378 6.35295 8.43313 6.85076 8.26719L8.47675 7.7252C9.56734 7.36167 10.1942 6.21977 9.91536 5.10451L9.05584 1.66642C8.811 0.687054 7.93104 0 6.92153 0H3.66667Z"
            fill="#0F6EFF"
          />
          <path
            d="M20.7481 0.214788L13.2 7.76291V4.4H11.7333V10.2667H17.6V8.8H14.2371L21.7852 1.25188L20.7481 0.214788Z"
            fill="#0F6EFF"
          />
        </svg>
      ),
    },
    {
      campaignName: "Get Leads as Facebook messages",
      platform: "FB",
      overview: "Get more FB messages from Leads",
      logo: (
        <svg
          width="26"
          height="50"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.14622 19.8571H6.89622V19.1071H6.14622V19.8571ZM6.14622 25H5.39622C5.39622 25.284 5.55668 25.5437 5.81071 25.6708C6.06474 25.7978 6.36875 25.7705 6.59604 25.6001L6.14622 25ZM13.0079 19.8571V19.1071H12.758L12.558 19.257L13.0079 19.8571ZM7.86163 7.10713C7.44742 7.10713 7.11163 7.44291 7.11163 7.85713C7.11163 8.27134 7.44742 8.60713 7.86163 8.60713V7.10713ZM18.1541 8.60713C18.5683 8.60713 18.9041 8.27134 18.9041 7.85713C18.9041 7.44291 18.5683 7.10713 18.1541 7.10713V8.60713ZM7.86163 12.25C7.44742 12.25 7.11163 12.5858 7.11163 13C7.11163 13.4142 7.44742 13.75 7.86163 13.75V12.25ZM14.7233 13.75C15.1375 13.75 15.4733 13.4142 15.4733 13C15.4733 12.5858 15.1375 12.25 14.7233 12.25V13.75ZM5.39622 19.8571V25H6.89622V19.8571H5.39622ZM6.59604 25.6001L13.4577 20.4573L12.558 19.257L5.69641 24.3999L6.59604 25.6001ZM13.0079 20.6071H23.3003V19.1071H13.0079V20.6071ZM23.3003 20.6071C24.6627 20.6071 25.7657 19.5056 25.7657 18.1429H24.2657C24.2657 18.6762 23.8352 19.1071 23.3003 19.1071V20.6071ZM25.7657 18.1429V2.71426H24.2657V18.1429H25.7657ZM25.7657 2.71426C25.7657 1.35156 24.6627 0.25 23.3003 0.25V1.75C23.8352 1.75 24.2657 2.18095 24.2657 2.71426H25.7657ZM23.3003 0.25H2.71541V1.75H23.3003V0.25ZM2.71541 0.25C1.35305 0.25 0.25 1.35156 0.25 2.71426H1.75C1.75 2.18095 2.18052 1.75 2.71541 1.75V0.25ZM0.25 2.71426V18.1429H1.75V2.71426H0.25ZM0.25 18.1429C0.25 19.5056 1.35305 20.6071 2.71541 20.6071V19.1071C2.18052 19.1071 1.75 18.6762 1.75 18.1429H0.25ZM2.71541 20.6071H6.14622V19.1071H2.71541V20.6071ZM7.86163 8.60713H18.1541V7.10713H7.86163V8.60713ZM7.86163 13.75H14.7233V12.25H7.86163V13.75Z"
            fill="#8B8B8B"
          />
        </svg>
      ),
    },
    {
      campaignName: "Increase Page Followers",
      platform: "FB",
      overview: "Encourage customers to follow your page",
      logo: (
        <svg
          width="26"
          height="50"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.8621 8.71931V17.2963M16.7241 13.0078H25M14.2414 6.14285C14.2414 8.98342 12.0185 11.2857 9.27586 11.2857C6.53324 11.2857 4.31034 8.98342 4.31034 6.14285C4.31034 3.30228 6.53324 1 9.27586 1C12.0185 1 14.2414 3.30228 14.2414 6.14285ZM17.5517 25L1 25C1 23.782 1 22.6232 1 21.5739C1 18.7317 3.22314 16.4286 5.96551 16.4286L12.5862 16.4286C15.3286 16.4286 17.5517 18.7317 17.5517 21.5739C17.5517 22.6232 17.5517 23.782 17.5517 25Z"
            stroke="#8B8B8B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      campaignName: "Get Customer Leads",
      platform: "FB",
      overview: "Encourage customers to take action",
      logo: (
        <svg
          width="24"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2 23.2H23.2V20.8C23.2 18.5909 21.4091 16.8 19.2 16.8M13.6 5.59692C13.6 8.24639 11.4512 10.3938 8.8 10.3938C6.1488 10.3938 4 8.24639 4 5.59692C4 2.94745 6.1488 0.800049 8.8 0.800049C11.4512 0.800049 13.6 2.94745 13.6 5.59692ZM16.8 23.1855H0.799999C0.799999 22.0494 0.799999 20.9686 0.799999 19.9899C0.799999 17.3389 2.94903 15.1907 5.6 15.1907H12C14.651 15.1907 16.8 17.3389 16.8 19.9899C16.8 20.9686 16.8 22.0494 16.8 23.1855ZM18.4 13.6C16.6327 13.6 15.2 12.1674 15.2 10.4C15.2 8.63274 16.6327 7.20005 18.4 7.20005C20.1673 7.20005 21.6 8.63274 21.6 10.4C21.6 12.1674 20.1673 13.6 18.4 13.6Z"
            stroke="#8B8B8B"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
    },
    {
      campaignName: "Fet More youtube views",
      platform: "Youtbe",
      overview: "increase organic views by obtaining user attention",
      logo: (
        <svg
          width="24"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 20C3.99996 20 0.799988 12 0.799988 12C0.799988 12 3.99996 4 12 4C20 4 23.2 12 23.2 12C23.2 12 20 20 12 20Z"
            stroke="#8B8B8B"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M8.79999 12C8.79999 13.7673 10.2327 15.2 12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8C10.2327 8.8 8.79999 10.2327 8.79999 12Z"
            stroke="#8B8B8B"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      campaignName: "Get More Website Traffic",
      platform: "Instagram",
      overview: "Encourage customers to follow your page",
      logo: (
        <svg
          width="26"
          height="50"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.52405 7.51117L1.23431 7.45263M7.91717 2.58322L7.97574 1.29269M3.98952 3.69813L2.75836 2.34906M2.28974 12.6733L3.63806 11.4413M11.7275 4.04936L13.0758 2.81737"
            stroke="#8B8B8B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.26788 6.26807L14.019 24.3541L16.6027 16.6029L24.3539 14.0192L6.26788 6.26807Z"
            stroke="#8B8B8B"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      campaignName: "Increase Livestore Traffic",
      platform: "Google",
      overview: "Drive visits to local stores, restaurants & Dealerships",
      logo: (
        <svg
          width="26"
          height="50"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 23.4H25M3.4 12.2V23.4M22.6 12.2V23.4M2.6 1H23.4M6.6 12.2V17H19.4V12.2M3.4 4.2H22.6L24.2 12.2H1.8L3.4 4.2Z"
            stroke="#8B8B8B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      campaignName: "Increase your app instals",
      platform: "Youtube",
      overview: "Get more installs, interactions for your app",
      logo: (
        <svg
          width="25"
          height="50"
          viewBox="0 0 25 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 19.8571H12.1429M2.71429 25H16.4286C17.3753 25 18.1429 24.2325 18.1429 23.2857V2.71429C18.1429 1.76751 17.3753 1 16.4286 1H2.71429C1.76751 1 1 1.76751 1 2.71429V23.2857C1 24.2325 1.76751 25 2.71429 25Z"
            stroke="#8B8B8B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.93333 14.9L7 11.9666M9.93333 14.9L12.8667 11.9666M9.93333 14.9L9.93333 6"
            stroke="#8B8B8B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      campaignName: "Increase the catalogue sales",
      platform: "Google",
      overview: "Drive the sales of your Catalogue and get more leads",
      logo: (
        <svg
          width="24"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6 2.40005H22.35V1.65005H21.6V2.40005ZM2.40002 2.40005V1.65005H1.65002V2.40005H2.40002ZM7.20002 0.800049V0.0500488H6.45002V0.800049H7.20002ZM16.8 0.800049H17.55V0.0500488H16.8V0.800049ZM4.00002 23.95H20V22.45H4.00002V23.95ZM22.35 21.6V2.40005H20.85V21.6H22.35ZM21.6 1.65005H17.6V3.15005H21.6V1.65005ZM3.15002 21.6V2.40005H1.65002V21.6H3.15002ZM2.40002 3.15005H6.40002V1.65005H2.40002V3.15005ZM20 23.95C21.2979 23.95 22.35 22.8979 22.35 21.6H20.85C20.85 22.0695 20.4695 22.45 20 22.45V23.95ZM4.00002 22.45C3.53058 22.45 3.15002 22.0695 3.15002 21.6H1.65002C1.65002 22.8979 2.70215 23.95 4.00002 23.95V22.45ZM7.20002 1.55005H16.8V0.0500488H7.20002V1.55005ZM16.05 0.800049V4.00005H17.55V0.800049H16.05ZM15.2 4.85005H8.80002V6.35005H15.2V4.85005ZM7.95002 4.00005V0.800049H6.45002V4.00005H7.95002ZM8.80002 4.85005C8.33058 4.85005 7.95002 4.46949 7.95002 4.00005H6.45002C6.45002 5.29792 7.50215 6.35005 8.80002 6.35005V4.85005ZM16.05 4.00005C16.05 4.46949 15.6695 4.85005 15.2 4.85005V6.35005C16.4979 6.35005 17.55 5.29792 17.55 4.00005H16.05Z"
            fill="#8B8B8B"
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        height: "65%",
        width: "100%",
      }}
    >
      <TimelineSteps stepNo={2} />
      <div className="firstStep">
        <div
          style={{ display: "flex", paddingTop: "3px", alignItems: "center" }}
        >
          <h3 style={{ fontSize: "bold" }}>Choose the Product </h3>
          <h4 style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            (step 2 of 4)
          </h4>
        </div>

        <hr></hr>
        <div className="Box">
          {platform.map((ele) => {
            return (
              <CampaignCard
                childComp={ele.logo}
                mainHeading={ele.campaignName}
                statement={ele.overview}
              />
            );
          })}
        </div>
      </div>
      <Link to="/campaign/setting">
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
