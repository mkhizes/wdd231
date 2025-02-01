const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox div');

openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML='Non Profit Organisation have free benefit'
});

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML='Bronze Membership has the following benefits:'
});

openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML='Silver Membership has the following benefits:'
});

openButton4.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML='Gold Membership has the following benefits:'
});


closeButton.addEventListener('click', () => {
    dialogBox.close();
});
