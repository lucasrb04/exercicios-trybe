const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = Object.values(Object.values(Object.values(order)[3])[2])[0];
  const name = Object.values(order)[0];
  const phoneNumber = Object.values(order)[1];
  const street = Object.values(Object.values(order)[2])[0];
  const number = Object.values(Object.values(order)[2])[1];
  const ap = Object.values(Object.values(order)[2])[2];

  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, N: ${number}, AP: ${ap}`)
}

customerInfo(order);

const orderModifier = (order) => {
  const newName = order.order.delivery.deliveryPerson = 'Luiz Silva';
  delete order.order.pizza.margherita;
  delete order.order.pizza.pepperoni;
  order.order.pizza.muzzarela = {amount: 1, price: 15};
  order.order.pizza.calabresa = {amount: 1, price: 20};
  const total = order.payment.total = 50;
  const drinks = order.order.drinks.coke.type;
  const pizza1 = Object.keys(order.order.pizza)[0]
  const pizza2 = Object.keys(order.order.pizza)[1]
  console.log(`Olá ${newName}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drinks} é R$${total},00.`);
}

orderModifier(order);