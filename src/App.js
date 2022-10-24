import { MovieProvider } from "./MovieContext"
import './App.css';
import Btn from './components/Btn';
import ModeToggler from './components/ModeToggler';
import Movie from './components/Movie';
import Promo from './components/Promo';
import Cliff from "./components/Cliff";

function App() {
  var message = "This is the one ";
  return (
    <MovieProvider>
    <div>

      <Btn />
      <ModeToggler />
      <Promo message={message}/>
      <Movie/>
      <Cliff/>
    </div>
    </MovieProvider>
  );
}

export default App;
