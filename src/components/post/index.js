import Header from './header';
import Actions from './actions';
import AddComment from './addComment';
import Footer from './footer';
import Image from './image';
import { useRef } from 'react';

export default function Post({ content }) {
    const ref = useRef(null);

    const handleFocus = () => {
        ref.current.focus();
    }

    return (
        //rounded, border bg white border gray mb-16
        <div className="border rounded bg-white border-gray-200 mb-16 col-span-4">
            <Image src={content.imageSrc} alt={content.caption} />
            <Actions
                docId={content.docId}
                totalLikes={content.likes.length}
                likedPhotos={content.userLikedPhoto}
                handleFocus={handleFocus} />
            <Footer caption={content.caption} username={content.username} />
        </div>
    )
}