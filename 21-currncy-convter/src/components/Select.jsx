import React from "react";
import { useCurrency } from "../context/CurrencyContext";

const Select = ({ curData, setCur, cur }) => {
  // console.log(curData);
  let keys = Object.keys(curData);

  return (
    <>
      <select value={cur} className="border ml-3 p-2 rounded px-6"
        onChange={(e) => setCur(e.target.value)}
        style={{ maxHeight: "500px" }}  >
        {keys.map((ele) => (
          <option value={ele}>{ele}</option>
        ))}
      </select>
    </>
  );
};

export default Select;