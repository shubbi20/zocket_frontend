import { BlueberryCake } from "../../../Logos/Cake/bluberryCake";
// import { Cake } from "../../../Logos/cake";

interface props {
  campaignName: string;
  createdOn: string;
}

export const CampaignTableDiv: React.FC<props> = ({
  campaignName,
  createdOn,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <div style={{ width: "22%" }}>
        <BlueberryCake />
      </div>
      <div>
        <h4>{campaignName}</h4>
        <h6>{`createdOn: ${createdOn}`}</h6>
      </div>
    </div>
  );
};
