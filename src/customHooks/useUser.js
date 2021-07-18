import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from '../services/firebase';

export default function useUser() {
    const [activeUser, setActiveUser] = useState({})
    const { user } = useContext(UserContext);

    // pull out user info
    useEffect(() => {
        async function getUserObjByUserId() {
            //query for user data in firestore
            const [response] = await getUserByUserId(user.uid);
            // console.log(response)
            //pass user response to state of activeUser
            setActiveUser({ ...response });
        }
        if (user && user.uid) {
            getUserObjByUserId();
        }
        // if user changes, rerender
    }, [user]);
    // return activeUser as user to the hook
    console.log(activeUser)
    return { activeUser };
}