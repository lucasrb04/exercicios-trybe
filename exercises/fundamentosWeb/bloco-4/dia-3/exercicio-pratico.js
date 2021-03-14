let n = 5;
for (let index = 0; index < n; index++) {
  let quadrado = '*';
  console.log(quadrado.repeat(n));
}
let trianguloEsq = '';
for (let index = 0; index < n; index++) {
  trianguloEsq += '*';
  console.log(trianguloEsq);
}

let space = '    '
let trianguloDir = ''
let ast = '';
for (let indexSpace = 0; indexSpace < 5; indexSpace += 1) {
    ast += '*';
    trianguloDir = space.slice(indexSpace) + ast ;
    console.log(trianguloDir);
}
