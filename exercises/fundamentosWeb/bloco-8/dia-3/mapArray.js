// criando um array de objetos, juntando dois arrays
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
const productsUpdated = (productList, priceList) => productList.map((product, index) => (
  { [product]: priceList[index] }
));
const list = productsUpdated(products, prices);
console.log(list)