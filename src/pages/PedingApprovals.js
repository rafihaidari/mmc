import { collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ApproveConfig, DeleteConfigs } from "../MiscFunctions";
import db from "../FirebaseConfig";
import Nav from "../Nav";
function PendingApprovals() {
    let [metadata, setMetadata] = useState([]);
    const metadataRef = collection(db, 'pending_approvals');

    useEffect(() => {
        const getMetadataId = async () => {
            const metadata = await getDocs(metadataRef);
            setMetadata(metadata.docs.map((doc) => ({ ...doc.data() })));
        }

        getMetadataId();
    }, []);

    let finalData = metadata.map((el) => {
        if (el.uuid) {
            return <tr key={el.uuid}>
                <td>{el.uuid.split('-')[0]}</td>
                <td>{el.app_name}</td>
                <td>{el.config_type}</td>
                <td><pre>{JSON.stringify('obj: {...}')}</pre></td>
                <td>{el.created_at}</td>
                <td>{el.updated_at}</td>
                <td>{el.version}</td>
                <td><span className="badge bg-danger">{el.status}</span></td>
                <td>
                    <i className="bi bi-check-square actionIcon" onClick={() => {
                        ApproveConfig(db, 'pending_approvals', el.config_type.toLowerCase() + '_' + el.app_slug);
                    }}></i> |
                    <i className="bi bi-trash actionIcon" onClick={() => { DeleteConfigs(db, 'pending_approvals', el.config_type.toLowerCase() + '_' + el.app_slug); }}></i> |
                    <i className="bi bi-eye actionIcon"></i>
                </td>
            </tr>
        }
    })
    return (
        <div>
            <Nav />
            <div className="container mt-5">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">App Name</th>
                            <th scope="col">Config Type</th>
                            <th scope="col">Data</th>
                            <th scope="col">Created Date</th>
                            <th scope="col">Updated Data</th>
                            <th scope="col">Version</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finalData}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PendingApprovals;