export const RESET = '\x1B[0m'
export const BRIGHT = '\x1B[1m'
export const DIM = '\x1B[2m'
export const UNDERSCORE = '\x1B[4m'
export const REVERSE = '\x1B[7m'
export const HIDDEN = '\x1B[8m'
export const BLACK = '\x1B[30m'
export const RED = '\x1B[31m'
export const GREEN = '\x1B[32m'
export const YELLOW = '\x1B[33m'
export const BLUE = '\x1B[34m'
export const MAGENTA = '\x1B[35m'
export const CYAN = '\x1B[36m'
export const WHITE = '\x1B[37m'
export const GRAY = '\x1B[90m'
export const BGBLACK = '\x1B[40m'
export const BGRED = '\x1B[41m'
export const BGGREEN = '\x1B[42m'
export const BGYELLOW = '\x1B[43m'
export const BGBLUE = '\x1B[44m'
export const BGMAGENTA = '\x1B[45m'
export const BGCYAN = '\x1B[46m'
export const BGWHITE = '\x1B[47m'
export const BGGRAY = '\x1B[100m'

export const reset = (str: string) => {
  const colors = str.match(/\x1b\[\d+m/gi)
  const stack: string[] = []
  for (const color of colors ?? []) {
    if (color.endsWith('[0m')) stack.pop()
    else stack.push(color)
  }
  if (!colors || colors.length === 1 || stack.length === 0) return `${str}${RESET}`
  const color = stack[0]
  const split = str.split(RESET)
  const fixed = [split[0], ...split.slice(1).map(str => color + str)].join(RESET)
  return `${fixed}${RESET}`
}
export const bright = (str: string) => reset(`${BRIGHT}${str}`)
export const dim = (str: string) => reset(`${DIM}${str}`)
export const underscore = (str: string) => reset(`${UNDERSCORE}${str}`)
export const reverse = (str: string) => reset(`${REVERSE}${str}`)
export const hidden = (str: string) => reset(`${HIDDEN}${str}`)
export const black = (str: string) => reset(`${BLACK}${str}`)
export const red = (str: string) => reset(`${RED}${str}`)
export const green = (str: string) => reset(`${GREEN}${str}`)
export const yellow = (str: string) => reset(`${YELLOW}${str}`)
export const blue = (str: string) => reset(`${BLUE}${str}`)
export const magenta = (str: string) => reset(`${MAGENTA}${str}`)
export const cyan = (str: string) => reset(`${CYAN}${str}`)
export const white = (str: string) => reset(`${WHITE}${str}`)
export const gray = (str: string) => reset(`${GRAY}${str}`)
export const bgblack = (str: string) => reset(`${BGBLACK}${str}`)
export const bgred = (str: string) => reset(`${BGRED}${str}`)
export const bggreen = (str: string) => reset(`${BGGREEN}${str}`)
export const bgyellow = (str: string) => reset(`${BGYELLOW}${str}`)
export const bgblue = (str: string) => reset(`${BGBLUE}${str}`)
export const bgmagenta = (str: string) => reset(`${BGMAGENTA}${str}`)
export const bgcyan = (str: string) => reset(`${BGCYAN}${str}`)
export const bgwhite = (str: string) => reset(`${BGWHITE}${str}`)
export const bggray = (str: string) => reset(`${BGGRAY}${str}`)
