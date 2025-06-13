import React, { useContext } from "react";
import { useCurrency } from "../context/CurrencyContext";
import Input from "./Input";
import Select from "./Select";
import ApexChart from "./apexchart";

const Converter = () => {
  const { curData, nextCur, preCur, setPreCur, setNextCur, nextAmt, setPreAmt, handleSwitch } = useCurrency();

  return (
    <>
         <p className="ml-60   mt-15 text-[16px]" >1 United States Dollar equals</p>
   
     <h3 className="ml-60 text-4xl">86.09 Indian Rupee</h3>

      <div className="flex ml-60 mt-10 grid-cols-2">
   
        <div>

          <Input setPreAmt={setPreAmt} cr={preCur} />
          <Select curData={curData} setCur={setPreCur} cur={preCur} />



          <br />
          <br />
          <button className="border ml-3 p-1 px-10 rounded" onClick={handleSwitch}>Switch</button>
          <br />
          <br />

          <Input cr={nextCur} amt={nextAmt} />
          <Select curData={curData} setCur={setNextCur} cur={nextCur} />
        </div>

        <div className="w-100 ml-10">
          <ApexChart  />
        </div>

      </div>

    </>
  );

};

export default Converter;