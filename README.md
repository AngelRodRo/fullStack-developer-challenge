<h1 align="center">Full Stack Challenge</h1>

A monorepo fullstack challenge with Next, TypeScript, GraphQL, Prisma and Node.js.

## Live Demo

Demo: https://full-stack-challenge-ale.vercel.app/

## Contents

- [Getting Started](#-getting-started)
- [How to install backend API](./packages/backend/README.md)
- [How to install frontend App](./packages/frontend/README.md)
- [Run tests](#run-tests)
- [CI/CD implementation](#cicd-implementation)
- [How to Make It Better](#how-to-make-it-better)


## 🚀 Getting Started

To install dependencies in all projects, execute the following command:
```
npm install
```

### Run tests

To run tests in all packages:

```
npx lerna run test
```

To run within each package, simply navigate to each one and execute:
```
npm run test
```

### CI/CD implementation

The project's continuous integration and continuous deployment (CI/CD) pipeline were established using GitHub Actions, which integrates with Azure App Service for container deployment, and Vercel for hosting the Next.js application. Check the pipeline workflow file here: [Main workflow file](.github/workflows/main_fullstack-challenge.yml)

### Identified issues

1. **Pagination Behavior:** Clicking 'next' in the users table multiple times causes the 'prev' button to stop working properly.
    <br/> <br/>
   **Note:** I didn't have enough time to fix this problem, but I'm aware of it and understand how it affects the user experience.

### How to Make It Better
1. **Improved Error Handling**: Make error messages clearer and handle errors better so users understand what's happening.

2. **Better Form Checks with Yup**: Use Yup to make sure forms are filled out correctly, helping prevent mistakes and ensuring data accuracy.

3. **Prettier Look with Tailwind**: Improve the design using Tailwind CSS for a more polished and consistent appearance.

4. More Testing for Confidence:
- **Testing Components:** Check more parts of the app to make sure they work correctly.
- **E2E Testing:** Test the app as a whole to make sure everything works well together, giving more confidence in the app's reliability.

