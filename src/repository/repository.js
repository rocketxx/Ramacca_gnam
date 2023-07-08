import { firebase } from './../modules/firebase';
const DB = firebase.firestore();
///////////////////////////////////////////////////////
//puoi effettuare più di una di queste chiamate eseguendo:
// useEffect(() => {
//     funzione1();
//     funzione2();
//   }, []);

//dove funzione1() sarebbe una di quelle in questo file.
//   const leggiDati = () => {
//     funzione1()
//       .then((results) => {
//         console.log(results)
//       })
//       .catch((error) => {
    //         console.log("Errore nella lettura dei dati:", error);
    //       });
    //   };

///////////////////////////////////////////////////////


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

export function WriteByCollectionAndId(collection, id, objectToUpload) {
    return new Promise((resolve, reject) => {
        DB.collection(collection)
        .doc(id)
        .set(objectToUpload)
        .then(() => {
          console.log("[A1] Documento caricato correttamente!");
          resolve();
        })
        .catch((error) => {
          console.error("[A1] Errore nella scrittura del documento: ", error);
          reject(error);
        });
    });
  }

  export function WriteByCollectionAndWhere(collection, fieldName, operator, value, objectToUpload) {
    return new Promise((resolve, reject) => {
      DB.collection(collection)
        .where(fieldName, operator, value)
        .set(objectToUpload)
        .then(() => {
          console.log("[A1] Documento caricato correttamente!");
          resolve();
        })
        .catch((error) => {
          console.error("[A1] Errore nella scrittura del documento: ", error);
          reject(error);
        });
    });
  }
  
  
  export function getByCollectionAndId(collection, id) {
    return new Promise((resolve, reject) => {
      const fireApi = DB.collection(collection).doc(id);
      fireApi
        .get()
        .then((doc) => {
          if (doc.exists) {
            // console.log("Document data:", doc.data());
            resolve(doc.data());
          } else {
            console.log("[B1] Nessun documento trovato");
            resolve(null);
          }
        })
        .catch((error) => {
          console.log("[B1] Errore lettura documento: ", error);
          reject(error);
        });
    });
  }
  

//USAGE:
// useEffect(() => {
//     leggiDati();
//   }, []);
  
//   const leggiDati = () => {
//     getDataWithWhereAndCollection("todos", "state", "==", "CA")
//       .then((results) => {
//         console.log(results)
//       })
//       .catch((error) => {
//         console.log("Errore nella lettura dei dati:", error);
//       });
//   };
export function getDataWithWhereAndCollection(collectionName, fieldName, operator, value) {
    return new Promise((resolve, reject) => {
      DB.collection(collectionName)
        .where(fieldName, operator, value)
        .get()
        .then((querySnapshot) => {
          const results = [];
          querySnapshot.forEach((doc) => {
            results.push(doc.data());
          });
          resolve(results);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }


  export function ReadAllDocumentByCollection(collection) {
    return new Promise((resolve, reject) => {
      DB.collection(collection)
        .get()
        .then((querySnapshot) => {
          const documents = [];
          querySnapshot.forEach((doc) => {
            documents.push(doc.data());
          });
          resolve(documents);
        })
        .catch((error) => {
          console.error("Errore nella lettura dei documenti: ", error);
          reject(error);
        });
    });
  }
  