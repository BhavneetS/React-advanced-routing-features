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
      {path: '/events', element: <EventsLayout />, children:[
        {path: '', element: <EventsPage />, loader: events},
        {path: ':id', element: <EventDetailsPage/>, loader: loader},
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
