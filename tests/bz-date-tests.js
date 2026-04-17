const { describe, it } = require("node:test");

describe("BzDate", function () {
  const assert = require("node:assert/strict");
  const moment = require("moment-timezone");
  const { BzDate, timezones } = require("../index");

  it("should declare a list of standard IANA timezone names that are interoperable with Moment.js", () => {
    // Interoperability with Moment.js is important and there are several places in the system where the timezones in BzDate
    // are provided to Moment.js
    const allTimezonesRecognizedByMoment = moment.tz.names();
    const allTimezonesAvailableInBzDate = Object.values(timezones.getZonesWithDST()).map((item) => {
      return item.tz;
    });

    for (const timezoneFromBzDate of allTimezonesAvailableInBzDate) {
      assert.ok(allTimezonesRecognizedByMoment.includes(timezoneFromBzDate));
    }
  });

  describe("timezones.getOffset()", function () {

    it("should get the daylight offset of the America/Toronto timezone", () => {
      const date = new BzDate(2019, 10, 27, 0, 0, 0);
      const timezone = {
        "name" : "(UTC-5:00) New York (United States), Toronto (Canada)",
        "daylight" : true,
        "tz" : "America/Toronto"
      };
      const offset = timezones.getOffset(timezone, date);
      assert.equal(offset, -240);
    });

    it("should get the standard offset of the America/Toronto timezone", () => {
      const date = new BzDate(2019, 11, 3, 0, 0, 0);
      const timezone = {
        "name" : "(UTC-5:00) New York (United States), Toronto (Canada)",
        "daylight" : true,
        "tz" : "America/Toronto"
      };
      const offset = timezones.getOffset(timezone, date);
      assert.equal(offset, -300);
    });

    it("should get the standard offset of the America/Monterrey timezone", () => {
      const date = new BzDate(2019, 10, 27, 0, 0, 0);
      const timezone = {
        "name" : "(UTC-6:00) Monterrey (Mexico)",
        "daylight" : true,
        "tz" : "America/Monterrey"
      };
      const offset = timezones.getOffset(timezone, date);
      assert.equal(offset, -360);
    });

    it("should get the daylight offset of the America/Monterrey timezone", () => {
      const date = new BzDate(2019, 10, 26, 0, 0, 0);
      const timezone = {
        "name" : "(UTC-6:00) Monterrey (Mexico)",
        "daylight" : true,
        "tz" : "America/Monterrey"
      };
      const offset = timezones.getOffset(timezone, date);
      assert.equal(offset, -360);
    });

    it("should get the daylight offset of the America/Tijuana timezone", () => {
      const date = new BzDate(2019, 10, 27, 0, 0, 0);
      const timezone = {
        "name" : "(UTC-8:00) Baja California - Near US border (Mexico)",
        "daylight" : true,
        "tz" : "America/Tijuana"
      };
      const offset = timezones.getOffset(timezone, date);
      assert.equal(offset, -420);
    });

    it("should get the standard offset of the America/Tijuana timezone", () => {
      const date = new BzDate(2019, 11, 3, 0, 0, 0);
      const timezone = {
        "name" : "(UTC-8:00) Baja California - Near US border (Mexico)",
        "daylight" : true,
        "tz" : "America/Tijuana"
      };
      const offset = timezones.getOffset(timezone, date);
      assert.equal(offset, -480);
    });

    it("should get the standard offset using the America/Toronto timezone if the timezone is not matched", () => {
      const date = new BzDate(2019, 10, 27, 0, 0, 0);
      const timezone = {
        "name" : "(UTC-10:00) Hawaii (United States), Cook Island (New Zeland)",
        "daylight" : false,
        "tz" : "US/Hawaii"
      };
      const offset = timezones.getOffset(timezone, date);
      assert.equal(offset, -600);
    });

    it("should get the standard offset using the America/Toronto timezone if the timezone is not matched", () => {
      const date = new BzDate(2019, 11, 3, 0, 0, 0);
      const timezone = {
        "name" : "(UTC-10:00) Hawaii (United States), Cook Island (New Zeland)",
        "daylight" : false,
        "tz" : "US/Hawaii"
      };
      const offset = timezones.getOffset(timezone, date);
      assert.equal(offset, -600);
    });

    it("should get TimeZone passed by parameter in constructor ", () => {
      const date = new BzDate(new Date(),-240);
      const offset = date.getTimezoneOffset();
      assert.equal(offset, -240);
    });

    it("should get the standard offset of the UTC timezone", () => {
      const date = new BzDate(2021,1,1,0,0,0,0,0,0);
      const timezone = {
        "name" : "(UTC+0:00) Dublin (Ireland), London (United Kingdom)",
      };
      const offset = timezones.getOffset(timezone, date);
      assert.equal(offset, 0);
    });
  });

  describe("BzDate.getDayOfWeekName", function () {
    it("should get Day of the week according America/Toronto timezone", () => {
      const date = new BzDate(2021,7,4,0,0,0,0,0,0); //4th of July was Sunday
      const timezone = {
        "name" : "(UTC-5:00) New York (United States), Toronto (Canada)",
        "daylight" : true,
      };
      const dow = date.getDayOfWeekName(false,timezone);
      assert.equal(dow, "Saturday");
    });

    it("should get Day of the week according UTC timezone", () => {
      const date = new BzDate(2021,1,1,0,0,0,0,0,0); //1st of January was Friday
      const timezone = {
        "name" : "(UTC+0:00) Dublin (Ireland), London (United Kingdom)",
        "daylight" : true,
      };
      const dow = date.getDayOfWeekName(false,timezone);
      assert.equal(dow, "Friday");
    });

    it("shouldn't change timeZone of BzDate instance", () => {
      const date = new BzDate(new Date());
      const timezone = {
        "name" : "(UTC-5:00) New York (United States), Toronto (Canada)",
        "daylight" : true,
      };
      const dateOldOffset = date.getTimezoneOffset();
      date.getDayOfWeekName(false,timezone);
      const dateNewOffset = date.getTimezoneOffset();
      assert.equal(dateOldOffset, dateNewOffset);
    });

    it("shouldn't change timeZone if timeZone is null", () => {
      const date = new BzDate(2021,1,1,0,0,0,0,0,0); //1st of January was Friday
      const dow = date.getDayOfWeekName(false,null);
      assert.equal(dow, "Friday");
    });
    
  });
});
