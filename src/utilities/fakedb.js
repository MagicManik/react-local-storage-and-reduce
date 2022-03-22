const addToDb = id => {
    console.log(id)
    const cart = localStorage.getItem('shopping-cart');

    // আমরা এই পুরো শপিং কার্টকেই local Storage এর ভ্যালুতে রাখবো।
    let shoppingCart = {};

    if (cart) {
        shoppingCart = JSON.parse(cart);
    }


    // এখানে shoppingcart এর ভেতরের id এর যে ভ্যালু সেই ভ্যালুটা Quantity কে দিবে।
    const quantity = shoppingCart[id];
    if (quantity) {
        // শপিং কার্ট এর আইডি এর ভ্যালু 1 যোগ কয়া হয়েছে।
        const newQuantity = quantity + 1;

        // এখানে shopping cart এর আইডি এর নতুন ভ্যালু সেট করে দেয়া হয়েছে।
        shoppingCart[id] = newQuantity;
    }
    else {
        // এখানেই বুঝতে পারি নাই। প্রব্লেমটা এখানেই হইছে। এখানে shoppingCart এর id এর মান চেইঞ্জ করে 1 সেট করা হয় নাই। বরং এখানে shopping cart এর id কে property name এবং তার ভ্যালু হিসেবে 1 কে set করে দেয়া হইছে।
        shoppingCart[id] = 1
    }


    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}






const removeFromDb = id => {
    const getCart = localStorage.getItem('shopping-cart');
    if (getCart) {
        const parseGetCart = JSON.parse(getCart)
        if (id in parseGetCart) {
            delete parseGetCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(parseGetCart))

        }
    }
}



export { addToDb, removeFromDb }