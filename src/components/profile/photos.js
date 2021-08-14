import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Photos({ photosCollection }) {
    // console.log(photosCollection)
    const [hoveredPhoto, setHoveredPhoto] = useState(false)
    const [imgLikes, setImgLikes] = useState('');
    console.log(hoveredPhoto);

    function enter(photoInfo) {
        console.log(photoInfo)
        setImgLikes(photoInfo.likes.length)
        setHoveredPhoto(true)
        // setIsHovered(true);
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
                ) : photosCollection && photosCollection.length > 0 ? (photosCollection &&
                    photosCollection.map((photo, index) => (
                        <div key={index} >
                            <img className="rounded-md" src={photo.imageSrc} alt={photo.caption} onMouseEnter={() => enter(photo)} onMouseLeave={() => setHoveredPhoto(false)} />
                        </div>
                    ))
                ) : null}
            </div>
            {!photosCollection || (photosCollection && photosCollection.length === 0 && <p className="text-center text-2xl">No Posts Yet</p>)}
        </div >
    )
}