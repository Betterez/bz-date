const { describe, it } = require("node:test");

describe("BzTime", () => {
  const assert = require("node:assert/strict");
  const { BzTime } = require("../src/bz-time");

  describe("#create()", () => {
    it("should create a new BzTime object", () => {
      const time = new BzTime(12, 0, 0);
      assert.ok(time instanceof BzTime);
    });

    it("should set the hours, minutes, and seconds properties", () => {
      const time = new BzTime(12, 0, 0);
      assert.equal(time.hours, 12);
      assert.equal(time.minutes, 0);
      assert.equal(time.seconds, 0);
      assert.equal(time.milliseconds, 0);
    });

    it("should handle AM hours", () => {
      const time = new BzTime(12, 45, 17, "AM");
      assert.equal(time.hours, 0);
      assert.equal(time.minutes, 45);
      assert.equal(time.seconds, 17);
      assert.equal(time.milliseconds, 0);
    });

    it("should handle PM hours", () => {
      const time = new BzTime(2, 45, 17, "PM");
      assert.equal(time.hours, 14);
      assert.equal(time.minutes, 45);
      assert.equal(time.seconds, 17);
      assert.equal(time.milliseconds, 0);
    });

    it("should ignore AM/PM hours when hours are more than 12", () => {
      const time = new BzTime(13, 45, 17, "PM");
      assert.equal(time.hours, 13);
      assert.equal(time.minutes, 45);
      assert.equal(time.seconds, 17);
      assert.equal(time.milliseconds, 0);
    });

    it("should handle a string with three parts", () => {
      const time = new BzTime("10:45:15");
      assert.equal(time.hours, 10);
      assert.equal(time.minutes, 45);
      assert.equal(time.seconds, 15);
      assert.equal(time.milliseconds, 0);
    });

    it("should handle a string with two parts", () => {
      const time = new BzTime("10:45");
      assert.equal(time.hours, 10);
      assert.equal(time.minutes, 45);
      assert.equal(time.seconds, 0);
      assert.equal(time.milliseconds, 0);
    });

    it("should handle a string with one part", () => {
      const time = new BzTime("10");
      assert.equal(time.hours, 10);
      assert.equal(time.minutes, 0);
      assert.equal(time.seconds, 0);
      assert.equal(time.milliseconds, 0);
    });

    it("should handle a string with AM/PM", () => {
      const time = new BzTime("10 PM");
      assert.equal(time.hours, 22);
      assert.equal(time.minutes, 0);
      assert.equal(time.seconds, 0);
      assert.equal(time.milliseconds, 0);
    });
  });

  describe("#difference", () => {
    it("should return the difference given two times", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = new BzTime(13, 0, 0);
      assert.equal(BzTime.difference(time, time2), 3600000);
    });

    it("should return the negative difference given two times", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = new BzTime(13, 0, 0);
      assert.equal(BzTime.difference(time2, time), -3600000);
    });
  });

  describe("#addMilliseconds", () => {
    it("should addMilliseconds a number of milliseconds to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addMilliseconds(time, 3600000);
      assert.equal(time2.hours, 13);
    });

    it("should addMilliseconds a negative number of milliseconds to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addMilliseconds(time, -3600000);
      assert.equal(time2.hours, 11);
    });
  });

  describe("#addSeconds", () => {
    it("should add a number of seconds to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addSeconds(time, 5400);
      assert.equal(time2.hours, 13);
      assert.equal(time2.minutes, 30);
    });

    it("should add a negative number of seconds to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addSeconds(time, -7200);
      assert.equal(time2.hours, 10);
    });
  });

  describe("#addMinutes", () => {
    it("should add a number of minutes to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addMinutes(time, 90);
      assert.equal(time2.hours, 13);
      assert.equal(time2.minutes, 30);
    });

    it("should add a negative number of minutes to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addMinutes(time, -160);
      assert.equal(time2.hours, 9);
      assert.equal(time2.minutes, 20);
    });
  });

  describe("#addHours", () => {
    it("should add a number of hours to a time", () => {
      const time = new BzTime(23, 0, 0);
      const time2 = BzTime.addHours(time, 2);
      assert.equal(time2.hours, 1);
    });

    it("should add a negative number of hours to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addHours(time, -2);
      assert.equal(time2.hours, 10);
    });
  });

  describe("#toString", () => {
    it("should return a string representation of the time", () => {
      const time = new BzTime(12, 0, 0);
      assert.equal(time.toString(), "12:00:00");
    });

    it("should return a string representation of the time with a 'hh:mm:ss' format", () => {
      const time = new BzTime(12, 0, 0);
      assert.equal(time.toString("hh:mm:ss"), "12:00:00");
    });

    it("should return a string representation of the time with a 'hh:mm' format", () => {
      const time = new BzTime(23, 0, 0);
      assert.equal(time.toString("hh:mm"), "23:00");
    });

    it("should return a string representation of the time with a 'hh' format", () => {
      const time = new BzTime(23, 0, 0);
      assert.equal(time.toString("hh"), "23");
    });

    it("should return a string representation of the time with a 'mm' format", () => {
      const time = new BzTime(23, 45, 0);
      assert.equal(time.toString("mm"), "45");
    });

    it("should return a string representation of the time with a 'ss' format", () => {
      const time = new BzTime(8, 0, 23);
      assert.equal(time.toString("ss"), "23");
    });

    it("should return a string representation of the time with a 'mm:ss' format", () => {
      const time = new BzTime(8, 12, 23);
      assert.equal(time.toString("mm:ss"), "12:23");
    });
  });

  describe("#toString AMPM", () => {
    it("should return a string representation of the time", () => {
      const time = new BzTime(23, 0, 0);
      assert.equal(time.toString(undefined, true), "11:00:00 PM");
    });

    it("should return a string representation of the time with a 'hh:mm:ss' format", () => {
      const time = new BzTime(12, 0, 0);
      assert.equal(time.toString("hh:mm:ss"), "12:00:00");
    });

    it("should return a string representation of the time with a 'hh:mm' format", () => {
      const time = new BzTime(23, 0, 0);
      assert.equal(time.toString("hh:mm"), "23:00");
    });

    it("should return a string representation of the time with a 'hh' format", () => {
      const time = new BzTime(23, 0, 0);
      assert.equal(time.toString("hh"), "23");
    });

    it("should return a string representation of the time with a 'mm' format", () => {
      const time = new BzTime(23, 45, 0);
      assert.equal(time.toString("mm"), "45");
    });

    it("should return a string representation of the time with a 'ss' format", () => {
      const time = new BzTime(8, 0, 23);
      assert.equal(time.toString("ss"), "23");
    });

    it("should return a string representation of the time with a 'mm:ss' format", () => {
      const time = new BzTime(8, 12, 23);
      assert.equal(time.toString("mm:ss"), "12:23");
    });
  });
});
