
import './App.css';
import { FcGoogle} from "react-icons/fc";
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



const auth = getAuth(app);
function App() {
  const googleProvider= new GoogleAuthProvider();
  const handleGoogleLogin=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className="App">
     <h2>Firebase Authentication</h2>
     <button onClick={handleGoogleLogin}>Google authentication <FcGoogle></FcGoogle> </button>
    </div>
  );
}

export default App;
