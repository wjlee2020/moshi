import { Link, useHistory } from "react-router-dom"
import * as ROUTES from '../constants/routes';
import { useContext, useState } from "react"
import FirebaseContext from "../context/firebase"
import UserContext from "../context/user";

export default function Header() {
    const [error, setError] = useState('');

    const history = useHistory();

    const { user } = useContext(UserContext)
    const { firebase } = useContext(FirebaseContext);
    // console.log(user)

    const handleSignOut = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().signOut();
            // history.push(ROUTES.LOGIN) 
        } catch (e) {
            let errMsg = e.message;
            setError(errMsg);
        }
    }

    return (
        <div className="h-22 bg-white p-5 border-b mb-8">
            <div className="container mx-auto max-width-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                        <Link to={ROUTES.DASHBOARD} aria-label="To dashboard">
                            {/* put logo here later */}
                            <h1 className="font-bold">Moshi Moshi</h1>
                        </Link>
                    </div>
                    <div className="container h-full w-auto flex justify-between items-center align-items">
                        {user ? (
                            <>
                                <Link to={ROUTES.DASHBOARD} aria-label="home">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-6 text-black-light cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                </Link>
                                <Link to={`/p/${user.displayName}`}>
                                    <img
                                        className="rounded-full h-8 w-8 flex mr-6"
                                        src={`/images/avatars/${user.displayName}.jpg`} alt={`${user.displayName} profile photo`} />
                                </Link>
                                <button
                                    aria-label="sign out"
                                    onClick={handleSignOut}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </button>

                            </>
                        ) : (
                            <>
                                <button
                                    aria-label='to log in screen'>
                                    <Link to={ROUTES.LOGIN}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-6 text-black-light cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                    </Link>
                                </button>
                                <button
                                    aria-label='to sign up screen'
                                    className="text-gray-700 text-xs hover:bg-gray-200 text-white font-bold py-2 px-4 ml-2 rounded">
                                    <Link to={ROUTES.SIGN_UP}>
                                        Sign Up
                                    </Link>
                                </button>
                            </>
                        )}
                    </div>
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
                </div>
            </div>
        </div>
    )
}