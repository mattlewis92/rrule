/**
 * General date-related utilities.
 * Also handles several incompatibilities between JavaScript and Python
 *
 */
export declare namespace dateutil {
    const MONTH_DAYS: number[];
    /**
     * Number of milliseconds of one day
     */
    const ONE_DAY: number;
    /**
     * @see: <http://docs.python.org/library/datetime.html#datetime.MAXYEAR>
     */
    const MAXYEAR = 9999;
    /**
     * Python uses 1-Jan-1 as the base for calculating ordinals but we don't
     * want to confuse the JS engine with milliseconds > Number.MAX_NUMBER,
     * therefore we use 1-Jan-1970 instead
     */
    const ORDINAL_BASE: Date;
    /**
     * Python: MO-SU: 0 - 6
     * JS: SU-SAT 0 - 6
     */
    const PY_WEEKDAYS: number[];
    /**
     * py_date.timetuple()[7]
     */
    const getYearDay: (date: Date) => number;
    const isLeapYear: (year: number) => boolean;
    /**
     * @return {Number} the date's timezone offset in ms
     */
    const tzOffset: (date: Date) => number;
    /**
     * @see: <http://www.mcfedries.com/JavaScript/DaysBetween.asp>
     */
    const daysBetween: (date1: Date, date2: Date) => number;
    /**
     * @see: <http://docs.python.org/library/datetime.html#datetime.date.toordinal>
     */
    const toOrdinal: (date: Date) => number;
    /**
     * @see - <http://docs.python.org/library/datetime.html#datetime.date.fromordinal>
     */
    const fromOrdinal: (ordinal: number) => Date;
    const getMonthDays: (date: Date) => number;
    /**
     * @return {Number} python-like weekday
     */
    const getWeekday: (date: Date) => number;
    /**
     * @see: <http://docs.python.org/library/calendar.html#calendar.monthrange>
     */
    const monthRange: (year: number, month: number) => number[];
    /**
     * @see: <http://docs.python.org/library/datetime.html#datetime.datetime.combine>
     */
    const combine: (date: Date, time: Date | Time) => Date;
    const clone: (date: Date | Time) => Date;
    const cloneDates: (dates: Date[] | Time[]) => Date[];
    /**
     * Sorts an array of Date or dateutil.Time objects
     */
    const sort: <T extends Pick<Date, "getTime">>(dates: T[]) => void;
    const timeToUntilString: (time: number) => string;
    const untilStringToDate: (until: string) => Date;
    class Time {
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
        constructor(hour: number, minute: number, second: number, millisecond: number);
        getHours(): number;
        getMinutes(): number;
        getSeconds(): number;
        getMilliseconds(): number;
        getTime(): number;
    }
    class DateTime extends Time {
        day: number;
        month: number;
        year: number;
        constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number);
        getWeekday(): number;
        getTime(): number;
        getDay(): number;
        getMonth(): number;
        getYear(): number;
        addYears(years: number): void;
        addMonths(months: number): void;
        addWeekly(days: number, wkst: number): void;
        addDaily(days: number): void;
        addHours(hours: number, filtered: boolean, byhour: number[]): boolean;
        addMinutes(minutes: number, filtered: boolean, byhour: number[], byminute: number[]): boolean;
        addSeconds(seconds: number, filtered: boolean, byhour: number[], byminute: number[], bysecond: number[]): boolean;
        fixDay(): void;
    }
}
export default dateutil;
