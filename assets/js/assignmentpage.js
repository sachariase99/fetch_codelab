hintScan();

function hintScan() {
    
    const myHintButtons = Array.from(document.getElementsByClassName('hintbutton'));

    myHintButtons.map(element => {
        element.addEventListener('click', (e) => {

            e.currentTarget.nextElementSibling.classList.toggle('hint');
            console.log(e.currentTarget.nextElementSibling);
        });
    });

}