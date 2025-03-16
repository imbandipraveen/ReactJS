import React from "react";
import { connect } from "react-redux";
import { buyCake, buyChocolate } from "../../../redux";

interface ItemContainerProps {
  item: number;
  cake?: boolean;
  dispatchItem: () => void;
}

interface RootState {
  cake: {
    numOfCakes: number;
  };
  chocolate: {
    numOfChocolates: number;
  };
}

interface OwnProps {
  cake?: boolean;
}

const ItemContainer: React.FC<ItemContainerProps> = ({
  item,
  cake,
  dispatchItem,
}) => {
  return (
    <div>
      <h4>
        num of choclates <button className="button button-count">{item}</button>{" "}
      </h4>
      <button className="button" onClick={dispatchItem}>
        buy {cake ? "cake" : "chocolate"}
      </button>
    </div>
  );
};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const itemValue = ownProps.cake
    ? state.cake.numOfCakes
    : state.chocolate.numOfChocolates;
  return {
    item: itemValue,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: OwnProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyChocolate());
  return {
    dispatchItem: dispatchFunction,
  };
};

export const ChocolateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer);
