import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
    const fetcher= useFetcher();

    /* 
        using the useFetcher hook, we can also access the data retruned by the loader or the action.
    */

    const {data, state} = fetcher;

    useEffect(() =>{
        /* 
            Accessing data and the state of the fetcher/loader trigegred by the fetcher
        */
        if(state ==='idle' && data && data.message) {
            window.alert(data.message);
        }

    }, [data,state])

  return (
    <fetcher.Form action='/newsletter' method="post" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;