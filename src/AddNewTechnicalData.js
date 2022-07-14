import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc, setDoc, doc, } from 'firebase/firestore'
import db from './FirebaseConfig';
import swal from 'sweetalert';

let AddNewTechnicalData = () => {
    let [newAppName, setnewAppName] = useState("");
    const [newRole, setNewRole] = useState("");
    const [newPermissions, setNewPermission] = useState(0);
    const [newVersion, setNewVersion] = useState("");

    let handleChange = function (e) {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setNewPermission(value);
    }

    const createAccessLevel = async () => {

        let appSlug = newAppName.toLowerCase().split(' ').join('_')
        let accessLevel = {
            "app_name": newAppName,
            "app_slug": appSlug,
            "uuid": uuidv4(),
            "role": newRole,
            "permissions": newPermissions,
            "created_at": new Date().toISOString(),
            "updated_at": new Date().toISOString(),
            "version": 1,
            "config_type": "Technical_data",
            "status": "pending"
        }

        const collectionRef = collection(db, 'pending_approvals');
        const docRef = doc(collectionRef, 'technical_data_' + appSlug);
        // await setDoc(docRef, {});
        // const collectionRef2 = collection(docRef, 'pending_approval');
        // const secondDocRef2 = doc(collectionRef2, appSlug);

        await setDoc(docRef, accessLevel).then(() => {
            swal("Added!", "Config has been added to pending list!", "success");
        })
            .catch((error) => {
                console.log(`Unsuccessful returned error ${error}`)
            });

    }
    return (
        <div className="modal fade" id="techincal_Data" tabIndex="-1" aria-labelledby="techincal_DataLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="techincal_DataLabel">Add New Technical Data</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" id="technicalFeilds">
                        <div className="mb-3">
                            <label className="form-label">Application Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mission Control Center (MCC)" onChange={(event) => { setnewAppName(event.target.value) }}
                                required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Role</label>
                            <select className="form-select" aria-label="Default select example" onChange={(event) => { setNewRole(event.target.value) }}>
                                <option value="admin">Admin</option>
                                <option value="editor">Editor</option>
                                <option value="guest">Guest</option>
                            </select>
                        </div>
                        <div className="row mb-3">

                            <label className="form-label">Permissions</label>
                            <div className="col-10 offset-1">
                                <select className="form-select" id="multiSelect" multiple data-live-search="true" onChange={handleChange}>
                                    <option value='p1'>Permission 1</option>
                                    <option value='p2'>Permission 2</option>
                                    <option value='p3'>Permission 3</option>
                                </select>
                            </div>

                        </div>

                        {/* <div className="mb-3">
                            <label className="form-label">Config Version</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="3.2.5"
                                onChange={(event) => { setNewVersion(event.target.value) }} />
                        </div> */}
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={createAccessLevel}>Save changes</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddNewTechnicalData