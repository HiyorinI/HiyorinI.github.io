// 页面横幅脚本
// 用于处理页面横幅的交互

document.addEventListener('DOMContentLoaded', function() {
    // 横幅动画
    const banner = document.querySelector('.banner');
    if (banner) {
        banner.classList.add('loaded');
    }
    
    // 搜索框快捷键
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-line-edit');
            if (searchInput) {
                searchInput.click();
            }
        }
    });
});
