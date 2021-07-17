import { useDocumentTitle } from '../customHooks/useDocumentTitle';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Sidebar from '../components/sidebar'

export default function Dashboard() {
    // set document title
    useDocumentTitle('Dashboard - Moshi');
    return (
        <div>
            <Header />
            <Sidebar />
            <Timeline />
        </div>
    )
}