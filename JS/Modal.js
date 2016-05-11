/**
 * Created by Administrator on 2016-5-8.
 */
function alertToggle() {
    var alertModel = document.getElementsByClassName("alert-outer")[0];
    if (window.getComputedStyle(alertModel).display === "none") {
        alertModel.style.display = "block";
        alertModel.style.height = document.body.scrollHeight+'px';
    }
    else {
        alertModel.style.display = "none";
    }
}

function showConfirmModal(){
    var confirmModal = document.getElementsByClassName("confirm-outer")[0];
    confirmModal.style.display = "block";
    confirmModal.style.height = document.body.scrollHeight+'px';
}

function closeConfirmModal(){
    var confirmModal = document.getElementsByClassName("confirm-outer")[0];
    confirmModal.style.display = "none";
}

function confirmInfo(){
    var confirmModal = document.getElementsByClassName("confirm-outer")[0];
    confirmModal.style.display = "none";
}

function showPromptModal(){
    var promptModal = document.getElementsByClassName("prompt-outer")[0];
    promptModal.style.display = "block";
    promptModal.style.height = document.body.scrollHeight+'px';
}

function closePromptModal(){
    var promptModal = document.getElementsByClassName("prompt-outer")[0];
    promptModal.style.display = "none";
}

function promptInfo(){
    var promptModal = document.getElementsByClassName("prompt-outer")[0];
    promptModal.style.display = "none";
}