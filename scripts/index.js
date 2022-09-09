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

const nav = document.querySelector(".nav")

window.onscroll = (event) => {

    // print "false" if direction is down and "true" if up
    const scroll = this.oldScroll > this.scrollY;

    scroll ? nav.classList.remove("scroll-up") : nav.classList.add("scroll-up");

    this.oldScroll = this.scrollY;
}


