document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1

  var textInputDiag = document.querySelector('#reset-field input');
  textInputDiag.value = "";

})


document.querySelector("#validate-field button").addEventListener('click',function(now){
  // TASK #2
  var textBox = document.querySelector('#validate-field input');
  var warningMsg = document.querySelector ('.flash-message');

  inputLength = textBox.value.length

  warningMsg.textContent = "";

  if (inputLength === 0) {

  } else if (inputLength < 6 && inputLength !==0 ) {
    warningMsg.textContent = "Input not long enough";
    warningMsg.className = 'flash-message invalid';

  }  else {
    warningMsg.textContent = "Field Valid";
    warningMsg.className = 'flash-message valid';
  }


})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3
  var checks = document.querySelectorAll('.cars-list input');
  var totalSum = 0;

  checks.forEach(function(elems){
    var checkedBox = elems;

    if (elems.checked === true) {
      totalSum += (elems.value*1);
    }
  })
  document.querySelector('.summary .sum-total').textContent = "$ " + totalSum;
})


document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  // TASK #4

  var carSelector = document.querySelectorAll('.selection option');


  carSelector.forEach(function(cochito) {
    console.log(cochito)

    if (cochito.selected === true) {
    document.querySelector('.img-box').innerHTML= "<img src='./images/" + cochito.dataset.img+ "' />"
    document.querySelector('.model').textContent = cochito.value;
    document.querySelector('.msrp').textContent= cochito.dataset.msrp;
    document.querySelector('.mpg').textContent= cochito.dataset.mpg;
    document.querySelector('.edmunds').textContent= cochito.dataset.edmunds;
  }
  })

})
