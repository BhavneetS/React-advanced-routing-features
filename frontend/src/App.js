import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, {events} from "./pages/EventsPage";
import EventDetailsPage, { loader } from "./pages/EventDetailPage";
import NewEventPage, { action as newEvent} from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";
import EventsLayout from "./pages/EventsLayout";
import ErrorPage from "./components/Error";
import { deleteAction } from "./components/EventItem";
import NewsletterPage, {action as newsletterAction} from "./components/Newsletter";

const route = createBrowserRouter([
  {
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage/>,
  children: [
      {path: '/', element: <HomePage />},
      {path: '/events', element: <EventsLayout />, 
        children:[
          { index: true, element: <EventsPage />, loader: events},
          { path: ':id',
            loader: loader,
            id:'events-section',
            children:[
              /* 
                When using path:'' in palce of index, the react router does not resolve the route to be same as the parent route.
                index: true marks a route as the default child for its parent and matches exactly when the parent path is active, so React Router treats it as the canonical content for that URL.
                path: '' defines an explicit empty-path child route, which is not the same special default route and can behave differently during matching and data-router resolution.

                hence, with path:'' the action is resolved at the parent
                with index: true, the action is resolved at the child route itself
              */
              {index:true, element: <EventDetailsPage/>, action: deleteAction,},
              {path: 'edit', element: <EditEventPage />}
            ]
        },
        { path: 'new', element: <NewEventPage />, action: newEvent},
        
      ]},
        { path: 'newsletter', element: <NewsletterPage />, action: newsletterAction}
    ]
  }
])
function App() {
  return <RouterProvider router={route}/>;
}

export default App;
