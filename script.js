document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.image-slider');
    let isPaused = false; // 控制滚动暂停的标志

    function pauseScroll() {
        isPaused = true;
        slider.style.animationPlayState = 'paused';
    }

    function playScroll() {
        isPaused = false;
        slider.style.animationPlayState = 'running';
    }

    document.getElementById('pause').addEventListener('click', pauseScroll);
    document.getElementById('play').addEventListener('click', playScroll);

    function setScrollSpeed(duration) {
        slider.style.animationDuration = duration;
    }

    // 示例：设置滚动速度为30秒完成一次循环
    setScrollSpeed('30s');
});
