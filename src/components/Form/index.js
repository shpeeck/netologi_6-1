import { useState } from "react";
import Button from "../Button";
import "./style.css";

export default function Form({ func }) {
  const [name, setName] = useState();
  const [zone, setZone] = useState();
  const onRegister = (e) => {
    if ((name !== undefined) & (name !== " ")) {
      func(name, zone);
      e.preventDefault();
    } else {
      console.log("no name");
      e.preventDefault();
    }
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onZoneChange = (e) => {
    setZone(e.target.value);
    // console.log("target", e.target.value);
  };
  return (
    <div className="form-wrapper">
      <form className="form" name="form" onSubmit={onRegister}>
        <div>
          <label htmlFor="name">Название</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={onNameChange}
          />
        </div>
        <div>
          <label htmlFor="zone">Временная зона</label>
          <select name="select" id="zone" required onChange={onZoneChange}>
            <option></option>
            <option value="-11">UTC−11</option>
            <option value="-10">UTC−10</option>
            <option value="-9.5">UTC−9:30</option>
            <option value="-9">UTC−9</option>
            <option value="-8">UTC−8</option>
            <option value="-7">UTC−7</option>
            <option value="-6">UTC−6</option>
            <option value="-5">UTC−5</option>
            <option value="-4">UTC−4</option>
            <option value="-3.5">UTC−3:30</option>
            <option value="-3">UTC−3</option>
            <option value="-2">UTC−2</option>
            <option value="-1">UTC−1</option>
            <option value="0">UTC+0</option>
            <option value="1">UTC+1</option>
            <option value="2">UTC+2</option>
            <option value="3">UTC+3</option>
            <option value="3.5">UTC+3:30</option>
            <option value="4">UTC+4</option>
            <option value="4.5">UTC+4:30</option>
            <option value="5">UTC+5</option>
            <option value="5.5">UTC+5:30</option>
            <option value="6">UTC+6</option>
            <option value="6.5">UTC+6:30</option>
            <option value="7">UTC+7</option>
            <option value="8">UTC+8</option>
            <option value="8.75">UTC+8:45</option>
            <option value="9">UTC+9</option>
            <option value="9.5">UTC+9:30</option>
            <option value="10">UTC+10</option>
            <option value="10.5">UTC+10:30</option>
            <option value="11">UTC+11</option>
            <option value="12">UTC+12</option>
            <option value="12.75">UTC+12:45</option>
            <option value="13">UTC+13</option>
            <option value="14">UTC+14</option>
          </select>
        </div>
        <Button />
      </form>
    </div>
  );
}
