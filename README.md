# Chmura Work Sample

To run the application to solve for the problem posed in the [instructions](./INSTRUCTIONS.md), install and run the app in dev mode as described below. When the browser opens, click the `Select awful actors for me` button to select Keanu and Cage. A table will render with the results of the shared actors between them, and a button with the label `Validate` will appear. Click that to make the call to the `/validate` endpoint.

## Development

I used the `pnpm` package manager, but `npm` should work just fine as well.

### Prerequisites

I set the node version to 18, but 16 should work just fine as well. If you have `nvm`, type `nvm use` in the project root to switch to the correct version automatically.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
VITE_API_ACCESS_TOKEN_KEY=your-header-key
VITE_API_ACCESS_TOKEN_VALUE=your-header-token
VITE_API_HOST=your-api-host.net
VITE_DEBUG=0 # 0 or 1
```

### Install

```bash
pnpm install
```

### Run w/ Hot Reload

```bash
pnpm run dev
```

## Build

```bash
pnpm run build
```

## Testing

This package uses [Vitest](https://vitest.dev/) to run tests.

It was chosen because it's extremely fast and easy to configure. It is powered by [Vite](https://vitejs.dev/), a native ESM-based dev server. As a result, this allows tests to be run without being bundled, transpiled, etc., avoiding parts of the common build toolchain that extends the times it takes for code to be served.

Vitest comes with a Jest-compatible `expect API` and `mocking API`, so those already familiar with Jest will experience little to no learning curve.

### Methodology

Tests should be conducted in a way that simulates how an end-user would interact with a component.

It is not necessary, and in fact counterproductive, to try to test line-by-line, or individual methods of a component.

### Where Tests & Mocks Live

Tests should live with the files they operate on. If not already there, create a `__tests__` directory in the same place as the file you're testing and include your tests there.

Similarly, mocks should live in a `__mocks__` directory in the same place as the services they're mocking. This is particularly important, as when you ask Vitest to mock a file, it will first look for a `__mocks__` directory in the same place as the file it's mocking.

See the example tree structure below.

```
./
|-- components
|   |-- __tests__
|   |   `-- component.test.vue
|   `-- component.vue
|-- services
|   |-- __mocks__
|   |   `-- service.ts
|   `-- service.ts
```

### Running Tests

```bash
pnpm run test
```

## Other Useful Scripts

Code formatting is handled by [Prettier](https://prettier.io/). Linting is handled by [ESLint](https://eslint.org/).

To run:

```bash
pnpm run format

pnpm run lint
```
## Thought Process Behind My Decisions

### Overview

I went a little overboard for this project, and honestly, I wanted to do even more, but I thought I should just cut myself off.

I intentionally chose a bare-bones approach (that is, not using a component library like Vuetify/Bootstra-vue), because I wanted to show off a more comprehensive understanding of how component frameworks work, and how to build with them.

Given that, the layout and styling aren't super polished, but they're not terrible either.

I tried to demonstrate the following:

- client-side routing
- global and local state management
- reusable functionality
- layout and styling, with a focus on responsiveness and accessibility (and dark mode!)
- composing generic form-related components with automatic two-way binding (i.e. the `BaseSelect` interacts with the framework exactly as a native `select` element would)
- testing a variety of different types of features
- project setup and tooling

The one thing I really wanted to do was implement `BaseSelect` as a custom combobox component with a search input for autocompletion. It was awful using the native HTML element to go through 600 something actors, though I suppose I only have myself to blame for wondering who was in the database.

Oh, and look at `src/utils/index.ts`. There's just one function in there, and it always makes me grin.

### Language

I chose TypeScript because of my familiarity with it, It's a great tool for static analysis, and as a result, it provides immediate feedback when I make mistakes.

### Framework

I chose Vue, again because of my familiarity with it. It's much easier to demonstrate more of my experience with component frameworks using it, than I would be wasting a little more time struggling with something less familiar.

### Project Structure

#### Overview

Project structure should feel pretty familiar

- `src/main.ts` is the script entry point
- `src/components` library of components used within this project
- `src/composables` composable and reusable and reactive functionality that can be used anywhere
- `src/store` the modules that make up global app state
- `src/routes` the client-side routing tables
- `src/views` the main views, think of them as the different pages
- `src/services` contains stuff relevant to http calls to the API
- `src/types` contains most of the project's TypeScript types

### Testing Strategy

My intention with the tests that I wrote is to simply demonstrate my knowledge around it. You will find mocked services, composable tests, and component tests. The testing is not exhaustive, but is hopefully a sufficient demo.

I am a firm proponent of testing generally when working with large projects, or with a team. There is ample evidence of its benefits, including developer experience, safety, and reliability, which of corse all lead to significant time and cost-savings for an organization.

## Final Comments

If you haven't given up reading yet, persisting through my verbosity, I hope you find my work interesting and engaging. If you decide you'd like to move forward with me, I look forward to discussing it further with you!

Thanks!
