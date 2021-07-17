import useUser from "../../customHooks/useUser"

export default function Sidebar() {
    // default of empty obj when we don't have an activeUser (a user signed in)
    const { activeUser: { docId, userId, following, username, fullName } = {} } = useUser();

    return (
        <p>I'm the sidebar</p>
    )
}