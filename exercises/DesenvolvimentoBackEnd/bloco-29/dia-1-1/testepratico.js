const motoboys = [
  {
    nome: 'Moto 1',
    precoFixo: 2,
    exclusivo: '',
    pedidos: [],
    pagamento: 0,
  },
  {
    nome: 'Moto 2',
    precoFixo: 2,
    exclusivo: '',
    pedidos: [],
    pagamento: 0,
  },
  {
    nome: 'Moto 3',
    precoFixo: 2,
    exclusivo: '',
    pedidos: [],
    pagamento: 0,
  },
  {
    nome: 'Moto 4',
    precoFixo: 2,
    exclusivo: 'Loja 1',
    pedidos: [],
    pagamento: 0,
  },
  {
    nome: 'Moto 5',
    precoFixo: 3,
    exclusivo: '',
    pedidos: [],
    pagamento: 0,
  },
]; 

const pedidos = [
  {
    origem: 'Loja 1',
    preco: 50,
    comissao: 0.05,
  },
  {
    origem: 'Loja 1',
    preco: 50,
    comissao: 0.05,
  },
  {
    origem: 'Loja 1',
    preco: 50,
    comissao: 0.05,
  },
  {
    origem: 'Loja 2',
    preco: 50,
    comissao: 0.05,
  },
  {
    origem: 'Loja 2',
    preco: 50,
    comissao: 0.05,
  },
  {
    origem: 'Loja 2',
    preco: 50,
    comissao: 0.05,
  },
  {
    origem: 'Loja 2',
    preco: 50,
    comissao: 0.05,
  },
  {
    origem: 'Loja 3',
    preco: 50,
    comissao: 0.15,
  },
  {
    origem: 'Loja 3',
    preco: 50,
    comissao: 0.15,
  },
  {
    origem: 'Loja 3',
    preco: 100,
    comissao: 0.15,
  },
];

const numeroDePedidosPorBoy = pedidos.length / motoboys.length;

const pedidosExclusivos = () => {
  motoboys.forEach((motoboy) => {
    if (motoboy.exclusivo) {
      const indicePedidos = [];
      for (let i = 0; i < numeroDePedidosPorBoy; i += 1) {
        const novoPedido = pedidos.find((pedido, indice) => {
          if (pedido.origem === motoboy.exclusivo) {
            indicePedidos.push(indice);
          }
          return pedido.origem === motoboy.exclusivo;
        });
        motoboy.pedidos.push(novoPedido);
        pedidos.splice(indicePedidos[i], 1);
      }
    }
  });
};
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (max) => Math.floor(Math.random() * (max + 1));

const dividirPedidos = () => {
  motoboys.forEach((motoboy) => {
    while (motoboy.pedidos.length < numeroDePedidosPorBoy) {
      const indice = getRandomIntInclusive(pedidos.length - 1);
      motoboy.pedidos.push(pedidos[indice]);
      pedidos.splice(indice, 1);
    }
  });
};

const calcularPagamento = () => {
  motoboys.forEach((motoboy) => {
    const comissoes = motoboy.pedidos.reduce((total, pedido) => total + pedido.preco * pedido.comissao, 0);
    const totalRecebido = comissoes + motoboy.precoFixo * motoboy.pedidos.length;
    motoboy.pagamento = totalRecebido;
  });
};

const retornaMotoboys = (motoboy) => {
  pedidosExclusivos();
  dividirPedidos();
  calcularPagamento();

  const motoboysMap = motoboys.map((moto) => ({
    nome: moto.nome,
    nPedidos: moto.pedidos.length,
    pedidos: moto.pedidos.map((pedido) => ({ origem: pedido.origem })),
    pagamento: moto.pagamento,
  }));

  if (motoboy) {
    console.log(motoboysMap.find((m) => m.nome === motoboy));
  } else {
    motoboysMap.forEach((element) => {
    console.log(element);
  });
  }
};

retornaMotoboys('Moto 1');