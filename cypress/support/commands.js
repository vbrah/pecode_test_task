const { faker } = require('@faker-js/faker');
const { credentials } = require("../../cypress.env");

// Define a custom command to get user credentials
Cypress.Commands.add('getUserCredentials', (type) => {
    if(type === 'fake') {
        return {
            username: faker.internet.userName(),
            password: faker.internet.password()
        };
    } else if (type === 'fromApi') {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1')
            .then((response) => {
                expect(response.status).to.eq(200);
                return {
                    username: response.body.username,
                    password: response.body.email // use email as password (only for example)
                };
            });
        } else {
            return {
                username: credentials.USERNAME,
                password: credentials.PASSWORD
            }
        }
    });
