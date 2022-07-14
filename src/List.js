import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import db from './FirebaseConfig';
import Nav from './Nav';
import AddNewMetadata from './AddNewMetadata';
import AddNewTechnicalData from './AddNewTechnicalData';
import { DeleteConfigs } from './MiscFunctions'
import { Link } from 'react-router-dom';

function MainList() {


    let [metadata, setMetadata] = useState([]);
    let [technical_data, setTechnical_data] = useState([]);

    const metadataRef = collection(db, 'metadata');
    const techincalDataRef = collection(db, 'technical_data');

    useEffect(() => {
        const getMetadata = async () => {
            const metadata = await getDocs(metadataRef);
            setMetadata(metadata.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getMetadata();
    }, []);


    useEffect(() => {
        const getTechnical_data = async () => {
            const technicalData = await getDocs(techincalDataRef);
            setTechnical_data(technicalData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getTechnical_data();
    }, []);

    metadata = metadata.concat(technical_data)

    let finalData = metadata.map((el) => {

        let created = new Date(el.created_at).toJSON().slice(0, 10).replace(/-/g, '/') + ' ' + new Date(el.updated_at).toJSON().slice(11, 19)
        let updated = new Date(el.updated_at).toJSON().slice(0, 10).replace(/-/g, '/') + ' ' + new Date(el.updated_at).toJSON().slice(11, 19)
        if (el.uuid) {
            return <tr key={el.uuid}>
                <td>{el.uuid.split('-')[0]}</td>
                <td>{el.app_name}</td>
                <td>{el.config_type}</td>
                <td><pre>{JSON.stringify('obj: {...}')}</pre></td>
                <td>{created}</td>
                <td>{el.version}</td>
                <td>
                <Link className="nav-link active" to={`/config_edit/?uuid=${el.uuid}&collection=${el.config_type.toLowerCase()}&document=${el.app_slug}`}><i id={el.uuid} className="bi bi-pencil-square actionIcon"></i></Link> |
                    <i id={el.uuid} className="bi bi-trash actionIcon" onClick={() => { DeleteConfigs(db, el.config_type, el.app_slug); }}></i> |
                    <Link className="nav-link active" to={`/config_view/?uuid=${el.uuid}&collection=${el.config_type.toLowerCase()}&document=${el.app_slug}`}><i id={el.uuid} className="bi bi-eye actionIcon"></i></Link>

                </td>
            </tr >
        }
    })

    return (

        <div>
            <Nav />
            <div className="container mt-5">
                <div className="d-grid gap-2 d-md-block">
                    <button type="button" className="btn btn-outline-primary float-start btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add New Metadata
                    </button>

                    <button type="button" className="btn btn-outline-primary float-start btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#techincal_Data">
                        Add New Techincal Data
                    </button>
                </div>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">App Name</th>
                            <th scope="col">Config Type</th>
                            <th scope="col">Data</th>
                            <th scope="col">Created Date</th>
                            <th scope="col">Version</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finalData}
                    </tbody>
                </table>
            </div>
            <AddNewMetadata />
            <AddNewTechnicalData />
        </div>
    )
}

export default MainList;