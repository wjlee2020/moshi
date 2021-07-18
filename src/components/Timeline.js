import Skeleton from 'react-loading-skeleton';
import useFollowedUsersPhotos from '../customHooks/useFollowedUsersPhotos';

export default function Timeline() {
    const { photos } = useFollowedUsersPhotos();
    console.log(photos)

    return (
        <div className="container col-span-2">
            {!photos ?
                <Skeleton count={5} width={640} height={500} className="mb-5" /> :
                <p>Follow people to see photos!</p>}
        </div>
    )
}