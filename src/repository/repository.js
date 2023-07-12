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

export function getDataWithWhereAndCollectionArrayList(collectionName, fieldName, operator, value) {
  return new Promise((resolve, reject) => {
    DB.collection(collectionName)
      .where(fieldName, operator, value)
      .get()
      .then((querySnapshot) => {
        const results = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // console.log(data)
          if (Array.isArray(data)) {
            data.forEach((item) => {
              results.push(item);
            });
          } else {
            results.push(data);
          }
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

export function loadDataMenuToFirebase() {
  const menu = [
    {
      "idRistorante": "SdzyMTebBh7N81q50DVU",
      "nome": "Menu 1",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del menu 1",
      "disponibile": "false"
    },
    {
      "idRistorante": "SdzyMTebBh7N81q50DVU",
      "nome": "Menu 2",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del menu 1",
      "disponibile": "true"
    },
    
    {
      "idRistorante": "SdzyMTebBh7N81q50DVU",
      "nome": "Menu 3",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del menu 1",
      "disponibile": "true"
    },
    {
      "idRistorante": "SdzyMTebBh7N81q50DVU",
      "nome": "Menu 4",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del menu 1",
      "disponibile": "true"
    },
    {
      "idRistorante": "miJ5a5915WZb2RcjApfa",
      "nome": "Menu 4",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del menu 1",
      "disponibile": "true"
    },
    {
      "idRistorante": "miJ5a5915WZb2RcjApfa",
      "nome": "Menu 3",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del menu 1",
      "disponibile": "true"
    },
    {
      "idRistorante": "miJ5a5915WZb2RcjApfa",
      "nome": "Menu 2",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del menu 1",
      "disponibile": "true"
    },
    {
      "idRistorante": "miJ5a5915WZb2RcjApfa",
      "nome": "Menu 1",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del menu 1",
      "disponibile": "true"
    }

  ];

  // Aggiungi i ristoranti a Firebase Firestore
  menu.forEach((menu) => {
    DB.collection("menu").add(menu)
      .then((docRef) => {
        console.log("menu aggiunto con ID:", docRef.id);
      })
      .catch((error) => {
        console.error("Errore durante l'aggiunta del menu:", error);
      });
  });
}


export function loadDataToFirebase() {
  const ristoranti = [
    {
      nome: "Ristorante 1",
      via: "Via Ristorante 1",
      tipologiaCibo: ["pizza"],
      aperto: true,
      image: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg"
    },
    {
      nome: "Ristorante 2",
      via: "Via Ristorante 2",
      tipologiaCibo: ["panini"],
      aperto: false,
      image: "https://cdn.pixabay.com/photo/2019/01/21/12/47/burger-3946012_960_720.jpg"
    },
    {
      nome: "Ristorante 3",
      via: "Via Ristorante 3",
      tipologiaCibo: ["panini"],
      aperto: false,
      image: "https://cdn.pixabay.com/photo/2019/01/21/12/47/burger-3946012_960_720.jpg"
    },
    {
      nome: "Ristorante 4",
      via: "Via Ristorante 4",
      tipologiaCibo: ["pizza"],
      aperto: false,
      image: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg"
    },
    {
      nome: "Ristorante 5",
      via: "Via Ristorante 2",
      tipologiaCibo: ["panini"],
      aperto: false,
      image: "https://cdn.pixabay.com/photo/2019/01/21/12/47/burger-3946012_960_720.jpg"
    },
    {
      nome: "Ristorante 6",
      via: "Via Ristorante 2",
      tipologiaCibo: ["panini"],
      aperto: false,
      image: "https://cdn.pixabay.com/photo/2019/01/21/12/47/burger-3946012_960_720.jpg"
    },
    {
      nome: "Ristorante 7",
      via: "Via Ristorante 2",
      tipologiaCibo: ["pizza"],
      aperto: false,
      image: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg"
    },
    {
      nome: "Ristorante 7",
      via: "Via Ristorante 2",
      tipologiaCibo: ["pizza"],
      aperto: false,
      image: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg"
    },
    {
      nome: "Ristorante 2",
      via: "Via Ristorante 2",
      tipologiaCibo: ["panini"],
      aperto: false,
      image: "https://cdn.pixabay.com/photo/2019/01/21/12/47/burger-3946012_960_720.jpg"
    },
    {
      nome: "Ristorante 2",
      via: "Via Ristorante 2",
      tipologiaCibo: ["panini"],
      aperto: false,
      image: "https://cdn.pixabay.com/photo/2019/01/21/12/47/burger-3946012_960_720.jpg"
    },
    {
      nome: "Ristorante 3",
      via: "Via Ristorante 3",
      tipologiaCibo: ["pizza", "panini"],
      aperto: true,
      image: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg"
    }
  ];

  // Aggiungi i ristoranti a Firebase Firestore
  ristoranti.forEach((ristorante) => {
    DB.collection("ristoranti").add(ristorante)
      .then((docRef) => {
        console.log("Ristorante aggiunto con ID:", docRef.id);
      })
      .catch((error) => {
        console.error("Errore durante l'aggiunta del ristorante:", error);
      });
  });
}
  //scrittura di intere collezioni:
/*
useEffect(() => {
leggiDati();
}, []);

const leggiDati = () => {
const ristoranti = [
  {
    nome: "Ristorante 1",
    via: "Via Ristorante 1",
    tipologiaCibo: ["pizza"],
    aperto: true,
    image: ""    },
  {
    nome: "Ristorante 2",
    via: "Via Ristorante 2",
    tipologiaCibo: ["panini"],
    aperto: false
  },
  {
    nome: "Ristorante 3",
    via: "Via Ristorante 3",
    tipologiaCibo: ["pizza", "panini"],
    aperto: true
  }
];
 
// Aggiungi i ristoranti a Firebase Firestore
ristoranti.forEach((ristorante) => {
  firebase.firestore().collection("ristoranti").add(ristorante)
    .then((docRef) => {
      console.log("Ristorante aggiunto con ID:", docRef.id);
    })
    .catch((error) => {
      console.error("Errore durante l'aggiunta del ristorante:", error);
    });
});
 
};
*/



/*
AGGIUNGERE PROPRIETA' A INTERA COLLEZIONE
const collectionRef = firebase.firestore().collection('collectionName');

collectionRef.get()
  .then((querySnapshot) => {
    const batch = firebase.firestore().batch();

    querySnapshot.forEach((doc) => {
      const docRef = collectionRef.doc(doc.id);
      batch.update(docRef, { nuovaProprieta: 'valoreNuovaProprieta' });
    });

    return batch.commit();
  })
  .then(() => {
    console.log('Nuova proprietà aggiunta con successo a tutti i documenti della collezione!');
  })
  .catch((error) => {
    console.error('Errore nell\'aggiunta della nuova proprietà ai documenti della collezione:', error);
  });

*/

/*
AGGIUNGERE PROPRIETA' AD UN DOCUMENTO
const docRef = firebase.firestore().collection('collectionName').doc('documentId');

docRef.update({ nuovaProprieta: 'valoreNuovaProprieta' })
  .then(() => {
    console.log('Nuova proprietà aggiunta con successo al documento!');
  })
  .catch((error) => {
    console.error('Errore nell\'aggiunta della nuova proprietà al documento:', error);
  });

*/