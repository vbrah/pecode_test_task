# Test task for QA automation position in PeCode

---
## Project repository
- [pecode_test_task](https://github.com/vbrah/pecode_test_task)
---

## Quickstart
### Preconditions
1. Installed Node.js
2. Installed Git
3. IDE of preference

### Installation
1. Clone the repository
2. Ensure that the dependencies are installed:

`$ npm install`

## Running the tests

There are a few ways to run the tests:

- Execute `$ npx cypress open` command. Cypress UI will be opened and you can run any _.feature_ file from it
- To run in headless mode(without browser UI) execute `npm test` command
---

## Project structure

- **features**: Contains Cucumber scenarios with steps.
- **fixtures**: Holds fixed sets of data used in the tests.
- **plugins**: Includes the configuration file for Cypress plugins.
- **reports**: Includes the reports of test run.
- **support**
    - **pages**: Stores page objects that represent specific web pages.
    - **step_definitions**: Contains preconditions and the logic for step implementations.
    - **utils**: Holds various helper functionalities for testing purposes.