import React, { ChangeEvent } from "react";
import { useState } from "react";
import "./objectState.scss";
interface NameState {
  firstName: string;
  lastName: string;
  age: string;
}

export const ObjectState: React.FC = () => {
  const [name, setName] = useState<NameState>({
    firstName: "",
    lastName: "",
    age: "",
  });

  const setValue = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof NameState
  ): void => {
    console.log(e);
    setName((prevState) => ({ ...prevState, [field]: e.target.value }));
  };

  return (
    <div className="form-container">
      <div className="display-section">
        <button className="info-button">{name.firstName || "firstName"}</button>
        <button className="info-button">{name.lastName || "lastName"}</button>
        <button className="info-button">{name.age || "age"}</button>
      </div>
      <div className="input-section">
        <input
          className="form-input"
          placeholder="Enter First Name"
          value={name.firstName}
          onChange={(e) => setValue(e, "firstName")}
        />
        <input
          className="form-input"
          placeholder="Enter Last Name"
          value={name.lastName}
          onChange={(e) => setValue(e, "lastName")}
        />
        <input
          className="form-input"
          placeholder="Enter Age"
          value={name.age}
          onChange={(e) => setValue(e, "age")}
        />
      </div>
    </div>
  );
};
