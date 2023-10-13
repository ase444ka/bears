import './style.scss';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import {setupCounter} from './counter.js';
import './ui-kit/button.scss';
import './ui-kit/checkbox.scss';
import './ui-kit/close.scss';
import './ui-kit/card.scss';

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
  <div class="close-demo">
    <button class="close">
      <svg class="close__icon"><use href="./public/sprites.svg#cross"></use></svg>
    </button>
  </div>
  <div class="cards-demo">
  <div class="card">            
    <img class="card__image" alt="бурый медведь" src="./public/images/bear1.png">
    <div class="card__reserved-label">В заповеднике</div>
    <h5 class="card__title">Донна</h5>
    <p class="card__description"><span>Бурый медведь</span><span>Самец</span></p>
    <div class="card__actions">
      <button class="button button_yes">Принять</button>
      <button class="button button_no">Отклонить</button>
    </div>
  </div>
  <div class="card">            
    <img class="card__image" alt="бурый медведь" src="./public/images/bear1.png">
    <div class="card__reserved-label">В заповеднике</div>
    <h5 class="card__title">Донна</h5>
    <p class="card__description"><span>Бурый медведь</span><span>Самец</span></p>
    <div class="card__actions">
      <button class="button button_yes">Принять</button>
      <button class="button button_no">Отклонить</button>
    </div>
  </div>
  <div class="card card_reserved">            
    <img class="card__image" alt="бурый медведь" src="./public/images/bear1.png">
    <div class="card__reserved-label">В заповеднике</div>
    <h5 class="card__title">Донна</h5>
    <p class="card__description"><span>Бурый медведь</span><span>Самец</span></p>
    <div class="card__actions">
      <button class="button button_yes">Принять</button>
      <button class="button button_no">Отклонить</button>
    </div>
  </div>
</div>
`;
