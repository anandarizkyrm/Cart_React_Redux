import { ChevronDownIcon } from '@heroicons/react/solid'
import Item from './compoenents/Item';
import { useSelector } from 'react-redux';
import React from 'react';
const App = () => {
  
  const price = useSelector((state)=> state.priceReducer)
  const data = useSelector((state)=>state.getDataReducer)


  console.log(data)

  return (
    <div className="flex items-center justify-center  flex-col py-6 lg:px-32">
        <h1 className="text-2xl text-primary font-semibold">
           Shopping Cart
        </h1>
        <div className="lg:flex mt-2  w-full p-6">
            <div className="border w-full p-4 shadow-lg">
                <h1 className='font-normal text-2xl text-primary'>{data.length > 1 ? `Cart (${data.length} items)` : `Cart (${data.length} item)`}</h1>
                {data.map((item, index)=>(
                    <Item 
                      key={index} 
                      name={item.item} 
                      type={item.type} 
                      color={item.color} 
                      size={item.size} 
                      price={item.price} 
                      note={item.note}
                      image = {item.image}
                      qty = {item.qty}
                      index = {index}
                      />
                ))}
            </div>
            <div className='mt-6 lg:mt-0 lg:ml-10 ml-0 lg:w-96'>
                <div className="border p-4 shadow-lg">
                  <h1 className="font-semibold text-xl text-primary">Total Amount</h1>
                  <div className="flex justify-between mt-4">
                    <p className="font-light text-primary">Temporary Amount </p>
                    <p className="font-light text-primary">${price.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="font-light text-primary">Shipping</p>
                    <p className="font-light text-primary">Gratis</p>
                  </div>
                  <hr className="border mt-4"/>
                  <div className="flex justify-between mt-4">
                    <p className="font-semibold text-primary">Total Amount Of <br/>(Including VAT)</p>
                    <p className='text-primary'>${price.toFixed(2)}</p>
                  </div>
                  <button className="bg-blue-500 text-white p-3 w-full mt-6 rounded-md">GO TO CHECKOUT</button>
                </div>
                 <div className="border p-4 shadow-lg flex justify-between mt-2">
                  <p className="font-light text-primary">Add a Discount [Optional]</p>
                  <ChevronDownIcon className='w-7 text-primary'/>
                 </div>
            </div>
        </div>
    </div>
  );
}

export default App;
