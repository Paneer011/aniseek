const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const workLinks = document.querySelectorAll('#work-link');
const files = [
  { html: 'work-link.html',css: 'work-link.css', js: 'work-link.js' },
  // Add more files as needed
];

workLinks.forEach((link, index) => {
  const file = files[index];
  link.href = `${file.html}?css=${file.css}&js=${file.js}`;
});


function page3Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-img"); // Updated ID reference
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"; // Correct display value
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    })

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;

        });
    });
}

page3Animation();






var loader= document.querySelector("#loader")
setTimeout(function() {

    loader.style.top="-100%"
    
}, 4000);


loaderAnimation();
