import Mybutton from "./componant/Mybutton";
import "./All.css";

function App() {

  const name = 'EveryOne';
const element = <h1>Hello, {name}</h1>;

function greet(name1) {

       return <h3>Welcome {name1}</h3>
}
 const getTime = ()=>{
     
        return new Date().getFullYear();

 }

  return (

    <div class ="All">

      <h1>NEW REACT PROJECT</h1>

      <h2> {element} </h2>

      {greet("In Patheya Technology")}

      {getTime()}

      < Mybutton />
      
      </div>
  );
}


export default App;
