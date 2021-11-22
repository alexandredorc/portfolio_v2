import { useState } from 'react'

const monsteraPrice = 8

function Cart() {

    const [cart, updateCart] = useState(1)
    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart}€</h3>
        </div>
    )
}
  
export default Cart;
  