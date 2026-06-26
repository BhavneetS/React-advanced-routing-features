import { Link, Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default function EventsPage() {
    console.log("in Events Page");
    
    return (
        <main>
            <h1>Events Page</h1>
            <EventsNavigation/>
            <ul>
                <li>
                    <Link to="/events/1">Event 1</Link>
                </li>
            </ul>
            <Outlet/>

        </main>
    )
}