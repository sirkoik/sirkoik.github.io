let bg = null;
let fg = null;
let content = null;

export const showModal = (event) => {
  bg.style.display = 'block';
  fg.style.display = 'flex';
}

export const hideModal = (event) => {
  bg.style.display = 'none';
  fg.style.display = 'none';
}

// loads the modal and the element references.
export const loadModal = () => {
  bg = document.getElementById('modal-background');
  fg = document.getElementById('modal1');
  content = document.getElementById('modal-box-content');

  bg.addEventListener('click', hideModal);
  fg.addEventListener('click', hideModal);
  content.addEventListener('click', event => {
    event.stopPropagation();
  });
}