function myFunction(){
    let setH = document.getElementById("ho").value;
    let setV = document.getElementById("vo").value;
    let setB = document.getElementById("bl").value;
    let setS = document.getElementById("sd").value;
    document.getElementsByClassName('outside-box')[0].style.boxShadow = `${setH}px ${setV}px ${setB}px ${setS}px #000000`;
}

function getIndexFromBoxShadow(){
    const box = document.querySelector('.outside-box');
    if (!box) return;

    const style = window.getComputedStyle(box);
    const myShadowBox= style.boxShadow;

    if(myShadowBox === 'none') return;

    const pxValues = myShadowBox.match(/-?\d+px/g);

    if (pxValues && pxValues.length >= 4) {
        document.getElementById('ho').value = parseInt(pxValues[0]);
        document.getElementById('vo').value = parseInt(pxValues[1]);
        document.getElementById('bl').value = parseInt(pxValues[2]);
        document.getElementById('sd').value = parseInt(pxValues[3]);
    }
}

document.addEventListener('DOMContentLoaded', getIndexFromBoxShadow);