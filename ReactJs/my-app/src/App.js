
function App() {

  const name = 'Agastya Shinde';
const element = <h1>Hello, {name}</h1>;

function greet(name1) {

       return <h3>Welcome {name1}</h3>
}

  return (
    <div>
      <h1>new project</h1>
      <h2> {element} </h2>
      {greet("ritesh")}
    
    </div>
  );
}

export default App;
