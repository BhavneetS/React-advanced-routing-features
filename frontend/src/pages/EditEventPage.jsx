import { useRouteLoaderData } from "react-router-dom"

export default function EditEventPage() {

    const eventDetails = useRouteLoaderData('events-section');
    console.log(eventDetails);

    return(
        <>
            <h1>Edit Event Page</h1>
        </>
    )
}