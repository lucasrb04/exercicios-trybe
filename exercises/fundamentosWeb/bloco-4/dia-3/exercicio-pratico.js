let n = 8;
for (let index = 0; index < n; index++) {
  let quadrado = '*';
  console.log(quadrado.repeat(n));
}
let trianguloEsq = '';
for (let index = 0; index < n; index++) {
  trianguloEsq += '*';
  console.log(trianguloEsq);
}

let space = ' '
let trianguloDir = ''
let ast = '';
for (let indexSpace = 0; indexSpace < n; indexSpace += 1) {
  ast += '*';
  trianguloDir = space.repeat(n-1).slice(indexSpace) + ast;
  console.log(trianguloDir);
}
