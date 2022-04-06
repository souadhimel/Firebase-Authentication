
import './App.css';
import { FcGoogle} from "react-icons/fc";
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);


function App() {
  const googleProvider= new GoogleAuthProvider();

  const [user,setUser]=useState({})


  // Google log in
  const handleGoogleLogin=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error=>{
      console.log(error);
    })
  }


  // Sign out
const handleGoogleSignOut=()=>{
  signOut(auth)
  .then(() => {
    setUser({})
  }).catch((error) => {
    setUser({})
  });
  
}

  return (
    <div className="App">
     <h2>Firebase Authentication</h2>
     <button onClick={handleGoogleLogin}>Google authentication <FcGoogle></FcGoogle> </button>
     <button onClick={handleGoogleSignOut}>Sign out</button>
     <h2>{user.displayName}</h2>
     <h3>{user.email}</h3>
     <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
