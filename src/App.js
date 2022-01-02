import Header from "./Components/Header.js"
import './App.css';
import Pomerance from "./Components/Pomerance.js";
import Mandarinky from "./Components/Mandarinky.js";
import Grepy from "./Components/Grepy.js";
import Citrony from "./Components/Citrony.js"

function App() {
  return (
    <content>
<Header></Header>
<div className=" grid grid-cols-4 justify-items-center p-36 gap-12">
        

        <Pomerance></Pomerance>
        <Mandarinky></Mandarinky>
        <Grepy></Grepy>
        <Citrony></Citrony>
        

</div>







    </content>
  
  );
}

export default App;
