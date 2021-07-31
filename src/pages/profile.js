import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import * as ROUTES from '../constants/routes';
import Header from "../components/Header";
import UserProfile from '../components/profile'
// import { getUserByUserName } from '../services/firebase';

import { useDocumentTitle } from "../customHooks/useDocumentTitle"
import { getUserByUsername } from "../services/firebase";

export default function Profile() {
    const [userExists, setUserExists] = useState(undefined);
    const history = useHistory();
    const { username } = useParams();

    useEffect(() => {
        async function checkUserExistsToLoadProfile() {
            const doesUserExist = await getUserByUsername(username)
            if(!doesUserExist) {
                history.push(ROUTES.NOT_FOUND)
            } else {
                setUserExists(true);
            }
        }
        checkUserExistsToLoadProfile();
    }, [username])
    
    // set document title
    useDocumentTitle('Profile - Moshi')

    return userExists ? (
        <div className="bg-gray-500">
            <Header />
            <div className="mx-auto max-w-screen-lg">
                <UserProfile username={username} />
            </div>
        </div>
    ) : null
} 