
import './App.css';
import { FcGoogle} from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);


function App() {

  // Provider
  const googleProvider= new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();


// storing data
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

// Github sign in

const handleGithubLogin=()=>{
  signInWithPopup(auth,gitHubProvider)
    .then(result=>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error=>{
      console.log(error);
    })

}

  // Sign out (google/github)
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
   {
user.uid?<button onClick={handleGoogleSignOut}>Sign out  <FcGoogle></FcGoogle></button>: 
<>
<button onClick={handleGoogleLogin}>Google authentication  <FcGoogle></FcGoogle> </button>
<button onClick={handleGithubLogin}>Github Login  <BsGithub></BsGithub></button>
</> 
   }
   
     <h2>{user.displayName}</h2>
     <h3>{user.email}</h3>
     <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
