import {
  bgblack,
  bgblue,
  bgcyan,
  bggray,
  bggreen,
  bgmagenta,
  bgred,
  bgwhite,
  bgyellow,
  black,
  blue,
  bright,
  cyan,
  dim,
  gray,
  green,
  hidden,
  magenta,
  red,
  reset,
  reverse,
  underscore,
  white,
  yellow,
} from './index'

declare global {
  interface String {
    bgblack: string
    bgblue: string
    bgcyan: string
    bggray: string
    bggreen: string
    bgmagenta: string
    bgred: string
    bgwhite: string
    bgyellow: string
    black: string
    blue: string
    bright: string
    cyan: string
    dim: string
    gray: string
    green: string
    hidden: string
    magenta: string
    red: string
    reset: string
    reverse: string
    underscore: string
    white: string
    yellow: string
  }
}

Object.defineProperties(String.prototype, {
  reset: {
    get() {
      return reset(this)
    },
  },
  bright: {
    get() {
      return bright(this)
    },
  },
  dim: {
    get() {
      return dim(this)
    },
  },
  underscore: {
    get() {
      return underscore(this)
    },
  },
  reverse: {
    get() {
      return reverse(this)
    },
  },
  hidden: {
    get() {
      return hidden(this)
    },
  },
  black: {
    get() {
      return black(this)
    },
  },
  red: {
    get() {
      return red(this)
    },
  },
  green: {
    get() {
      return green(this)
    },
  },
  yellow: {
    get() {
      return yellow(this)
    },
  },
  blue: {
    get() {
      return blue(this)
    },
  },
  magenta: {
    get() {
      return magenta(this)
    },
  },
  cyan: {
    get() {
      return cyan(this)
    },
  },
  white: {
    get() {
      return white(this)
    },
  },
  gray: {
    get() {
      return gray(this)
    },
  },
  bgblack: {
    get() {
      return bgblack(this)
    },
  },
  bgred: {
    get() {
      return bgred(this)
    },
  },
  bggreen: {
    get() {
      return bggreen(this)
    },
  },
  bgyellow: {
    get() {
      return bgyellow(this)
    },
  },
  bgblue: {
    get() {
      return bgblue(this)
    },
  },
  bgmagenta: {
    get() {
      return bgmagenta(this)
    },
  },
  bgcyan: {
    get() {
      return bgcyan(this)
    },
  },
  bgwhite: {
    get() {
      return bgwhite(this)
    },
  },
  bggray: {
    get() {
      return bggray(this)
    },
  },
})
