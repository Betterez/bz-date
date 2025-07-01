# bz-date

A comprehensive date manipulation library for the Betterez ecosystem, providing timezone-aware date operations and formatting capabilities.

## Overview

bz-date is a JavaScript date library that extends native Date functionality with timezone support, formatting options, and specialized date operations. It includes support for 40+ timezones with Daylight Saving Time (DST) handling.

## Installation

```bash
npm install bz-date
```

## Quick start

```javascript
const BzDate = require('bz-date');

// Create a new date
const date = new BzDate();

// Parse a date string
const parsed = new BzDate('2023-12-25');

// Format a date
const formatted = date.toString('dd/mm/yyyy');
```

## Complete API reference

### Constructors

| Constructor | Description |
|-------------|-------------|
| `new BzDate()` | Current date |
| `new BzDate(dateObject)` | From a JavaScript Date object |
| `new BzDate(bzDateObject)` | Clone of an existing BzDate instance |
| `new BzDate(literal)` | From a literal object `{ value: Date, offset: number }` |
| `new BzDate(dateString)` | Parses a date string |
| `new BzDate(dateString, format)` | Parses a string with a specific format |
| `new BzDate(dateString, offset)` | String with timezone offset |
| `new BzDate(year, month, day, hour, min, sec, msec, offset)` | Full parameterized constructor |

### Instance methods - Manipulation

| Method | Description |
|--------|-------------|
| `addYears(years)` | Adds years |
| `addMonths(months)` | Adds months |
| `addDays(days)` | Adds days |
| `addHours(hours)` | Adds hours |
| `addMinutes(minutes)` | Adds minutes |
| `addSeconds(seconds)` | Adds seconds |

### Instance methods - Getters

| Method | Description |
|--------|-------------|
| `getTime(applyOrAddOffset)` | Returns timestamp in milliseconds |
| `getTimezoneOffset()` | Returns timezone offset |
| `getYear(applyOrAddOffset)` | Gets the year |
| `getMonth(applyOrAddOffset)` | Gets the month (1–12) |
| `getMonthName(longForm, applyOrAddOffset)` | Gets the month name |
| `getDayOfMonth(applyOrAddOffset)` | Gets the day of the month |
| `getDayOfWeek(applyOrAddOffset)` | Gets the day of the week (0–6) |
| `getDayOfWeekName(longForm, applyOrAddOffset)` | Gets the day name |
| `getHours(applyOrAddOffset)` | Gets the hours |
| `getMinutes(applyOrAddOffset)` | Gets the minutes |
| `getSeconds()` | Gets the seconds |
| `getMilliseconds()` | Gets the milliseconds |

### Instance methods - Setters

| Method | Description |
|--------|-------------|
| `setTimezoneOffset(offset)` | Sets the timezone offset |
| `setYear(year)` | Sets the year |
| `setMonth(month)` | Sets the month |
| `setDayOfMonth(day)` | Sets the day |
| `setHours(hours)` | Sets the hours |
| `setMinutes(minutes)` | Sets the minutes |
| `setSeconds(seconds)` | Sets the seconds |
| `setMilliseconds(milliseconds)` | Sets the milliseconds |

### Instance methods - Comparison

| Method | Description |
|--------|-------------|
| `isEqual(date)` | Exact equality |
| `isGreaterThan(date)` | Greater than |
| `isLessThan(date)` | Less than |
| `isGreaterOrEqual(date)` | Greater than or equal |
| `isLessOrEqual(date)` | Less than or equal |
| `isSameDay(date)` | Same day |

### Instance methods - Conversion

| Method | Description |
|--------|-------------|
| `toString(mask, applyOrAddOffset)` | Converts to string format |
| `toLiteral()` | Converts to a literal object |

### Static Methods

| Method | Description |
|--------|-------------|
| `BzDate.compare(bzDate1, bzDate2, applyOffsets)` | Comparison (-1, 0, 1) |
| `BzDate.applyOffset(bzDate, offset)` | Applies a timezone offset |
| `BzDate.getDateAtMidnight(year, month, day, offset)` | Midnight date |
| `BzDate.isStringADate(dateString, format)` | Validates if a string is a date |
| `BzDate.isBzDate(object)` | Checks if object is a BzDate instance |

### Timezone System

| Feature | Description |
|---------|-------------|
| Timezone support | 40+ timezones with DST |
| `timezones.getZones()` | Returns available zones |
| `timezones.getZonesWithDST()` | Zones with DST info |
| `timezones.getOffset(zone, date)` | Offset for zone/date |
| `timezones.getTZ(key)` | Returns IANA timezone name (fallback: "America/Toronto") |

### Formatting System

| Feature | Description |
|---------|-------------|
| Predefined masks | `dd/mm/yyyy`, `yyyy-mm-dd`, etc. |
| Available tokens | `d`, `dd`, `ddd`, `dddd`, `m`, `mm`, `mmm`, `mmmm`, `yy`, `yyyy`, `h`, `hh`, `H`, `HH`, `M`, `MM`, `s`, `ss`, etc. |
| Internationalization | English names for days and months |

### NullBzDate

| Feature | Description |
|---------|-------------|
| Null date representation | Special class to represent null/empty dates |
| Neutral return values | All methods return neutral values or this |
| Error handling | Setters throw explicit errors |

## Safety guidelines

After thorough research, several critical issues have been identified in the timezone handling system. The development team is currently working on addressing these problems.

### Known issues

1. **Hardcoded DST dates** - DST transitions are hardcoded and expire in 2026 (no data beyond that year)
2. **Incorrect timezone rules** - Some timezones use incorrect DST transition dates for their regions
3. **Time-ignorant DST transitions** - BzDate only checks dates, not the specific hour when DST changes occur
4. **Missing IANA database integration** - Returns IANA timezone names but relies on manually maintained timezone data instead of the standard IANA timezone database

### Recommendations

Until these issues are resolved:

- **Safe Operations**: Basic date arithmetic, comparison, and formatting without timezone offsets
- **Use with Caution**: Any operations involving timezone offsets or DST-dependent calculations
- **Avoid**: Manual timezone offset management and operations that rely on DST transition accuracy

## Development

```bash
# Run tests
npm test

# Run tests in watch mode
npm run tdd
```