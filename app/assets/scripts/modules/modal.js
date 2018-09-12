import {getDomId, getDomClass, addEventLoop} from './helper';


class Modal {
    constructor() {
        this.openModalButton = getDomClass('js-open-modal');
        this.modal = getDomId('js-modal');
        this.closeModalButton = getDomId('js-modal__close');
        this.events();
    }

    events() {
        // open modal
        addEventLoop(this.openModalButton, 'click', this.openModal.bind(this));
        // close modal from the X button
        this.closeModalButton.addEventListener('click', this.closeModal.bind(this));
        // push any key
        document.addEventListener('keyup', this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.keyCode === 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.classList.add('modal_is-visible');
        return false;
    }

    closeModal() {
        this.modal.classList.remove('modal_is-visible');
    }
}

export default Modal;