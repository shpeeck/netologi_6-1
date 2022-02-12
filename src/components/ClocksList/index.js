import Clock from "../Clock";

export default function ClockList({ data, del }) {
  return (
    <div>
      <h1>ClockList</h1>
      {data.map((el) => {
        // console.log(el);
        return (
          <div key={el.id}>
            <Clock name={el.name} time={el.timeZone} del={del} id={el.id} />
          </div>
        );
      })}
    </div>
  );
}
