// Function to initialize tabs for a specific section with custom classes
function initializeTabs(section, options = {}) {
    const defaultOptions = {
        tabBtnClass: '.nxt-tab__area__tab-btn',
        tabContentClass: '.nxt-tab__area__tab-content',
        activeClass: 'active',
    };

    // Merge default options with provided options
    const settings = { ...defaultOptions, ...options };

    const tabBtns = section.querySelectorAll(settings.tabBtnClass);
    const tabContents = section.querySelectorAll(settings.tabContentClass);

    tabBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const tabId = btn.getAttribute('data-tab');
            // Remove active from all
            tabBtns.forEach(function (b) {
                b.classList.remove(settings.activeClass);
            });
            tabContents.forEach(function (c) {
                c.classList.remove(settings.activeClass);
            });
            // Add active to clicked and its content
            btn.classList.add(settings.activeClass);
            const content = section.querySelector('#' + tabId);
            if (content) content.classList.add(settings.activeClass);
        });
    });
}

// Initialize all tab sections when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize default nxt-tab sections
    const defaultTabSections = document.querySelectorAll('.nxt-tab__area');
    defaultTabSections.forEach((section) => initializeTabs(section));
});

// Export the function to make it available globally
window.initializeTabs = initializeTabs;
