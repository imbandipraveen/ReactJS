import store from "../../redux/store";
import { Provider } from "react-redux";

import {
  CakeContainer,
  ChocolateContainer,
  IceCreamContainer,
  UserContainer,
  ReduxExplanation,
} from "./Components";

export const ReduxMain = () => {
  return (
    <Provider store={store}>
      <ReduxExplanation />
      <div className="box">
        <h1> react redux cake application</h1>
        <CakeContainer />
      </div>
      <div className="box">
        <h1> react redux chocolate application</h1>
        <ChocolateContainer />
      </div>
      <div className="box">
        <h1> react redux ice cream application</h1>
        <IceCreamContainer />
      </div>
      <div className="box">
        <h1> react redux User application</h1>
        <UserContainer />
      </div>
    </Provider>
  );
};
