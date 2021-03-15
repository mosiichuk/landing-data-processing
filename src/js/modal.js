document.addEventListener('DOMContentLoaded', function () {
    addEventListenersOnModalBackDrop();
    addEventListenersOnModalOpenersButtons();
    addEventListenersOnModalCloseButtons();
});

function addEventListenersOnModalOpenersButtons() {
    document.querySelectorAll('a[data-modal-id]').forEach(modalOpenButton => {
        modalOpenButton.addEventListener('click', (event) => {
            event.preventDefault();
            const modal = document.getElementById(modalOpenButton.dataset.modalId);
            modal.classList.toggle('show');
        });
    });
}

function addEventListenersOnModalCloseButtons() {
    document.querySelectorAll('.close').forEach(closeButton => {
        closeButton.addEventListener('click', (event) => {
            event.preventDefault();
            const modal = event.target.closest('.modal');
            const modalContent = event.target.closest('.modal-content');

            if (modalContent.classList.contains('modal-content-youtube')) {
                const iframe = modalContent.getElementsByTagName('iframe')[0];
                const videoUrl = iframe.src;
                iframe.src = '';
                iframe.src = videoUrl;
            }

            modal.classList.toggle('show');
        });
    });
}

function addEventListenersOnModalBackDrop() {
    document.querySelectorAll('.modal-dialog').forEach(modalDialog => {
        modalDialog.addEventListener('click', (event) => {
            if (event.target !== modalDialog)
                return;

            event.preventDefault();
            const modal = event.target.closest('.modal');
            modal.classList.toggle('show');

            const modalContent = modal.getElementsByClassName('modal-content-youtube')[0];

            if (modalContent !== null && modalContent !== undefined) {
                const iframe = modalContent.getElementsByTagName('iframe')[0];
                const videoUrl = iframe.src;
                iframe.src = '';
                iframe.src = videoUrl;
            }
        });
    });
}
