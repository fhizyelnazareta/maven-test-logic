function chartView(angka) {
  let n =[];
  for(let i = 1; i <= angka; i++){
    n.push({x: i, y: Math.random()*100}) 
  }

  const item = n.map(item => {
    item.y <= 25 ? item.color = "green" : item.y > 25 && item.y <= 50 ? item.color = "yellow" : item.y > 50 && item.y <= 75 ? item.color = "red" : item.y > 75 && item.y <= 100 ? item.color = "blue": 'white'
    return item;
  });

  console.log(item)

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

function runGenerate(){
  const angka = parseInt($("#angka").val())
  $("#chartContainer").show()
  chartView(angka)
  $("#btn-start").removeAttr("style").hide()
  $("#btn-stop").show()
}

const start = function(){
    runGenerate()
    setInterval(function(){
      runGenerate()
    }, 3000)
    $("#btn-start").removeAttr("style").hide()
    $("#btn-stop").show()
}
function stop(){
  location.reload()
}


