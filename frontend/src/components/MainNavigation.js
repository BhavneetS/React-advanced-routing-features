import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* 
        Since the NewsletterSignup component is inclued in the Main Navigation, it will be available on all pages as part of the root Layout.
        Hence, the form submission/action function should not trigger a route transition/navigation.

        For this, we can use the useFetcher hook which provides multiple properties, including the "Form" component to prevent a route transition.
        review form at [frontend\src\components\NewsletterSignup.js]
      */}
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;