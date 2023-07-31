const defaultBtn = document.getElementById('defaultBtn')
const hideBtn = document.getElementById('hideBtn')

let count = 0;

function click() {
  count++;
  console.log(count);
  if(count >= 10) {
    hideBtn.classList.remove('hide')
  }
};

defaultBtn.addEventListener('click', click);

