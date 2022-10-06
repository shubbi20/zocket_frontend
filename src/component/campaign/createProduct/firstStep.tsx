import { platform } from "os";
import { Timeline } from "../timeline";

interface CampaignPlatform {
  campaignName: string;
  platform: string;
}
const PlatformCampaign: CampaignPlatform[] = [
  {
    campaignName: "Get Leads as Call",
    platform: "Google",
  },
  {
    campaignName: "Get Leads as Facebook messages",
    platform: "FB",
  },
  {
    campaignName: "Increase Page Followers",
    platform: "FB",
  },
  {
    campaignName: "Get Customer Leads",
    platform: "FB",
  },
  {
    campaignName: "Fet More youtube views",
    platform: "Youtbe",
  },
  {
    campaignName: "Get More Website Traffic",
    platform: "Instagram",
  },
  {
    campaignName: "Increase Livestore Traffic",
    platform: "Google",
  },
  {
    campaignName: "Increase your app instals",
    platform: "Youtube",
  },
  {
    campaignName: "Increase the catalogue sales",
    platform: "Google",
  },
];

export const FirstStep = () => {
  return (
    <div>
      <Timeline stepNo={1} />
    </div>
  );
};
