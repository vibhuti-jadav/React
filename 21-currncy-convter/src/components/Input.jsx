import React from "react";
import { useCurrency } from "../context/CurrencyContext";

const Input = ({ cr, setPreAmt, amt }) => {
  return (
    <>
      <input type="number" value={amt} onChange={(e)=>setPreAmt(e.target.value)} placeholder={cr} className="border mt-5 ml-3 p-2 rounded"/>
    </>
  );
};

export default Input;