import  save from "../../../assets/save.jpg";
import  download from "../../../assets/download.jpg";
import {Link} from "react-router-dom";

export default  function Home(){
    return (
        <div>
                <div className="row align-items-center">
                    <div className="col-4">
                        <h5 className="card-title">Save Files</h5>
                        <p className="card-text">Save your Data Securely from any
                            device without providing your
                            account details.</p>
                        <Link to="/save" className="btn btn-warning">Save Now</Link>
                    </div>
                    <div className="col-2"/>
                    <img src={save}  className="col-6" alt="save"/>
                </div>
            <div className="row align-items-center">
                <img src={download}  className="col-6" alt="save"/>
                <div className="col-1"/>
                <div className="col-5">
                    <h5 className="card-title">Download Files</h5>
                    <p className="card-text">Download your files easily by providing
                        given key or by scanning given qrcode.</p>
                    <Link to="/download" className="btn btn-warning">Download Now</Link>
                </div>
            </div>
        </div>
    );
}
