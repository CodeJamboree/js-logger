import { section } from "./section.js";

import { standardUtils, expect } from "@codejamboree/js-test";

export const sectionNormal = () => {

  standardUtils.spyAndHide();

  section("My Section");

  expect(standardUtils.writes(0)).equals([
    "\n",
    "\u001b[34m          ---{ My Section }---          \u001b[39m\n",
    "\n"
  ]);
}
export const sectionWrap = () => {

  standardUtils.spyAndHide();

  section("My Section".repeat(5));

  expect(standardUtils.writes(0)).equals([
    "\n",
    "\u001b[34m    ---{ My SectionMy SectionMy }---    \u001b[39m\n",
    "\u001b[34m ---{ SectionMy SectionMy Section }---  \u001b[39m\n",
    "\n"
  ]);
}
export const sectionNothing = () => {

  standardUtils.spyAndHide();

  section();

  expect(standardUtils.writes(0)).equals([
    "\n",
    "\u001b[34m                              ---{ }--- \u001b[39m\n",
    "\n"
  ]);
}
export const sectionDecorators = () => {

  standardUtils.spyAndHide();

  section("Decorated", "[[[", "]]]");

  expect(standardUtils.writes(0)).equals([
    "\n",
    "\u001b[34m            [[[Decorated]]]             \u001b[39m\n",
    "\n"
  ]);
}
export const afterEach = () => {
  standardUtils.restore();
}