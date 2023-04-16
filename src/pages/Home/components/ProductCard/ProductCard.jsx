import { useState, useEffect } from 'react'
import styles from './ProductCard.module.css'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../../store/slices/cartSlices'

export function ProductCard({ item, notifyAboutCartChanges }) {
  const [isLoggedIn, setLoggedInStatus] = useState(false)
  // get data from localStorage.

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails')
    if (userDetails) {
      setLoggedInStatus(true)
    }
  }, [])

  var rating = Math.floor(item.rating.rate)
  var ratings = Array(rating).fill(0)
  const dispatch = useDispatch()

  function handleAddToCartClick() {
    dispatch(addItem(item))

    // // if cart already exists
    // const cartItems = localStorage.getItem('cartItems')
    // if (!cartItems) {
    //   var arrayOfItems = []
    // } else {
    //   var arrayOfItems = JSON.parse(cartItems)
    // }
    // // add the product to cart.
    // const cartItem = {
    //   product: item,
    //   quantity: 1,
    // }
    // const itemAreadyExistsIndex = arrayOfItems.findIndex(
    //   (i) => i.product.id == item.id,
    // )
    // // if product already added to cart, increase the quantity.
    // // if product exists (index!=-1)
    // if (itemAreadyExistsIndex != -1) {
    //   arrayOfItems[itemAreadyExistsIndex].quantity += 1
    // } else {
    //   arrayOfItems.push(cartItem)
    // }
    // localStorage.setItem('cartItems', JSON.stringify(arrayOfItems))
    // notifyAboutCartChanges(arrayOfItems.length)
  }

  return (
    <div className={styles.card}>
      <h5 className="card-title">{item.title}</h5>
      <hr></hr>
      <img src={item.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <p className="card-text">{item.description}</p>
        <span>
          <b>MRP:</b> &#8377;{item.price}
        </span>
        <hr></hr>

        <div className={styles.cardBottom}>
          <div>
            {ratings.map((r) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            ))}
          </div>

          {isLoggedIn && (
            <button
              onClick={handleAddToCartClick}
              className={'btn ' + ' btn-info ' + styles.btnColor}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
