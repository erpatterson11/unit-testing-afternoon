const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(car) {
    this.cart.push(car)
    this.total += car.price
    return this.cart
  },

  removeFromCart: function(index) {
    const removedCar = this.cart.splice(index,1)[0]
    this.total -= removedCar.price
    return this.cart
  },
  
  checkout: function() {
    this.cart = []
    this.total = 0
  }
};