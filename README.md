# xeraph-dev monorepo

Project that contains [my personal portfolio](./site/README.md) and the initial implementation of the [packages](#packages) created by me.

## Packages

- [colors](./packages/colors/README.md) - colored strings for console.log
- [eslint-config](./packages/eslint-config/README.md) - opinionated eslint configuration
- [prettier-config](./packages/prettier-config/README.md) - opinionated prettier configuration
- [ui](./packages/ui/README.md) - a modular ui library

# Development

- Package manager and workspace manager - [pnpm](https://pnpm.io/)
- Runtime version manager - [asdf-vm](https://asdf-vm.com/)
- Project version manager - [changeset](https://github.com/changesets/changesets)
- Unit testing and coverage for javascript/typescript files - [vitest](https://vitest.dev/)
- Unit testing for scss files - [sass-true](https://www.oddbird.net/true/docs/)
- Hosting platform - [vercel](https://vercel.com/)

## Working with packages

Instead of changing the current directory to the working package, prefer to use pnpm scripts, such as `pnpm site add -D vitest` to add `vitest` as a development dependency of the `site` package, or `pnpm site dev` to run the `dev` script of the `site` package.
