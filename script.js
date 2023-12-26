document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const homeContent = document.getElementById('home-content');
    const newEntryContent = document.getElementById('new-entry-content');
    const viewEntriesContent = document.getElementById('view-entries-content');
    const viewBookmarksContent = document.getElementById('view-bookmarks-content');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform authentication here
        if (username === 'your_username' && password === 'your_password') {
            // If authentication is successful, hide the login form and show the home content
            loginForm.style.display = 'none';
            homeContent.style.display = 'block';
        } else {
            // Handle unsuccessful login (e.g., show an error message)
            alert('Invalid username or password');
        }
    });

    // Function to redirect to a new page
    function redirectTo(page) {
        homeContent.style.display = 'none';
        newEntryContent.style.display = 'none';
        viewEntriesContent.style.display = 'none';
        viewBookmarksContent.style.display = 'none';

        document.getElementById(page).style.display = 'block';
    }

    // Function to handle logout
    function logout() {
        // Perform any necessary logout actions (e.g., clearing session data)
        // Then redirect to the login page
        loginForm.style.display = 'block';
        homeContent.style.display = 'none';
        newEntryContent.style.display = 'none';
        viewEntriesContent.style.display = 'none';
        viewBookmarksContent.style.display = 'none';
        
        // Redirect to the login page
        window.location.href = 'index.html';
    }

    // Example: Functionality for the New Entry page (you can customize this)
    document.getElementById('new-entry-button').addEventListener('click', function () {
        redirectTo('new-entry-content');
    });

    // Example: Functionality for the View Entries page (you can customize this)
    document.getElementById('view-entries-button').addEventListener('click', function () {
        redirectTo('view-entries-content');
    });

    // Example: Functionality for the View Bookmarks page (you can customize this)
    document.getElementById('view-bookmarks-button').addEventListener('click', function () {
        redirectTo('view-bookmarks-content');
    });

    // Example: Logout button functionality
    document.getElementById('logout-button').addEventListener('click', function () {
        logout();
    });
});
