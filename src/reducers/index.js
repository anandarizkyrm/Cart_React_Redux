

let data = [
    {
      item : 'Blue Denim Shirt',
      type : 'Hoodie',
      color : 'red',
      size : 'M',
      price : 0.45,
      note : '1 Piece',
      image : 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80',
      qty : 1
    },
    {
      item : 'Red Hoodide',
      type : 'Hoodie',
      color : 'red',
      size : 'L',
      price : 15.45,
      note : null,
      image : 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80',
      qty : 1
    }
  ]
let initPrice = data.reduce((a,b)=>(
    a.price + b.price
))

export const getDataReducer = (state = data, action) => {
    switch (action.type) {
        case 'REMOVE':
            return data = state.filter((data)=>(
                data.item !== action.payload.name
            ))
        default:
            return state;
    }
};


export const priceReducer = (state = initPrice, action) => {
    switch (action.type) {
        case 'INCREMENT':
            data[action.payload.index].qty = data[action.payload.index].qty + 1
            return  state + action.payload.price;
        case 'DECREMENT':
                data[action.payload.index].qty = data[action.payload.index].qty - 1
                return  state - action.payload.price;
        case 'REMOVE_PRICE':
                return  state - action.payload;
        default:
            return state;
    }
};

export const removeReducer = (state = data, action ) => {

}
