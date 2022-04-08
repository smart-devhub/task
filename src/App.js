import React,{useState} from 'react'
import { products } from './data'

const App= () => {
 
  return (
    <div className='p-4'>
      <div className='d-flex'>
      {
        products.map((product)=>{
          return(
            <div class="card" style={{margin:"3rem",width:"300px"}} key={product.id}>
            <img src={product.image} class="card-img-top" alt="..."/>
            <div class="card-body">
            <p class="card-text">Product id:{product.id}</p>
            Name: <h3>{product.name}</h3>
            price: <h4 class="card-text">{product.price}</h4>
              <p class="card-text">Stock:{product.stock}</p>
              
            </div>
          
          </div>

          )
        })
      }

      </div>
      <hr />
       <div className='w-50'>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product price</th>
      <th scope="col">Stock</th>
    </tr>
  </thead>
  <tbody>
    {
      products.map(product=>(
        <tr>
        <th scope="row">{product.id}</th>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
      </tr>
      ))
    }
    
   
  </tbody>
</table>
            </div>

    </div>
  )
}

export default App