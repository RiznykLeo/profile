const mySkills = [
    'HTML', 'CSS', 'SCSS',
    'Bootstrap', 'Git', 'React',
    'Figma', 'PostgresSQL', 'Heroku',
    'Javascript', 'Github', 'Ruby on Rails',
];

TagCloud(".skills", mySkills, {
    radius: 180,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true
});
