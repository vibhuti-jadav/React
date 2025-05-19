
import './App.css'
import Big from './component/Big'
import Small from './component/Small'
import { Alert, Button } from "./Bootsraped/Bootsraped";
import { Toast } from 'bootstrap';



function App() {

  const Bigwrapper = Big(Small)

  return (
    <>

    {/* <Bigwrapper/> */}
      
   <Toast/>

     <div className="container my-5">

      <Button type="danger" icon="⛔"> Error Button</Button>

      <Button type="success" icon="✅" >Success Button</Button>

      <Button type="success" icon="⚠️" >Warning Button</Button>

    </div>



    <Alert type="danger" message="invalide Creediantail" />



    </>
  )
}

export default App
