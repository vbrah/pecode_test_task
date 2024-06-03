class CommonSinglePageActions {
    assert(domElement, chainers, method, value) {
        domElement.should(chainers, method, value);

        return this;
    }

    clickElement(domElement, isForce = false) {
        domElement.click({ force: isForce });

        return this;
    }

    setValue(domElement, value, secret) {
        secret
            ? domElement.clear().type(value, secret)
            : domElement.clear().type(value);

        return this;
    }

    verifyElementText(domElement, text) {
        domElement.should('have.text', text);

        return this;
    };
}

export const singleActions = new CommonSinglePageActions();
