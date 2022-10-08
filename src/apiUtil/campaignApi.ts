import apiUrl from "./apiUrl";

export const createCampaignApi = async ({
  campaignName,
  isOn,
  startDate,
  endDate,
  clicks,
  budget,
  location,
  platform,
  createdOn,
  token,
}: {
  campaignName: string;
  isOn: boolean;
  startDate: Date;
  endDate: Date;
  clicks: Number;
  budget: Number;
  location: String;
  platform: String;
  createdOn: Date;
  token: string;
}) => {
  try {
    const url = apiUrl + "/campaign";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        campaignName,
        isOn,
        startDate,
        endDate,
        clicks,
        budget,
        location,
        platform,
        createdOn,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      if (data.error) {
        return [null, data.error];
      } else {
        return [null, data.message];
      }
    }

    return [data, null];
  } catch (err: any) {
    return [
      null,
      {
        error: "Error,Failed to fetch data",
      },
    ];
  }
};

export const getCampaignApi = async (token: string) => {
  try {
    const url = apiUrl + "/campaign";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      if (data.error) {
        return [null, data.error];
      } else {
        return [null, data.message];
      }
    }

    return [data, null];
  } catch (err: any) {
    return [
      null,
      {
        error: "Error,Failed to fetch data",
      },
    ];
  }
};
