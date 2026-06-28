import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { resume } from 'react-dom/server';

const SignIn = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
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

    const handleGithubSignIn = () =>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
              const githubSignInUser = result.user;
              console.log(githubSignInUser);
              
              if(!githubSignInUser.email && githubSignInUser?.providerData?.length){
                console.log("user email is not directly provided");
                if(githubSignInUser.providerData[0].email){
                    githubSignInUser.email = githubSignInUser.providerData[0].email;
                       setUser(githubSignInUser)
                }
              }
                
        })
        .catch(error=>{
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
                user ? <button onClick={handleSignOut}>Sign out</button>:
                <><button onClick={handleSignIn}>SIgn in with google</button>
                <button onClick={handleGithubSignIn}> Sign in with github</button>
                </>
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