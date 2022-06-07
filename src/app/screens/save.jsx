import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {FileUploader} from "react-drag-drop-files";
import React from "react";

export default  function SavePage() {
    const [loading,setLoading] = useState(false);
    const [err,setError] = useState("");
    const [files, setFiles] = useState(null);
    const handleChange = (file) => {
        setFiles(file);
        console.log(file);
        setError("");
    };

    return (
        <div className="d-flex flex-column align-content-center p-0">
               <div className="d-flex flex-row" style={{height:"360px",marginTop:"20px",borderRadius:"12px"}}>
                   <FileUploader
                       multiple={true}
                       maxSize={5}
                       onTypeError={(err)=>{
                           console.log("Type "+err);
                           setError(err);
                       }}
                       onSizeError={(err)=>{
                           setError(err);
                           console.log("Size "+err);
                       }}
                       handleChange={handleChange} name="file"> <div className="flex-grow-1 FilesDragAndDrop__area">
                       Hey, drop me some files
                       <span
                           role='img'
                           aria-label='emoji'
                           className='area__icon'
                       >
        &#128526;
      </span>
                   </div></FileUploader>
                   <div style={{backgroundColor:"black",width:"1"}}/>
                   <div className="flex-grow-1 selectedFiles">
                       {files !=null && files.length >0 ?<FileListComponent files={files}/>
                           :<center><p>No file selected.</p></center>}
                   </div>
               </div>

            {(err!=null && err.length > 0) ?<p className="text-bg-danger">err</p>:null}
            <div style={{height:"20px"}}/>
                <Button className={loading?"row btn-secondary smoothTransition": "row btn-warning smoothTransition"} onClick={
                    ()=>setLoading(!loading)
                }> {loading?"Uploading please wait...": "Upload"} </Button>
        </div>
    );
}

function FileListComponent(props){
        const files = props.files;
        // const listItems = files..map((number) =>
        //     <li>{number}</li>
        // );
        const x = () => {
          
        }
        return (
            <p>{files}</p>
        );
}
