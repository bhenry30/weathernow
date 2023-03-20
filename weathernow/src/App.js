import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Search from './components/Search'
import TimeLoc from './components/TimeLoc'
import Temp from './components/Temp'

function App() {
  return (
    <div className="mx-auto h-screen bg-gradient-to-br from-sky-700 to-yellow-200">
    
        <Search />
        <TimeLoc />
        <Temp />
    </div>
  );
}

export default App;
