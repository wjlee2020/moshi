import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = useState(null);
    const { uid: userId = '' } = useContext(UserContext);

    useEffect(() => {
        const getTimelinePhotos = async () => {

        }
        getTimelinePhotos();
    }, [userId])
    return { photos };
}