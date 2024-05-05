var darkbtn = document.getElementById("dark-btn"); //store the dark-btn element in a variable.

darkbtn.onclick = function () {
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    // document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

if(localStorage.getItem("theme") == "light"){ //__check localStorage value == light

    darkbtn.classList.remove("dark-btn-on"); //--- if yes, turn off the dark button --> remove "dark-btn-on" class
    document.body.classList.remove("dark-theme");//-- turn off/remove the "dark-theme" class. keep stay on light mode.

}
else if(localStorage.getItem("theme") == "dark"){ //__check localStorage value == dark

    darkbtn.classList.add("dark-btn-on");  //--- if yes, turn on the dark button --> add "dark-btn-on" class
    document.body.classList.add("dark-theme");//-- //-- turn on/add the "dark-theme" class. keep stay on dark mode.

}
else{

    localStorage.setItem("theme","light"); //--- if you visit first time, a localstorage created with light mode by default.

}


AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
