// Dark Mode Toggle Functionality - Runs immediately on all pages
(function() {
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply theme immediately on page load (before DOMContentLoaded to prevent flash)
    // This ensures theme is applied before any content is rendered
    if (currentTheme === 'dark') {
        if (document.documentElement) {
            document.documentElement.classList.add('dark-mode');
        }
        if (document.body) {
            document.body.classList.add('dark-mode');
        }
    } else {
        // Ensure light mode is explicitly set
        if (document.documentElement) {
            document.documentElement.classList.remove('dark-mode');
        }
        if (document.body) {
            document.body.classList.remove('dark-mode');
        }
    }
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const html = document.documentElement;
        
        // Get current theme state
        const isCurrentlyDark = body.classList.contains('dark-mode') || html.classList.contains('dark-mode');
        
        // Update toggle button icon based on current theme
        function updateThemeIcon(isDark) {
            if (themeToggle) {
                const themeIcon = themeToggle.querySelector('.theme-icon');
                if (themeIcon) {
                    themeIcon.textContent = isDark ? '☀️' : '🌙';
                }
            }
        }
        
        // Initialize icon on page load based on actual state
        updateThemeIcon(isCurrentlyDark);
        
        // Sync localStorage with actual state (in case of inconsistency)
        if (isCurrentlyDark && localStorage.getItem('theme') !== 'dark') {
            localStorage.setItem('theme', 'dark');
        } else if (!isCurrentlyDark && localStorage.getItem('theme') !== 'light') {
            localStorage.setItem('theme', 'light');
        }
        
        // Toggle theme when button is clicked
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                const isDark = body.classList.contains('dark-mode') || html.classList.contains('dark-mode');
                
                if (isDark) {
                    // Switch to light mode
                    body.classList.remove('dark-mode');
                    html.classList.remove('dark-mode');
                    localStorage.setItem('theme', 'light');
                    updateThemeIcon(false);
                } else {
                    // Switch to dark mode
                    body.classList.add('dark-mode');
                    html.classList.add('dark-mode');
                    localStorage.setItem('theme', 'dark');
                    updateThemeIcon(true);
                }
            });
        }
    });
})();

// Toggle scrolled class on header when user scrolls 100px down
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    if (scrollPosition > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    const nav = document.querySelector('nav');
    
    if (hamburger && navList && nav) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navList.classList.toggle('active');
            nav.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                nav.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                nav.classList.remove('menu-open');
            }
        });
    }
});

