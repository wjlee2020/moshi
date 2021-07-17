import { useDocumentTitle } from "../customHooks/useDocumentTitle"
import { useHistory } from "react-router"
import * as ROUTES from '../constants/routes';

export default function NotFound() {
    const history = useHistory();

    // set document title 
    useDocumentTitle('Moshi? - Page Not Found')
    return (
        <div className="bg-gray-500 p-5">
            <div className="mx-auto max-w-screen-lg text-center text-white text-2xl">
                <h1 className="m-5">404 - Page Not Found</h1>
                <p>Sorry the page you were looking for doesn't exist.</p>
                <p>Click the button below to return to the login screen.</p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
                    onClick={() => { history.push(ROUTES.LOGIN) }}>
                    Go Back!
                </button>
            </div>
        </div>
    )
}