import { useDocumentTitle } from '../customHooks/useDocumentTitle';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Sidebar from '../components/sidebar'

export default function Dashboard() {
    // set document title
    useDocumentTitle('Dashboard - Moshi');

    return (
        <div className="bg-gray-200">
            <Header />
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                <Sidebar />
                <Timeline />

            </div>
        </div>
    )
}