import { useState, useEffect, memo } from "react";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from '../../services/firebase';

const Suggestions = ({ userId }) => {
    const [profiles, setProfiles] = useState(null);

    useEffect(() => {
        async function suggestProfiles() {
            const response = await getSuggestedProfiles(userId);
            setProfiles(response);
        }
        // if(userId) {
        //     suggestProfiles();
        // }
    }, [userId])

    return  (
        <div>
            {!profiles ? (
                <Skeleton count={1} height={150} className="mt-5" />
            ) : (
                profiles.length > 0 ? (
                    <p>profiles here</p>
                ) : (
                    null
                )
            )}
        </div>
    )
}

export default memo(Suggestions);