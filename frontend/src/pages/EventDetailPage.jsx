import { useLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem";

export default function EventDetailsPage() {

    const eventDetails = useLoaderData();
    console.log(eventDetails);
    return(
        <>
            <EventItem event={eventDetails.event} />
        </>
    )
}

export async function loader({request, params}) {
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id);
    
    if(!response.ok) {
        throw ({message: 'Could not fetch details for the selected event'}, {status: 500})
    } else {
        return response;
    }
}