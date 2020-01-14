const INITIAL_STATE = {
   categories: {
      hats: {
         title: "hats",
         imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
         id: 1,
         linkUrl: "shop/hats"
      },
      jackets: {
         title: "jackets",
         imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
         id: 2,
         linkUrl: "shop/jackets"
      },
      sneakers: {
         title: "sneakers",
         imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
         id: 3,
         linkUrl: "shop/sneakers"
      },
      women: {
         title: "women",
         imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
         size: "large",
         id: 4,
         linkUrl: "shop/womens"
      },
      men: {
         title: "men",
         imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
         size: "large",
         id: 5,
         linkUrl: "shop/men"
      }
   }
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      default:
         return state;
   }
};

export default categoriesReducer;
