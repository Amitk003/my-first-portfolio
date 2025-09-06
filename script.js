'use strict';

// Toggle element active class
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Sidebar functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// Filter functionality
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

if (select) {
    select.addEventListener('click', function() { elementToggleFunc(this); });
}

selectItems.forEach(item => {
    item.addEventListener('click', function() {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
});

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = (selectedValue) => {
    filterItems.forEach(item => {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};

// Filter buttons for larger screens
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;
    });
});

// Contact form validation
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

formInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else {
            formBtn.setAttribute('disabled', '');
        }
    });
});

// Page navigation
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach((link, linkIndex) => {
    link.addEventListener('click', function() {
        const targetPage = this.innerHTML.toLowerCase();
        
        pages.forEach((page, pageIndex) => {
            if (targetPage === page.dataset.page) {
                page.classList.add('active');
                navigationLinks[pageIndex].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                page.classList.remove('active');
                navigationLinks[pageIndex].classList.remove('active');
            }
        });
    });
});