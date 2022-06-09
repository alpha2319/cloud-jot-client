import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {SERVER_URL} from "../../util/const";
import  notFound from "../../../assets/not_found.jpg";
import FileListComponent from "../componets/selected_files";

export default  function FilesPage() {
    let key= useParams().key;
    const [loading,setLoading] = useState(false);
    const [found,setFound] = useState(true);
    const  [files,setFiles] = useState(null);
    const  [error,setError] = useState("");
    async function loadFiles() {
        setLoading(true);
        try{
            const response = await axios.get(SERVER_URL+"records/"+key);
            console.log(response);
            if(response.status ===200){
                setFiles(response.data["files"] || []);
            }else{
                setFound(false);
                setError(response.data["error"]);
            }
        }catch (e) {
                setFound(false);
                setError("Files Not Found");
        }
        setLoading(false);
    }
    useEffect(()=>{
        loadFiles()
    },[key]);
   async function downloadFiles()  {
        // TODO download files
       let link = document.createElement('a');
       link.setAttribute('download', null);
       link.style.display = 'none';
       document.body.appendChild(link);
       for (let i = 0; i < files.length; i++) {
           setTimeout(()=>{
               link.setAttribute('href', files[i]["file"]);
               link.click();
           },i*1000);
       }
       document.body.removeChild(link);
    }

    if(loading) return  <div className="d-flex flex-column justify-content-center align-items-center p-4">
            <h2>Loading Please wait....</h2>
    </div>
    if(!found || files ==null || files.length ===0) return(
        <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={notFound} style={{width:"70%"}}/>
        <h3>{error}</h3>
    </div>);

    return (
        <div className="m-3 p-2 ">
            <h3>Your Files</h3>
            <FileListComponent files={files}/>
            <button className="btn btn-warning" onClick={()=>{
                downloadFiles();
            }}> Download Files</button>
        </div>
    );
}
