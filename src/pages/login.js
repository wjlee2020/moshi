import { useContext, useState } from 'react';
import * as ROUTES from '../constants/routes';
import { useHistory, Link } from 'react-router-dom';
import { useDocumentTitle } from '../customHooks/useDocumentTitle';
import FirebaseContext from '../context/firebase';

export default function Login() {

    // useHistory router hook
    const history = useHistory();

    //context
    const { firebase } = useContext(FirebaseContext);

    // state variables
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // valid for btn
    const isInvalid = emailAddress === '' || password === '';

    // set document title via custom hook
    useDocumentTitle('Login - Moshi');

    // user actions
    // what happens when a user clicks login? -> firebase
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
            console.log('successfully logged in')
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setError(error.message);
            setPassword('');
        }
    }

    return (
        <div className="container mx-auto flex max-w-screen-md items-center h-screen">
            <div className="flex w-3/5 h-1/2">
                <img className="w-4/5 rounded-lg object-cover"
                    src="https://images.unsplash.com/photo-1623323287571-1401c5ac5142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt='phone' />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full text-lg mb-3">
                        Moshi? - Meet, Sell, Connect!
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
                    <form method="post" onSubmit={handleLogin}>
                        <input
                            required
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                            placeholder="Email Address"
                            type="text"
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
                            Log In
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <Link to={ROUTES.SIGN_UP}>
                            <button className="font-bold">Sign up</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}