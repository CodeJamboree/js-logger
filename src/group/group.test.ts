import { group } from './group.js';
import { groupEnd } from './groupEnd.js';
import { standardUtils, expect } from '@codejamboree/js-test';
import { group as consoleGroup } from '../console/group.js';
import { groupEnd as consoleGroupEnd } from '../console/groupEnd.js';
import { log } from '../log/log.js';

export const beforeEach = () => {
  standardUtils.spyAndHide();
}
export const afterEach = () => {
  standardUtils.restore();
}

export const isNormal = () => {
  const label = 'group label';
  consoleGroup(label);
  if (console.log === log) {
    expect(standardUtils.writes()).equals([
      `\u001b[37m${label}\u001b[39m\n`
    ]);
  } else {
    expect(standardUtils.writes()).equals([
      `${label}\n`
    ]);
  }
  consoleGroupEnd();
}

export const isNormalWithTwoGroups = () => {
  const labels = ['label 1', 'label 2'];
  consoleGroup(...labels);
  if (console.log === log) {
    expect(standardUtils.writes()).equals([
      `\u001b[37m${labels[0]}\u001b[39m ${labels[1]}\n`
    ]);
  } else {
    expect(standardUtils.writes()).equals([
      `${labels[0]} ${labels[1]}\n`
    ]);
  }
  consoleGroupEnd();
}

export const isBlue = () => {
  const label = 'group label';
  group(label);
  if (console.log === log) {
    expect(standardUtils.writes()).equals([
      `\u001b[37m\u001b[34m${label}\u001b[37m\u001b[39m\n`
    ]);
  } else {
    expect(standardUtils.writes()).equals([
      `\u001b[34m${label}\u001b[39m\n`
    ]);
  }
  groupEnd();
}

export const isBlueWithTwoGroups = () => {
  const labels = ['label 1', 'label 2'];
  group(...labels);
  if (console.log === log) {
    expect(standardUtils.writes()).equals([
      `\u001b[37m\u001b[34m${labels[0]}\u001b[37m\u001b[39m ${labels[1]}\n`
    ]);
  } else {
    expect(standardUtils.writes()).equals([
      `\u001b[34m${labels[0]}\u001b[39m ${labels[1]}\n`
    ]);
  }
  groupEnd();
}
