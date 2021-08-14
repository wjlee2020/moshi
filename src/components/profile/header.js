import { useState, useEffect } from "react";

export default function Header({ username, profile, photosCount, followerCount, setFollowerCount }) {
    console.log(profile)
    return (
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            <div className="container flex justify-center">
                <img
                    className="rounded-full h-40 w-40 flex"
                    src={`/images/avatars/${username}.jpg`}
                    alt={`${username} profile`}
                />
            </div>
        </div>
    )
}