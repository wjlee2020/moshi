import { useDocumentTitle } from '../customHooks/useDocumentTitle';

export default function Dashboard() {
    // set document title
    useDocumentTitle('Dashboard - Moshi');
    return (
        <p>hello from dashboard</p>
    )
}