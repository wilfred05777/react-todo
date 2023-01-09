import React from "react";
import { useState } from "react";

const ErdoScheduler = ({ addSchedule }) => {
  const [schedule, setSchedule] = useState("");

  const formHandleSubmit = (e) => {
    e.preventDefault();
    addSchedule({
      name: schedule
    });
    setSchedule("");
  };

  return (
    <div>
      <p>{schedule}</p>
      <form onSubmit={formHandleSubmit}>
        <input
          type="text"
          name="schedule"
          id="schedule"
          onInput={(e) => setSchedule(e.target.value)}
          value={schedule}
          placeholder="Erdo scheduler"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ErdoScheduler;
