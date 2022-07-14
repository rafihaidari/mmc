import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./FirebaseConfig";
import Nav from "./Nav"
import ReactJson from 'react-json-view'
let ConfigView = (e) => {
    let [config, setConfig] = useState({});

    useEffect(() => {
        const getMetadata = async () => {
            const queryParams = new URLSearchParams(window.location.search);
            let getUuid = queryParams.get('uuid')
            let col = queryParams.get('collection')
            let docu = queryParams.get('document')

            col = col.toLowerCase();

            const getDocu = doc(db, col, docu)
            await getDoc(getDocu).then((doc) => {
                setConfig(doc.data())
            })
        }

        getMetadata();
    }, []);

    return (

        <div>
            
            <Nav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3>Config View</h3>
                                <div className="mb-3">
                                    <label className="form-label">JSON Object</label>
                                    <ReactJson src={config} theme="monokai" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ConfigView }

