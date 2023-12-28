dataProject = [
    {
    'img1': 'ASSET/doll.png',
    'img2': 'ASSET/doll.png',
    'title': 'KENGAN ASHURA',
    'subtitle': 'Anime',
    'desc': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, velit. Libero deleniti quis atque repudiandae adipisci aperiam reprehenderit nostrum quas.'
    },
    {
    'img1': 'ASSET/roblox.png',
    'img2': 'ASSET/roblox.png',
    'title': 'ROBLOX',
    'subtitle': 'Game',
    'desc': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, velit. Libero deleniti quis atque repudiandae adipisci aperiam reprehenderit nostrum quas.'
    }
]

dataSkill = [
    {
    'icon': 'logos:python',
    'title': 'PYTHON',
    'desc': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, velit. Libero deleniti quis atque repudiandae adipisci aperiam reprehenderit nostrum quas.'
    },
    {
    'icon': 'logos:javascript',
    'title': 'JAVASCRIPT',
    'desc': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, velit. Libero deleniti quis atque repudiandae adipisci aperiam reprehenderit nostrum quas.'
    },
    {
    'icon': 'logos:java',
    'title': 'JAVA',
    'desc': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, velit. Libero deleniti quis atque repudiandae adipisci aperiam reprehenderit nostrum quas.'
    },
    {
    'icon': 'fa-solid:database',
    'title': 'DATABASE',
    'desc': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, velit. Libero deleniti quis atque repudiandae adipisci aperiam reprehenderit nostrum quas.'
    },
    {
    'icon': 'skill-icons:golang',
    'title': 'GOLANG',
    'desc': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, velit. Libero deleniti quis atque repudiandae adipisci aperiam reprehenderit nostrum quas.'
    },
    {
    'icon': 'devicon:mysql',
    'title': 'MYSQL',
    'desc': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, velit. Libero deleniti quis atque repudiandae adipisci aperiam reprehenderit nostrum quas.'
    },
    {
    'icon': 'devicon:php',
    'title': 'PHP',
    'desc': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, velit. Libero deleniti quis atque repudiandae adipisci aperiam reprehenderit nostrum quas.'
    },
]

const container_project = document.querySelector('.container-project')
dataProject.forEach(element => {
    container_project.innerHTML +=
    `
    <div class="project">
    <div class="img-project">
        <img src="${element.img1}">
        <img src="${element.img2}">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <h3>${element.desc}</h3>
    </div>
    <button class="read-more">Read more</button>
    </div>
    `
});

const container_skill = document.querySelector('.container-skill .skill')
dataSkill.forEach(element => {
    container_skill.innerHTML +=
    `
        <div class="card-skill">
            <div class="icon-skill">
                <iconify-icon icon="${element.icon}"></iconify-icon>
            </div>
            <div class="desc-skill">
                <h2>${element.title}</h2>
                <p>${element.desc}</p>
            </div>
        </div>
    `
});