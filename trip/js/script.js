let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

// let loginForm = document.querySelector('.login-form')

// document.querySelector('#login-btn').onclick = () => {
//     loginForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }


document.querySelector('#social-btn').onclick = () => {
    let f = false;
    if (f == true) {
        window.location.href = "sign.html";
    }
    else {
        window.location.href = "social.html";

    }

}

window.onscroll = () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');

    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }

};

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("mouseover", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}

panels.forEach((panel) => {
    panel.addEventListener("mouseleave", () => {
        removeActiveClasses2();
    });
});


const removeActiveClasses2 = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}










function f1() {
    document.getElementById('m1').style.display = "inline";
}
function f2() {
    document.getElementById('m1').style.display = "none";
}


function f3() {
    document.getElementById('m2').style.display = "inline";
}
function f4() {
    document.getElementById('m2').style.display = "none";
}


function f5() {
    document.getElementById('m3').style.display = "inline";
}
function f6() {
    document.getElementById('m3').style.display = "none";
}
function clickMountain() {
    document.getElementById('Mountain-d').style.display = "block";
    document.getElementById('forest-d').style.display = "none";
    document.getElementById('sea-d').style.display = "none";
    document.getElementById('ice-d').style.display = "none";

}
function clickIc() {
    document.getElementById('ice-d').style.display = "block";
    document.getElementById('forest-d').style.display = "none";
    document.getElementById('Mountain-d').style.display = "none";
    document.getElementById('sea-d').style.display = "none";

}

function clickSea() {
    document.getElementById('sea-d').style.display = "block";
    document.getElementById('forest-d').style.display = "none";
    document.getElementById('Mountain-d').style.display = "none";
    document.getElementById('ice-d').style.display = "none";


}

function clickForest() {
    document.getElementById('forest-d').style.display = "block";
    document.getElementById('Mountain-d').style.display = "none";
    document.getElementById('sea-d').style.display = "none";
    document.getElementById('ice-d').style.display = "none";

}

function leave() {
    document.getElementById('forest-d').style.display = "none";
    document.getElementById('Mountain-d').style.display = "none";
    document.getElementById('sea-d').style.display = "none";
    document.getElementById('ice-d').style.display = "none";
}





function rev() {
    document.getElementById('rev1').style.position = "relative";
    document.getElementById('rev1').style.top = "-100px";
}
function rev2() {
    document.getElementById('rev1').style.position = "relative";
    document.getElementById('rev1').style.top = "0px";
}

function rev3() {
    document.getElementById('rev2').style.position = "relative";
    document.getElementById('rev2').style.top = "-100px";
}
function rev4() {
    document.getElementById('rev2').style.position = "relative";
    document.getElementById('rev2').style.top = "0px";
}

function rev5() {
    document.getElementById('rev3').style.position = "relative";
    document.getElementById('rev3').style.top = "-100px";
}
function rev6() {
    document.getElementById('rev3').style.position = "relative";
    document.getElementById('rev3').style.top = "0px";
}

function rev7() {
    document.getElementById('rev4').style.position = "relative";
    document.getElementById('rev4').style.top = "-100px";
}
function rev8() {
    document.getElementById('rev4').style.position = "relative";
    document.getElementById('rev4').style.top = "0px";
}


function f7() {
    document.getElementById('m4').style.display = "inline";
}
function f8() {
    document.getElementById('m4').style.display = "none";
}





function thanks() {
    document.getElementById('thanks').style.display = "grid";
}
function ok() {
    document.getElementById('thanks').style.display = "none";
}






function delt1() {
    document.get('delete-1').style.display = "block";
}
function profile() {

    // flage
    let f = false;
    if (f == true) {
        window.location.href = "sign.html";
    }
    else {
        window.location.href = "profile.html";

    }
}
function apperCardPhoto() {
    document.getElementById('photo-card').style.display = "grid";
}
function home() {
    window.location.href = "firstt.html";

}
function openMountainPage() {
    window.location.href = "mountain.html";
}
function openForestPage() {
    window.location.href = "forest.html";
}
function openIceMountainPage() {
    window.location.href = "ice-mountain.html";
}
function openSeaPage() {
    window.location.href = "sea.html";
}

function apperChangPass() {
    document.getElementById('pass-card').style.display = "grid";
}