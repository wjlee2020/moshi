import { Link, useHistory } from "react-router-dom"
import * as ROUTES from '../constants/routes';
import { useContext, useState } from "react"
import FirebaseContext from "../context/firebase"

export default function Header() {
    const [error, setError] = useState('');

    const history = useHistory();

    const { firebase } = useContext(FirebaseContext);

    const handleSignOut = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().signOut();
            history.push(ROUTES.LOGIN)
        } catch (e) {
            let errMsg = e.message;
            setError(errMsg);
        }
    }

    const user = {
        displayName: "dali"
    };

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
                    <div className="container h-full w-auto flex justify-between align-items">
                        {user ? (
                            <>
                                <button
                                    aria-label="sign out"
                                    onClick={handleSignOut}
                                    className="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Sign Out
                                </button>
                                <div>
                                    <Link to={`/p/${user.displayName}`}>
                                        <img
                                            className="rounded-full h-8 w-8 flex ml-2"
                                            src={`/images/avatars/${user.displayName}.jpg`} alt='pic' />
                                    </Link>
                                </div>

                            </>
                        ) : (
                            <>
                                <button
                                    aria-label='to log in screen'
                                    className="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    <Link to={ROUTES.LOGIN}>
                                        Log In
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