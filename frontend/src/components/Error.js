import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";
import MainNavigation from "./MainNavigation";

export default function ErrorPage() {
    const errorDetails = useRouteError();

    let title="An Error occured";
    let message= "Something went Wrong!"
    console.log(errorDetails)
    if(errorDetails.status === 500) {
        message = JSON.parse(errorDetails.data).message;
    } else if(errorDetails.status === 404) {
        title = 'Not Found';
        message ='Resource does not exist';
    }


    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}