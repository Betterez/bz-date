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

    it("should get the daylight offset of America/Toronto in 2027 after the cutoff table extension", () => {
      const date = new BzDate(2027, 7, 15, 0, 0, 0);
      const timezone = {
        "name" : "(UTC-5:00) New York (United States), Toronto (Canada)",
        "daylight" : true,
        "tz" : "America/Toronto"
      };
      assert.equal(timezones.getOffset(timezone, date), -240);
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

    it("should get -420 year-round for the new Pacific Time Vancouver timezone", () => {
      const timezone = {name: "(UTC-7:00) Pacific Time - Vancouver (Canada), British Columbia (Canada)", tz: "America/Vancouver"};
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 7, 15, 0, 0, 0)), -420);
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 1, 15, 0, 0, 0)), -420);
    });

    it("should get -420 year-round for the deprecated (UTC-7:00) Vancouver timezone", () => {
      const timezone = {name: "(UTC-7:00) Vancouver (Canada)", tz: "America/Vancouver"};
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 7, 15, 0, 0, 0)), -420);
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 1, 15, 0, 0, 0)), -420);
    });

    it("should get -420 year-round for the deprecated (UTC-8:00) Vancouver timezone", () => {
      const timezone = {name: "(UTC-8:00) Vancouver (Canada)", tz: "America/Vancouver"};
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 7, 15, 0, 0, 0)), -420);
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 1, 15, 0, 0, 0)), -420);
    });

    it("should get -360 year-round for the new (UTC-6:00) Calgary/Edmonton timezone", () => {
      const timezone = {name: "(UTC-6:00) Calgary (Canada), Edmonton (Canada)", tz: "America/Edmonton"};
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 7, 15, 0, 0, 0)), -360);
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 1, 15, 0, 0, 0)), -360);
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 11, 15, 0, 0, 0)), -360);
      assert.equal(timezones.getOffset(timezone, new BzDate(2027, 2, 16, 0, 0, 0)), -360);
    });

    it("should get -360 year-round for the deprecated (UTC-7:00) Calgary/Edmonton timezone", () => {
      const timezone = {name: "(UTC-7:00) Calgary (Canada), Edmonton (Canada)", tz: "America/Edmonton"};
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 7, 15, 0, 0, 0)), -360);
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 1, 15, 0, 0, 0)), -360);
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 11, 15, 0, 0, 0)), -360);
      assert.equal(timezones.getOffset(timezone, new BzDate(2027, 2, 16, 0, 0, 0)), -360);
    });

    it("should mark the old (UTC-7:00) Calgary/Edmonton entry as deprecated", () => {
      const zones = timezones.getZonesWithDST();
      assert.equal(zones["(UTC-6:00) Calgary (Canada), Edmonton (Canada)"].deprecated, undefined);
      assert.equal(zones["(UTC-7:00) Calgary (Canada), Edmonton (Canada)"].deprecated, true);
      assert.equal(zones["(UTC-6:00) Calgary (Canada), Edmonton (Canada)"].observe_DST, false);
      assert.equal(zones["(UTC-7:00) Calgary (Canada), Edmonton (Canada)"].observe_DST, false);
    });

    it("should get -300 year-round for the new (UTC-5:00) Winnipeg timezone", () => {
      const timezone = {name: "(UTC-5:00) Winnipeg (Canada)", tz: "America/Winnipeg"};
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 7, 15, 0, 0, 0)), -300);
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 1, 15, 0, 0, 0)), -300);
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 11, 15, 0, 0, 0)), -300);
      assert.equal(timezones.getOffset(timezone, new BzDate(2027, 2, 16, 0, 0, 0)), -300);
    });

    it("should get -300 year-round for the deprecated (UTC-6:00) Winnipeg timezone", () => {
      const timezone = {name: "(UTC-6:00) Winnipeg (Canada)", tz: "America/Winnipeg"};
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 7, 15, 0, 0, 0)), -300);
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 1, 15, 0, 0, 0)), -300);
      assert.equal(timezones.getOffset(timezone, new BzDate(2026, 11, 15, 0, 0, 0)), -300);
      assert.equal(timezones.getOffset(timezone, new BzDate(2027, 2, 16, 0, 0, 0)), -300);
    });

    it("should mark the old (UTC-6:00) Winnipeg entry as deprecated", () => {
      const zones = timezones.getZonesWithDST();
      assert.equal(zones["(UTC-5:00) Winnipeg (Canada)"].deprecated, undefined);
      assert.equal(zones["(UTC-6:00) Winnipeg (Canada)"].deprecated, true);
      assert.equal(zones["(UTC-5:00) Winnipeg (Canada)"].observe_DST, false);
      assert.equal(zones["(UTC-6:00) Winnipeg (Canada)"].observe_DST, false);
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
