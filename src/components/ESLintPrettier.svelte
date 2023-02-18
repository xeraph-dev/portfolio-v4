<script>
  import { Highlight } from "svelte-highlight";
  import shell from "svelte-highlight/languages/shell";
  import javascript from "svelte-highlight/languages/javascript";
  import atomOneDark from "svelte-highlight/styles/atom-one-dark";
  import { toast } from "@zerodevx/svelte-toast";

  export let downloadText = "";
  export let commandText = "";
  export let copyText = "";
  export let commandCopiedText = "";
  export let eslintCopiedText = "";
  export let prettierCopiedText = "";

  let pms = ["npm", "yarn", "pnpm"];
  let withPrettier = true;
  let withEslint = true;
  let withTypeScript = true;
  let withReact = true;
  let withNext = true;
  let withAstro = false;
  let withTailwind = false;
  let pm = "npm";

  $: if (withNext | withReact) {
    withReact = true;
  }

  let command = "";
  $: {
    if (pm === "npm") {
      command = "npm install -D";
    } else if (pm === "yarn") {
      command = "yarn add -D";
    } else if (pm === "pnpm") {
      command = "pnpm add -D";
    }

    if (withTypeScript) {
      command += " ";
      command += ["typescript"].join(" ");
    }

    if (withTailwind) {
      command += " ";
      command += ["tailwindcss"].join(" ");
    }

    if (withPrettier) {
      command += " ";
      command += ["prettier"].join(" ");

      if (withAstro) {
        command += " ";
        command += ["prettier-plugin-astro"].join(" ");
      }

      if (withTailwind) {
        command += " ";
        command += ["prettier-plugin-tailwindcss"].join(" ");
      }
    }

    if (withEslint) {
      if (withPrettier) {
        command += " ";
        command += ["eslint-plugin-prettier", "eslint-config-prettier"].join(
          " "
        );
      }

      command += " ";
      command += [
        "eslint",
        "eslint-plugin-promise",
        "eslint-config-standard",
        "eslint-plugin-sonarjs",
        "eslint-plugin-unicorn",
        "eslint-plugin-import",
        "eslint-plugin-regexp",
        "eslint-plugin-simple-import-sort",
        "eslint-plugin-unused-imports",
        "eslint-plugin-sort-destructure-keys",
      ].join(" ");

      if (withTypeScript) {
        command += " ";
        command += [
          "@typescript-eslint/eslint-plugin",
          "@typescript-eslint/parser",
          "eslint-plugin-typescript-sort-keys",
        ].join(" ");
      }

      if (withReact) {
        command += " ";
        command += ["eslint-plugin-react", "eslint-plugin-react-hooks"].join(
          " "
        );
      }

      if (withNext) {
        command += " ";
        command += ["eslint-plugin-next"].join(" ");
      }

      if (withAstro) {
        command += " ";
        command += ["eslint-plugin-astro"].join(" ");
      }
    }
  }

  $: eslintrc = `\
/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'standard',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:regexp/recommended',
    ${withNext ? "'plugin:@next/next/recommended'," : ""}
    ${withPrettier ? "'plugin:prettier/recommended'," : ""}
  ],
  plugins: ['simple-import-sort', 'unused-imports', 'sort-destructure-keys'],
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: true }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/no-unresolved': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/consistent-function-scoping': 'off',
  },
  ${
    withTypeScript || withReact || withAstro
      ? `overrides: [
    ${
      withTypeScript
        ? `{
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:typescript-sort-keys/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-namespace': [
          'error',
          {
            allowDeclarations: true,
          },
        ],
      },
    },`
        : ""
    }
    ${
      withReact
        ? `{
      files: ['*.jsx', '*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'react/self-closing-comp': 'error',
        'react/sort-prop-types': 'error',
        'react/jsx-sort-props': 'error',
        'react/jsx-boolean-value': 'error',
        'react/jsx-closing-tag-location': 'error',
      },
    },`
        : ""
    }
    ${
      withAstro
        ? `{
      files: ['*.astro'],
      plugins: ['astro'],
      env: {
        'astro/astro': true,
      },
      parser: 'astro-eslint-parser',
      parserOptions: {
        ${withTypeScript ? "parser: '@typescript-eslint/parser'," : ""}
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
        'simple-import-sort/imports': 'off',
      },
    },`
        : ""
    }
  ],`
      : ""
  }
}`.replace(/^\s*\n/gm, "");

  $: prettierrc = `/** @type {import('prettier').Options} */
module.exports = {
  ${
    withAstro || withTailwind
      ? `plugins: [
    ${withAstro ? "require.resolve('prettier-plugin-astro')," : ""}
    ${withTailwind ? "require.resolve('prettier-plugin-tailwindcss')," : ""}
  ],`
      : ""
  }
  ${
    withAstro
      ? `overrides: [
    ${
      withAstro
        ? `{
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },`
        : ""
    }
  ],`
      : ""
  }
  astroAllowShorthand: true,
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: false,
  printWidth: 80,
  quoteProps: 'as-needed',
  semi: false,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
}`.replace(/^\s*\n/gm, "");

  function copy(code) {
    const el = document.createElement("textarea");
    el.style.display = "none";
    el.value = code;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  function download(name, code) {
    const data = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(data);
    const el = document.createElement("a");
    el.style.display = "none";
    el.download = name;
    el.href = url;
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
    URL.revokeObjectURL(url);
  }

  function copyCommand() {
    copy(command);
    toast.push(commandCopiedText);
  }

  function copyEslint() {
    copy(eslintrc);
    toast.push(eslintCopiedText);
  }

  function copyPrettier() {
    copy(prettierrc);
    toast.push(prettierCopiedText);
  }

  function downloadEslint() {
    download(".eslintrc.cjs", eslintrc);
  }

  function downloadPrettier() {
    download(".prettierrc.cjs", prettierrc);
  }
</script>

<svelte:head>
  {@html atomOneDark}
</svelte:head>

<form class="flex flex-wrap gap-3">
  <label class="flex gap-1 items-center">
    <input bind:checked={withEslint} type="checkbox" />
    Eslint
  </label>
  <label class="flex gap-1 items-center">
    <input bind:checked={withPrettier} type="checkbox" />
    Prettier
  </label>
</form>

<form class="flex flex-wrap gap-3">
  <label class="flex gap-1 items-center">
    <input bind:checked={withTypeScript} type="checkbox" />
    TypeScript
  </label>
  <label class="flex gap-1 items-center">
    <input disabled={withNext} bind:checked={withReact} type="checkbox" />
    React
  </label>
  <label class="flex gap-1 items-center">
    <input bind:checked={withNext} type="checkbox" />
    Next.js
  </label>
  <label class="flex gap-1 items-center">
    <input bind:checked={withAstro} type="checkbox" />
    Astro
  </label>
  <label class="flex gap-1 items-center">
    <input bind:checked={withTailwind} type="checkbox" />
    TailwindCSS
  </label>
</form>

<form class="flex flex-wrap gap-2">
  {#each pms as p}
    <label class="flex gap-1 items-center">
      {p}
      <input type="radio" value={p} bind:group={pm} name="pm" />
    </label>
  {/each}
</form>

<div class="flex flex-col gap-2">
  <h3 class="text-2xl font-amita flex flex-wrap gap-2 items-center">
    {commandText}
    <button
      on:click={copyCommand}
      type="button"
      class="px-2 py-1 text-lg bg-cyan-900 rounded-lg transition-all hover:shadow hover:bg-cyan-800 active:scale-95"
    >
      {copyText}
    </button>
  </h3>
  <Highlight language={shell} code={command} />
</div>

{#if withEslint}
  <div class="flex flex-col gap-2">
    <h3 class="text-2xl font-amita flex flex-wrap gap-2 items-center">
      .eslintrc.cjs
      <button
        on:click={copyEslint}
        type="button"
        class="px-2 py-1 text-lg bg-cyan-900 rounded-lg transition-all hover:shadow hover:bg-cyan-800 active:scale-95"
      >
        {copyText}
      </button>
      <button
        on:click={downloadEslint}
        type="button"
        class="px-2 py-1 text-lg bg-cyan-900 rounded-lg transition-all hover:shadow hover:bg-cyan-800 active:scale-95"
      >
        {downloadText}
      </button>
    </h3>
    <Highlight language={javascript} code={eslintrc} />
  </div>
{/if}

{#if withPrettier}
  <div class="flex flex-col gap-2">
    <h3 class="text-2xl font-amita flex flex-wrap gap-2 items-center">
      .prettierrc.cjs
      <button
        on:click={copyPrettier}
        type="button"
        class="px-2 py-1 text-lg bg-cyan-900 rounded-lg transition-all hover:shadow hover:bg-cyan-800 active:scale-95"
      >
        {copyText}
      </button>
      <button
        on:click={downloadPrettier}
        type="button"
        class="px-2 py-1 text-lg bg-cyan-900 rounded-lg transition-all hover:shadow hover:bg-cyan-800 active:scale-95"
      >
        {downloadText}
      </button>
    </h3>
    <Highlight language={javascript} code={prettierrc} />
  </div>
{/if}
