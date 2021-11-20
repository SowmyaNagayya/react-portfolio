import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";


export default function App() {
    // Use state to keep track of which page to render
    const [currentPage, setCurrentPage] = useState("About");

    // Determine which page to display
    const renderPage = () => {
        if(currentPage === "About") {
            return <About />;
        }
        if(currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if(currentPage === "Resume") {
            return <Resume />;
        }
        if(currentPage === "Contact") {
        return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}
