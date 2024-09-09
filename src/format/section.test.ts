import { section } from "./section.js";

import { standardUtils, expect } from "@codejamboree/js-test";

export const beforeEach = () => {
  standardUtils.spyAndHide();
}
export const afterEach = () => {
  standardUtils.restore();
}
export const sectionNormal = () => {
  section("My Section");
  expect(standardUtils.writes()).equals([
    "\n",
    "\u001b[34m          ---{ My Section }---          \u001b[39m\n",
    "\n"
  ]);
}
export const sectionWrap = () => {
  section("My Section".repeat(5));
  expect(standardUtils.writes()).equals([
    "\n",
    "\u001b[34m    ---{ My SectionMy SectionMy }---    \u001b[39m\n",
    "\u001b[34m ---{ SectionMy SectionMy Section }---  \u001b[39m\n",
    "\n"
  ]);
}
export const sectionNothing = () => {
  section();
  expect(standardUtils.writes()).equals([
    "\n",
    "\u001b[34m                              ---{ }--- \u001b[39m\n",
    "\n"
  ]);
}
export const sectionDecorators = () => {
  section("Decorated", "[[[", "]]]");
  expect(standardUtils.writes()).equals([
    "\n",
    "\u001b[34m            [[[Decorated]]]             \u001b[39m\n",
    "\n"
  ]);
}
