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
            <input className="p-4 pt-1 pb-4 text-sm text-gray-500" placeholder="add a comment..." />
        </div>
    )
}