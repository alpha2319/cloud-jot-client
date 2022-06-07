import {useParams} from "react-router-dom";
import QRCode from "react-qr-code";
import {SITE_URL} from "../../util/const";

export  default  function KeyScreen() {
    const key = useParams().key;
    return (<div className="col-12">
            <p className="centerText p-3" >
                Save given qrcode or security key to get your files easily in future
            </p>
            <center>
                <QRCode value={SITE_URL+"files/"+key}/>
            </center>
            <p className="centerText p-4 boldText"> OR </p>
            <p className="centerText p-2 keyText" >
                Security Key : {key}
            </p>

    </div>);

}
