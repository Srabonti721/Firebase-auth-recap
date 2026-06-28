import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { resume } from 'react-dom/server';

const SignIn = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const SignInUser = result.user
                setUser(SignInUser)

            })
            .catch(error => {
                console.log(error);

            })
    }

    const handleSignOut = () =>{
        signOut(auth).then(result=>{
            console.log(result);
            setUser(null)
        })
        .catch(error=>{
            console.log(error);
            
        })
    }

    return (
        <div>
            <h1>please sign in</h1>
            {
                user ? <button onClick={handleSignOut}>Sign out</button>:<button onClick={handleSignIn}>SIgn in with google</button>
            }
            
           
            {
                user && <div>
                    <h3> User name = {user.displayName}</h3>
                    <p> Email = {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }

        </div>
    );
};

export default SignIn;