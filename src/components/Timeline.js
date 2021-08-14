import Skeleton from 'react-loading-skeleton';
import useFollowedUsersPhotos from '../customHooks/useFollowedUsersPhotos';
import Post from './post';

export default function Timeline() {
    // const { photos } = useFollowedUsersPhotos();
    // console.log(photos)
    const photos = null;

    return (
        <div className="container col-span-2">
            {!photos ?
                <Skeleton count={5} width={640} height={500} className="mb-5" /> :
                (<>
                    {photos.map((photo) => (
                        <Post key={photo.docId} content={photo} />
                    ))}
                </>)
            }
        </div>
    )
}