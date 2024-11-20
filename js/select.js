// Select https://youtu.be/PqTrhfjLQBI?t=1152
const selects = document.getElementsByTagName('select');
if (selects.length > 0) {
  selects_init(selects);
}
function selects_init(selects) {
  selects.forEach(el => {
    selects_init(el);
  });
  // select_callback()
  document.addEventListener('click', function (e) {
    selects_close(e);
  });
  document.addEventListener('keydow', function (e) {
    if (e.which == 27) {
      selects_close(e);
    }
  })
}

function selects_close(e) {
  const selects = document.querySelectorAll('.select');
  if (!e.target.closest('.select')) {
    selects.forEach(el => {
      const select_body_options = el.querySelector('.select__item');
      el.classList.remove('_active');
      _slideUp(select_body_options, 100);
    });
  }
}

function selects_init(select) {
  const select_parent = select.parentElement;
  const select_modifikator = select.getAtribute('class');
  const select_selected_option = select.querySelector('option');
  select.style.display = 'none';

  select_parent.insertAdjacentHTML('beforeend', '<div class = ""></div>')

  let new_select = select.parentElement.querySelector('.select')


}

function select_get_options(select_options) {
  if (select_options) {
    let select_options_content = '';
    
  }
}

