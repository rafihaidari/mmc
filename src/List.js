import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import db from './FirebaseConfig';

function MainList() {
    const [data, setData] = useState([]);
    const metadataRef = collection(db, 'metadata');

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(metadataRef);
            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getData();
    }, []);

    let finalData = data.map((el) => {
        return <tr>
            <td>{el.uuid}</td>
            <td>{el.config_type}</td>
            <td><pre>{JSON.stringify('obj: {...}')}</pre></td>
            <td>{el.created_at}</td>
            <td>{el.updated_at}</td>
            <td>{el.version}</td>
            <td>
                <i className="bi bi-pencil-square"></i> |
                <i className="bi bi-trash"></i> |
                <i className="bi bi-eye"></i>
            </td>
        </tr>
    })

    return (
        <div className="container">
            <div className="d-grid gap-2 d-md-block">
                <button type="button" className="btn btn-primary float-start" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add New Metadata
                </button> 
                
                <button type="button" className="btn btn-primary float-start ms-2" data-bs-toggle="modal" data-bs-target="#techincal_Data">
                    Add New Techincal Data
                </button>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Config Type</th>
                        <th scope="col">Data</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Updated Data</th>
                        <th scope="col">Version</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {finalData}
                </tbody>
            </table>
        </div>
    )
}

export default MainList;