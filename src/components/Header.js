import { Link } from "react-router-dom"
import * as ROUTES from '../constants/routes';
import { useContext } from "react"
import FirebaseContext from "../context/firebase"

export default function Header() {

    return (
        <div className="bg-gray-100 p-5">
            <Link to={ROUTES.DASHBOARD}>
                <button className="text-2xl font-bold rounded p-1 px-2 bg-blue-200 hover:bg-blue-400 hover:text-white">Moshi Moshi</button>
            </Link>
        </div>
    )
}