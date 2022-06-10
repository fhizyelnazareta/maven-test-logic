function chartView(angka) {
  let n =[];
  for(let i = 1; i <= angka; i++){
    n.push({x: i, y: Math.random()*100 }) 
  }

  var chart = new CanvasJS.Chart("chartContainer",
  {
    title: {
      text: "Hasil Chart Maven-Test Logic"
    },
    axisY:{
     interval: 20
   },
    data: [
    {
      type: "column",
      dataPoints: n
    }
    ]
  });

  chart.render();
}

function start(){
  const angka = parseInt($("#angka").val())
  chartView(angka)
  console.log(typeof angka)
  $("#btn-start").removeAttr("style").hide()
  $("#btn-stop").show()
}
function stop(){
  $("#chartContainer").removeAttr("style").hide()
  $("#btn-stop").removeAttr("style").hide()
  $("#btn-start").show()
}


