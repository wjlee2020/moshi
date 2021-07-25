import { firebase, FieldValue } from '../lib/firebase';

export async function doesUserNameExist(username) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();
    console.log(result);
    return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(uid) {
    const res = await firebase
        .firestore()
        .collection('users')
        .where('userId', '==', uid)
        .get();

    const user = res.docs.map(item => ({
        ...item.data(),
        docId: item.id
    }));

    return user;
}

export async function getUserFollowedPhotos(userId, followingUserIds) {
    const result = await firebase
        .firestore()
        .collection('photos')
        .where('userId', 'in', followingUserIds)
        .get();

    const userFollowedPhotos = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));

    console.log(userFollowedPhotos);

    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map(async (photo) => {
            console.log(photo);
            let userLikedPhoto = false;
            if (photo.likes.includes(userId)) {
                userLikedPhoto = true;
            }
            //get user details by the userid from photos
            const user = await getUserByUserId(photo.userId);
            console.log(user)
            // there's only one
            const username = user[0].username;
            return { username, ...photo, userLikedPhoto };
        })
    )
    return photosWithUserDetails;
}

export async function getSuggestedProfiles(userId) {
    const result = await firebase
        .firestore()
        .collection('users')
        .limit(10)
        .get();

    const [{ following }] = await getUserByUserId(userId);
    return result.docs
        .map((user) => ({ ...user.data(), docId: user.id }))
        .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
}

// export async function getSuggestedProfiles(userId) {
//     const result = await firebase
//         .firestore()
//         .collection('users')
//         .limit(10)
//         .get();

//     const [{ following: userFollowing = [] }] = result.docs
//         .map((user) => user.data())
//         .filter((profile) => profile.userId === userId);

//     //check: result.docs brings back all users in the db, then filter out the active userId
//     // const random = result.docs.map((user) => user.data())
//     // console.log(random)

//     return result.docs.map((user) => ({ ...user.data(), docId: user.id }))
//         .filter((profile) => profile.userId !== userId && !userFollowing.includes(profile.userId));

// }