// import outlet for react
import { Outlet } from "react-router-dom";

// import nav component
import Nav from './components/Nav';
import Footer from './components/Footer';


// function to return navigation and whichever page is selected
function App() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

// export so it can be imported in main
export default App;