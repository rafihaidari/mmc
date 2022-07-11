import { useState } from "react";

let AddNewMetadata = () => {
    let [showOption] = useState(false);
    // let state = {
    //     showOption: true,
    // }

    let handleOptionChange = (event) => {
        event.preventDefault();
        document.querySelector('#technicalFeilds').style.display = 'block';
        console.log(event.target.value)
        showOption = !showOption;
        console.log('changed', showOption);
    }

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

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddNewMetadata