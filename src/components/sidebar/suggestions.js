import { useState, useEffect, memo } from "react";
import Skeleton from "react-loading-skeleton";
import SuggestedProfile from "./suggestedProfile";
import { getSuggestedProfiles } from '../../services/firebase';

const Suggestions = ({ userId }) => {
    const [profiles, setProfiles] = useState([
        {
            userDocId: 1,
            username: "dali",
            profileId: "2",
            userId: '3'
        },
        {
            userDocId: 1,
            username: "orwell",
            profileId: "2",
            userId: '3'
        }
    ]);
    console.log(profiles)

    useEffect(() => {
        async function suggestProfiles() {
            const response = await getSuggestedProfiles(userId);
            setProfiles(response);
        }
        // if(userId) {
        //     suggestProfiles();
        // }
    }, [userId])

    return (
        <div>
            {!profiles ? (
                <Skeleton count={1} height={150} className="mt-5" />
            ) : (
                profiles.length > 0 ? (
                    <div className="grid">
                        <div className="flex items-center align-items justify-between mb-2">
                            <p className="font-bold text-sm text-gray-600">suggestions for you</p>
                        </div>
                        {profiles.map((profile, i) => (
                            <SuggestedProfile
                                key={i}
                                userDocId={profile.docId}
                                username={profile.username}
                                profileId={profile.userId}
                                userId={userId}
                            />
                        ))}
                    </div>
                ) : (
                    null
                )
            )}
        </div>
    )
}

export default memo(Suggestions);