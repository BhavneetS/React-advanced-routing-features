import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({isActive}) => isActive ? classes.active : undefined} to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({isActive}) => isActive ? classes.active : undefined} end>Events</NavLink>
          </li>
          <li>
            <NavLink to="/events/1">Event Details</NavLink>
          </li>
           <li>
            <NavLink to="/events/new">New Event</NavLink>
          </li>
           <li>
            <NavLink to="/events/1/edit">Update Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
