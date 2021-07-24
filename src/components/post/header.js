import { Link } from 'react-router-dom';

export default function Header({ username }) {
    return (
        <div className="flex border-b h-4 p-4 py-8">
            <div className="flex items-center">
                <Link to={`/p/${username}`} className="flex">
                    <img className="rounded-full h-8 w-8 mr-3" src={`images/avatars/${username}.jpg`} alt="profile" />
                    <p className="font-bold">{username}</p>
                </Link>
            </div>
        </div>
    )
}