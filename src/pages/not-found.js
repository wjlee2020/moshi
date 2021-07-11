import { useDocumentTitle } from "../customHooks/useDocumentTitle"


export default function NotFound() {
    // set document title 
    useDocumentTitle('Moshi?')
    return (
        <p>NotFound</p>
    )
}