// import route error from react dom
import { userRouteError } from 'react-router-dom';

export default function Error() {
    // get the error from react
    const err = userRouteError();

    // return error page
    return (
        <div id="error-page">
            <h1>Error!</h1>
            <p>An unexpected error has occurred.</p>
            <p>
                <i>{err.statusText || err.message}</i>
            </p>
        </div>
    );
}