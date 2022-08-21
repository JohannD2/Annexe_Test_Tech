import { Route, Routes } from "react-router-dom";

//components imports
import HomePage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ResultsPage from "./components/ResultsPage";

//import Redux module and reducer
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

//reducers imports
import person from "./reducers/person";
import ageObject from "./reducers/age";

// setup redux store
const reducer = combineReducers({
  person,
  ageObject,
});

const store = configureStore({ reducer });

function App() {
  return (
    <div>
      <div className="app__body">
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/secondpage" element={<SecondPage />} />
            <Route path="/resultspage" element={<ResultsPage />} />
          </Routes>
        </Provider>
      </div>
    </div>
  );
}

export default App;
