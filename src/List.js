import FB from './FirebaseConfig';
async function getMetadata(db) {
    const citiesRef = db.collection('metadata');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });;
}

console.log(getMetadata(FB))
function MainList() {
   

    let data = [
        {
            id: 1,
            config_type: 'Metadata',
            data: '{....}',
            created_at: '1/1/2022',
            updated_at: '2/1/2022',
            version: '1.0.0'
        },
        {
            id: 2,
            config_type: 'Technical Data',
            data: '{....}',
            created_at: '1/2/2022',
            updated_at: '2/1/2022',
            version: '1.8.4'
        },
    ]
    let finalData = data.map((el) => {
        return <tr>
            <td>{el.id}</td>
            <td>{el.config_type}</td>
            <td>{el.data}</td>
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
                    Add New Config
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