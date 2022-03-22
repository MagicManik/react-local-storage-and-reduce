const priceReducer = price => {
    const priceReduce = (previous, current) => previous + current.price;
    const total = price.reduce(priceReduce, 0)
    return total;
}

export { priceReducer }