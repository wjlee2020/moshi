//showing own profile
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const User = ({username, fullName}) => {
    return (
        !username || !fullName ? (
            <Skeleton count={1} height={61} />
        ) : (
                <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-4 items-center">
                    <div className="flex items-center justify-between col-span-1">
                        <img 
                            className="rounded-full h-16 w-16 flex mr-3 object-cover"
                            src={`images/avatars/${username}.jpg`}
                            alt={username}
                        />
                    </div>
                </Link>
        )
    )
};

export default User;