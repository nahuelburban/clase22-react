
import Boton from "./components/Boton";
import Boton2 from "./components/Boton2";


function App() {


  return (
    <div className="jumbotron">
      
      <h1 className="display-4"> Hello, world!</h1> 
      <p className="lead">
        This is a simple hero unit, a simple jumpbotron-style component <br/>
        for calling extra attention to featured content or information.
      </p>
      <hr className="my-4"/>
      <p>
        It usses unity classes for typography and spacing to space content out <br/>
        within the larger container.
      </p>
      <a href="ho.a" className="btn btn-primary btn-lg" role="button">Learn More</a>
      <br/>
      <br />
      <Boton texto="Clickeame ahora !" />
      <br/>
      <br />
      <Boton2 texto="Soy el boton 2"  />
    </div>
  );
}

export default App;
