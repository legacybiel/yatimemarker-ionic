import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "@ionic/react/css/core.css";
import React, { lazy, Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import "./App.css";
import "./Assets/tw-dist.css";
import LoadingPage from "./Components/LoadingPage";
import {
  ROUTE_HOME,
  ROUTE_PROFILE,
  ROUTE_SETTINGS,
  ROUTE_TRAIN_NEW,
} from "./Components/Routes";
import "./theme/variables.css";

const Promise_PageHome = import("./Components/Pages/Home/Home");
const Promise_PageProfile = import("./Components/Pages/Profile/Profile");
const Promise_PageSettings = import("./Components/Pages/Settings/Settings");
const Promise_PageNewTrain = import(
  "./Components/Pages/Train/NewTrain/NewTrain"
);

const PageHome = lazy(() => Promise_PageHome);
const PageProfile = lazy(() => Promise_PageProfile);
const PageSettings = lazy(() => Promise_PageSettings);
const PageNewTrain = lazy(() => Promise_PageNewTrain);

const App: React.FC = () => (
  <IonApp className="App">
    <IonReactRouter>
      <Suspense fallback={<LoadingPage />}>
        <IonRouterOutlet>
          <Route path={ROUTE_HOME()} component={PageHome} exact={true} />
          <Route path={ROUTE_PROFILE()} component={PageProfile} exact={true} />
          <Route
            path={ROUTE_SETTINGS()}
            component={PageSettings}
            exact={true}
          />
          <Route
            path={ROUTE_TRAIN_NEW()}
            component={PageNewTrain}
            exact={true}
          />
          <Route
            path="/"
            render={() => <Redirect to={ROUTE_HOME()} />}
            exact={true}
          />
        </IonRouterOutlet>
      </Suspense>
    </IonReactRouter>
  </IonApp>
);

export default App;
