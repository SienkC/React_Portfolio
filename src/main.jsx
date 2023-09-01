import ReactDOM from 'react-dom/client';

// imports neseccary for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// imports bulma for styling
import 'bulma/css/bulma.min.css';

import App from './App';

// import pages
import Error from './pages/Error';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// paths for router
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <AboutMe />
            },
            {
                path: '/ContactMe',
                element: <ContactMe />
            },
            {
                path: '/Portfolio',
                element: <Portfolio />
            },
            {
                path: '/Resume',
                element: <Resume />
            }
        ]
    }
]);

// Router provider component
// renders in div element with id='root' in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)