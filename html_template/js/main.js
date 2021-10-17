new WOW().init();

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



  // MAP


  let map = document.getElementById('ukraine-map');
  let regionNames = document.querySelectorAll('.mapsvg-region');


  map.addEventListener('click', event => {
      if (event.target.className.baseVal == ' mapsvg-region') {
        cityName = event.target.getAttribute('title');
        let cityEl = document.getElementById(cityName);
      }
  });


  // transport-chart
  const transportChart1 = document.querySelector('#transport-chart1');
  const transportChart2 = document.querySelector('#transport-chart2');

createTransportChart(transportChart1, 155, 124);
createTransportChart(transportChart2, 155, 155);

function createTransportChart(element, maxELCount, elCount) {
  element.style.width = ((elCount/maxELCount)*100) + "%";
  element.style.height = element.clientWidth + "px";
}