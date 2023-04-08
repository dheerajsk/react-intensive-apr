import { useEffect, useState } from 'react'
import { Header } from '../../shared/Header/Header'
import { ProductCard } from './components/ProductCard/ProductCard'
import './Home.css'

export function Home() {
  // State. => Just like a varibale.
  const [products, setProducts] = useState([])
  const [buttonClick, setButtonClick] = useState(0)

  // 1. Call api and get all data.
  // Asynchoronous call.
  // chain of promises.

  useEffect(() => {
    fetch('http://localhost:4100/api/products')
      // here we receive
      .then((response) => response.json())
      .then((jsonResponse) => {
        // products = jsonResponse
        setProducts(jsonResponse)
        console.log(products)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [buttonClick])

  return (
    <div>
      <Header />
      {/* <button
        onClick={() => {
          setButtonClick(buttonClick + 1)
        }}
        type="button"
      >
        Refresh
      </button> */}
      <div className="product-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
      </div>
    </div>
  )
}

//                     src
//              pages       shared
//          Home                Header
// Home.jsx                     header.jsx
