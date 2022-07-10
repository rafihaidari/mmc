let AddNewConfig = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Config</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <select className="form-select" aria-label="Default select example">
                                <option defaultValue>Select One</option>
                                <option value="1">Metadata</option>
                                <option value="2">Technical Data</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Application Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mission Control Center (MCC)" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Application Owner</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Rafi Haidari" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Application Config Manager</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Application URL</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="https://haidari.co/?app_name=mcc" />
                        </div>
                    </div>

                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Role</label>
                            <select className="form-select" aria-label="Default select example">
                                <option defaultValue>Select One</option>
                                <option value="1">Admin</option>
                                <option value="2">Editor</option>
                                <option value="">Gues</option>
                            </select>
                        </div>
                        <div className="row mb-3">
                            <label className="form-label">Permissions</label>
                            <div className="col-5">

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate1" />
                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate1">
                                        Permission_1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate2" />
                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate2">
                                        Permission_2
                                    </label>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate3" />
                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate3">
                                        Permission_3
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate4" />
                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate4">
                                        Permission_4
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddNewConfig