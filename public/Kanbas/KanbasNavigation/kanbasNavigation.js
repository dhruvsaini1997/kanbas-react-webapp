export default function KanbasNavigation(active) {
        const menuItems = [
                { label: 'Account', icon: 'fa fa-user', link: '/Kanbas/Account/Profile/screen.html' },
                { label: 'Dashboard', icon: 'fa fa-tachometer', link: '/Kanbas/Dashboard/screen.html' },
                { label: 'Courses', icon: 'fa fa-book', link: '/kanbas/Courses/Home/screen.html' },
                { label: 'Calendar', icon: 'fa fa-calendar', link: '#' },
                { label: 'Inbox', icon: 'fa fa-inbox', link: '#' },
                { label: 'History', icon: 'fa fa-clock-o', link: '#' },
                { label: 'Studio', icon: 'fa fa-desktop', link: '#' },
                { label: 'Commons', icon: 'fa fa-sign-out', link: '#' },
                { label: 'Help', icon: 'fa fa-question-circle-o', link: '#' },
        ];

        return `
        <ul class="wd-kanbas-navigation">
        <li>
        <a href="/Kanbas/Account/Profile/screen.html">
            <img src="../../../Images/monoNu.svg">
    </li>
            ${menuItems.map(item => `
                <li class="${item.label === active ? 'wd-active' : ''}">
                    <a href="${item.link}">
                        <i class="${item.icon}" aria-hidden="true"></i><br />
                        ${item.label}
                    </a>
                </li>`).join('')}
        </ul>`;
}
