import { Link } from "react-router-dom"
import * as ROUTES from '../constants/routes';
import { useContext } from "react"
import FirebaseContext from "../context/firebase"

export default function Header() {
    const { firebase } = useContext(FirebaseContext);

    console.log(firebase);

    // firebase.auth().signOut() use this to sign out button if the user is signed in

    const user = null;

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
                    <div className="container h-full w-auto flex justify-between">
                        {user ? (
                            <button className="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Sign Out
                            </button>
                        ) : (
                            <button className="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <Link to={ROUTES.LOGIN}>
                                    Sign In
                                </Link>
                            </button>
                        )}
                        <button
                            className="text-gray-700 text-xs hover:bg-gray-200 text-white font-bold py-2 px-4 ml-2 rounded">
                            <Link to={ROUTES.SIGN_UP}>
                                Sign Up
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}