### Changelog

- 2.3.4 (2018-08-10)
  - Fixed support for eastern hemisphere timezones (#247)
- 2.3.3 (2018-08-08)
  - Fixed typescript error (#244)
- 2.3.2 (2018-08-07)
  - Fixed deploy on npm (#239)
- 2.3.0 (2018-08-06)
  - Converted to [Typescript](https://www.typescriptlang.org/) (#229)
  - Add es5 and es6 distributions
  - Fixed a bug where recurrences in DST were 1 hour off if the host system used DST (#233)
  - Fixed numeric handling of weekday strings
- 2.2.8 (2018-02-16)
  - Added `fromText()` and `toText()` support for rules with `RRule.MINUTELY` frequency.
  - Added support for `VALUE=DATE` as a `RDATE` param.
  - Added typescript definitions.
  - Merged in the now obsolete `arolson101/rrule` fork (many thanks to @arolson101).
  - Fixed `RRule` mutating passed-in `options` in some cases.
  - Fixed unexpected results with dates lower than 1970.
  - Fixed `RRule.DAILY` frequency when only 1 `BYHOUR` is provided.
  - Fixed the internal `isLeapYear()` to only accept integers instead of relying on `instanceof` to check the parameter type.
- 2.2.0 (2017-03-11)
  - Added support `RRuleSet`, which allows more complex recurrence setups,
    mixing multiple rules, dates, exclusion rules, and exclusion dates.
  - Added Millisecond precision
    - Millisecond offset extracted from `dtstart` (`dtstart.getTime() % 1000`)
    - Each recurrence is returned with the same offset
  - Added some NLP support for hourly and byhour.
  - Fixed export in nlp.js.
- 2.1.0
  - Removed dependency on Underscore.js (thanks, @gsf).
  - Various small bugfixes and improvements.
- 2.0.1
  - Added bower.json.
- 2.0.0 (2013-07-16)
  - Fixed a February 28-related issue.
  - More flexible, backwards-incompatible API:
    - `freq` is now `options.freq`.
    - `options.cache` is now `noCache`.
    - `iterator` has to return `true`
    - `dtstart` and `options` arguments removed from `RRule.fromString`
      (use `RRule.parseString` and modify `options` manually instead).
    - `today` argument removed from `Rule.prototype.toText`
      (never actually used).
    - `rule.toString()` now includes `DTSTART` (if explicitly specified
      in `options`).
    - Day constants `.clone` is now `.nth`, eg. `RRule.FR.nth(-1)`
      (last Friday).
  - Added `RRule.parseString`
  - Added `RRule.parseText`
  - Added `RRule.optionsToString`
- 1.1.0 (2013-05-21)
  - Added a [demo app](http://jakubroztocil.github.io/rrule/).
  - Handle dates in `UNTIL` in `RRule.fromString`.
  - Added support for RequireJS.
  - Added `options` argument to `RRule.fromString`.
- 1.0.1 (2013-02-26)
  - Fixed leap years (thanks @jessevogt)
- 1.0.0 (2013-01-24)
  - Fixed timezone offset issues related to DST (thanks @evro).
- 1.0.0-beta (2012-08-15)
  - Initial public release.
