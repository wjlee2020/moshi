import { useState, useEffect } from "react";
import useUser from "../../customHooks/useUser";
import Skeleton from 'react-loading-skeleton';

export default function Header({
    username,
    profile: { docId: profileDocId, userId: profileUserId, fullName, following = 0 },
    photosCount,
    followerCount,
    setFollowerCount }) {
    // console.log(profile)
    const { activeUser: user } = useUser();
    // console.log(user);

    const [isFollowingProfile, setIsFollowingProfile] = useState(false);
    // set the btn active if the logged in user is not the same as the profile user
    const activeBtn = user.username && user.username !== username;

    return (
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            <div className="container flex justify-center">
                <img
                    className="rounded-full h-40 w-40 flex"
                    src={`/images/avatars/${username}.jpg`}
                    alt={`${username} profile`}
                />
            </div>
            <div className="flex items-center justify-center flex-col col-span-2">
                <div className="container flex items-center">
                    <p className="text-2xl mr-4">{username}</p>
                    {activeBtn && (
                        <button
                            className="bg-blue-600 font-bold text-sm rounded text-white w-20 h-8"
                            type="button"
                            onClick={() => console.log('button clicked')}>
                            {isFollowingProfile ? "Unfollow" : "Follow"}
                        </button>
                    )}
                </div>
                <div className="container flex mt-4">
                    {followerCount === undefined || following === undefined ? (
                        <Skeleton count={1} width={677} height={24} />
                    ) : (
                        <>
                            <p className="mr-10 flex flex-col items-center">
                                <span className="font-bold">{photosCount}</span> photos
                            </p>
                            <p className="mr-10 flex flex-col items-center">
                                <span className="font-bold">{followerCount}</span> {followerCount === 1 ? 'follower' : 'followers'}
                            </p>
                            <p className="mr-10 flex flex-col items-center">
                                <span className="font-bold">{following.length}</span> following
                            </p>
                        </>
                    )}
                </div>
                <div className="container mt-3">
                    {fullName ? (
                        <p className="font-bold">{fullName}</p>
                    ) : (
                        <Skeleton count={1} width={255} height={24} />
                    )}
                </div>
            </div>
        </div>
    )
}