function acceptCookies() {
    document.getElementById('cookieWall').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('cookieWall').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 500);
}

const movingDiv = document.createElement('div');
movingDiv.className = 'moving-div';
document.body.appendChild(movingDiv);

movingDiv.addEventListener('click', function() {

    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    movingDiv.style.backgroundColor = randomColor;
});

movingDiv.addEventListener('animationiteration', () => {
    const divWidth = movingDiv.offsetWidth;
    const currentLeft = parseInt(movingDiv.style.left) || 0;

    if (currentLeft < -divWidth) {

        movingDiv.style.left = '100%';
    }
});
