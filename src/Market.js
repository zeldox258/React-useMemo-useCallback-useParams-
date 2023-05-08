
import { useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";

import ChildMarket from "./childMarket";

    //money
    //product Count
    //Value of Products
    //if you buy product your money should decrease by5
    //if you sell product your money should be increase by 8
    //while calculating the calcu of products 8*productCount
function Market() {
    const {id} = useParams();
    const [productNum,setproductNum]=useState(Number(id));
    const [money,setmoney]=useState(0);
    const value = useMemo(() => {
        console.log("Something has changed new value is calculating");
        return  productNum*8
    },[productNum]);
    
// sell setmoney(money+8); setproductNum(productNum-1); 
// buy  setmoney(money-5); setproductNum(productNum+1); 
    const buyProduct = useCallback(() => {setmoney(money-5); setproductNum(productNum+1); });
    const sellProduct = useCallback(() => {setmoney(money+8); setproductNum(productNum-1); });

    

  return (
    <div className="App">
        <h1>-product Number: {productNum} -
        - Money: {money} -
        - Value:{value}- </h1>
        <ChildMarket sell={sellProduct} buy={buyProduct} />
    </div>
  );
}

export default Market;
