const nav =  document.querySelector('.main-nav');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    const visibilty = nav.getAttribute("data-visible");

    if(visibilty === "false"){
        nav.setAttribute("data-visible", true);
        hamburger.setAttribute("aria-expanded", true);
    }else{
        nav.setAttribute("data-visible", false);
        hamburger.setAttribute("aria-expanded", false);
    }
})

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});


let tabFocus = 0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        
        if (e.keyCode === keydownRight) {
            tabFocus++;
            if (tabFocus >= tabs.length) {
                tabFocus = 0;
            }
        }
    
        if (e.keyCode === keydownLeft) {
            tabFocus--;
            if (tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
        }
        
        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    }
}


function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    const targetImage = targetTab.getAttribute("data-image");

    tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);
    
targetTab.setAttribute("aria-selected", true);

hideContent(mainContainer, '[role="tabpanel"]');
showContent(mainContainer, [`#${targetPanel}`]);

hideContent(mainContainer, 'img')
showContent(mainContainer, [`#${targetImage}`])
}

function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.classList.add("hidden"));
}

function showContent(parent, content) {
     parent.querySelector(content).classList.remove('hidden');
}