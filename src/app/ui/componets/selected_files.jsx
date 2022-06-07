import React from "react";

export default function FileListComponent(props){
    const files = props.files;
    const onDelete = props.onDelete;
    const listItems = files.map((file) =>
        <div className="card p-4" key={file.name}>
            <div className="row">
                <p className="col-sm-6 col-lg-9 col-md-8" >{file.name}</p>
                <button className="btn btn-danger col-lg-3 col-sm-6 col-md-4" onClick={
                    ()=>onDelete(file)
                }> Remove File </button>
            </div>

        </div>
    );
    return (
        <div className="scrollChild">{listItems}</div>
    );
}
