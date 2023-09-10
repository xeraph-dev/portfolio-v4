# xeraph-dev monorepo

Project that contains [my personal portfolio](./site/README.md) and the initial implementation of the [packages](#packages) created by me.

## Packages

- [colors](./packages/colors/README.md) - colored strings for console.log
- [eslint-config](./packages/eslint-config/README.md) - opinionated eslint configuration
- [prettier-config](./packages/prettier-config/README.md) - opinionated prettier configuration
- [ui](./packages/ui/README.md) - a modular ui library

# Development

- Runtime - [bun](https://bun.sh)
- Package manager - [bun](https://bun.sh)
- Workspace manager - [bun](https://bun.sh)
- JavaScript/TypeScript bundler - [bun](https://bun.sh) and [esbuild](https://esbuild.github.io) for commonjs outputs
- Unit testing and coverage for JavaScript/TypeScript - [bun](https://bun.sh)
- Project version manager - [changeset](https://github.com/changesets/changesets)
- Pre-commit hook - [husky](https://typicode.github.io/husky/)
- CSS Preprocessor - [sass](https://sass-lang.com/)
- Unit testing for scss files - [sass-true](https://www.oddbird.net/true/docs/)
- Hosting platform - [vercel](https://vercel.com/)

## Working with packages

Instead of changing the current directory to the working package, prefer to use pnpm scripts, such as `pnpm site add -D vitest` to add `vitest` as a development dependency of the `site` package, or `pnpm site dev` to run the `dev` script of the `site` package.
