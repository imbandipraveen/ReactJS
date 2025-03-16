import React from "react";
import { buyIceCream } from "../../../redux";
import { useSelector, useDispatch } from "react-redux";

interface IceCreamState {
  numOfIceCreams: number;
}

interface RootState {
  iceCream: IceCreamState;
}

export const IceCreamContainer: React.FC = () => {
  const numOfIceCreams = useSelector(
    (state: RootState) => state.iceCream.numOfIceCreams
  );
  const dispatch = useDispatch();

  const handleBuyIceCream = () => {
    dispatch(buyIceCream());
  };

  return (
    <div className="ice-cream-container">
      <h4>
        Number of Ice Creams:{" "}
        <button className="button button-count">{numOfIceCreams}</button>
      </h4>
      <button className="button" onClick={handleBuyIceCream}>
        Buy Ice Cream
      </button>
    </div>
  );
};
