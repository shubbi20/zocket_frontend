import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { TimelineSteps } from "../timeline";
import { CampaignCard } from "../utils/campaignCard";
import "../../../styles/common.scss";
import { useEffect, useState } from "react";
import { chooseData, ProductInterface, UserSession } from "../utils/interface";
import { getProductApi } from "../../../apiUtil/apiUrl";
import { Cake } from "../../../Logos/Cake/cake";
import { MiddleHeader } from "../utils/middleHeader";

export const ChooseProduct = () => {
  const [plat, setPlatform] = useState<chooseData>();
  const [zocketData, setZocketData] = useState<chooseData>();
  const [productData, setProductData] = useState<ProductInterface[]>([]);

  const navigate = useNavigate();

  const choosePlatform = (platformChoosen: chooseData) => {
    setPlatform(platformChoosen);
  };

  const fetchUserData = async ({ token }: { token: string }) => {
    const [data, error] = await getProductApi(token);
    if (data) {
      console.log("data", data);
      setProductData(data.Data);
    } else {
      console.log(error);
      message.error(error);
    }
  };

  useEffect(() => {
    const session: UserSession = JSON.parse(
      localStorage.getItem("zocketSessionData") || "s"
    );
    if (localStorage.getItem("zocketCache")) {
      setZocketData(JSON.parse(localStorage.getItem("zocketCache") || "s"));
    }
    fetchUserData({ token: session.token });
  }, []);

  const submit = () => {
    if (plat) {
      const data = {
        name: plat.name,
        platform: zocketData?.platform,
        price: plat.price,
      };
      localStorage.setItem("zocketCache", JSON.stringify(data));
      navigate("/campaign/setting");
    } else {
      message.warn("First Choose");
    }
  };

  return (
    <div
      style={{
        height: "65%",
        width: "100%",
      }}
    >
      <TimelineSteps stepNo={2} />
      <div className="firstStep">
        <MiddleHeader heading="Choose the Product" step="(Step 2 of 4)" />

        <hr></hr>
        <div className="Box">
          {productData &&
            productData.map((ele, index) => {
              return (
                <CampaignCard
                  key={index}
                  childComp={<Cake />}
                  mainHeading={ele.productName}
                  price={ele.price}
                  plat={plat}
                  // app={ele.platform}
                  choosePlatform={choosePlatform}
                />
              );
            })}
        </div>
      </div>

      <Button
        type="primary"
        onClick={() => submit()}
        size="large"
        className="mainButton"
      >
        Continue
      </Button>
    </div>
  );
};
