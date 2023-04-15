/* js code */

let clickedCancelBtn = {}

const modalText = document.querySelector("#modal-text");
const btnYes = document.querySelector("#btn-yes");
const modal = document.querySelector('.modal'); 
const cancelButtons = document.querySelectorAll('.cancel-sub');

const handleCloseModal = () => {
    const cancelModal = document.querySelector('#cancel-modal');
    const modal = bootstrap.Modal.getInstance(cancelModal); 
    modal.hide();
}

const handleReplaceBtnToText = () => {
    const cell = clickedCancelBtn.parentNode;
    const newP = document.createElement("p");
    newP.textContent = 'Subscription cancelled';
    cell.replaceChild(newP, clickedCancelBtn)
}

// This sets the text value and calling the closing of modal
// replacing the column buttons into text 
const handleCancelSubscription = () => {
    const modalFooter = document.querySelector(".modal-footer");
    modalText.textContent = "Subscription successfully cancelled!";
    modalFooter.style.display = 'none';

    setTimeout(()=>{
        handleCloseModal();
        handleReplaceBtnToText();
        modalFooter.style.display = 'flex';
    }, 2000);
}

// iterate over each "Cancel" button element
cancelButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        clickedCancelBtn = button // initialize with DOM
    });
});

btnYes.addEventListener("click", () => {
   handleCancelSubscription();
});