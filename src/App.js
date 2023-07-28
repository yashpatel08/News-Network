import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";
// import NewsItem from "./components/NewsItem";
import "./App.css";
const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <News key="home" pageSize={10} country="in" category="general" />
          </Route>
          <Route exact path="/business">
            <News key="business" pageSize={10} country="in" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" pageSize={10} country="in" category="entertainment" />
          </Route>
          <Route exact path="/general">
            <News key="general" pageSize={10} country="in" category="general" />
          </Route>
          <Route exact path="/health">
            <News key="health" pageSize={10} country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <News key="science" pageSize={10} country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" pageSize={10} country="in" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News key="technology" pageSize={10} country="in" category="technology" />
          </Route>
          {/* <Route exact path="/games">
            <News key="games" pageSize={10} country="in" category="game" />
          </Route> */}
        </Switch>
      </Router>
      {/* <Router>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
       */}
    </div>
  );
};

export default App;
