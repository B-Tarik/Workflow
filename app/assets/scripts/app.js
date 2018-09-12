import Modal from './modules/modal';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

var modal = new Modal;