import "../../../styles/campaign.scss";
import { PlatformInterface } from "../createProduct/firstStep";
import { chooseData } from "./interface";

interface Props {
  childComp: React.ReactNode;
  mainHeading: string;
  statement?: string;
  price?: number;
  plat: chooseData | undefined;
  choosePlatform: (platformChoosen: chooseData) => void;

  app?: string;
}

export const CampaignCard: React.FC<Props> = ({
  childComp,
  mainHeading,
  statement,
  plat,
  choosePlatform,
  app,
  price,
}) => {
  const handleClick = () => {
    if (price) {
      choosePlatform({
        name: mainHeading,
        price: price,
      });
    } else {
      choosePlatform({
        name: mainHeading,
        platform: app,
      });
    }
  };
  return (
    <div
      className={plat && plat.name === mainHeading ? "activeCard" : "card"}
      onClick={() => handleClick()}
    >
      <div
        style={{
          height: "100%",
          paddingTop: "auto",
          width: "20%",
        }}
      >
        {childComp}
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          lineHeight: "1",
          justifyContent: "center",
        }}
      >
        <h4>{mainHeading}</h4>
        <h5 style={{ color: "rgba(0, 0, 0, 0.3)" }}>
          {statement ? statement : `Rs: ${price}`}
        </h5>
      </div>
    </div>
  );
};
