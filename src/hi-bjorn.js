
export class HiBjorn extends HTMLElement {
    constructor() {
        super();
        this.name = '';
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 20px;
                    color: #fff;
                    background-color: #000;
                }
                span {
                    background-color: red;
                    color: white;
                }
            </style>
            Hi <span>{this.name}</span>!
            `;
        this._slot = this.shadowRoot.querySelector('span');
    }
    connectedCallback() {
        this.render();
    }
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.name = newValue;
        this.render();
    }
    render() {
        this._slot.textContent = this.name;
    }
    debug() {
        console.log(this._slot.outerHTML);
        return this._slot.outerHTML;
    }
}
