import React from 'react'
import { TrashIcon, HeartIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux';
const Item = ({name, type, color , size ,  price, note , image, qty, index}) => {
  const dispatch = useDispatch()

  const handleMin = () =>{
    if(qty > 1){
        
        dispatch({type : 'DECREMENT', payload : {price, index}})
    }
    return
  }
  const handlePlus = () =>{
       
        dispatch({type : 'INCREMENT', payload : {price, index}})
  }

const handleRemove = () =>{
    dispatch({type : "REMOVE", payload : {name, index}})
    dispatch({type : "REMOVE_PRICE", payload : (price * qty).toFixed(2)})
}
  return (
    <div className='w-full mt-12'>
        <div className="xl:flex xl:relative">
            <img className='mt-4 w-32 max-h-46  xl:h-48 xl:mr-7 rounded-md xl:mt-0' src={image} alt="img" />
            <div className="mt- xl:w-full">
                    <h1 className='text-2xl font-semibold text-primary'>{name}</h1>
                    <p className='text-primary mt-2 font-light'>{type} - {color}</p>
                    <p className='text-primary mt-4 font-light'>Color : {color}</p>
                    <p className='text-primary mt-2 font-light'>Size : {size}</p>
                    <div className="flex justify-between items-center xl:absolute xl: right-0 xl:top-0 xl:h-full xl:flex-col">
                        <div className=" w-32 ">
                                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-4">
                                    <button onClick={()=>handleMin()}  data-action="decrement" className=" border text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                        <span className="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="text" className="outline-none focus:outline-none text-center w-full border font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={qty}></input>
                                    <button  onClick={()=>handlePlus()} data-action="increment" className="border text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                                <p className='text-primary mt-2 font-light text-left md:text-center text-xs '>{note ? `Note: ${note}` : null}</p>
                        </div>
                        <p className='text-primary xl:mb-4'>${(price * qty).toFixed(2)}</p>
                     </div>
                <div className="flex mt-6 justify-between xl:w-72">
                    <button onClick={handleRemove} className='flex text-primary py-2 m-0 mr-2 text-xs items-center '> <TrashIcon className='w-6 text-primary mr-2'/>REMOVE ITEM</button>
                    <button className='flex text-primary py-2 m-0 text-xs items-center'> <HeartIcon className='w-6 text-primary mr-2'/>MOVE TO WISHLIST</button>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Item