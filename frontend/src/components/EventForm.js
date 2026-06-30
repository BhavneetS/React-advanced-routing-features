import { Form, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();

  const navigationStatus = useNavigation();
  const saveFormActionData = useActionData();

  /* 
    navigation is also triggered when submitting a form, Hence we can use the useNavigation Route to check the form submitting status.
  */
  const isSubmitting = navigationStatus.state === 'submitting';
  function cancelHandler() {
    navigate('..');
  }

  return (
    /* 
      The Form component does not require a reference to the Action Function by default because the event is fired to the active route.
      Since we have the action function referenced from the route, the formData is made available to the action Function by the react Router.

      In order to send data to the action of any other route, we can add the action attribute to the FORM with the value of the route who's action we would like to send data to.
       <Form method='POST' className={classes.form} action="/any-other-path">
    */
    <Form method='POST' className={classes.form}>
      {saveFormActionData && saveFormActionData.errors && (
        <ul>
          {Object.values(saveFormActionData.errors).map((err) => {
            return <li key={err}>{err}</li>
          })}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event?.title}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event?.image}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event?.date}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event?.description}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
