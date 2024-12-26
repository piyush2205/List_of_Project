const Porject = [
    {
        id: 1,
        name: "Dashboard App",
        description: "A modern analytics dashboard with real-time data visualization and interactive charts.",
        status: "active",
        image: "https://res.cloudinary.com/dk22rcdch/image/upload/v1615990176/Portfolio/projects/dashboard-app.png",
        url: "https://dashboard-app-portfolio.netlify.app/",
        techStack: ["React", "Chart.js", "Styled Components"]
    },
    {
        id: 2,
        name: "Dashboard App",
        description: "A modern analytics dashboard with real-time data visualization and interactive charts.",
        status: "active",
        image: "https://res.cloudinary.com/dk22rcdch/image/upload/v1615990176/Portfolio/projects/dashboard-app.png",
        url: "https://dashboard-app-portfolio.netlify.app/",
        techStack: ["React", "Chart.js", "Styled Components"]
    },

    {
        id: 3,
        name: "Dashboard App",
        description: "A modern analytics dashboard with real-time data visualization and interactive charts.",
        status: "active",
        image: "https://res.cloudinary.com/dk22rcdch/image/upload/v1615990176/Portfolio/projects/dashboard-app.png",
        url: "https://dashboard-app-portfolio.netlify.app/",
        techStack: ["React", "Chart.js", "Styled Components"]
    },
    {
        id: 3,
        name: "Dashboard App",
        description: "A modern analytics dashboard with real-time data visualization and interactive charts.",
        status: "active",
        image: "https://res.cloudinary.com/dk22rcdch/image/upload/v1615990176/Portfolio/projects/dashboard-app.png",
        url: "https://dashboard-app-portfolio.netlify.app/",
        techStack: ["React", "Chart.js", "Styled Components"]
    },
    {
        id: 3,
        name: "Dashboard App",
        description: "A modern analytics dashboard with real-time data visualization and interactive charts.",
        status: "active",
        image: "https://res.cloudinary.com/dk22rcdch/image/upload/v1615990176/Portfolio/projects/dashboard-app.png",
        url: "https://dashboard-app-portfolio.netlify.app/",
        techStack: ["React", "Chart.js", "Styled Components"]
    },
    {
        id: 3,
        name: "Dashboard App",
        description: "A modern analytics dashboard with real-time data visualization and interactive charts.",
        status: "active",
        image: "https://res.cloudinary.com/dk22rcdch/image/upload/v1615990176/Portfolio/projects/dashboard-app.png",
        url: "https://dashboard-app-portfolio.netlify.app/",
        techStack: ["React", "Chart.js", "Styled Components"]
    },
    {
        id: 3,
        name: "Dashboard App",
        description: "A modern analytics dashboard with real-time data visualization and interactive charts.",
        status: "active",
        image: "https://res.cloudinary.com/dk22rcdch/image/upload/v1615990176/Portfolio/projects/dashboard-app.png",
        url: "https://dashboard-app-portfolio.netlify.app/",
        techStack: ["React", "Chart.js", "Styled Components"]
    },
    {
        id: 3,
        name: "Dashboard App",
        description: "A modern analytics dashboard with real-time data visualization and interactive charts.",
        status: "active",
        image: "https://res.cloudinary.com/dk22rcdch/image/upload/v1615990176/Portfolio/projects/dashboard-app.png",
        url: "https://dashboard-app-portfolio.netlify.app/",
        techStack: ["React", "Chart.js", "Styled Components"]
    },
    {
        id: 3,
        name: "Dashboard App",
        description: "A modern analytics dashboard with real-time data visualization and interactive charts.",
        status: "active",
        image: "https://res.cloudinary.com/dk22rcdch/image/upload/v1615990176/Portfolio/projects/dashboard-app.png",
        url: "https://dashboard-app-portfolio.netlify.app/",
        techStack: ["React", "Chart.js", "Styled Components"]
    },
]


const AppendProjects = () => {

    Porject.forEach((el, i) => {

        let project_card = document.createElement('div');
        project_card.classList.add('project-card');

        let project_icon = document.createElement('div');
        project_icon.classList.add('project-icon');
        project_icon.innerHTML = `<i class="ph-bold ph-device-mobile"></i>`;
        project_card.appendChild(project_icon);

        let project_name = document.createElement('h3');
        project_name.innerHTML = el.name;
        project_card.appendChild(project_name);

        let project_description = document.createElement('p');
        project_description.innerHTML = el.description;
        project_card.appendChild(project_description);

        let technologies = document.createElement('div');
        technologies.classList.add('technologies');
        project_card.appendChild(technologies);

        el.techStack.forEach(el => {
            let technology_tag = document.createElement('span');
            technology_tag.classList.add('technology-tag');
            technology_tag.innerHTML = el;
            technologies.appendChild(technology_tag);
        });

        document.querySelector('.projects-grid').appendChild(project_card);
    });


}

AppendProjects();

{/*<div class="projects-grid">
    <div class="project-card">
        <div class="project-icon">
            <i class="ph-bold ph-device-mobile"></i>
        </div>
        <h3>Dashboard App</h3>
        <p>A modern analytics dashboard with real-time data visualization and interactive charts.</p>
        <div class="technologies">
            <span class="technology-tag">React</span>
            <span class="technology-tag">Node.js</span>
            <span class="technology-tag">D3.js</span>
        </div>
    </div>


</div>*/}