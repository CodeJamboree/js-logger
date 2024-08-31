# js-logger

Simple logger utility that adds some color to the console, formatting, and error logging. The same common functions were being used on small utility scripts. Eventually they were separated for reusability accross projects.

```js
import logger from '@codejamboree/js-logger';
logger.debug('hello'); // log magenta
logger.log('hello'); // log standard white
logger.info('hello'); // log blue
logger.warn('hello'); // log yellow
logger.error('hello'); // log red
```

## Colors

Color can also be extended with the ANSI helper.

```js
logger.log(`This is ${logger.ansi.red('Red')}.`); // Colors as red.
logger.log(logger.ansi.bgRed('Red')); // background color is red
```

Colors available are black, red, green, yellow, blue, magenta, cyan, and white.

## Timers

Timer labels are cyan.
```js
logger.time('my label');
logger.timeLog('my label'); // time label colored in cyan
logger.timeEnd('my label'); // time label colored in cyan
```

## Formatting

A few helper functions provide some common formatting.
- `done` displays the console log, and the word, "done"
- `title` displays a title centered
- `section` displays a sub-title centered. Can customize start/end tags

Text is centered at 40 characters wide, with wrapping.

```js
logger.title('my title');
// ----------------------------------------
//                 my title
// ----------------------------------------
logger.title('my title '.repeat(6));
// ----------------------------------------
//  my title my title my title my title my 
//              title my title             
// ----------------------------------------
logger.section('my section');
// 
//           ---{ my section }---          
// 
logger.section('my section '.repeat(4));
//
//    ---{ my section my section my }---   
//       ---{ section my section }---      
//
logger.section('my section', '<<< ', ' >>>');
//
//            <<< my section >>>           
//
logger.done();
// Running time: 18.331ms
// done
```
## Error Logging

The logger has an onError handler which can accept errors, objects, arrays, strings, promises, buffers, and more. An attempt has been made to handle just about any type of data and log it appropriately.

```js
logger.onError(new Error('The Error'));
// The Error
logger.onError('The string error');
// The string error
logger.onError(['Error 1', 'Error 2']);
// Error (Array)
//   Error 1
//   Error 2
logger.onError({error: 'The error key'});
// The error key
// NOTE: same for keys: errors, message, message, reason, reasons
logger.onError(Buffer.from('The buffer error'));
// The buffer error
logger.onError(Promise.resolve('The resolved value'));
// Error (Promise)
// The resolved value
logger.onError(Promise.reject('The rejected value'));
// Error (Promise)
// The rejected value
logger.onError(1); 
// Error: 1
logger.onError(false); 
// Error: false
logger.onError(new Date()); 
// Error (Date): 2024-08-31T05:50:06.145Z
logger.onError({unrecognized: 'The unknown value'});
// Error (Object)
//   { unrecognized: 'The unknown value' }
logger.onError(null);
// Error (Empty)
logger.onError(undefined);
// Error (Empty)
logger.onError("");
// Error (Empty)
```

If an error has some specific keys, they will be listed as well. Specifically, these are `data` and `rawPacket`.

```js
logger.onError({
  error: 'The Error',
  data: 'the data',
  rawPacket: Buffer.from("Hello")
});
// The Error
//   Hello
//   the data
```

## Console

The logger is the console. You can call either the logger or the console. The console functions (log, debug, error, etc.) have been wrapped to apply color.

```js
logger.debug('foo'); // writes "foo" in magenta
console.debug('foo'); // writes "foo" in magenta

console.title('hello'); // writes centered title
```

## Ideal Script

```js
import logger from '@codejamboree/js-logger';

const main = async () => {
  console.log('do something.');
}

try {
  logger.title('Script Name');
  main()
    .catch(logger.onError)
    .finally(logger.done);
} catch (e) {
  logger.onError(e);
  logger.done();
}
```