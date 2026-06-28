import { useRouteLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm";

export default function EditEventPage() {

    const eventDetails = useRouteLoaderData('events-section');
    console.log(eventDetails);

    return(
        <>
           <EventForm event={eventDetails.event}/>
        </>
    )
}