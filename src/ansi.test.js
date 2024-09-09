import { ansi } from './ansi.js';
import { expect } from '@codejamboree/js-test';

export const ansiRed = () => {
  expect(ansi.red("Red")).equals("\u001b[31mRed\u001b[39m");
}
export const ansiBlack = () => {
  expect(ansi.black("Black")).equals("\u001b[30mBlack\u001b[39m");
}
export const ansiGreen = () => {
  expect(ansi.green("Green")).equals("\u001b[32mGreen\u001b[39m");
}
export const ansiYellow = () => {
  expect(ansi.yellow("Yellow")).equals("\u001b[33mYellow\u001b[39m");
}
export const ansiBlue = () => {
  expect(ansi.blue("Blue")).equals("\u001b[34mBlue\u001b[39m");
}
export const ansiMagenta = () => {
  expect(ansi.magenta("Magenta")).equals("\u001b[35mMagenta\u001b[39m");
}
export const ansiCyan = () => {
  expect(ansi.cyan("Cyan")).equals("\u001b[36mCyan\u001b[39m");
}
export const ansiWhite = () => {
  expect(ansi.white("White")).equals("\u001b[37mWhite\u001b[39m");
}

export const ansiBgRed = () => {
  expect(ansi.bgRed("Red")).equals("\u001b[41mRed\u001b[49m");
}
export const ansiBgBlack = () => {
  expect(ansi.bgBlack("Black")).equals("\u001b[40mBlack\u001b[49m");
}
export const ansiBgGreen = () => {
  expect(ansi.bgGreen("Green")).equals("\u001b[42mGreen\u001b[49m");
}
export const ansiBgYellow = () => {
  expect(ansi.bgYellow("Yellow")).equals("\u001b[43mYellow\u001b[49m");
}
export const ansiBgBlue = () => {
  expect(ansi.bgBlue("Blue")).equals("\u001b[44mBlue\u001b[49m");
}
export const ansiBgMagenta = () => {
  expect(ansi.bgMagenta("Magenta")).equals("\u001b[45mMagenta\u001b[49m");
}
export const ansiBgCyan = () => {
  expect(ansi.bgCyan("Cyan")).equals("\u001b[46mCyan\u001b[49m");
}
export const ansiBgWhite = () => {
  expect(ansi.bgWhite("White")).equals("\u001b[47mWhite\u001b[49m");
}

export const ansiNested = () => {
  expect(`normal ${ansi.red(`red ${ansi.green(`green ${ansi.yellow('Yellow')} green`)
    } red`)} normal`)
    .equals(
      "normal \u001b[31mred \u001b[32mgreen " +
      "\u001b[33mYellow\u001b[32m green" +
      "\u001b[31m red\u001b[39m normal");
}
export const ansiAlternating = () => {
  expect(ansi.red(`red ${ansi.green('green')} red ${ansi.green('green')} red`))
    .equals("\u001b[31mred \u001b[32mgreen\u001b[31m red \u001b[32mgreen\u001b[31m red\u001b[39m");
}
export const ansiBgNested = () => {
  expect(`normal ${ansi.bgRed(`red ${ansi.bgGreen(`green ${ansi.bgYellow('Yellow')} green`)} red`)} normal`)
    .equals("normal \u001b[41mred \u001b[42mgreen \u001b[43mYellow\u001b[42m green\u001b[41m red\u001b[49m normal");
}
export const ansiBgAlternating = () => {
  expect(ansi.bgRed(`red ${ansi.bgGreen('green')} red ${ansi.bgGreen('green')} red`))
    .equals("\u001b[41mred \u001b[42mgreen\u001b[41m red \u001b[42mgreen\u001b[41m red\u001b[49m");
}