
import './App.css';
import { logProps } from './components/log-props';
import { UserInfo } from './components/user-info';
import { includeUser } from './components/include-user';
import { UserInfoForm } from './components/user-from';


const UserInfoWrapper = logProps(UserInfo)
const USerInfoWithLoader = includeUser(UserInfoForm,"3")
function App() {
  return (
    <div >
          <USerInfoWithLoader />

    </div>
  );
}

export default App;
