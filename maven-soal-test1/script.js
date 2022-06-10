function runGenerate(){
  let hasil = ''
  let zero = ''
  const angka = parseInt($("#angka").val())
  let myFunc = num => Number(num);
  var arrayAngka = Array.from(String(angka), myFunc);
  
  for(let i = 0; i < arrayAngka.length; i++){
    for(let j = i+1; j < arrayAngka.length; j++){
      zero += '0';
    }
    hasil += arrayAngka[i] + zero + '</br>';
    zero = '';
  }


  $('#output').empty();
  $('#output').html(`<h1>${hasil}</h1>`);
}

$(document).ready(function (){
  $('#angka').keydown(function (e) {
    let newval = $('#angka').val();
    let vals = newval.replace('0', '');
    $('#angka').val(vals);
  })
})

