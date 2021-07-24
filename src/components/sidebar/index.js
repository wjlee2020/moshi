import useUser from "../../customHooks/useUser"
import User from './user';

export default function Sidebar() {
    // default of empty obj when we don't have an activeUser (a user signed in)
    const { activeUser: { docId, userId, following, username, fullName } = {} } = useUser();

    return (
        <div className="p-4">
            <User 
                username={username} 
                fullName={fullName} />
        </div>
    )
}