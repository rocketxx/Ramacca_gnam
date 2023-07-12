// Azione per aggiornare la quantità
export const updateQuantity = (id, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { id, quantity },
  });
  