import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrencyContext = createContext();

export const CurrencyContextProvider = ({ children }) => {
  const [curData, setCurData] = useState({"inr":1});
  const [preCur, setPreCur] = useState("usd");
  const [nextCur, setNextCur] = useState("inr");
  const [preAmt, setPreAmt] = useState(0)
  const [nextAmt, setNextAmt] = useState(0)

  const [key,setKey]=useState([]);
  const [value,setValue]=useState([]);

  const api_url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${preCur}.json`;

  async function getCurrency() {
    
    let data = await axios.get(api_url);
    await setCurData(data.data[preCur]);

     await handleConvert();

  }

  useEffect(() => {
    getCurrency();
  }, [preCur]);

  useEffect(()=>{
    handleConvert()
  }, [preAmt, curData, nextCur])

 function handleSwitch(){
    setNextCur(preCur)
    setPreCur(nextCur)
  }


async function handleConvert(){
   setNextAmt(preAmt * curData[nextCur])
  setKey(Object.keys(curData).slice(0, 5));
    setValue(Object.values(curData).slice(0, 5));
  }
  console.log(nextAmt)



  return (
    <CurrencyContext.Provider
      value={{ curData, nextCur, setNextCur, setPreCur, preCur, nextAmt, setPreAmt,handleSwitch,key,value}}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  return useContext(CurrencyContext);
};