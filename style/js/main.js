// Toggling Skill Tabs
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills-active');
        })

        target.classList.add('skills-active');

        tabs.forEach(tab => {
            tab.classList.remove('skills-active');
        })

        tab.classList.add('skills-active');
    })
})
//Mix it up Sorting

let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

// Active link changing

const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l => l.addEventListener('click', activeWork));

// Scroll Section Active Link

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

// Activating Sidebar

const navMenu = document.getElementById('sidebar');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar');
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar');
    })
}