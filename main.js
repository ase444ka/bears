import './style.scss';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import {setupCounter} from './counter.js';
import './ui-kit/button.scss';
import './ui-kit/checkbox.scss';

document.querySelector('#app').innerHTML = /* jsx */ `
  <div class="buttons-demo">
    <button class="button button_yes">Принять</button>
    <button class="button button_no">Отклонить</button>
    <button class="button button_no button_border_white">Отклонить</button>
  </div>
  <div class="checkboxes-demo">
    <label class="checkbox">
      <input type="checkbox" class="checkbox__input" />
      <div class="checkbox__state">
        <div class="checkbox__control">
          <svg class="checkbox__icon"><use href="./public/sprites.svg#check"></use></svg>
        </div>
        <div class="checkbox__label">Только из заповедника</div>
      </div> 
    </label>
    <label class="checkbox">
      <input type="checkbox" class="checkbox__input" checked />
      <div class="checkbox__state">
        <div class="checkbox__control">
          <svg class="checkbox__icon"><use href="./public/sprites.svg#check"></use></svg>
        </div>
        <div class="checkbox__label">Только из заповедника</div>
      </div> 
    </label>
  </div>
`;

