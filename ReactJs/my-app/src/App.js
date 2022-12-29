import Mybutton from "./componant/Mybutton";
import "./reactapp.css";

function App() {

  const name = 'Agastya Shinde';
const element = <h1>Hello, {name}</h1>;

function greet(name1) {

       return <h3>Welcome {name1}</h3>
}
 const getTime = ()=>{
     
        return new Date().getFullYear();
 }

  return (
    <div class="a">
      <h1>new project</h1>
      <h2> {element} </h2>
      {greet("ritesh")}
      {getTime()}
      < Mybutton />
    
    </div>
  );
}

export default App;
