const typedText = document.querySelector('.typedText');


const options = {
  strings: ['Web Developer', 'React.js Developer', 'Front End Developer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
};


const typed = new Typed(typedText, options);
