import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SuggestedProfile({ userDocId, username, profileId, userId }) {
    console.log(username);

    const [followed, setFollowed] = useState(false);

    const handleFollowUser = async () => {
        setFollowed(true);
    }

    return !followed ? (
        <div className="flex flex-row my-2 items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img
                    className="rounded-full w-8 h-8 flex mr-3 object-cover"
                    src={`images/avatars/${username}.jpg`}
                    alt="profile" />
                <Link to={`/p/${username}`}>
                    <p className="font-bold text-sm">{username}</p>
                </Link>
            </div>
            <div className="flex">
                <button
                    className="text-sm font-bold text-blue-500"
                    type="button"
                    onClick={handleFollowUser}
                >
                    Follow
                </button>
            </div>
        </div>
    ) : null
}