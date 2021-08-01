import { useEffect } from 'react';
import Header from './header';
import Photos from './photos';

export default function UserProfile({ username }) {
    console.log(username)
return (
    <>
        <Header />
        <Photos />
    </>
)
}