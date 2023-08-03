# E2E Exercise

I have written the test suite using Cypress with Javascript

1. I tested that several World Service pages' titles match the expected values.
2. Each test case is uniquely named by using the service name.
3. To make my code efficient, I created a customised cypress command to check the title, and added the provided data to fixtures so that they could both be reused in other test suites.
4. If one test fails, the other tests are still executed.

To run the tests, clone the repo, `npm install` then `npm test` to run the test suite in headless mode, or `npx cypress open` to run in headed mode.