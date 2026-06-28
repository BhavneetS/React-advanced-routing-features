import { Outlet, useNavigation } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
export default function RootLayout() {

    /* 
        The navigation is performed only when the loader function in the route config is resolved.
        Hence it gives the impression that the us screen is stuck and no action has taken place.
        
        useNavigation hook can be used to identify if any of the child routes is in the middle of navigation to identify the navigation status.
    */
    const navigation = useNavigation();
    return (
        <>
            {navigation.state === 'loading' && <p>Loading...</p>}
            <MainNavigation />
            <Outlet/>
        </>
    )
}