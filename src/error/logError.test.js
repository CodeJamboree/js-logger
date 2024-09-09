import { logError } from './logError.js';
import { expect, standardUtils } from '@codejamboree/js-test';

export const beforeEach = () => {
  standardUtils.spyAndHide();
}
export const afterEach = () => {
  standardUtils.restore();
}

export const normalError = () => {
  logError(new Error("Test Error"));
  expect(standardUtils.writes()).equals(
    ["\u001b[31mTest Error\u001b[39m\n"]
  );
}
export const interestingData = () => {
  const error = new Error("Test Error");
  error.data = 'my data';
  error.rawPacket = 'my raw packet';
  logError(error);
  expect(standardUtils.writes()).equals([
    "\u001b[31mTest Error\u001b[39m\n",
    "  \u001b[35mmy raw packet\u001b[39m\n",
    "  \u001b[35mmy data\u001b[39m\n"
  ]);
}
export const logArraysOfErrors = () => {
  logError([
    new Error("Test Error 1"),
    new Error("Test Error 2")
  ]);
  expect(standardUtils.writes()).equals([
    "\u001b[31mError (Array)\u001b[39m\n",
    "  \u001b[31mTest Error 1\u001b[39m\n",
    "  \u001b[31mTest Error 2\u001b[39m\n"
  ]);
}
export const logJaggedArray = () => {
  logError([
    new Error("Test Error 1"),
    [
      new Error("Test Error 2.a"),
      new Error("Test Error 2.b")
    ]
  ]);
  expect(standardUtils.writes()).equals([
    "\u001b[31mError (Array)\u001b[39m\n",
    "  \u001b[31mTest Error 1\u001b[39m\n",
    "  \u001b[31mError (Array)\u001b[39m\n",
    "    \u001b[31mTest Error 2.a\u001b[39m\n",
    "    \u001b[31mTest Error 2.b\u001b[39m\n"
  ]);
}
export const emptyString = () => {
  logError("");
  expect(standardUtils.writes()).equals([
    "\u001b[31mError (Empty)\u001b[39m\n"
  ]);
}
export const logUndefined = () => {
  logError(undefined);
  expect(standardUtils.writes()).equals([
    "\u001b[31mError (Empty)\u001b[39m\n"
  ]);
}
export const logNull = () => {
  logError(null);
  expect(standardUtils.writes()).equals([
    "\u001b[31mError (Empty)\u001b[39m\n"
  ]);
}
export const logString = () => {
  logError('My String');
  expect(standardUtils.writes()).equals([
    "\u001b[31mMy String\u001b[39m\n"
  ]);
}
export const logBoolean = () => {
  logError(false);
  expect(standardUtils.writes()).equals([
    "\u001b[31mError: false\u001b[39m\n"
  ]);
}
export const logNumber = () => {
  logError(42.5);
  expect(standardUtils.writes()).equals([
    "\u001b[31mError: 42.5\u001b[39m\n"
  ]);
}
export const logFunction = () => {
  const sampleFunction = () => { console.log("test"); };

  logError(sampleFunction);
  expect(standardUtils.writes()).equals([
    "\u001b[31mError: (callback: sampleFunction)\u001b[39m\n",
    "  \u001b[35m() => { console.log(\"test\"); }\u001b[39m\n",
  ]);
}
export const logBuffer = () => {
  const buffer = Buffer.from(new TextEncoder().encode("Sample Text"));
  logError(buffer);
  expect(standardUtils.writes()).equals([
    "\u001b[31mSample Text\u001b[39m\n",
  ]);
}
export const logDate = () => {
  logError(new Date(1725078354042));
  expect(standardUtils.writes()).equals([
    "\u001b[31mError (Date): 2024-08-31T04:25:54.042Z\u001b[39m\n",
  ]);
}
export const logResolvedPromise = async () => {
  const promise = Promise.resolve('The resolved value');
  logError(promise);
  expect(standardUtils.writes()).equals([
    "\u001b[31mError (Promise)\u001b[39m\n",
  ]);
  await promise.catch(() => { }).finally(() => {
    expect(standardUtils.writes()).equals([
      "\u001b[31mError (Promise)\u001b[39m\n",
      "\u001b[31mThe resolved value\u001b[39m\n"
    ]);
  })
}
export const logRejectedPromise = async () => {
  const promise = Promise.reject('The rejected value');
  logError(promise);
  expect(standardUtils.writes()).equals([
    "\u001b[31mError (Promise)\u001b[39m\n",
  ]);
  await promise.catch(() => { }).finally(() => {
    expect(standardUtils.writes()).equals([
      "\u001b[31mError (Promise)\u001b[39m\n",
      "\u001b[31mThe rejected value\u001b[39m\n"
    ]);
  })
}
export const logErrorKey = () => {
  logError({ error: "my error" });
  expect(standardUtils.writes()).equals([
    "\u001b[31mmy error\u001b[39m\n",
  ]);
}
export const logErrorKeyAsArray = () => {
  logError({ errors: ["error 1", "error 2"] });
  expect(standardUtils.writes()).equals([
    "\u001b[31merror 1\u001b[39m\n",
    "\u001b[31merror 2\u001b[39m\n"
  ]);
}
export const logMessageKey = () => {
  logError({ message: "my message" });
  expect(standardUtils.writes()).equals([
    "\u001b[31mmy message\u001b[39m\n",
  ]);
}
export const logMessagesKey = () => {
  logError({ messages: ["message 1", "message 2"] });
  expect(standardUtils.writes()).equals([
    "\u001b[31mmessage 1\u001b[39m\n",
    "\u001b[31mmessage 2\u001b[39m\n"
  ]);
}
export const logReasonKey = () => {
  logError({ reason: "my reason" });
  expect(standardUtils.writes()).equals([
    "\u001b[31mmy reason\u001b[39m\n",
  ]);
}
export const logReasonsKey = () => {
  logError({ reasons: ["reason 1", "reason 2"] });
  expect(standardUtils.writes()).equals([
    "\u001b[31mreason 1\u001b[39m\n",
    "\u001b[31mreason 2\u001b[39m\n"
  ]);
}
export const logUnexpectedKey = () => {
  logError({ unexpectedKey: 'my value' });
  expect(standardUtils.writes()).equals([
    "\u001b[31mError (Object)\u001b[39m\n",
    "  { unexpectedKey: \u001b[32m'my value'\u001b[39m }\n"
  ]);
}
