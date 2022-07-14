import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./FirebaseConfig";
import Nav from "./Nav"

let ConfigEdit = (e) => {
    const queryParams = new URLSearchParams(window.location.search);
    let col = queryParams.get('collection')


    if (col === 'technical_data') {
        return (

            <div>
                <Nav />
                <Techincal_config />
            </div>
        )
    }
    else if (col === 'metadata') {
        return (
            <div>
                <Nav />
                <Metadata_config />
            </div>
        )
    }

}

function Techincal_config() {
    let [newAppName, setnewAppName] = useState("");
    let [newRole, setNewRole] = useState("");
    let [newPermissions, setNewPermission] = useState(0)
    let [newVersion, setNewVersion] = useState("");

    let [config, setConfig] = useState({});
    let [newConfig, setnewConfig] = useState({});
    const queryParams = new URLSearchParams(window.location.search);
    let getUuid = queryParams.get('uuid')
    let docu = queryParams.get('document')
    let col = queryParams.get('collection')

    useEffect(() => {
        const getMetadata = async () => {
            col = col.toLowerCase();
            const getDocu = doc(db, col, docu)
            await getDoc(getDocu).then((doc) => {
                setConfig(doc.data())

            })
        }

        getMetadata();
    }, []);

    let updateConfig = async () => {

        if (newAppName !== "" || newRole !== "" || newPermissions !== 0 || newVersion !== "") {
            const collectionRef = collection(db, 'audit_trail');
            const docRef = doc(collectionRef, new Date().toISOString());

            let newConf = {
                app_name: config.app_name,
                collection: config.config_type,
                user: 'Rafi',
                main_col_uuid: config.uuid,
                updated_at: new Date().toISOString(),
                version: parseInt(config.version) + 1
            }

            if (newAppName !== "") {
                console.log("newAppName", newAppName)
                newConf = { ...newConf, app_name: newAppName }
            }
            if (newRole !== "") {
                newConf = { ...newConf, role: newRole }
            }
            if (newPermissions !== 0) {
                newConf = { ...newConf, permissions: newPermissions }
            }

            console.log(newConf)
            await setDoc(docRef, newConf)
        }
    }

    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3>Config Edit</h3>
                            <div className="mb-3">

                                <div id="technicalFeilds">
                                    <div className="mb-3">
                                        <label className="form-label">Application Name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mission Control Center (MCC)" onChange={(event) => { setnewAppName(event.target.value) }}
                                            defaultValue={config.app_name}
                                            required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Role</label>
                                        <select className="form-select" aria-label="Default select example"
                                            value={config.role}
                                            onChange={(event) => { setNewRole(event.target.value) }}>
                                            <option value="admin">Admin</option>
                                            <option value="editor">Editor</option>
                                            <option value="guest">Guest</option>
                                        </select>
                                    </div>
                                    <div className="row mb-3">

                                        <label className="form-label">Permissions</label>
                                        <div className="col-10 offset-1">
                                            <select className="form-select" id="multiSelect" multiple data-live-search="true"
                                                value={config.permissions}
                                                onChange={(event) => { setNewPermission(event.target.value) }}>
                                                <option value='p1'>Permission 1</option>
                                                <option value='p2'>Permission 2</option>
                                                <option value='p3'>Permission 3</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Config Version</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="3.2.5"
                                            readOnly
                                            defaultValue={config.version}
                                            onChange={(event) => { setNewVersion(event.target.value) }} />
                                    </div>

                                    <div className="">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button> | <button type="button" className="btn btn-primary" onClick={updateConfig}>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Metadata_config() {
    let [newAppName, setnewAppName] = useState("");
    const [newAppOwner, setnewAppOwner] = useState("");
    const [newAppConfigManager, setnewAppConfigManager] = useState("");
    const [newAppURL, setnewAppURL] = useState("");
    let [metadata, setMetadata] = useState([]);
    const [newVersion, setNewVersion] = useState("");
    let [config, setConfig] = useState({});
    const queryParams = new URLSearchParams(window.location.search);
    let getUuid = queryParams.get('uuid')
    let docu = queryParams.get('document')
    let col = queryParams.get('collection')

    useEffect(() => {
        const getMetadata = async () => {
            col = col.toLowerCase();
            const getDocu = doc(db, col, docu)
            await getDoc(getDocu).then((doc) => {
                setConfig(doc.data())

            })
        }

        getMetadata();
    }, []);

    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3>Config Edit</h3>
                            <div className="mb-3">

                                <div id="technicalFeilds">
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label className="form-label">Application Name</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mission Control Center (MCC)"
                                                defaultValue={config.app_name}
                                                onChange={(event) => { setnewAppName(event.target.value) }} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Application Owner</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                                placeholder="Rafi Haidari"
                                                defaultValue={config.app_owner}
                                                onChange={(event) => { setnewAppOwner(event.target.value) }} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Application Config Manager</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe"
                                                defaultValue={config.app_config_manager}
                                                onChange={(event) => { setnewAppConfigManager(event.target.value) }} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Application URL</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="https://haidari.co/?app_name=mcc"
                                                defaultValue={config.app_url}
                                                onChange={(event) => { setnewAppURL(event.target.value) }} />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Config Version</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="3.2.5"
                                                defaultValue={config.version}
                                                onChange={(event) => { setNewVersion(event.target.value) }} />
                                        </div>

                                        <div className="">
                                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button> | <button type="button" className="btn btn-primary" onClick={updateConfig}>Save changes</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ConfigEdit }

