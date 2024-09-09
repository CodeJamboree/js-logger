import { title } from "./title.js";

import { standardUtils, expect } from "@codejamboree/js-test";

export const beforeEach = () => {
  standardUtils.spyAndHide();
}
export const afterEach = () => {
  standardUtils.restore();
}
export const titleNormal = () => {
  title("My Title");
  expect(standardUtils.writes()).equals([
    "\u001b[34m----------------------------------------\u001b[39m\n",
    "\u001b[34m                My Title                \u001b[39m\n",
    "\u001b[34m----------------------------------------\u001b[39m\n"
  ]);
}
export const titleWrap = () => {
  title("My title".repeat(7));
  expect(standardUtils.writes()).equals([
    "\u001b[34m----------------------------------------\u001b[39m\n",
    "\u001b[34m   My titleMy titleMy titleMy titleMy   \u001b[39m\n",
    "\u001b[34m         titleMy titleMy title          \u001b[39m\n",
    "\u001b[34m----------------------------------------\u001b[39m\n"
  ]);
}
export const titleNothing = () => {
  title();
  expect(standardUtils.writes()).equals([
    "\u001b[34m----------------------------------------\u001b[39m\n",
    "\u001b[34m                                        \u001b[39m\n",
    "\u001b[34m----------------------------------------\u001b[39m\n"
  ]);
}
