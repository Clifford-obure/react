import { MovieProvider } from "./MovieContext"
import './App.css';
import Btn from './components/Btn';
import ModeToggler from './components/ModeToggler';
import Movie from './components/Movie';
import Promo from './components/Promo';

function App() {
  var message = "This is the one ";
  return (
    <MovieProvider>
    <div>

      <Btn />
      <ModeToggler />
      <Promo message={message}/>
      <Movie/>
    </div>
    </MovieProvider>
  );
}

export default App;
