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

     /* 
        Data returned from the action function can be captured using the useActionData() hook.
        useActionData() hook gives access to the data retruned by the cloeset action to the route
    
        If a route has an action and that action returns a value, useActionData() in the route component (or a child of that route) will receive that value.
      */
      if(response.status === 422) {
        return response;
      }

    if(!response.ok) {
        throw new Response(JSON.stringify({message: 'data not submitted'}), {status: 500});
    }

    return redirect('/events');
}