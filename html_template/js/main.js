
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

//count up
const options = {
    separator: ' ',
  };
  let demo = new CountUp('#internal-external-count', 1957410, options);
  if (!demo.error) {
    demo.start();
  } else {
    console.error(demo.error);
  }