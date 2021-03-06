new WOW().init();

Vue.use(loader);

new Vue({
  el: '#appLoader',
  components:{
  loader:loader
  },
  data: {
    isDisable: false
  },
  beforeMount() {
    setTimeout(this.toggleLoader.bind(this), 1000);
  },
  methods: {
    toggleLoader: function(event) {
      this.isDisable = !this.isDisable;
    }
  }

});

  // MAP


  let map = document.getElementById('ukraine-map');
  let regionNames = document.querySelectorAll('.mapsvg-region');


  map.addEventListener('click', event => {
      if (event.target.className.baseVal == ' mapsvg-region') {
        cityName = event.target.getAttribute('title');
        let cityEl = document.getElementById(cityName);
      }
  });

  // let abc = document.querySelectorAll('.mapsvg-region');
  // for(i in abc) {
  //     console.log(abc[i].getAttribute('title'));
  // }

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

new svgMap({
  targetElementID: 'svgWorldMap',
  colorMax: "#48185F",
  colorMin: "#C1AAD3",
  data: {
    data: {
      gdp: {
        name: 'Відвідало:',
        format: '{0} чоловік',
        thousandSeparator: ',',
        thresholdMax: 50000,
        thresholdMin: 1000
      },
    },
    applyData: 'gdp',
    values: {
      AF: { gdp: 587},
      AL: { gdp: 4583},
      DZ: { gdp: 4293},
      DZ: { gdp: 4293}
    }
  }
});

let manChart = new Vue ({
  el: '#man-chart',
  data: {
    items: [
      {}
    ]
  },
  methods: {
    render: function(event) {
      this.isActive = !this.isActive;
    }
  }
});


Vue.use(VueScrollTo);

// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 });

//  const el = document.querySelector('#internal-external');
//  let elDistanceToTop = window.pageYOffset + el.getBoundingClientRect().top;

//  alert(elDistanceToTop);


  // transport-chart
//   const transportChart1 = document.querySelector('#transport-chart1');
//   const transportChart2 = document.querySelector('#transport-chart2');

// createTransportChart(transportChart1, 155, 155);
// createTransportChart(transportChart2, 155, 124);

// function createTransportChart(element, maxELCount, elCount) {
//   element.style.width = ((elCount/maxELCount)*100) + "%";
//   element.style.height = element.clientWidth + "px";
// }

new Vue({
  el: '#investemts-chart',
  data: {
      maxCount: 200,
      years: [
        {year: 2018, data: 200, color: '#E84D4D'},
        {year: 2019, data: 140, color: '#06AB8D'},
        {year: 2020, data: 130, color: '#6034BE'}
      ]
  }
});