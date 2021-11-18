import React from "react";

export default function Footer() {

    // Style footer icons and keep the color neutral
    const iconStyle = {
        color: "#000000",
        fontSize: "2em"
    }

    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="d-flex justify-content-center">
                <a className="mx-4" href="https://github.com/SowmyaNagayya" target="_blank" rel="noreferrer">
                    <i className="bi-github" style={iconStyle}></i>
                </a>

                <a className="mx-4" href="https://www.linkedin.com/in/sowmya-nagayya-78014a219/" target="_blank" rel="noreferrer">
                    <i className="bi-linkedin" style={iconStyle}></i>
                </a>

                <a className="mx-4" href="https://github.com/SowmyaNagayya" target="_blank" rel="noreferrer">
                    <i className="bi-stack-overflow" style={iconStyle}></i>
                </a>
            </div>
        </footer>
    )
}