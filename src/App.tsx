import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Campaign from "./component/campaign/campaign";
import { CamapaignsTable } from "./component/campaign/campaignTable";
import { CampaignSetting } from "./component/campaign/createProduct/campaignSetting";
import { ChooseProduct } from "./component/campaign/createProduct/chooseProduct";
import { FirstStep } from "./component/campaign/createProduct/firstStep";
import { Preview } from "./component/campaign/createProduct/preview";
import { Login } from "./component/login";
import Logout from "./component/logout";
import MenuBar from "./component/menubar";
import SignUp from "./component/signup";

export interface UserSession {
  email: string;
  token: string;
}
function App() {
  const [token, setToken] = useState<UserSession>();

  useEffect(() => {
    if (localStorage.getItem("zocketSessionData")) {
      const userData: string = JSON.parse(
        localStorage.getItem("zocketSessionData") || "s"
      );
      if (typeof userData !== "string") {
        setToken(userData);
      }
    }
  }, []);

  return (
    <div className="App">
      {token ? null : <MenuBar />}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {token && <Route path="/logout" element={<Logout />}></Route>}
        {token && (
          <Route path="/campaign/*" element={<Campaign />}>
            <Route path="" element={<CamapaignsTable />} />
            <Route path="firstStep" element={<FirstStep />} />
            <Route path="product" element={<ChooseProduct />} />
            <Route path="setting" element={<CampaignSetting />} />
            {/* <Route path="setting" element={<PreviewTimeLine />} /> */}
            <Route path="preview" element={<Preview />} />
          </Route>
        )}
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
