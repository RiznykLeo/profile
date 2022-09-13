const nav = document.querySelector(".nav")
const head = document.querySelector(".headers")

function skills() {
    const mySkills = [
        'HTML', 'CSS', 'SCSS',
        'Bootstrap', 'Git',
        'Figma', 'PostgresSQL', 'Heroku',
        'Javascript', 'Github', 'Ruby on Rails',
    ];
    TagCloud(".skills", mySkills, {
        radius: 160,
        maxSpeed: 'normal',
        initSpeed: 'slow',
        direction: 135,
        keep: true
    });
}

function navScroll() {
    window.onscroll = (event) => {
        const scroll = this.oldScroll > this.scrollY;
        scroll ? nav.classList.remove("scroll-up") : nav.classList.add("scroll-up");
        this.oldScroll = this.scrollY;
    }
}

function burger() {
    if (nav.classList.contains("responsive")) {
        nav.classList.remove("responsive")
        head.classList.remove("top-add")
    } else {
        nav.classList.add("responsive")
        head.classList.add("top-add")
    }
}

