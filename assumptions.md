# **Assumptions**

## **State**

```javascript
state = {
  games: [],
  cart: [],
  totalCost: null,
}
```


## **Data**
Fetch data from a mock json api in the following shape. 
```json
{
  "games": [
    {
      "img": "",
      "title": "Cyberpunk 2077",
      "description": "A futuristic first person shooter cross ARPG set in the dystopian metropolis of Night City.",
      "price": {
        "now": 80,
        "was": 99
      },
      "onsale": true,
    },
    {
      //...
    }
  ]
}

```
## **Price**
```javascript
const { games } = this.state
const { price } = games

const now = price.now
const was = price.was 

// Calculate save variable client side
const save = was - now
```

```javascript
// Example
`Was ${was}, save ${save}`
```


## **Add to cart**
```javascript
handleAddToCart = (game) => {
  const { id, title, description, price  } = game
  const quantity = 1
  const savedData = {
    quantity,
    id,
    title,
    description,
    price,
  }

  // !! Pushing may not be the best solution
  const { cart } = this.state
  cart.push(savedData)
}

// Example implementation
{
  games.map(game => {
    const { id, title, description, price } = game
    return (
      <div key={id}>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{price}</span>
        <button onClick={handleAddToCart(...game)}>
      </div>
    )
  })
}

```
## **Cart component**
### **Event Handler** -  *Remove from cart*
```javascript
handleRemoveFromCart = (game) => {
  const { id } = game
  const { cart } = this.state
  for(var i = 0; cart > i; i++) {
    if (cart[i].id === id) {
      cart[i].splice()
    }
  }
}
```

### **Event Handler** - *Update Amount*

```javascript
const handleQuantityAdd = (addPrice, quantity) => {
  // Update total amount state so cart total is current.
  // Add the new price to the existing total.
  const { totalAmout } = this.state
  const updatedAmount = totalAmount + addPrice

  // Set that new total to state.
  this.setState({
    totalAmount: updatedAmount
  })

  // Update the line item quantity
  quantity += 1
  return quantity
}

 // Same theory below except removing price/quantity
const handleQuantityRemove = (removePrice, quantity) => {
  const { totalAmout } = this.state
  const updatedAmount = totalAmount - removePrice

   this.setState({
    totalAmount: updatedAmount
  })
  quantity -= 1
  return quantity
}
```

### **Event Handler** - *Buy*
```javascript 
// Bring all the state and events together here...
```

### **Component** - *Line Item*
```javascript
{
  cart.map(lineItem => {
    const { quantity, id, title, description, price } = lineItem
    const { totalCost } = this.state
    let dynamicQuantity = quantity
    return (
      <div>
        { title }
        <button onClick={ handleRemoveFromCart() }>Remove from cart</button>

        <span>{dynamicQuantity}</span>
        <button onClick={ handleAddQuantity(price, dynamicQuantity) }>+</button>
        <button onClick={ handleRemoveQuantity(price, dynamicQuantity) }>-</button>

        <span>{ formatPrice(totalPrice(price, dynamicQuantity)) }</span>
      </div>
    )
  })
}
```

### **Component** - *Total*
```javascript
const Total = () => {
  
  const {totalCost} = this.state

  return (
    <div>
      <div>
        TOTAL: {totalCost}
      </div>
    </div>
  )
}
```


## **Helper functions**
``` javascript
 
const totalPrice = (price, quanity) => {
  const total = price * quantity
  return total
}

const formatPrice = total => {
  const formattedTotal = parseInt(total)toFixed(0)
  return formattedTotal
}
```