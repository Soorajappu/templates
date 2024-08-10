// Settings code

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked nav link
            this.classList.add('active');
        });
    });
});

// End of settings

// Popup section

document.addEventListener('DOMContentLoaded', function() {
    const userImg = document.getElementById('user-img');
    const profilePopup = document.getElementById('profile-popup');
    const popupBack = document.getElementById('popup-back');
    const mainContent = document.querySelector('main');

    userImg.addEventListener('click', function(e) {
        e.preventDefault();
        profilePopup.classList.remove('d-none');
        mainContent.classList.add('blur');
    });

    popupBack.addEventListener('click', function() {
        profilePopup.classList.add('d-none');
        mainContent.classList.remove('blur');
    });

    profilePopup.addEventListener('click', function(e) {
        if (e.target === profilePopup) {
            profilePopup.classList.add('d-none');
            mainContent.classList.remove('blur');
        }
    });
});

// profile section popup

document.addEventListener('DOMContentLoaded', function() {
    const nameBoxSection = document.getElementById('name-box-section');
    const profilePopup = document.getElementById('profile-popup');
    const popupBack = document.getElementById('popup-back');
    const mainContent = document.querySelector('main');

    nameBoxSection.addEventListener('click', function(e) {
        e.preventDefault();
        profilePopup.classList.remove('d-none');
        mainContent.classList.add('blur');
    });

    popupBack.addEventListener('click', function() {
        profilePopup.classList.add('d-none');
        mainContent.classList.remove('blur');
    });

    profilePopup.addEventListener('click', function(e) {
        if (e.target === profilePopup) {
            profilePopup.classList.add('d-none');
            mainContent.classList.remove('blur');
        }
    });
});



// End of popup section