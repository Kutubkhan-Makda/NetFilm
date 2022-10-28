import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Homescreen from './Components/Homescreen/Homescreen';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';


function App() {
  const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email: userAuth.email
        }))
      }
      else{
        dispatch(logout)
      }
    });
    return unsubscribe;
  }, [dispatch]);
  
  return (
    <div className="App">
 
      <BrowserRouter>
        <Routes>
          {!user ? (<Route path='/' element={<Login/>}></Route>) : (<Route path='/' element={<Homescreen/>}></Route>)}
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;