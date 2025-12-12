
(function() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        if (document.documentElement) {
            document.documentElement.classList.add('dark-mode');
        }
        if (document.body) {
            document.body.classList.add('dark-mode');
        }
    } else {
        if (document.documentElement) {
            document.documentElement.classList.remove('dark-mode');
        }
        if (document.body) {
            document.body.classList.remove('dark-mode');
        }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const html = document.documentElement;
        
        const isCurrentlyDark = body.classList.contains('dark-mode') || html.classList.contains('dark-mode');
        
        function updateThemeIcon(isDark) {
            if (themeToggle) {
                const themeIcon = themeToggle.querySelector('.theme-icon');
                if (themeIcon) {
                    themeIcon.textContent = isDark ? '☀️' : '🌙';
                }
            }
        }
        
        updateThemeIcon(isCurrentlyDark);
        
        if (isCurrentlyDark && localStorage.getItem('theme') !== 'dark') {
            localStorage.setItem('theme', 'dark');
        } else if (!isCurrentlyDark && localStorage.getItem('theme') !== 'light') {
            localStorage.setItem('theme', 'light');
        }
        
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                const isDark = body.classList.contains('dark-mode') || html.classList.contains('dark-mode');
                
                if (isDark) {
                    body.classList.remove('dark-mode');
                    html.classList.remove('dark-mode');
                    localStorage.setItem('theme', 'light');
                    updateThemeIcon(false);
                } else {
                    body.classList.add('dark-mode');
                    html.classList.add('dark-mode');
                    localStorage.setItem('theme', 'dark');
                    updateThemeIcon(true);
                }
            });
        }
    });
})();

window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    if (scrollPosition > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

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

        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                nav.classList.remove('menu-open');
            });
        });


        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                nav.classList.remove('menu-open');
            }
        });
    }
});

