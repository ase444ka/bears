
export default function initDropdown(dropdown, handler) {




  const toggleVisibility = (dropdown) => {
    if (dropdown.classList.contains('dropdown_minimized')) {
      expand(dropdown);
    } else {
      minimize(dropdown);
      select(dropdown);
      refreshIndicators(dropdown)
    }
  };

  const select = (dropdown) => {
    setTimeout(() => {
      const checked = Array.prototype.find.call(
        dropdown.querySelectorAll('input'),
        (input) => input.checked

      );
      handler(checked.value)
      const option = checked.closest('.dropdown__option');
      setTimeout(() => {
        dropdown.prepend(option);
      }, 200);
    }, 0);
  };

  const minimize = (dropdown) => {
    dropdown.classList.add('dropdown_minimized');
  };

  const expand = (dropdown) => {
    dropdown.classList.remove('dropdown_minimized');
  };

  const refreshIndicators = (dropdown, input) => {
    dropdown.querySelectorAll('input').forEach((item) => {
      item.classList.remove('input_hover');
    });
    input && input.classList.add('input_hover');
  }

    dropdown.addEventListener('pointerup', (e) => {
      toggleVisibility(dropdown);
      e.stopPropagation()
    });

    dropdown.addEventListener(
      'keyup',
      (e) => {
        if (e.key === 'Tab') {
          expand(dropdown);
          const input = e.target;
          refreshIndicators(dropdown, input)
        }
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          expand(dropdown);
          const input = e.target;
          refreshIndicators(dropdown, input)
        }  
        if (e.keyCode === 13) {
          minimize(dropdown)
          select(dropdown)
          refreshIndicators(dropdown)
        }
      },
      true
    );

  document.addEventListener('pointerup', (e) => {
    if (!e.target.classList.contains('.dropdown__label')) {
        minimize(dropdown);
        select(dropdown);
        refreshIndicators(dropdown)
    }
  });
}
