import { Link } from "react-router-dom"
import * as ROUTES from '../constants/routes';
import { useContext } from "react"
import FirebaseContext from "../context/firebase"

export default function Header() {

    return (
        <div className="h-16 bg-white p-5 border-b mb-8">
            <div className="container mx-auto max-width-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                        <Link to={ROUTES.DASHBOARD} aria-label="To dashboard">
                            {/* put logo here later */}
                            <h1 className="font-bold">Moshi Moshi</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}