/*
Convert an array : {
  name: "Customer Name",
  purchases: [
    { product: "Product A", price: 20 },
    { product: "Product B", price: 35 },
    // ... other transaction details
  ],
  // other customer-related properties may be present
}
to 
[
  { customer: "Customer Name", product: "Product A", price: 20 },
  { customer: "Customer Name", product: "Product B", price: 35 },
  // ... other transactions
]
*/

const flattenArray = (customers) => {
  const result = customers.reduce((arr, customer) => {
    const values = customer.purchases.map((purchase) => ({
      customer: customer.name,
      product: purchase.product,
      price: purchase.price,
    }));
    return [...arr, ...values];
  }, []);
  return result;
};

console.log(
  flattenArray([
    {
      name: 'John Doe',
      purchases: [
        { product: 'Laptop', price: 1200 },
        { product: 'Mouse', price: 25 },
      ],
    },
    {
      name: 'Jane Smith',
      purchases: [
        { product: 'Smartphone', price: 800 },
        { product: 'Headphones', price: 50 },
      ],
    },
  ])
);
