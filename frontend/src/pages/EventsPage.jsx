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

export default EventsPage;