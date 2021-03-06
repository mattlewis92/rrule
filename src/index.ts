/*!
 * rrule.js - Library for working with recurrence rules for calendar dates.
 * https://github.com/jakubroztocil/rrule
 *
 * Copyright 2010, Jakub Roztocil and Lars Schoning
 * Licenced under the BSD licence.
 * https://github.com/jakubroztocil/rrule/blob/master/LICENCE
 *
 * Based on:
 * python-dateutil - Extensions to the standard Python datetime module.
 * Copyright (c) 2003-2011 - Gustavo Niemeyer <gustavo@niemeyer.net>
 * Copyright (c) 2012 - Tomi Pieviläinen <tomi.pievilainen@iki.fi>
 * https://github.com/jakubroztocil/rrule/blob/master/LICENCE
 *
 */

import RRule from './rrule'
import RRuleSet from './rruleset'
import RRuleStr from './rrulestr'
export { Frequency, ByWeekday, WeekdayStr, Options } from './types'
export { default as Weekday } from './weekday'
export { RRuleStrOptions } from './rrulestr'

// =============================================================================
// Export
// =============================================================================

// Only one RRuleStr instance for all rrule string parsing work.
const rruleStr = new RRuleStr()
const rrulestr: typeof rruleStr.parse = function () {
  return rruleStr.parse.apply(rruleStr, arguments)
}

export {
  RRule,
  RRuleSet,
  rrulestr
}

export default RRule
