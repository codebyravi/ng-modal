export function isLeftButton(event: MouseEvent | TouchEvent) {
  return (event.type === 'mousedown' && (event as MouseEvent).button === 0);
}

export function getEvent(event: MouseEvent | TouchEvent): MouseEvent | Touch {
  if (event.type === 'touchend' || event.type === 'touchcancel') {
    return (event as TouchEvent).changedTouches[0];
  }
  return event.type.startsWith('touch') ? (event as TouchEvent).targetTouches[0] : event as MouseEvent;
}

export function maxZIndex(selectors: string = 'body *') {
  return Array.from(document.querySelectorAll(selectors))
    .map(a => parseFloat(window.getComputedStyle(a).zIndex))
    .filter(a => !isNaN(a))
    .sort((a, b) => a - b)
    .pop() || 0;
}

export function findAncestor(el, cls) {
  if (typeof el.closest === 'function') {
      return el.closest(cls) || null;
  }
  while (el) {
    if (el.classList.contains(cls)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
