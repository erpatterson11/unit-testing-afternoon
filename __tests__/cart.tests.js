const cart = require("../cart")
const cars = require("../data/cars")


describe("Cart Properties", () => {
    
    test("Cart should be an empty array", () => {
        expect( Array.isArray(cart.cart) ).toBe(true)
        expect( cart.cart.length).toBe(0)
    })

    test("total sould be a string equal to 0", () => {
        expect( cart.total ).toBe(0)
    })

})

describe("Cart Methods", () => {

    // Runs this function after each test
    // Useful to clean up temporary state that some tests might create/alter
    afterEach(() => {
        cart.cart = []
        cart.total = 0
    })

    test("addToCart() should add a car object to cart.total", () => {
        const [ car1, car2 ] = cars
        cart.addToCart(car1)
        cart.addToCart(car2)

        expect( cart.cart.length ).toBe(2)
        expect( cart.cart[0] ).toBe(car1)
        expect( cart.cart[1] ).toBe(car2)
    })

    test("addToCart() should increase cart.total by the added car's price",() => {
        const [ car1, ,car3, , car5 ] = cars
        const total = car1.price + car3.price + car5.price

        cart.addToCart(car1)
        cart.addToCart(car3)
        cart.addToCart(car5)

        expect( cart.total ).toEqual(total)
    })

    test("removeFromCart() should remove car from cart",() => {
        const [ car1, ,car3, , car5 ] = cars

        cart.addToCart(car1)
        cart.addToCart(car3)
        cart.addToCart(car5)

        cart.removeFromCart(1)

        expect( cart.cart.length ).toEqual(2)
        expect( cart.cart[0] ).toEqual(car1)
        expect( cart.cart[1] ).toEqual(car5)
    })

    test("removeFromCart() should reduce the cart total by the removed car's total", () => {
        const [ car1, ,car3, car4, car5 ] = cars
        
        cart.addToCart(car1)
        cart.addToCart(car3)
        cart.addToCart(car4)
        cart.addToCart(car5)

        cart.removeFromCart(1)
        cart.removeFromCart(1)
        cart.removeFromCart(1)

        expect( cart.total ).toEqual( car1.price )
    })

    test("checkout() should empty cart and reset total", () => {
        const [ car1, ,car3 ] = cars
        
        cart.addToCart(car1)
        cart.addToCart(car3) 

        cart.checkout()

        expect( cart.total ).toEqual(0)
        expect( cart.cart ).toEqual([])
    })

})