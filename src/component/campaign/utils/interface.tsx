export interface UserSession {
  token: string;
  email: string;
  name: string;
}

export interface ProductInterface {
  productName: string;
  price: number;
  _id: number;
  _v: number;
}

export interface chooseData {
  name: string;
  price?: number;
  platform?: string;
}

export interface ZocketCacheInterface {
  campaignName: string;
  endDate: Date;
  startDate: Date;
  location: string;
  platform: string;
  budget: number;
}

export interface CampaignInterface {
  _id: number;
  campaignName: String;
  isOn: boolean;
  startDate: Date;
  endDate: Date;
  clicks: number;
  budget: number;
  location: string;
  platform: string;
  createdOn: Date;
  createdBy: string;
  tagValue: string;
}
