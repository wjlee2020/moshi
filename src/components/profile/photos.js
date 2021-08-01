import Skeleton from 'react-loading-skeleton';

export default function Photos({photosCollection}) {
    // console.log(photosCollection)

    function enter(photoInfo) {
        console.log(photoInfo)
        // setIsHovered(true);
    }
    function leave(photoInfo) {
        // console.log(photoInfo)
    }

    // future task: add onhover with the comments length & add the likes
    // future future task: add a lightbox where you can add comments!

    return (
        <div className="h-16 border-t border-gray mt-12 pt-4">
            <div className="grid grid-cols-3 gap-5 mt-4 mb-12">
            {!photosCollection ? (
                <>
                    {[...new Array(photosCollection && photosCollection.length)].map((_, index) => (
                        <Skeleton key={index} count={1} width={320} height={400} />
                    ))}
                </>
            ) : photosCollection && photosCollection.length > 0 ? ( photosCollection && 
                photosCollection.map((photo, index) => (
                    <div key={index} onMouseEnter={() => enter(photo)} onMouseLeave={() => leave(photo)}>
                        <img className="rounded-md" src={photo.imageSrc} alt={photo.caption} />
                        {/* {photo.comments.length} */}
                    </div>
                ))
            ) : null}
            </div>
            {!photosCollection || (photosCollection && photosCollection.length === 0 && <p className="text-center text-2xl">No Posts Yet</p>)}
        </div>
    )
}