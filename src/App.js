import { useState } from "react";
import "./css/styles.css";
import Form from "./components/Form";
// import moment from "moment";
import ClockList from "./components/ClocksList";

export default function App() {
  const [allClocks, setAllClocks] = useState([]);

  const getData = (name, timeZone) => {
    setAllClocks([
      ...allClocks,
      { name: name, timeZone: timeZone, id: Date.now() }
    ]);
  };

  const del = (id) => {
    setAllClocks([...allClocks.filter((newDate) => newDate.id !== id)]);
  };

  return (
    <div className="App">
      <Form func={getData} />
      <ClockList data={allClocks} del={del} />
    </div>
  );
}
