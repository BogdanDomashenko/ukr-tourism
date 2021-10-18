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


// menu


// window.addEventListener("scroll", function() {
//   console.log(navbar);
//   navbar.classList.toggle("sticky", window.scrollY > 0);
// });

// mobile menu
let navBarMobile = new Vue({
  el: '#navbar',
  data: {
    isActive: false,
    isScrolling: false,
    error: null
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
},
beforeDestroy() {
  window.addEventListener("scroll", this.handleScroll);
},
methods: {
  greet: function(event) {
    this.isActive = !this.isActive;
  },
  handleScroll: function(event) {
    if (window.scrollY > 50) {
      if(!this.isScrolling) {
        this.isScrolling = true;
      }
    }
    else {
      this.isScrolling = false;
    }
  }
},
});



  // transport-chart
//   const transportChart1 = document.querySelector('#transport-chart1');
//   const transportChart2 = document.querySelector('#transport-chart2');

// createTransportChart(transportChart1, 155, 155);
// createTransportChart(transportChart2, 155, 124);

// function createTransportChart(element, maxELCount, elCount) {
//   element.style.width = ((elCount/maxELCount)*100) + "%";
//   element.style.height = element.clientWidth + "px";
// }