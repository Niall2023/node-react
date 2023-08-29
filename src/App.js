import logo from './logo.svg';
import './App.css';
import imagen1  from './Assets/imagen1.jpg'
import imagen2 from  './Assets/imagen2.jpg'
import imagen3 from  './Assets/imagen3.jpg'
import imagen4 from  './Assets/imagen4.jpg'
import imagen5 from  './Assets/imagen5.avif'

function App() {
  return (
    <div>
      <header>

      <h1 id='title'>SIETE DE CORAZONES</h1>

        

        <div class='container'>

        <img className='imagen1' src={imagen1} width="350px" alt=""/>


        <img className='imagen2' src={imagen2} width="350px" alt=""/>


        <img className='imagen3' src={imagen3} width="350px" alt=""/>


        <img className='imagen4' src={imagen4} width="350px" alt=""/>


        <img className='imagen5' src={imagen5} width="350px" alt=""/>



        </div>

        <body>
  <div class="animated-bg"></div>
  
    </body>

   

    
        
        
        
      
      </header>
    </div>
  );
}

export default App;
