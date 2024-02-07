import '../ui/checkbox.scss'
import BaseComponent from '../base-component'

class ReservedCheckbox extends BaseComponent {
    get template() {
        return `
        <label for="checkbox" class="checkbox">
        <input type="checkbox" id="checkbox" title="checkbox" data-element="input" class="checkbox__input" value="reserved">
        <div class="checkbox__state">
            <div class="checkbox__control">
                <svg class="checkbox__icon">
                    <use href="public/sprites.svg#check"></use>
                </svg>
            </div>
            <div class="checkbox__label">Только из заповедника</div>
        </div>
    </label>

        `
    }

    constructor() {
        super()
        this.render()
        this.initEventListeners()
    }

    initEventListeners() {
        this.subElements.input.addEventListener('change', e => {
           this.store.dispatch('setReverved', e.target.checked)
        })
    }
}

export default ReservedCheckbox