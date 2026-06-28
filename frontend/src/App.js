import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";
import EventsLayout from "./pages/EventsLayout";

const route = createBrowserRouter([
  {
  path: '/',
  element: <RootLayout />,
  children: [
     {path: '/', element: <HomePage />},
      {path: '/events', element: <EventsLayout />, children:[
        {path: '', element: <EventsPage />, loader: async() => {
          /* 
            The loader function is used to resolve data that is required by the component onLoad
            and the returned data is automatically made available by react router.

            useLoaderData() can be used in element that's assigned to the route AND to all the components that might be used inside the element(nested component).
            
            -useLoaderData() works at any depth within the route's component tree
            -It returns the same data regardless of which child component calls it
            -No need to pass as props if you call it in children
            -It only works for the current route's loader, not sibling or parent routes
          */
          const response = await fetch('http://localhost:8080/events');
            if (!response.ok) {
            // ...
            } else {
              const resData = await response.json();
              return resData.events;
            }
          } 
        },
        {path: ':id', element: <EventDetailsPage/>},
        {path: 'new', element: <NewEventPage />},
        {path: ':id/edit', element: <EditEventPage />}
      ]},
      
    ]
  }
])
function App() {
  return <RouterProvider router={route}/>;
}

export default App;
