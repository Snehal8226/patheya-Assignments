import './Button.css';
import Greetings from './Greeting';

const Mybutton = () => {
    const personname = "Shiva"
    return(
        <div class="Button">
        <button type ="button"> Submit </button>
        <Greetings firstname={personname}/>
        </div>
        
    )

}
  export default Mybutton;