let i = 0,
  j = 0;
export default function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');

  if (!dropdowns) return

  const toggleVisibility = (dropdown) => {
    console.log(i++);
    if (dropdown.classList.contains('dropdown_minimized')) {
      expand(dropdown);
    } else {
      minimize(dropdown);
      liftUpChecked(dropdown);
      refreshIndicators(dropdown)
    }
  };

  const liftUpChecked = (dropdown) => {
    setTimeout(() => {
      const checked = Array.prototype.find.call(
        dropdown.querySelectorAll('input'),
        (input) => input.checked
      );
      const option = checked.closest('.dropdown__option');
      setTimeout(() => {
        dropdown.prepend(option);
      }, 200);
    }, 0);
  };

  const minimize = (dropdown) => {
    console.log('ninini')
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

  dropdowns.forEach((item) => {
    item.addEventListener('pointerup', (e) => {
      const dropdown = e.currentTarget;
      toggleVisibility(dropdown);
      e.stopPropagation()
    });
  });

  dropdowns.forEach((item) => {
    item.addEventListener(
      'keyup',
      (e) => {
        const dropdown = e.currentTarget.closest('.dropdown');
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
          liftUpChecked(dropdown)
          refreshIndicators(dropdown)
        }
      },
      true
    );
  });

  document.addEventListener('pointerup', (e) => {
    if (!e.target.classList.contains('.dropdown__label')) {
      dropdowns.forEach((item) => {
        minimize(item);
        liftUpChecked(item);
        refreshIndicators(item)
      });
    }
  });
}
