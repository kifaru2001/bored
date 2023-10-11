import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Home from "./views/home";
import Join from "./views/join";
import Stake from "./views/stake.tsx";
import Profile from "./views/profile/[walletAddress].tsx";
import Mint from "./views/mint.tsx";
import NotFound from "./views/not-found";
import ComingSoon from "./views/coming-soon";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { CoreBlockchain } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = new ThirdwebSDK(CoreBlockchain, {
  clientId: "65a85b91315ca838d7a8472fb0e64f92",
});

const activeChain = CoreBlockchain;

const App = () => {
  return (
    <React.StrictMode>
      <ThirdwebProvider
        activeChain={activeChain}
        clientId="65a85b91315ca838d7a8472fb0e64f92"
      >
        <Router>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Join} exact path="/join" />
            <Route component={Mint} exact path="/mint" />
            <Route component={Stake} exact path="/stake" />
            <Route component={Profile} exact path="/profile" />
            <Route component={ComingSoon} exact path="/coming-soon" />
            <Route component={NotFound} path="**" />
            <Redirect to="**" />
          </Switch>
        </Router>
      </ThirdwebProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
