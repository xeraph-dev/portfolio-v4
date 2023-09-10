import './src/global'

import * as esbuild from 'esbuild'
import { existsSync, rmSync } from 'fs'
import { glob } from 'glob'
import { relative } from 'path'
import prettyBytes from 'pretty-bytes'

const entrypoints = await glob('src/**/*.ts', { ignore: 'src/**/*.test.ts' })

const dist = 'dist'
if (existsSync(dist)) rmSync(dist, { recursive: true })

{
  console.time('check types'.green)
  console.info('Running', 'bun'.green, 'run check')
  const { stdout } = Bun.spawnSync({
    cmd: ['bun', 'run', 'check'],
  })
  const output = await new Response(stdout).text()
  if (output) {
    console.error(output)
    process.exit(1)
  }
  console.timeEnd('check types'.green)
}

{
  console.time('built ts files'.green)
  const result = await Bun.build({
    entrypoints,
    format: 'esm',
    target: 'browser',
    sourcemap: 'external',
    outdir: 'dist',
    minify: true,
  })
  if (!result.success) {
    console.error(...result.logs)
    process.exit(1)
  }
  console.timeEnd('built ts files'.green)
  for (const file of result.outputs.filter(file => file.kind === 'entry-point')) {
    console.log(prettyBytes(Bun.file(file.path).size).yellow, relative(dist, file.path))
  }
}

{
  console.time('built cjs files'.green)
  await esbuild.build({
    entryPoints: entrypoints,
    format: 'cjs',
    minify: true,
    bundle: true,
    sourcemap: true,
    platform: 'browser',
    outExtension: { '.js': '.cjs' },
    outdir: 'dist',
  })
  console.timeEnd('built cjs files'.green)
  for (const file of await glob('dist/**/*.cjs')) {
    console.log(prettyBytes(Bun.file(file).size).yellow, relative(dist, file))
  }
}

{
  console.time('built types'.green)
  console.info('Running', 'bun'.green, 'run types')
  const { stdout } = Bun.spawnSync({
    cmd: ['bun', 'run', 'types'],
  })
  const output = await new Response(stdout).text()
  if (output) {
    console.error(output)
    process.exit(1)
  }
  console.timeEnd('built types'.green)
}
