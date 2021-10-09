
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

  for(region in regionNames) {
    console.log(regions[region].getAttribute('title'));
  }

  map.addEventListener('click', event => {
      if (event.target.className.baseVal == ' mapsvg-region') {
        cityName = event.target.getAttribute('title');
        let cityEl = document.getElementById(cityName);
      }
  });
