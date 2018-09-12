export function getDomClass(els) {
    return document.getElementsByClassName(els);
}
export function getDomId(els) {
    return document.getElementById(els);
}

export function addEventLoop(elements, event, fn) {
    Array.from(elements).forEach(element=> {
        element.addEventListener(event, fn, false);
    }); 
}

export function addRemoveClassLoop(elements, action, className) {
    Array.from(elements).forEach(element=> {
        element.classList[action](className);
    }); 
} 