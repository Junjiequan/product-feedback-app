import React from 'react'

interface Product{
  itemName: string;
  price: number;
}

interface props{
  number:number;
  isTrue: boolean;
  text:string;
  fn:()=> string;
  product:Product;
}

const App: React.FC<props> = (props) => {
    return (
      <div>
        <h1>
        {props.text} and that is {props.product.itemName} the price is {props.product.price}
        {console.log(props.isTrue)} and the number is {props.number}
        <br/>Typescript is weird :)
        </h1>
      </div>
    )
  }
  
  export default App
  