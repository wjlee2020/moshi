import { useState, useEffect } from "react";
import useUser from "../../customHooks/useUser";

export default function Header({ username, profile, photosCount, followerCount, setFollowerCount }) {
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
            </div>
        </div>
    )
}