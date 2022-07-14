import { collection, deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import swal from 'sweetalert';
let DeleteConfigs = async (db, col, docu) => {
    col = col.toLowerCase();
    console.log(db, col, docu)
    const getDocu = doc(db, col, docu)

    swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this config?",
        buttons: true,
        icon: "warning",
        dangerMode: true,
    }).then(async willDelete => {
        if (willDelete) {
            await deleteDoc(getDocu).then(() => {
                swal("Deleted!", "Config has been deleted!", "success");
                window.location.reload(false);
            }).catch(err => {
                console.log(err);
            })

        }
    });

}

let ApproveConfig = async (db, col, docu) => {
    col = col.toLowerCase();
    // console.log(db, col, docu)
    const getDocu = doc(db, col, docu)


    let dataModel = await getDoc(getDocu).then((doc) => {
        // console.log(doc.data())
        return doc.data()

    })
    console.log(dataModel)

    let collectionName = dataModel.config_type.toLowerCase();
    const getCollection = collection(db, collectionName);
    const docRef = doc(getCollection, dataModel.app_slug);

    setDoc(docRef, dataModel).then(async () => {
        swal("Approved!", "Config has been approved!", "success");
        await deleteDoc(getDocu)
        window.location.reload(false);
    }).catch((error) => {
        console.log(`Unsuccessful returned error ${error}`)
    });


}

export { DeleteConfigs, ApproveConfig };