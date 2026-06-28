import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {

  /* 
    Although we are returing a Promise from the loader function in the route via async function, 
    react-router passes the resolved data to the element/component
  */
  const events = useLoaderData();

  return (
    <>
      {/*
        In place of passing the events form here to the EventsList component, we can resolve it directly in the EventsList Component as it is in the same tree.
      */}
      
      {/* <EventsList />   */}
      <EventsList events={events} />
    </>
  );
}

export async function events() {
  /* 
    The loader function is used to resolve data that is required by the component onLoad
    and the returned data is automatically made available by react router.

    useLoaderData() can be used in element that's assigned to the route AND to all the components that might be used inside the element(nested component).
    
    -useLoaderData() works at any depth within the route's component tree
    -It returns the same data regardless of which child component calls it
    -No need to pass as props if you call it in children
    -It only works for the current route's loader, not sibling or parent routes
  */
  const response = await fetch('http://localhost:8080/eventsaasdasd');
    if (!response.ok) {
      /* 
        In case an error is thrown in the loader function, the error bubbles up to the closest ErrorElement defined in the route config.
      */
      throw {message: 'An error has occured'};
    } else {
      const resData = await response.json();
      return resData.events;
    }
} 

export default EventsPage;