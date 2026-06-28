import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, {events} from "./pages/EventsPage";
import EventDetailsPage, { loader } from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";
import EventsLayout from "./pages/EventsLayout";
import ErrorPage from "./components/Error";

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
              {path:'', element: <EventDetailsPage/>},
              {path: 'edit', element: <EditEventPage />}
            ]
        },
        {path: 'new', element: <NewEventPage />},
      ]},
      
    ]
  }
])
function App() {
  return <RouterProvider router={route}/>;
}

export default App;
