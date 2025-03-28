document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header-left h1').addEventListener('click', function() {
        switchTab('projects');
    });

    document.querySelector('.header-left h2').addEventListener('click', function() {
        switchTab('medias');
    });
});

function switchTab(tabId) {
    document.querySelectorAll('.header-left h1, .header-left h2').forEach(function(tab) {
        tab.classList.remove('active');
        tab.classList.add('inactive');
    });

    document.querySelectorAll('.projects, .medias').forEach(function(section) {
        section.classList.remove('active');
    });

    if (tabId === 'projects') {
        document.querySelector('.header-left h1').classList.add('active');
        document.querySelector('.header-left h1').classList.remove('inactive');
        document.getElementById('info-container').style.display = 'flex';
    } else if (tabId === 'medias') {
        document.querySelector('.header-left h2').classList.add('active');
        document.querySelector('.header-left h2').classList.remove('inactive');
        document.getElementById('info-container').style.display = 'none';
    }

    document.querySelector(`.${tabId}`).classList.add('active');
}

function changeBackground(imagePath) {
    document.body.style.backgroundImage = `url(${imagePath})`;
}

function toggleBackgroundSelector () {
    const selector = document.getElementById('background-selector');
    if (selector.style.display === 'none' || selector.style.display === '') {
        selector.style.display = 'flex';
    } else {
        selector.style.display = 'none';
    }
}

function showInfoOverlay() {
    document.getElementById('info-overlay').style.display = 'flex';
}

function hideInfoOverlay() {
    document.getElementById('info-overlay').style.display = 'none';
}

const projectData = {
    project1: [
        { type: 'large', content: 'Langages utilisés: HTML, CSS, JavaScript' },
        { type: 'small', content: 'Repository Git: <a href="https://github.com/Csolatus/cliUnix" target="_blank">Lien</a>' },
        { type: 'small', content: 'Temps de travail: 15 heures' },
        { type: 'large', content: 'Statut: En cours' }
    ],
    project2: [
        { type: 'large', content: 'Langages utilisés: HTML, CSS, Javascript' },
        { type: 'small', content: 'Repository Git: <a href="https://github.com/kakotodev/Challenge-Web-ASrock" target="_blank">Lien</a>' },
        { type: 'small', content: 'Temps de travail: 40 heures' },
        { type: 'large', content: 'Statut: Terminé' }
    ]
}

function updateProjectInfo(projectId) {
    const infoContainer = document.getElementById('info-container');
    const projectInfo = projectData[projectId];

    infoContainer.innerHTML = '';

    const column1 = document.createElement('div');
    column1.className = 'info-column';

    const column2 = document.createElement('div');
    column2.className = 'info-column';

    projectInfo.forEach((info, index) => {
        const infoBlock = document.createElement('div');
        infoBlock.className = `info-block ${info.type}`;
        infoBlock.innerHTML = `<p>${info.content}</p>`;
        if (index % 2 === 0) {
            column1.appendChild(infoBlock);
        } else {
            column2.appendChild(infoBlock);
        }
    })

    infoContainer.appendChild(column1);
    infoContainer.appendChild(column2);
}

function updateClock() {
    const heureElement = document.getElementById('heure');
    if (!heureElement) return;
    
    const now = new Date();
    const heure = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const secondes = now.getSeconds().toString().padStart(2, '0');
    heureElement.textContent = `${heure}:${minutes}:${secondes}`;
}

setInterval(updateClock, 1000);

updateClock();
