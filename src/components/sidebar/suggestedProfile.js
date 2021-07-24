import { useState } from 'react';

export default function SuggestedProfile({userDocId, username, profileId, userId}) {
    console.log(username);
    
    const [followed, setFollowed] = useState(false);

    const handleFollowUser = async () => {
        setFollowed(true);
    }

    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <img 
                className="rounded-full w-8 flex mr-3"
                src={`images/avatars/${username}.jpg`}
                alt="profile" />
            <Link to={`/p/${username}`}>
                <p className="font-bold text-sm">{username}</p>
            </Link>
        </div>
    ) : null
}