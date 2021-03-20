
window.onload = function () {
  const inputBgc = document.querySelector('#background-color');
  function changeBgc(bgcolor) {
  document.querySelector('body').style.backgroundColor = bgcolor;
  localStorage.setItem('background-color', bgcolor);
  }
  inputBgc.addEventListener('change', function(){
    changeBgc(inputBgc.value)});

  const inputc = document.querySelector('#color');
  function changeTc(color) {
    document.querySelector('p').style.color = color;
    localStorage.setItem('font-color', color);
  };
  inputc.addEventListener('change',function() {
    changeTc(inputc.value)});

  const inputFz = document.querySelector('#font-size');
  function changeFz(fontSize) {
    document.querySelector('p').style.fontSize = (fontSize + 'px');
    localStorage.setItem('font-size', fontSize)
  }
  inputFz.addEventListener('change',function() {
    changeFz(inputFz.value) });
  
  
  const inputLh = document.querySelector('#line-height');
  function changeLh(lineHeight) {
    document.querySelector('p').style.lineHeight = ( lineHeight+ 'px');
    localStorage.setItem('line-height',lineHeight);
  }
  inputLh.addEventListener('change',function() {
    changeLh(inputLh.value)});

    const inputFf = document.querySelector('#font-family');
    function changeFf(fontFamily) {
      document.querySelector('p').style.fontFamily = (inputFf.value);
      localStorage.setItem('font-family', fontFamily);
    }
    
inputFf.addEventListener('change',function() {
  changeFf(inputFf.value)});
        

  function initialize() {
    inputBgc.value = localStorage.getItem("background-color");
    changeBgc(inputBgc.value);

    inputc.value = localStorage.getItem('font-color');
    changeTc(inputc.value);
    
    inputFz.value = localStorage.getItem('font-size');
    changeFz(inputFz.value);

    inputLh.value = localStorage.getItem('line-height');
    changeLh(inputLh.value)

    inputFf.value = localStorage.getItem('font-family')
    changeFf(inputFf.value);
  }
  initialize()
}





