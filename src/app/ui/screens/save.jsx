import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {FileUploader} from "react-drag-drop-files";
import React from "react";
import {FILES_LIMIT_ERROR, FILES_SIZE_LIMIT_ERROR, MAX_FILES_LIMIT, MAX_SIZE_LIMIT} from "../../util/const";
import FileListComponent from "../componets/selected_files";
import KeyScreen from "./key_screen";
import {useNavigate} from "react-router-dom";
export default  function SavePage() {
    const [loading,setLoading] = useState(false);
    const [err,setError] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [key, setKey] = useState("fdgfgf");
    const addSelectedFiles = (newFiles) => {
        if(selectedFiles.length + newFiles.length > MAX_FILES_LIMIT) return setError(FILES_LIMIT_ERROR);// number of file limit

        let totalFilesSize = 0;
        let uniqueFiles = new Set();
        let files =[];
        for(let i =0;i<selectedFiles.length;i++){

            if(!uniqueFiles.has(selectedFiles[i].name)){
                files.push(selectedFiles[i]);
                totalFilesSize+=selectedFiles[i].size;
                uniqueFiles.add(selectedFiles[i].name);
            }
        }
        for(let i =0;i<newFiles.length;i++){
            let newFile =newFiles[i] ;
            if(!uniqueFiles.has(newFile.name)){
                files.push(newFile);
                totalFilesSize+=newFiles[i].size;
                uniqueFiles.add(newFile.name);
            }
        }
        if(totalFilesSize > MAX_SIZE_LIMIT) return  setError(FILES_SIZE_LIMIT_ERROR);
        setSelectedFiles(files);
        console.log(uniqueFiles);
        setError("");
    };
    const navigate =useNavigate();





                return<div className="d-flex flex-column align-content-center p-0">
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
                            handleChange={addSelectedFiles} name="file"> <div className="flex-grow-1 FilesDragAndDrop__area">
                            Hey, drop me some files
                            <span
                                role='img'
                                aria-label='emoji'
                                className='area__icon'
                            >
        &#128526;
      </span>
                        </div></FileUploader>

                        <div className="flex-grow-1 selectedFiles scrollParent">
                            {selectedFiles !=null && selectedFiles.length >0 ?<FileListComponent files={selectedFiles} onDelete={(file)=>{
                                    const files = [];
                                    for(let i =0;i<selectedFiles.length;i++){
                                        if(selectedFiles[i].name !== file.name){
                                            files.push(selectedFiles[i]);
                                        }
                                    }
                                    setSelectedFiles(files);
                                }
                                }/>
                                :<center><p>No file selected.</p></center>}
                        </div>
                    </div>

                    {(err!=null && err.length > 0) ?<p className="error">{err}</p>:null}
                    <div style={{height:"20px"}}/>
                    <Button className={loading?"row btn-secondary smoothTransition": "row btn-warning smoothTransition"} onClick={
                        ()=>{
                           if(key !=null && key.length > 0) navigate("/key/"+key);


                        }
                    }> {loading?"Uploading please wait...": "Upload"} </Button>
                </div>

}


