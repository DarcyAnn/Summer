/**
 * Created by Administrator on 2016-5-8.
 */
var alertModel = document.getElementsByClassName("alert-outer")[0];
var confirmModal = document.getElementsByClassName("confirm-outer")[0];
var promptModal = document.getElementsByClassName("prompt-outer")[0];
var alertBtn1 = document.getElementsByClassName("alert-btn")[0];
var alertBtn2 = document.getElementsByClassName("alert-btn")[1];
var showConfirmBtn = document.getElementsByClassName("show-confirm-btn")[0];
var closeConfirmBtn1 = document.getElementsByClassName("close-confirm-btn")[0];
var closeConfirmBtn2 = document.getElementsByClassName("close-confirm-btn")[1];
var confirmBtn = document.getElementsByClassName("confirm-btn")[0];
var showPromptBtn = document.getElementsByClassName("show-prompt-btn")[0];
var closePromptBtn1 = document.getElementsByClassName("close-prompt-btn")[0];
var closePromptBtn2 = document.getElementsByClassName("close-prompt-btn")[1];
var promptBtn = document.getElementsByClassName("prompt-btn")[0];

function alertToggle() {
    if (window.getComputedStyle(alertModel).display === "none") {
        alertModel.style.display = "block";
        alertModel.style.height = document.body.scrollHeight + 'px';
    }
    else {
        alertModel.style.display = "none";
    }
}

function showConfirmModal() {
    confirmModal.style.display = "block";
    confirmModal.style.height = document.body.scrollHeight + 'px';
}

function closeConfirmModal() {
    confirmModal.style.display = "none";
}

function confirmInfo() {
    confirmModal.style.display = "none";
}

function showPromptModal() {
    promptModal.style.display = "block";
    promptModal.style.height = document.body.scrollHeight + 'px';
}

function closePromptModal() {
    promptModal.style.display = "none";
}

function promptInfo() {
    promptModal.style.display = "none";
}

alertBtn1.addEventListener('click', alertToggle, false);
alertBtn2.addEventListener('click', alertToggle, false);
showConfirmBtn.addEventListener('click', showConfirmModal, false);
closeConfirmBtn1.addEventListener('click', closeConfirmModal, false);
closeConfirmBtn2.addEventListener('click', closeConfirmModal, false);
confirmBtn.addEventListener('click', confirmInfo, false);
showPromptBtn.addEventListener('click', showPromptModal, false);
closePromptBtn1.addEventListener('click', closePromptModal, false);
closePromptBtn2.addEventListener('click', closePromptModal, false);
promptBtn.addEventListener('click', promptInfo, false);