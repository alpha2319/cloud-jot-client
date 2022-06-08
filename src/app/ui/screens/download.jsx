import {useState} from "react";
import React from "react";
import {SECURITY_KEY_NOT_PROVIDED_ERROR} from "../../util/const";
import {useNavigate} from "react-router-dom";

export default  function DownloadPage() {

    const [text,setText] = useState("");
    const [err,setErr] = useState(null);
    const  navigate = useNavigate();
    function handleChange(event) {

        setText(event.target.value);
        setErr("");
    }
    function getFiles(){
        if(text ==null || text.length ===0){
            setErr(SECURITY_KEY_NOT_PROVIDED_ERROR);
        }else{
            // navigate to files view
            navigate("/files/"+text);
        }
    }
    return (
        <div className="d-flex flex-column align-items-center justify-content-center fullScreen">
                    <h3>Enter Security key to get your files.</h3>

                   <input type="text" value={text} onChange={handleChange} placeholder="Enter Security Key..." className="keyTextField"/>
            <div className="m-2"/>

            {(err!=null && err.length > 0) ?<p className="error">{err}</p>:null}
            <div className="m-2"/>
                <button className="btn btn-warning" onClick={getFiles}>
                    Get files
                </button>
        </div>
    );
}
