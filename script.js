document.getElementById('pause').addEventListener('click', function() {
    document.querySelector('.image-slider').style.animationPlayState = 'paused';
});

document.getElementById('play').addEventListener('click', function() {
    document.querySelector('.image-slider').style.animationPlayState = 'running';
});
