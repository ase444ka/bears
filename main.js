import './style.scss';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import {setupCounter} from './counter.js';
import './ui-kit/button.scss';
import './ui-kit/checkbox.scss';
import './ui-kit/close.scss';
import './ui-kit/card.scss';
import './ui-kit/dropdown/dropdown.scss';
import initDropdowns from './ui-kit/dropdown/dropdown.js';
import './ui-kit/modal/modal.scss';
import './ui-kit/modal/modal.js';
import initModal from './ui-kit/modal/modal.js';

const hide = (event) => {
  alert('kjkj');
  event.preventDefault;
};

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

<input />

<div class="dropdown" >
  <svg class="dropdown__arrow">
  <use href="./public/sprites.svg#arrow-down"></use>
  </svg>
  <div class="dropdown__option">
    <input type="radio" name="t" id="_1" value="Принятые"  checked/>
    <label for="_1">Принятые</label>
  </div>
  <div class="dropdown__option">
    <input type="radio" name="t" id="_2" value="Отклоненные" />
    <label for="_2">Отклоненные</label>
  </div>
  <div class="dropdown__option">
    <input type="radio" name="t" id="_3" value="В заповеднике" />
    <label for="_3">В заповеднике</label>
  </div>
</div> 
<br />
<br />

<div class="modal">
  <div class="modal__window">
    <div class="modal__wrapper">
    <button class="close modal__close-button">
          <svg class="close__icon"><use href="./public/sprites.svg#cross"></use></svg>
    </button>
    <div class="card modal__card"> 
    <div class="card__reserved-label">В заповеднике</div>
      <img class="card__image" alt="бурый медведь" src="./public/images/bear1.png">
        <div class="card__content">
      <h5 class="card__title">Донна</h5>
      <p class="card__description"><span>Бурый медведь</span><span>Самец</span></p>
      <p class="card__text">Некогда бурый медведь был обычен по всей Европе, включая Англию и Ирландию (Атласский медведь), а на востоке через Сибирь и Китай доходил до Японии. </p>
      <p class="card__text">В Северную Америку он, вероятно, попал около 40 000 лет назад из Азии, через Берингов перешеек и широко расселился в западной части континента от Аляски и до севера Мексики.</p>
      <div class="card__actions">
        <button class="button button_yes">Принять</button>
        <button class="button button_no">Отклонить</button>
      </div>
    </div>
    </div>
  </div>
    </div>
  </div>




`;
initDropdowns();
initModal();
