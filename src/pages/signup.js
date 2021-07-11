import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { useDocumentTitle } from "../customHooks/useDocumentTitle"

export default function SignUp() {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = emailAddress === '' || password === '';

    const handleSignUp = () => {
        console.log('hello')
    }

    // set document title 
    useDocumentTitle('Sign Up - Moshi')
    return (
        <div className="flex flex-col w-1/4 mx-auto mt-20">
            <div className="flex flex-col items-center bg-white p-4 border mb-4">
                <h1 className="flex justify-center w-full text-lg">
                    Moshi? - Meet, Sell, Connect!
                </h1>
                {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
                <form method="post" onSubmit={handleSignUp}>
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
                    Already have an account?{' '}
                    <Link to={ROUTES.SIGN_UP}>
                        <button className="font-bold">Sign up</button>
                    </Link>
                </p>
            </div>
        </div>
    )
}