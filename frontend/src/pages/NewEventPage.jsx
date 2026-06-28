import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEventPage() {
    return(
        <>
            <EventForm />
        </>
    )
}

export async function action({request, params}) {
    /* 
        using the 'Form' component of react-router, the formdata is automatically passed to the Action via the request.formData argument.
    */
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }
        
    const response =  await fetch('http://localhost:8080/events', {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(!response.ok) {
        throw new Response(JSON.stringify({message: 'data not submitted'}), {status: 500});
    }

    return redirect('/events');
}