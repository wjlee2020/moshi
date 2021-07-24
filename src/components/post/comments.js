import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddComments from './addComment';
import { formatDistance } from 'date-fns';

export default function Comments({docId, comments: allComments, posted, commentInput}) {
    const [ comments, setComments ] = useState(allComments);
    
    console.log(comments);
    const postedComments = comments.map((comment, i) => (
        <div key={i}>
            <p>{comment.comment}</p>
            <p className="font-bold">{comment.displayName}</p>
        </div>
    ))

    return (
        <div className="p-4 pt-1 pb-4">
            {comments.length >= 3 && (
                <p className="text-sm text-gray-500 mb-1 cursor-pointer">View All {comments.length} comments</p>
            )}
            {comments.slice(0, 3).map((comment) => (
                <p className="mb-1" key={`${comment.comment}-${comment.displayName}`}>
                    <Link to={`/p/${comment.displayName}`}>
                        <span className="mr-1 font-bold">{comment.displayName}</span>
                    </Link>
                    <span>- {comment.comment}</span>
                </p>
            ))}
            <p className="text-gray uppercase text-xs mt-2">
                {formatDistance(posted, new Date())} ago
            </p>
        </div>
    )
}