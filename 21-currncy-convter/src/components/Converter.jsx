import React, { useContext } from "react";
import { useCurrency } from "../context/CurrencyContext";
import Input from "./Input";
import Select from "./Select";
import ApexChart from "./apexchart";
import { ArrowsUpDownIcon, BeakerIcon } from '@heroicons/react/24/solid'

const Converter = () => {
  const { curData, nextCur, preCur, setPreCur, setNextCur, nextAmt, setPreAmt, handleSwitch } = useCurrency();

  return (
    <>
     <h3 className="text-center mt-8 text-5xl"><u>Currency Conveter</u></h3>

         <p className="ml-60   mt-15 text-[16px]" >1 United States Dollar equals</p>
   
     <h3 className="ml-60 text-4xl">86.09 Indian Rupee</h3>

      <div className="flex ml-60 mt-9 grid-cols-2">
   
        <div>

          <Input setPreAmt={setPreAmt} cr={preCur} />
          <Select curData={curData} setCur={setPreCur} cur={preCur} />

          <br />
          <br />
          

          <button type="button" onClick={handleSwitch} class="text-gray-900 bg-white hover:bg-gray-100 border  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 ml-3  mb-2">
          <span className="mr-2">Switch</span>  
           <ArrowsUpDownIcon className="size-6"/>
            </button>

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