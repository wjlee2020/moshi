import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import { useDocumentTitle } from "../customHooks/useDocumentTitle"
import { doesUserNameExist } from '../services/firebase';

export default function SignUp() {

    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = username === '' || fullName === '' || emailAddress === '' || password === '';

    const handleSignUp = async (e) => {
        e.preventDefault();
        const usernameExists = await doesUserNameExist(username);
        if (!usernameExists.length) {
            try {
                // create and get the response to update profile
                const createdUserResult = await firebase.auth().createUserWithEmailAndPassword(emailAddress, password);
                console.log(createdUserResult);
                await createdUserResult.user.updateProfile({
                    displayName: username
                });

                // add to firestore collection
                await firebase.firestore().collection('users').add({
                    userId: createdUserResult.user.uid,
                    username: username.toLowerCase(),
                    fullName,
                    emailAddress: emailAddress.toLowerCase(),
                    following: ['ky3EcUVu0fVBRHWZB3iwd64VXKf1'],
                    followers: [],
                    dateCreated: Date.now()
                });
                setError('');
                history.push(ROUTES.DASHBOARD);
            } catch (e) {
                setFullName('');
                setError(e.message);
            }
        } else {
            setUsername('');
            setFullName('');
            setError('Username already exists. Please choose a different username');
        }
    }

    // set document title 
    useDocumentTitle('Sign Up - Moshi')

    return (
        <div className="container flex mx-auto max-w-xs items-center h-screen">
            <div className="flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex items-center justify-center w-full text-lg mb-3">
                        Moshi? - Meet, Sell, Connect!
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
                    <form method="post" onSubmit={handleSignUp}>
                        <input
                            required
                            value={username}
                            onChange={({ target }) => setUsername(target.value.toLowerCase().replace(/\s+/g, ''))}
                            placeholder="Username"
                            type="text"
                            aria-label="Create a username"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2" />
                        <input
                            required
                            value={fullName}
                            onChange={({ target }) => setFullName(target.value)}
                            placeholder="Full name"
                            type="text"
                            aria-label="Enter your full name"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2" />
                        <input
                            required
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value.toLowerCase())}
                            placeholder="Email Address"
                            type="email"
                            aria-label="Enter your email address"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2" />
                        <input
                            required
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            placeholder="Password"
                            type="password"
                            aria-label="Enter your password"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2" />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold hover:bg-blue-700 ${isInvalid && 'opacity-50 cursor-not-allowed'}`}>
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Already have an account?{' '}
                        <Link to={ROUTES.LOGIN}>
                            <button className="font-bold">Log In</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}