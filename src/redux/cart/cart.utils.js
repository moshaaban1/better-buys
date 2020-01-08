export const checkItemExist = (cartItems, cartItem) => {
   const existingCartItem = cartItems.find(item => item.id === cartItem.id);

   if (existingCartItem) {
      return cartItems.map(item => {
         return item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
      });
   }

   return [...cartItems, { ...cartItem, quantity: 1 }];
};
