import './App.css';
import ToggleComponent from './Components/1.useToggle/ToggleComponent.jsx'
import TimeoutComponent from './Components/2.useTimeout/TimeoutComponent';
import Debounce from './Components/3.useDebounce/Debounce';
import Uppdate from './Components/4.useUpdateEffect/Uppdate';
import ArrayComp from './Components/5.useArray/ArrayComp';
import PrevValue from './Components/6.usePrevValue/PrevValue'

function App() {
  return (
    <div className="App">
      <h1>5 custom react hooks</h1>
      <ToggleComponent />
      <TimeoutComponent />
      <Debounce />
      <Uppdate />
      <ArrayComp />
      <PrevValue />
    </div>
  );
}

export default App;
