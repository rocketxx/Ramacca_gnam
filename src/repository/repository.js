import { firebase } from './../modules/firebase';

//USAGE: set 
// useEffect(() => {
//     const func = async () => {
//         await nomeFunzione('courses','LWmqBEQ7kGOLNdDK3SuR',{
//           name: "Los Angeles",
//           state: "CA",
//           country: "USA"
//         });
//       }
//       func();
//     }, [])

//USAGE: get
// useEffect(() => {
//     const func = async () => {
//         await getByCollectionAndId('courses','64RqlG8KhjK8GYuTWwjQ')?.then((doc)=>{
//           // console.log(doc)
//         })
//       }
//       func();
//     }, [])

export async function WriteByCollectionAndId(collection, id,objectToUpload) 
{    
  const fireApi = firebase.firestore().collection(collection).doc(id).set(objectToUpload)
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
}
    export async function getByCollectionAndId(collection, id) {

    const fireApi = firebase.firestore().collection(collection).doc(id);
    const data_ = await fireApi.get().then((doc) => {
        if (doc.exists) {
            // console.log("Document data:", doc.data());
            return doc.data()
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    return data_ ? data_ : null;
  }