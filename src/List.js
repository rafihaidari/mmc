function MainList() {
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Metadata</td>
                        <td>obj:[data]</td>
                        <td>1/1/2022</td>
                        <td>1/2/2022</td>
                        <td>0.0.1</td>
                        <td>
                            <i className="bi bi-pencil-square"></i> |
                            <i className="bi bi-trash"></i> | <i className="bi bi-eye"></i>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Technical Data</td>
                        <td>obj:[data]</td>
                        <td>2/2/2022</td>
                        <td>2/3/2022</td>
                        <td>0.9.2</td>
                        <td>
                            <i className="bi bi-pencil-square"></i> |
                            <i className="bi bi-trash"></i> | <i className="bi bi-eye"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MainList;