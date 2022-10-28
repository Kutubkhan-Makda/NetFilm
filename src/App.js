import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homescreen from './Components/Homescreen/Homescreen';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email: userAuth.email
        }));
      }
      else{
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);
  
  
  return (
    <div className="App">
 
      <Router>
          {!user ? (<Login/>) : (<Switch>
            <Route exact path='/NetFilm'><Homescreen/></Route>
          </Switch>)}
      </Router>
  
    </div>
  );
}

export default App;