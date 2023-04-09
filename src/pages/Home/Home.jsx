import { useEffect, useState } from 'react'
import { Header } from '../../shared/Header/Header'
import { ProductCard } from './components/ProductCard/ProductCard'
import './Home.css'

export function Home() {
  // State. => Just like a varibale.
  const [products, setProducts] = useState([])
  const [buttonClick, setButtonClick] = useState(0)
  const [cartItemsCount, setCartItemsCount] = useState(0)

  function getCartItemsCount(count) {
    setCartItemsCount(count)
    console.log(count)
  }

  // 1. Call api and get all data.
  // Asynchoronous call.
  // chain of promises.

  useEffect(() => {
    fetch('http://localhost:4100/api/products', {
      method: 'GET',
    })
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
      <Header cartItemsCount={cartItemsCount} />
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
            <ProductCard
              notifyAboutCartChanges={getCartItemsCount}
              key={product.id}
              item={product}
            />
          ))}
      </div>
    </div>
  )
}

//                     src
//              pages       shared
//          Home                Header
// Home.jsx                     header.jsx
