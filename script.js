var isNoBtnHidden = false;

function SetCatImg(src, alt) {
    document.querySelector('img').src = src;
    document.querySelector('img').alt = alt;

    if (isNoBtnHidden)
        document.querySelector('.wrong-answer').style.display = 'none';
}

function DisableNoBtn() {
    SetCatImg('angry_cat.png', 'Angry Cat');
    document.querySelector('.wrong-answer').style.display = 'block';
    
    var btn = document.querySelector('#no-btn');
    btn.onmouseleave = '';
    btn.style.display = 'none';
    isNoBtnHidden = true;
}
