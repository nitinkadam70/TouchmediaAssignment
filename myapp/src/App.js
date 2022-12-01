import 'bootstrap/dist/css/bootstrap.min.css';
import FollowNow from './components/FollowNow';
import RegisterUser from './components/RegisterUser';
import Users from './components/Users';
function App() {
  return (
    <>
      <RegisterUser />
      <hr />
      <FollowNow />
      <hr />
      <Users />
    </>
  );
}

export default App;
