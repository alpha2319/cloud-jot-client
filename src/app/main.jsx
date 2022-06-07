import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from "./componets/Header";
import Home from "./screens/Home";
import SavePage from "./screens/save";
import DownloadPage from "./screens/download";
import FilesPage from "./screens/files";


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
                </Routes>

                </div>

        </Router>
    );
}

