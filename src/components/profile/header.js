import { useState, useEffect } from "react";

export default function Header({username, profile, photosCount, followerCount, setFollowerCount}) {
    return (
        <div className="border border-black">
            <p>hello this is the header for {username}</p>
        </div>
    )
}