import { useEffect, useReducer } from 'react';
import Header from './header';
import Photos from './photos';
import { getUserByUsername, getUserPhotosByUsername } from '../../services/firebase';

const reducer = (state, newState) => ({ ...state, ...newState });
const initialState = {
    profile: {},
    photosCollection: null,
    followerCount: 0
}

export default function UserProfile({ username }) {
    // console.log(username)

    const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        // consider caching here in localStorage to not make network call made previously
        async function getProfileInfoAndPhotos() {
            const [{ ...user }] = await getUserByUsername(username);
            // console.log(user)
            const photos = await getUserPhotosByUsername(username);
            // console.log(photos)

            dispatch({ profile: user, photosCollection: photos, followerCount: user.followers.length });
        }
        getProfileInfoAndPhotos();
    }, [username])

    // console.log(profile)
    return (
        <>
            <Header
                username={username}
                photosCount={photosCollection ? photosCollection.length : 0}
                profile={profile}
                followerCount={followerCount}
                setFollowerCount={dispatch} />
            <Photos
                photosCollection={photosCollection} />
        </>
    )
}