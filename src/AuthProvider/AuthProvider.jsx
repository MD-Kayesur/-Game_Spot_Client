import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { GoogleAuthProvider } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
 
  import { getAuth } from "firebase/auth";
import { app } from "../FireBase/FireBase.config";
  export const auth = getAuth(app);
  export const AuthContext = createContext(null);
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
  
    const [loding, setLoding] = useState(true);
  
    // sign in
    const signin = (email, password) => {
      setLoding(true);
      return signInWithEmailAndPassword(auth, email, password  );
    };
  
    const Signup = (email, password) => {
      setLoding(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
  // updateProfil using for take  photo, name from user , and using it also in signup component
  const updateProfil = (photo, name)=>{
  return updateProfile (auth.currentUser,{
    displayName: name,
    photoURL: photo,
  }) 
  }
  
  
    const signout = () => {
      setLoding(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unSubscribs = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoding(false);
      });
      return () => {
        return unSubscribs();
      };
    }, []);
  
  
    const provider = new GoogleAuthProvider();
  const GoogleLogIn =()=>{
    setLoding(true)
    return signInWithPopup(auth, provider)
  }
  
    const AuthInfo = {
      user,
      loding,
      signin,
      Signup,
      signout,
      updateProfil,
      GoogleLogIn,
    };
  
    return (
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  