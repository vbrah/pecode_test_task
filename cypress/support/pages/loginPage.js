import { CommonElement } from "../utils/elements";

class LoginPage {
    loginLogo = 'img[id=logomini]';
    loginFormTitle = '.wrapper h1';

    usernameInput = '[name="username"]';
    passwordInput = '[name="password"]';
    loginBtn = '.btn';

    loginError = `.form-group:nth-child(1) .help-block`;
    passwordError = `.form-group:nth-child(2) .help-block`;

    getLoginLogo() {
        return new CommonElement(this.loginLogo);
    }

    getFormTitle() {
        return new CommonElement(this.loginFormTitle);
    }

    getUsernameInput() {
        return new CommonElement(this.usernameInput);
    }

    getPasswordInput() {
        return new CommonElement(this.passwordInput);
    }

    getLoginButton() {
        return new CommonElement(this.loginBtn);
    }

    getLoginError() {
        return new CommonElement(this.loginError);
    }

    getPasswordError() {
        return new CommonElement(this.passwordError)
    }

    verifyUrlContainSubstring(substring) {
        cy.url().should('contain', substring);

        return this;
    }
}

export const loginPage = new LoginPage();
