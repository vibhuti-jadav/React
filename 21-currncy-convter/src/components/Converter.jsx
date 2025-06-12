import React, { useContext } from "react";
import { useCurrency } from "../context/CurrencyContext";
import Input from "./Input";
import Select from "./Select";

const Converter = () => {
  const { curData, nextCur, preCur, setPreCur, setNextCur, nextAmt, setPreAmt} = useCurrency();

  return (
    <>
      
      <Input setPreAmt={setPreAmt} cr={preCur} />
      <Select curData={curData} setCur={setPreCur} cur={preCur}  />

      <br />
      <br />
      <button className="border ml-3 p-1 px-10 rounded">Switch</button>
      <br />
      <br />

      <Input cr={nextCur} amt={nextAmt} />
      <Select curData={curData} setCur={setNextCur} cur={nextCur} />
    </>
  );
};
 
export default Converter;