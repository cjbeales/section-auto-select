let sections = document.querySelectorAll('section');
let navItems = document.getElementsByTagName('li');

// <section> scroll-based 'active' selectors

(function getSection() {

  for (let a = 0; a < sections.length; a++) {
    let thisSection = sections[a];
    const beforeSection = a > 0 ? sections[a - 1] : ''
    const lastSection = a < sections.length ? sections[a + 1] : ''
    let bounding = thisSection.getBoundingClientRect().top;

    if (bounding <= 0) {
      thisSection.classList.add('active');
      if (beforeSection) {
        beforeSection.classList.remove('active')
      }
      if (lastSection) {
        lastSection.classList.remove('active')
      }
    } else {
      thisSection.classList.remove('active');
    }
  }

  // Invoke
  window.addEventListener("scroll", getSection);

})();


// <nav> click-based 'active' selectors
function navActive(e) {
  e.preventDefault;
  thisLi = e.target.parentNode;

  if (thisLi.classList.contains('active')) {
    console.log('got active');
  } else {

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('active')
    }

    thisLi.classList.add('active');

  }
}

for (let a = 0; a < navItems.length; a++) {
  navItems[a].addEventListener('click', navActive)
}



// get names

(function getNames() {

  for (let a = 0; a < sections.length; a++) {
    let sectionName = sections[a].getAttribute('name');
    // console.log(sectionName);
    if (sections[a].classList.contains('active')) {

      for (let b = 0; b < navItems.length; b++) {
        let navName = navItems[b].getAttribute('name');
        const prevLi = b > 0 ? navItems[b - 1] : ''
        const lastLi = b < navItems.length ? navItems[b + 1] : ''


        if (sectionName == navName && sections[a].classList.contains('active')) {
          navItems[b].classList.add('active')

          if (prevLi) {
            prevLi.classList.remove('active')
          }
          if (lastLi) {
            lastLi.classList.remove('active')
          }
        }
      }
    }
  }
  // Invoke
  window.addEventListener("scroll", getNames);
})();