import { useDocumentTitle } from "../customHooks/useDocumentTitle"

export default function Profile() {
    // set document title
    useDocumentTitle('Profile - Moshi')
    return (
        <p>Profile</p>
    )
}