// Free Web Template -- licensed under the MIT License -- Copyright (c) 2026 Team RodZilla LLC (https://www.teamrodzilla.com) -- see LICENSE

var navbar = document.querySelector('.navbar');
var menuBtn = document.querySelector('#menu-btn');

function toggleNavbar() {
	var isOpen = navbar.classList.toggle('active');
	menuBtn.setAttribute('aria-expanded', isOpen);
}

menuBtn.onclick = toggleNavbar;

window.onscroll = () => {
	navbar.classList.remove('active');
	menuBtn.setAttribute('aria-expanded', 'false');
}
