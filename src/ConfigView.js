let ConfigView =  (e) => {
    return (
        <div className="modal fade" id="ConfigView" tabIndex="-1" aria-labelledby="ConfigViewLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ConfigViewLabel">Config Data</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Config JSON Object</label>
                            <textarea className="form-control" id="exampleFormControlInput1" placeholder="{...}" readOnly></textarea>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ConfigView

