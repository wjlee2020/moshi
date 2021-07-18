import Skeleton from 'react-loading-skeleton';

export default function Timeline() {
    const photos = null;

    return (
        <div className="container col-span-2">
            {photos ? photos.map((photo, i) => (<p key={i}>I'm the photos</p>)) : <Skeleton count={5} width={640} height={500} className="mb-5" />}
        </div>
    )
}