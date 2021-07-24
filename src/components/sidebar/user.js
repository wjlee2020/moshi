//showing own profile
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export const User = ({username, fullName}) => {
    return (
        !username || !fullName ? (
            <Skeleton count={1} height={61} />
        ) : (
            <>
                <p className="text-sm text-gray-500">you are currently logged in as:</p>
                <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-4 items-center">
                    <p>{username}</p>
                </Link>
            </>
        )
    )
}