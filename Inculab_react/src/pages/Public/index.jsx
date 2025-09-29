import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "@/componentsForV0/navbar";
import Footer from "@/componentsForV0/footer";

function Public() {
    
    return (
        <React.Fragment>
            
            <header> <Navbar /> </header>
            
            {/* Renderiza las rutas hijas */}
            <Outlet />

            <footer> <Footer /> </footer>
        </React.Fragment>
    );
}

export default Public;