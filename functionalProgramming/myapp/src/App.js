import logo from './logo.svg';
import './App.css';
import { RecursiveComponent } from './components/recursive';
import { RedButton } from './components/composition';
import { YellowAndSmallButton } from './components/partial';

const myNestedObject = {
  key1:"value1",
  key2:{
    innerKey1:"innerValue1",
    innerKey2:{
      innerInnerKey1:"innerInnerValue1",
      innerInnerKey2:"innerInnerValue2"
    }
  },
  key3:"value3"
}

function App() {
  return (
    <div >
      <RecursiveComponent data={myNestedObject}/>
      <RedButton  text="Test button rosu"/>
      <YellowAndSmallButton text="yellow and small"/>
    </div>
  );
}

export default App;
