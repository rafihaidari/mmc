import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc, setDoc, doc, getDocs } from 'firebase/firestore'
import db from './FirebaseConfig';
import swal from 'sweetalert';

let AddNewMetadata = () => {
    let [newAppName, setnewAppName] = useState("");
    const [newAppOwner, setnewAppOwner] = useState("");
    const [newAppConfigManager, setnewAppConfigManager] = useState("");
    const [newAppURL, setnewAppURL] = useState("");
    let [metadata, setMetadata] = useState([]);
    const [newVersion, setNewVersion] = useState("");


    const pendingApprovalsRef = collection(db, 'pending_approvals');

    useEffect(() => {
        const getMetadataId = async () => {
            const metadata = await getDocs(pendingApprovalsRef);
            setMetadata(metadata.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getMetadataId();
    }, []);

    const createMetadata = async () => {

        // const metadataRef = collection(db, 'metadata');
        let appSlug = newAppName.toLowerCase().split(' ').join('_')
        let metadata = {
            "uuid": uuidv4(),
            'app_config_manager': newAppConfigManager,
            'app_owner': newAppOwner,
            'app_url': newAppURL,
            "app_name": newAppName,
            "app_slug": appSlug,
            "created_at": new Date().toISOString(),
            "updated_at": new Date().toISOString(),
            "version": 1,
            "config_type": "Metadata",
            "status": "pending"
        }
        const collectionRef = collection(db, 'pending_approvals');
        const docRef = doc(collectionRef, 'metadata_' + appSlug);
        // await setDoc(docRef, {});
        // const collectionRef2 = collection(docRef, 'pending_approval');
        // const secondDocRef2 = doc(collectionRef2, appSlug)
        await setDoc(docRef, metadata).then(() => {
            swal("Added!", "Config has been added to pending list!", "success");
        })
            .catch((error) => {
                alert(`Unsuccessful returned error ${error}`)
            });
        // await addDoc(metadataRef, metadata)
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="alert alert-success alert-dismissible fade show d-none" role="alert" id="successAlert">
                        <strong>Whoa!</strong> Config added Successfully.
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Metadata</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Application Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mission Control Center (MCC)" onChange={(event) => { setnewAppName(event.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Application Owner</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Rafi Haidari"
                                onChange={(event) => { setnewAppOwner(event.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Application Config Manager</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe"
                                onChange={(event) => { setnewAppConfigManager(event.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Application URL</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="https://haidari.co/?app_name=mcc"
                                onChange={(event) => { setnewAppURL(event.target.value) }} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Config Version</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="3.2.5"
                                onChange={(event) => { setNewVersion(event.target.value) }} />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={createMetadata}>Save changes</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddNewMetadata