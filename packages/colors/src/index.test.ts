import './global'

import { describe, expect, it } from 'bun:test'

import {
  BGBLACK,
  bgblack,
  BGBLUE,
  bgblue,
  BGCYAN,
  bgcyan,
  BGGRAY,
  bggray,
  BGMAGENTA,
  bgmagenta,
  BGRED,
  bgred,
  BGWHITE,
  bgwhite,
  BGYELLOW,
  bgyellow,
  BLACK,
  black,
  BLUE,
  blue,
  BRIGHT,
  bright,
  CYAN,
  cyan,
  DIM,
  dim,
  GRAY,
  gray,
  GREEN,
  green,
  HIDDEN,
  hidden,
  MAGENTA,
  magenta,
  RED,
  red,
  RESET,
  reset,
  REVERSE,
  reverse,
  UNDERSCORE,
  underscore,
  WHITE,
  white,
  YELLOW,
  yellow,
} from './index'

describe('@xeraph-dev/colors', () => {
  describe('reset', () => {
    it('module', () => expect(reset('test')).toBe(`test${RESET}`))
    it('global', () => expect('test'.reset).toBe(`test${RESET}`))
  })
  describe('bright', () => {
    it('module', () => expect(bright('test')).toBe(`${BRIGHT}test${RESET}`))
    it('global', () => expect('test'.bright).toBe(`${BRIGHT}test${RESET}`))
  })
  describe('dim', () => {
    it('module', () => expect(dim('test')).toBe(`${DIM}test${RESET}`))
    it('global', () => expect('test'.dim).toBe(`${DIM}test${RESET}`))
  })
  describe('underscore', () => {
    it('module', () => expect(underscore('test')).toBe(`${UNDERSCORE}test${RESET}`))
    it('global', () => expect('test'.underscore).toBe(`${UNDERSCORE}test${RESET}`))
  })
  describe('reverse', () => {
    it('module', () => expect(reverse('test')).toBe(`${REVERSE}test${RESET}`))
    it('global', () => expect('test'.reverse).toBe(`${REVERSE}test${RESET}`))
  })
  describe('hidden', () => {
    it('module', () => expect(hidden('test')).toBe(`${HIDDEN}test${RESET}`))
    it('global', () => expect('test'.hidden).toBe(`${HIDDEN}test${RESET}`))
  })
  describe('black', () => {
    it('module', () => expect(black('test')).toBe(`${BLACK}test${RESET}`))
    it('global', () => expect('test'.black).toBe(`${BLACK}test${RESET}`))
  })
  describe('red', () => {
    it('module', () => expect(red('test')).toBe(`${RED}test${RESET}`))
    it('global', () => expect('test'.red).toBe(`${RED}test${RESET}`))
  })
  describe('green', () => {
    it('module', () => expect(green('test')).toBe(`${GREEN}test${RESET}`))
    it('global', () => expect('test'.green).toBe(`${GREEN}test${RESET}`))
  })
  describe('yellow', () => {
    it('module', () => expect(yellow('test')).toBe(`${YELLOW}test${RESET}`))
    it('global', () => expect('test'.yellow).toBe(`${YELLOW}test${RESET}`))
  })
  describe('blue', () => {
    it('module', () => expect(blue('test')).toBe(`${BLUE}test${RESET}`))
    it('global', () => expect('test'.blue).toBe(`${BLUE}test${RESET}`))
  })
  describe('magenta', () => {
    it('module', () => expect(magenta('test')).toBe(`${MAGENTA}test${RESET}`))
    it('global', () => expect('test'.magenta).toBe(`${MAGENTA}test${RESET}`))
  })
  describe('cyan', () => {
    it('module', () => expect(cyan('test')).toBe(`${CYAN}test${RESET}`))
    it('global', () => expect('test'.cyan).toBe(`${CYAN}test${RESET}`))
  })
  describe('white', () => {
    it('module', () => expect(white('test')).toBe(`${WHITE}test${RESET}`))
    it('global', () => expect('test'.white).toBe(`${WHITE}test${RESET}`))
  })
  describe('gray', () => {
    it('module', () => expect(gray('test')).toBe(`${GRAY}test${RESET}`))
    it('global', () => expect('test'.gray).toBe(`${GRAY}test${RESET}`))
  })
  describe('bgblack', () => {
    it('module', () => expect(bgblack('test')).toBe(`${BGBLACK}test${RESET}`))
    it('global', () => expect('test'.bgblack).toBe(`${BGBLACK}test${RESET}`))
  })
  describe('bgred', () => {
    it('module', () => expect(bgred('test')).toBe(`${BGRED}test${RESET}`))
    it('global', () => expect('test'.bgred).toBe(`${BGRED}test${RESET}`))
  })
  describe('bgyellow', () => {
    it('module', () => expect(bgyellow('test')).toBe(`${BGYELLOW}test${RESET}`))
    it('global', () => expect('test'.bgyellow).toBe(`${BGYELLOW}test${RESET}`))
  })
  describe('bgblue', () => {
    it('module', () => expect(bgblue('test')).toBe(`${BGBLUE}test${RESET}`))
    it('global', () => expect('test'.bgblue).toBe(`${BGBLUE}test${RESET}`))
  })
  describe('bgmagenta', () => {
    it('module', () => expect(bgmagenta('test')).toBe(`${BGMAGENTA}test${RESET}`))
    it('global', () => expect('test'.bgmagenta).toBe(`${BGMAGENTA}test${RESET}`))
  })
  describe('bgcyan', () => {
    it('module', () => expect(bgcyan('test')).toBe(`${BGCYAN}test${RESET}`))
    it('global', () => expect('test'.bgcyan).toBe(`${BGCYAN}test${RESET}`))
  })
  describe('bgwhite', () => {
    it('module', () => expect(bgwhite('test')).toBe(`${BGWHITE}test${RESET}`))
    it('global', () => expect('test'.bgwhite).toBe(`${BGWHITE}test${RESET}`))
  })
  describe('bggray', () => {
    it('module', () => expect(bggray('test')).toBe(`${BGGRAY}test${RESET}`))
    it('global', () => expect('test'.bggray).toBe(`${BGGRAY}test${RESET}`))
  })
  describe('edge cases', () => {
    it('restore current color', () =>
      expect(`test ${'restored'.red} correctly`.dim).toBe(
        `${DIM}test ${RED}restored${RESET}${DIM} correctly${RESET}`,
      ))
    it('multiple restore current color', () =>
      expect(`${'complex'.blue} test ${'restored'.red} correctly`.bggray).toBe(
        `${BGGRAY}${BLUE}complex${RESET}${BGGRAY} test ${RED}restored${RESET}${BGGRAY} correctly${RESET}`,
      ))
    it('multiple foreground and background color', () =>
      expect(
        `${'complex'.blue} foreground ${`and ${'background'.red}`.bgmagenta} color`.bggray,
      ).toBe(
        `${BGGRAY}${BLUE}complex${RESET}${BGGRAY} foreground ${BGMAGENTA}and ${RED}background${RESET}${BGGRAY}${BGMAGENTA}${RESET}${BGGRAY} color${RESET}`,
      ))
  })
})
