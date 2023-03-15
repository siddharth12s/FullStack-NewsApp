import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import NewsDisplay from './components/NewsDisplay';




const App = ()=> {


  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <Navbar />
          <LoadingBar height={4} color="#ffd700" progress={progress} />     
          <Routes>
          <Route
            exact
            path="/business"
            element={
              <NewsDisplay
                setProgress={setProgress}
                key="business"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NewsDisplay
                setProgress={setProgress}
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <NewsDisplay
                setProgress={setProgress}
                key="science"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <NewsDisplay
                setProgress={setProgress}
                key="entertainment"
                category="entertainment"
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <NewsDisplay
                setProgress={setProgress}
                key="health"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <NewsDisplay
                setProgress={setProgress}
                key="technology"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <NewsDisplay
                setProgress={setProgress}
                key="general"
                category="general"
              />
            }
          />
        </Routes>
        </Router>
      </div>
    );
  }

export default App;