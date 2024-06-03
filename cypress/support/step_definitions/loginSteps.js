import { BASE_URL, credentials } from "../../../cypress.env";
import { loginPage } from "../pages/loginPage";
import { loginData } from "../../fixtures/loginData";
import { cssProperties, defaultRedColor } from "../../fixtures/cssPropertiesData";

Given('user on the login page', () => {
    cy.visit(BASE_URL)
});

Then('logo, title, input fields and button are presented', () => {
    loginPage.getLoginLogo().isVisible();
    loginPage.getFormTitle()
        .isVisible()
        .verifyElementText(loginData.title);
    loginPage.getUsernameInput().isVisible().isEnabled();
    loginPage.getPasswordInput().isVisible().isEnabled();
    loginPage.getLoginButton().isVisible().isEnabled();
});

Then('username and password fields are filled', () => {
    loginPage.getUsernameInput()
        .isVisible()
        .verifyValue(credentials.USERNAME);
    loginPage.getPasswordInput()
        .isVisible()
        .verifyValue(credentials.PASSWORD);
});

When('user enters {string} username', (type) => {
    cy.getUserCredentials(type).then((credentials) => {
        loginPage.getUsernameInput().setValue(credentials.username);
    })
});

And('user enters {string} password', (type) => {
    cy.getUserCredentials(type).then((credentials) => {
        loginPage.getPasswordInput()
            .setValue(credentials.password, { log: false });
    })
});

And('user clicks on Login button', () => {
    loginPage.getLoginButton().clickElement();
});

Then('"no account found" message is appeared', () => {
    loginPage.getLoginError()
        .isVisible()
        .verifyElementText(loginData.noAccountError)
        .verifyElementHasCss(cssProperties.color, defaultRedColor);
});

Then('error message is displayed on username field', () => {
    loginPage.getLoginError()
        .isVisible()
        .verifyElementText(loginData.emptyUsernameError)
        .verifyElementHasCss(cssProperties.color, defaultRedColor);
});

And('error message is displayed on password field', () => {
    loginPage.getPasswordError()
       .isVisible()
       .verifyElementText(loginData.emptyPasswordError)
        .verifyElementHasCss(cssProperties.color, defaultRedColor);
});

Then('home page is opened', () => {
    loginPage.verifyUrlContainSubstring('homePage')
});