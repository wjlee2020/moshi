import { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function AddComment({docId, comments, setComments, commentInput}) {
    const [comment, setComment] = useState('');

    const { firebase, FieldValue } = useContext(FirebaseContext)
    const { user: {displayName} } = useContext(UserContext);

    const handleSubmitComment = (event) => {
        // not async, don't want to have network call prior to state updates. don't have to worry about taking time for the network to connect and then having to update [imo]
        event.preventDefault();

        //check seed file for structure for users data to see why spreading comments
        setComments([{ displayName, comment}, ...comments]);
        setComment('');

        return firebase
            .firestore()
            .collection('photos')
            .doc(docId)
            .update({
                // arrayUnion === merge into existing array
                comments: FieldValue.arrayUnion({ displayName, comment })
            })
    }

    return (
        <div className="border-t border-gray">
            <form 
                className="flex w-full justify-between border-gray pr-5"
                onSubmit={(event) => comment.length >= 3 ? handleSubmitComment(event) : event.preventDefault()}
                method="POST">
                <input 
                    type="text" 
                    placeholder="add a comment" 
                    aria-label="add a comment" 
                    autoComplete="off" 
                    className="text-sm text-gray w-full mr-3 py-5 px-4" 
                    name="add-comment"
                    value={comment}
                    onChange={({target}) => setComment(target.value)}
                    ref={commentInput}
                    />
                    <button
                        disabled={comment.length < 3}
                        className={`text-sm font-bold text-blue-300 hover:text-blue-600 ${!comment && 'opacity-25'} ${comment.length < 1 && 'cursor-not-allowed'}`}
                        onClick={handleSubmitComment}
                    >Post
                    </button>
            </form>
        </div>
    )
}