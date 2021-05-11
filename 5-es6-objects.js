// object property shorthand

const name = "Andrew"
const userAge = 27

const user = {
  name,
  age: userAge,
  location: "philadelphia"
}

console.log(user)

// object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined
}