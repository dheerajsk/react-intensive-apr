import { Header } from '../../shared/Header/Header'
import { ProductCard } from './components/ProductCard/ProductCard'
import './Home.css'

export function Home() {
  // 1. Call api and get all data.
  // Asynchoronous call.
  // chain of promises.
  fetch('http://localhost:4100/api/products')
    // here we receive
    .then((response) => response.json())
    .then((jsonResponse) => {
      console.log(jsonResponse)
    })
    .catch((err) => {
      console.log(err)
    })

  return (
    <div>
      <Header />

      <div className="product-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

//                     src
//              pages       shared
//          Home                Header
// Home.jsx                     header.jsx
