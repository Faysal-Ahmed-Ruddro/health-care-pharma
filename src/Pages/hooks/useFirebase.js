import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
   createUserWithEmailAndPassword ,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
initializeAuthentication();
const useFirebase = () => {
    const [user,setUser] = useState();
    const [error,setError] = useState();
    const auth = getAuth();
    // sign in with google 
    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user)
          console.log(result.user); 
        }).catch(error => {
            setError(error)
            console.log(error.message);
        })
    }
    // sign in with github 
    const signInWithGitHub = () =>{
        signInWithPopup(auth, githubProvider)
          .then((result) => {
              setUser(result.user)
            console.log(result.user);
          }).catch((error) => {
              setError(error)
            console.log(error.message);
          });
    }
    // use auth for reload 
    useEffect(()=>{
            onAuthStateChanged(auth, (user) => {
              if (user) {
                setUser(user)
              } else {
                 setError("");
              }
            });
    },[]);
    const logOut = ()=>{
         const auth = getAuth();
         signOut(auth)
           .then(() => {
             setUser({})
           })
           .catch((error) => {
            
           });
    }
    // create new users with email and password 
    const createUserWithEmailPassWord = (email,password)=>{
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
         setUser(result.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    // sign In with email and password 
    const signInWithEmailPassword =(email,password)=>{
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
    return {
      user,
      error,
      signInWithGoogle,
      signInWithGitHub,
      logOut,
      createUserWithEmailPassWord,
      signInWithEmailPassword,
    };

};

export default useFirebase;
