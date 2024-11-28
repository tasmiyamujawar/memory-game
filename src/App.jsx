import './App.css';
import MemoryGame from './components/memory-game';

function App() {
return(
    <div style={{backgroundImage:'url(https://www.shutterstock.com/image-illustration/abstract-endless-geometric-rectangular-texture-260nw-381677551.jpg)',backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="min-h-screen bg-gray-500  flex flex-col items-center justify-center">
      <div className="container">
      <MemoryGame/>;
      </div>
      </div>
) 

}

export default App
