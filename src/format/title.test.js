import { title } from "./title.js";

import { standardUtils, expect } from "@codejamboree/js-test";

export const titleNormal = () => {

  standardUtils.spyAndHide();

  title("My Title");

  expect(standardUtils.writes(0)).equals([
    "\u001b[34m----------------------------------------\u001b[39m\n",
    "\u001b[34m                My Title                \u001b[39m\n",
    "\u001b[34m----------------------------------------\u001b[39m\n"
  ]);
}
export const titleWrap = () => {

  standardUtils.spyAndHide();

  title("My title".repeat(7));

  expect(standardUtils.writes(0)).equals([
    "\u001b[34m----------------------------------------\u001b[39m\n",
    "\u001b[34m   My titleMy titleMy titleMy titleMy   \u001b[39m\n",
    "\u001b[34m         titleMy titleMy title          \u001b[39m\n",
    "\u001b[34m----------------------------------------\u001b[39m\n"
  ]);
}
export const titleNothing = () => {

  standardUtils.spyAndHide();

  title();

  expect(standardUtils.writes(0)).equals([
    "\u001b[34m----------------------------------------\u001b[39m\n",
    "\u001b[34m                                        \u001b[39m\n",
    "\u001b[34m----------------------------------------\u001b[39m\n"
  ]);
}
export const afterEach = () => {
  standardUtils.restore();
}