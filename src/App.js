import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/NavBar';
import AuthProvider, { useAuthContext } from './Context/AuthProvider';

function App( { isLogedIn }) {
  const [isLogin, setLogin] = useState(false);
  // const { isLogedIn } = useAuthContext();
  console.log(isLogedIn);

  const login = (bool) => {
    console.log(bool, 'dsafasd');
    setLogin(bool);
  }

  return (
    <div className="App">
      <AuthProvider>
        { isLogin ? <Navbar set={login} /> : <Login set={login} /> }
      </AuthProvider>
    </div>
  );
}

export default App;
