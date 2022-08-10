import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from './../redux/actions/ProductAction';

export default function ExampleFun() {

    let dispatch = useDispatch();
    const productStore = useSelector(state => state.products);
    let data = [...productStore.products];
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        dispatch(getProducts());
    }, []);
    


    console.log(data);

    let content = <p>Found no Data.</p>;
    if(isLoading){
      content = <p>Loading</p>;
    }
    if(data.length > 0){
      content = data
      .map((item) => (
        <p>{item.id}</p>
        ));
    }
  return (
    <div>exampleFun
    {content}
    </div>
  )
}
