<h1 align="center">Full Stack Challenge</h1>

A monorepo fullstack challenge with Next, TypeScript, GraphQL, Prisma and Node.js.

## Live Demo

Demo: https://full-stack-challenge-ale.vercel.app/

**Important Note:** The server may take a few moments to become active when the app starts up. Please be patient during this initial wait before interacting with it.

## Contents

- [Getting Started](#-getting-started)
- [How to install backend API](./packages/backend/README.md)
- [How to install frontend App](./packages/frontend/README.md)
- [Run tests](#run-tests)
- [CI/CD implementation](#cicd-implementation)
- [Identified issues](#identified-issues)
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

1. **Pagination Behavior:** Clicking 'prev' in the users table pagination is not working properly.
    <br/> <br/>
   **Note:** I didn't have enough time to fix this problem, but I'm aware of it and understand how it affects the user experience.

### How to Make It Better
1. **Refine CI/CD Process**: The current workflow starts regardless of whether there's a frontend or backend update. We need to adjust it to respond more effectively to changes in both areas.

2. **Improved Error Handling**: Make error messages clearer and handle errors better so users understand what's happening.

3. **Better Form Checks with Yup**: Use Yup to make sure forms are filled out correctly, helping prevent mistakes and ensuring data accuracy.

4. **Prettier Look with Tailwind**: Improve the design using Tailwind CSS for a more polished and consistent appearance.

5. **More Testing for Confidence**:
- **Testing Components:** Check more parts of the app to make sure they work correctly.
- **E2E Testing:** Test the app as a whole to make sure everything works well together, giving more confidence in the app's reliability.

