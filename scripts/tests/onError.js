import * as stdout from "./utils/stdout.js";
import logger from '../../src/index.js';
import { expect } from './utils/expect.js';

export const name = 'onError';

export const onError = () => {
  logger.onError(new Error("Test Error"));
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mTest Error\u001b[39m\n", null]
  ]);
}
export const onErrorWithInterest = () => {
  const error = new Error("Test Error");
  error.data = 'my data';
  error.rawPacket = 'my raw packet';
  logger.onError(error);
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mTest Error\u001b[39m\n", null],
    ["  \u001b[35mmy raw packet\u001b[39m\n", null],
    ["  \u001b[35mmy data\u001b[39m\n", null]
  ]);
}
export const onErrorArray = () => {
  logger.onError([
    new Error("Test Error 1"),
    new Error("Test Error 2")
  ]);
  expect(stdout.getBuffer()).equals([
    ["\u001b[37mError (Array)\u001b[39m\n", null],
    ["  \u001b[31mTest Error 1\u001b[39m\n", null],
    ["  \u001b[31mTest Error 2\u001b[39m\n", null]
  ]);
}
export const onErrorJaggedArray = () => {
  logger.onError([
    new Error("Test Error 1"),
    [
      new Error("Test Error 2.a"),
      new Error("Test Error 2.b")
    ]
  ]);
  expect(stdout.getBuffer()).equals([
    ["\u001b[37mError (Array)\u001b[39m\n", null],
    ["  \u001b[31mTest Error 1\u001b[39m\n", null],
    ["  \u001b[37mError (Array)\u001b[39m\n", null],
    ["    \u001b[31mTest Error 2.a\u001b[39m\n", null],
    ["    \u001b[31mTest Error 2.b\u001b[39m\n", null]
  ]);
}
export const onErrorEmpty = () => {
  logger.onError("");
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mError (Empty)\u001b[39m\n", null]
  ]);
}
export const onErrorUndefined = () => {
  logger.onError(undefined);
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mError (Empty)\u001b[39m\n", null]
  ]);
}
export const onErrorNull = () => {
  logger.onError(null);
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mError (Empty)\u001b[39m\n", null]
  ]);
}
export const onErrorString = () => {
  logger.onError('My String');
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mMy String\u001b[39m\n", null]
  ]);
}
export const onErrorBoolean = () => {
  logger.onError(false);
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mError: false\u001b[39m\n", null]
  ]);
}
export const onErrorNumber = () => {
  logger.onError(42.5);
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mError: 42.5\u001b[39m\n", null]
  ]);
}
export const onErrorFunction = () => {
  const sampleFunction = () => { console.log("test"); };

  logger.onError(sampleFunction);
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mError: (callback: sampleFunction)\u001b[39m\n", null],
    ["  \u001b[35m() => { console.log(\"test\"); }\u001b[39m\n", null],
  ]);
}
export const onErrorBuffer = () => {
  const buffer = Buffer.from(new TextEncoder().encode("Sample Text"));
  logger.onError(buffer);
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mSample Text\u001b[39m\n", null],
  ]);
}
export const onErrorDate = () => {
  logger.onError(new Date(1725078354042));
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mError (Date): 2024-08-31T04:25:54.042Z\u001b[39m\n", null],
  ]);
}
export const onErrorResolvedPromise = async () => {
  const promise = Promise.resolve('The resolved value');
  logger.onError(promise);
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mError (Promise)\u001b[39m\n", null],
  ]);
  await promise.catch(() => { }).finally(() => {
    expect(stdout.getBuffer()).equals([
      ["\u001b[31mError (Promise)\u001b[39m\n", null],
      ["\u001b[31mThe resolved value\u001b[39m\n", null]
    ]);
  })
}
export const onErrorRejectedPromise = async () => {
  const promise = Promise.reject('The rejected value');
  logger.onError(promise);
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mError (Promise)\u001b[39m\n", null],
  ]);
  await promise.catch(() => { }).finally(() => {
    expect(stdout.getBuffer()).equals([
      ["\u001b[31mError (Promise)\u001b[39m\n", null],
      ["\u001b[31mThe rejected value\u001b[39m\n", null]
    ]);
  })
}
export const onErrorErrorKey = () => {
  logger.onError({ error: "my error" });
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mmy error\u001b[39m\n", null],
  ]);
}
export const onErrorErrorsKey = () => {
  logger.onError({ errors: ["error 1", "error 2"] });
  expect(stdout.getBuffer()).equals([
    ["\u001b[31merror 1\u001b[39m\n", null],
    ["\u001b[31merror 2\u001b[39m\n", null]
  ]);
}
export const onErrorMessageKey = () => {
  logger.onError({ message: "my message" });
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mmy message\u001b[39m\n", null],
  ]);
}
export const onErrorMessagesKey = () => {
  logger.onError({ messages: ["message 1", "message 2"] });
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mmessage 1\u001b[39m\n", null],
    ["\u001b[31mmessage 2\u001b[39m\n", null]
  ]);
}
export const onErrorReasonKey = () => {
  logger.onError({ reason: "my reason" });
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mmy reason\u001b[39m\n", null],
  ]);
}
export const onErrorReasonsKey = () => {
  logger.onError({ reasons: ["reason 1", "reason 2"] });
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mreason 1\u001b[39m\n", null],
    ["\u001b[31mreason 2\u001b[39m\n", null]
  ]);
}
export const onErrorUnknownObject = () => {
  logger.onError({ unexpectedKey: 'my value' });
  expect(stdout.getBuffer()).equals([
    ["\u001b[31mError (Object)\u001b[39m\n", null],
    ["  { unexpectedKey: \u001b[32m'my value'\u001b[39m }\n", null]
  ]);
}
