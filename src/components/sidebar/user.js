//showing own profile
import { memo } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const User = ({ username, fullName }) => {
    return (
        !username || !fullName ? (
            <Skeleton count={1} height={61} />
        ) : (
            <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-4 items-center">
                <div className="flex items-center justify-between col-span-1">
                    <img
                        className="rounded-full h-12 w-12 mr-3 object-cover"
                        src={`images/avatars/${username}.jpg`}
                        alt={username}
                    />
                </div>
                <div className="col-span-3">
                    <p className="font-bold text-sm">{username}</p>
                    <p className="text-sm">{fullName}</p>
                </div>
            </Link>
        )
    )
};

export default memo(User);