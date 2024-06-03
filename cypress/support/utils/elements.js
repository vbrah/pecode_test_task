import { singleActions } from './commonPageActions';

export class CommonElement {
    constructor(selector) {
        this.domElement = cy.get(selector);
    }

    isVisible() {
        singleActions.assert(this.domElement, 'be.visible');

        return this;
    }

    isEnabled() {
        singleActions.assert(this.domElement, 'be.enabled');

        return this;
    }

    isDisabled() {
        singleActions.assert(this.domElement, 'be.disabled');

        return this;
    }

    clickElement(isForce) {
        singleActions.clickElement(this.domElement, isForce);

        return this;
    }
    setValue(value, secret) {
        singleActions.setValue(this.domElement, value, secret);

        return this;
    }

    verifyValue(value) {
        singleActions.assert(this.domElement, 'have.value', value);

        return this;
    }

    verifyElementText(text) {
        singleActions.verifyElementText(this.domElement, text);

        return this;
    }

    verifyElementHasCss(cssProperty, value) {
        singleActions.assert(this.domElement, 'have.css', cssProperty, value);

        return this;
    }
}