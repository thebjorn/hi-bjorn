import { html } from "lit-html";
import { fixture, expect } from "@open-wc/testing";
import { HiBjorn } from "../src/hi-bjorn";


describe('custom elements in JSDOM', () => {
    window.customElements.define('hi-bjorn', HiBjorn);

    it('name is set', async () => {
        const el = await fixture(html`<hi-bjorn name="Emil"></dk-icon>`);
        expect(el.name).to.equal('Emil');
    });

    it('html is correct', async () => {
        const el = await fixture(html`<hi-bjorn name="Emil"></dk-icon>`);
        el.name = 'Anton';
        el.render();
        expect(el.debug()).to.equal('<span>Anton</span>');
    });
});