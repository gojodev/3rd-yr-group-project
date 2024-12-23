const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

if (username) {
    const links = document.querySelectorAll('.mobile-menu a, .footernav1 a');

    links.forEach(link => {
        const href = link.href;

        if (href && !href.includes('index.html')) {
            link.href = `${href}?username=${encodeURIComponent(username)}`;
        }
    });
}