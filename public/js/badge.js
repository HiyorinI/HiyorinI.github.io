// Badge 脚本
// 用于显示 PRO 徽章等

document.addEventListener('DOMContentLoaded', function() {
    // 添加 PRO 徽章到指定元素
    const proElements = document.querySelectorAll('.pro-badge-target');
    proElements.forEach(element => {
        const badge = document.createElement('span');
        badge.className = 'pro-badge';
        badge.textContent = 'PRO';
        element.appendChild(badge);
    });
});
