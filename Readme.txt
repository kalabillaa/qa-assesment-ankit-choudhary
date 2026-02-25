
## How to Run Locally

1. **Clone the repository**  

```bash
git clone https://github.com/<your-username>/qa-assessment-ankit.git
cd qa-assessment-ankit


## Install dependencies:
npm install

## Run test:

#UI test:
npx playwright test "tests/ui.spec.js"

#API test:
npx playwright test "tests/api.spec.js"

#Both test:
npx playwright test

##View test report:
npx playwright show-report

CI/CD

GitHub Actions workflow triggers on push and pull request events to the main branch.

Workflow file: .github/workflows/qa-tests.yml

Pipeline jobs:

UI Tests — installs dependencies, runs UI tests, captures screenshots on failure.

API Tests — installs dependencies, runs API tests, validates schema and responses.

View Actions tab
 for live pipeline runs.

Test Coverage Summary

UI Tests Covered:

Login with valid credentials → verify products are visible

Login with invalid/locked-out user → error message validation

Add items to cart → verify item names, count, prices

Checkout flow → form submission → confirmation message

API Tests Covered:

GET /posts → validate array, fields, data types

GET /posts/1 → validate response content

POST /posts → validate response fields and status

PUT /posts/1 → validate updated fields

GET /posts/9999 → negative test, expect 404

Would add with more time:

Cross-browser UI tests

Additional negative scenarios for API tests

Load/performance testing for UI/API

More advanced reporting dashboards