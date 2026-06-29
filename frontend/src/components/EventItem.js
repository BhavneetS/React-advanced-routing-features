import { Link, redirect, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {

  /* 
    The useSubmit() hook can be used to programatically submit the form similar to wrapping the form with the react-router's 'Form' component.
    the submit handler can pass the paylod/formData as the first argument and all the configurtaions available with the Form Component as the second argument.
  */
  const handleSubmit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure you would like to delete the event?");

    proceed && handleSubmit({},{
      method: 'DELETE'
    });
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export async function deleteAction({ params, request}) {
  const response = await fetch('http://localhost:8080/events/' + params.id, {
    method: request.method
  })

  if(!response.ok) {
        throw ({message: 'Could not fetch details for the selected event'}, {status: 500})
  }

  return redirect("/events")
}

export default EventItem;
