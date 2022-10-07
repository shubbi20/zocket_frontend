import "../../../styles/campaign.scss";

interface Props {
  childComp: React.ReactNode;
  mainHeading: string;
  statement: string;
}

export const CampaignCard: React.FC<Props> = ({
  childComp,
  mainHeading,
  statement,
}) => {
  return (
    <div
      style={{
        border: "1px solid grey",
        display: "flex",
        width: "350px",
        height: "50px",
        borderRadius: "5px",
        alignContent: "center",
        // justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          height: "100%",
          //   border: "1px solid red",
          paddingTop: "auto",
          width: "20%",
        }}
      >
        {childComp}
      </div>
      <div
        style={{
          height: "100%",
          //   border: "1px solid red",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          //   alignContent: "center",
          lineHeight: "1",
          justifyContent: "center",
        }}
      >
        <h4>{mainHeading}</h4>
        <h5 style={{ color: "rgba(0, 0, 0, 0.3)" }}>{statement}</h5>
      </div>
    </div>
  );
};
