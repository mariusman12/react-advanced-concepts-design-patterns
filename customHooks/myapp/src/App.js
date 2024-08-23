import logo from './logo.svg';
import './App.css';
import { UserInfo } from './components/user-info';

function App() {
  return (
    <div className="App">
        <UserInfo userId={1}/>
    </div>
  );
}

export default App;
