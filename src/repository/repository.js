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
function getIdCollection(collectionName)
{
  //var id = DB.collection(collectionName).document().getId();
// // db.collection("collection_name").document(id).set(object);
}
export function WriteByCollectionAndId(collection, id, objectToUpload) {
  return new Promise((resolve, reject) => {
    DB.collection(collection)
      .doc(id)
      .set(objectToUpload)
      .then(() => {
        console.log("[WriteByCollectionAndId] Documento caricato correttamente!");
        resolve();
      })
      .catch((error) => {
        console.error("[WriteByCollectionAndId] Errore nella scrittura del documento: ", error);
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
        console.log("[WriteByCollectionAndWhere] Documento caricato correttamente!");
        resolve();
      })
      .catch((error) => {
        console.error("[WriteByCollectionAndWhere] Errore nella scrittura del documento: ", error);
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
          console.log("[getByCollectionAndId] Nessun documento trovato");
          resolve(null);
        }
      })
      .catch((error) => {
        console.log("[getByCollectionAndId] Errore lettura documento: ", error);
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
        console.error("[ReadAllDocumentByCollection]:Errore nella lettura dei documenti: ", error);
        reject(error);
      });
  });
}

export function loadDataMenuToFirebase() {
  const base = [
    {
      "tipologia": "pizza",
      "idRistorante": "SdzyMTebBh7N81q50DVU",
      "nome": "base 1 pizza",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del base 1",
      "disponibile": "false"
    },
    {
      "tipologia": "pizza",
      "idRistorante": "SdzyMTebBh7N81q50DVU",
      "nome": "base 2 pizza",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del base 1",
      "disponibile": "true"
    },
    
    {
      "tipologia": "panino",
      "idRistorante": "SdzyMTebBh7N81q50DVU",
      "nome": "base 3",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del base 1",
      "disponibile": "true"
    },
    {
      "tipologia": "panino",
      "idRistorante": "SdzyMTebBh7N81q50DVU",
      "nome": "base 4",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del base 1",
      "disponibile": "true"
    },
    {
      "tipologia": "panino",
      "idRistorante": "miJ5a5915WZb2RcjApfa",
      "nome": "base 4",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del base 1",
      "disponibile": "true"
    },
    {
      "tipologia": "panino",
      "idRistorante": "miJ5a5915WZb2RcjApfa",
      "nome": "base 3",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del base 1",
      "disponibile": "true"
    },
    {
      "tipologia": "panino",
      "idRistorante": "miJ5a5915WZb2RcjApfa",
      "nome": "base 2",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del base 1",
      "disponibile": "true"
    },
    {
      "tipologia": "panino",
      "idRistorante": "miJ5a5915WZb2RcjApfa",
      "nome": "base 1",
      "ingredienti": ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      "descrizione": "Descrizione del base 1",
      "disponibile": "true"
    }

  ];

  // Aggiungi i ristoranti a Firebase Firestore
  base.forEach((base) => {
    DB.collection("base").add(base)
      .then((docRef) => {
        console.log("base aggiunto con ID:", docRef.id);
      })
      .catch((error) => {
        console.error("[loadDatabaseToFirebase]:Errore durante l'aggiunta dei base:", error);
      });
  });
}
export function loadDataIngredientiToFirebase() {
  const ingredienti = [
    {
      "category": 1,
      "tipologia": "pizza",
      "idRistorante": "SdzyMTebBh7N81q50DVU",
      "title": "ingrediente 1 pizza",
      "description": "description del ingrediente 1",
      "disponibile": "true"
    },
    {
      "category": 1,
      "tipologia": "pizza",
      "idRistorante": "SdzyMTebBh7N81q50DVU",
      "title": "ingrediente 2 pizza",
      "description": "description del ingrediente 1",
      "disponibile": "true"
    },
    
    {
      "category": 2,
      "tipologia": "panino",
      "idRistorante": "SdzyMTebBh7N81q50DVU",
      "title": "ingrediente 3",
      "description": "description del ingrediente 1",
      "disponibile": "true"
    },
    {
      "category": 2,
      "tipologia": "panino",
      "idRistorante": "SdzyMTebBh7N81q50DVU",
      "title": "ingrediente 4",
      "description": "description del ingrediente 1",
      "disponibile": "true"
    },
    {
      "category": 2,
      "tipologia": "panino",
      "idRistorante": "miJ5a5915WZb2RcjApfa",
      "title": "ingrediente 4",
      "description": "description del ingrediente 1",
      "disponibile": "true"
    },
    {
      "category": 3,
      "tipologia": "panino",
      "idRistorante": "miJ5a5915WZb2RcjApfa",
      "title": "ingrediente 3",
      "description": "description del ingrediente 1",
      "disponibile": "true"
    },
    {
      "category": 3,
      "tipologia": "panino",
      "idRistorante": "miJ5a5915WZb2RcjApfa",
      "title": "ingrediente 2",
      "description": "description del ingrediente 1",
      "disponibile": "true"
    },
    {
      "category": 3,
      "tipologia": "panino",
      "idRistorante": "miJ5a5915WZb2RcjApfa",
      "title": "ingrediente 1",
      "description": "description del ingrediente 1",
      "disponibile": "true"
    }

  ];

  // Aggiungi i ristoranti a Firebase Firestore
  ingredienti.forEach((ingredienti) => {
    DB.collection("ingredienti").add(ingredienti)
      .then((docRef) => {
        console.log("base aggiunto con ID:", docRef.id);
      })
      .catch((error) => {
        console.error("[loadDataingredientiToFirebase]:Errore durante l'aggiunta dei base:", error);
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
        console.error("[loadDataToFirebase]:Errore durante l'aggiunta del ristorante:", error);
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