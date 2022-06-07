import {useParams} from "react-router-dom";

export default  function FilesPage() {
    let params = useParams();
    return (
        <div>
            <p>Files {params.toString()}</p>
        </div>
    );
}
