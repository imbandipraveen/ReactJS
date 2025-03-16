import React, { useState } from "react";
import { fetchUsers } from "../../../redux";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

interface User {
  name: string;
}

interface UserState {
  loading: boolean;
  users: User;
}

interface RootState {
  users: UserState;
}

export const UserContainer: React.FC = () => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const [id, setId] = useState<number>(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState<number>(1);

  useEffect(() => {
    console.log("ID FROM BUTTON CLICK", idFromButtonClick);
    dispatch(fetchUsers(idFromButtonClick));
  }, [idFromButtonClick, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(Number(e.target.value));
  };

  const handleButtonClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="number" value={id} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Submit</button>

      {users.loading ? (
        <h1>loading</h1>
      ) : (
        <button className="button button-input">{users.users.name}</button>
      )}
    </div>
  );
};
