import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from "./ui/componets/Header";
import Home from "./ui/screens/Home";
import SavePage from "./ui/screens/save";
import DownloadPage from "./ui/screens/download";
import FilesPage from "./ui/screens/files";
import KeyScreen from "./ui/screens/key_screen";


export default function Main() {
    return (
        <Router>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/save" element={<SavePage/>} />
                    <Route path="/download" element={<DownloadPage/>} />
                    <Route path="/files/:key" element={<FilesPage/>} />
                    <Route path="/key/:key" element={<KeyScreen/>} />
                </Routes>

                </div>

        </Router>
    );
}

