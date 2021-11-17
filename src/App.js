import React, {useState} from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";

export default function App() {
    //useState to kepp track of which page to render
    const [page, setPage] = useState("About");

    //Determine which page to display
    const renderPage;
    switch (page) {
        case "About":
          renderPage = <About />;
          break;
        case "Portfolio":
          renderPage = <Portfolio />;
          break;
        case "Resume":
            renderPage = <Resume />;
            break;
        case "Contact":
            renderPage = <Contact />;
            break;
        default:
            renderPage = <About />;
            break;        
    }

    return (
        <div>
            <Header setPage={setPage} setCurrentPage={page}/>
            {renderPage}
            <Footer />
        </div>
    );
}
