describe("BzTime", () => {
  const { BzTime } = require("../src/bz-time");
  const { expect } = require("chai");

  describe("#create()", () => {
    it("should create a new BzTime object", () => {
      const time = new BzTime(12, 0, 0);
      expect(time).to.be.an.instanceof(BzTime);
    });

    it("should set the hours, minutes, and seconds properties", () => {
      const time = new BzTime(12, 0, 0);
      expect(time.hours).to.be.eql(12);
      expect(time.minutes).to.be.eql(0);
      expect(time.seconds).to.be.eql(0);
      expect(time.milliseconds).to.be.eql(0);
    });

    it("should handle AM hours", () => {
      const time = new BzTime(12, 45, 17, "AM");
      expect(time.hours).to.be.eql(0);
      expect(time.minutes).to.be.eql(45);
      expect(time.seconds).to.be.eql(17);
      expect(time.milliseconds).to.be.eql(0);
    });

    it("should handle PM hours", () => {
      const time = new BzTime(2, 45, 17, "PM");
      expect(time.hours).to.be.eql(14);
      expect(time.minutes).to.be.eql(45);
      expect(time.seconds).to.be.eql(17);
      expect(time.milliseconds).to.be.eql(0);
    });

    it("should ignore AM/PM hours when hours are more than 12", () => {
      const time = new BzTime(13, 45, 17, "PM");
      expect(time.hours).to.be.eql(13);
      expect(time.minutes).to.be.eql(45);
      expect(time.seconds).to.be.eql(17);
      expect(time.milliseconds).to.be.eql(0);
    });

    it("should handle a string with three parts", () => {
      const time = new BzTime("10:45:15");
      expect(time.hours).to.be.eql(10);
      expect(time.minutes).to.be.eql(45);
      expect(time.seconds).to.be.eql(15);
      expect(time.milliseconds).to.be.eql(0);
    });

    it("should handle a string with two parts", () => {
      const time = new BzTime("10:45");
      expect(time.hours).to.be.eql(10);
      expect(time.minutes).to.be.eql(45);
      expect(time.seconds).to.be.eql(0);
      expect(time.milliseconds).to.be.eql(0);
    });

    it("should handle a string with one part", () => {
      const time = new BzTime("10");
      expect(time.hours).to.be.eql(10);
      expect(time.minutes).to.be.eql(0);
      expect(time.seconds).to.be.eql(0);
      expect(time.milliseconds).to.be.eql(0);
    });

    it("should handle a string with AM/PM", () => {
      const time = new BzTime("10 PM");
      expect(time.hours).to.be.eql(22);
      expect(time.minutes).to.be.eql(0);
      expect(time.seconds).to.be.eql(0);
      expect(time.milliseconds).to.be.eql(0);
    });
  });

  describe("#difference", () => {
    it("should return the difference given two times", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = new BzTime(13, 0, 0);
      expect(BzTime.difference(time, time2)).to.be.eql(3600000);
    });

    it("should return the negative difference given two times", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = new BzTime(13, 0, 0);
      expect(BzTime.difference(time2, time)).to.be.eql(-3600000);
    });
  });

  describe("#addMilliseconds", () => {
    it("should addMilliseconds a number of milliseconds to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addMilliseconds(time, 3600000);
      expect(time2.hours).to.be.eql(13);
    });

    it("should addMilliseconds a negative number of milliseconds to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addMilliseconds(time, -3600000);
      expect(time2.hours).to.be.eql(11);
    });
  });

  describe("#addSeconds", () => {
    it("should add a number of seconds to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addSeconds(time, 5400);
      expect(time2.hours).to.be.eql(13);
      expect(time2.minutes).to.be.eql(30);
    });

    it("should add a negative number of seconds to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addSeconds(time, -7200);
      expect(time2.hours).to.be.eql(10);
    });
  });

  describe("#addMinutes", () => {
    it("should add a number of minutes to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addMinutes(time, 90);
      expect(time2.hours).to.be.eql(13);
      expect(time2.minutes).to.be.eql(30);
    });

    it("should add a negative number of minutes to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addMinutes(time, -160);
      expect(time2.hours).to.be.eql(9);
      expect(time2.minutes).to.be.eql(20);
    });
  });

  describe("#addHours", () => {
    it("should add a number of hours to a time", () => {
      const time = new BzTime(23, 0, 0);
      const time2 = BzTime.addHours(time, 2);
      expect(time2.hours).to.be.eql(1);
    });

    it("should add a negative number of hours to a time", () => {
      const time = new BzTime(12, 0, 0);
      const time2 = BzTime.addHours(time, -2);
      expect(time2.hours).to.be.eql(10);
    });
  });

  describe("#toString", () => {
    it("should return a string representation of the time", () => {
      const time = new BzTime(12, 0, 0);
      expect(time.toString()).to.be.eql("12:00:00");
    });

    it("should return a string representation of the time with a 'hh:mm:ss' format", () => {
      const time = new BzTime(12, 0, 0);
      expect(time.toString("hh:mm:ss")).to.be.eql("12:00:00");
    });

    it("should return a string representation of the time with a 'hh:mm' format", () => {
      const time = new BzTime(23, 0, 0);
      expect(time.toString("hh:mm")).to.be.eql("23:00");
    });

    it("should return a string representation of the time with a 'hh' format", () => {
      const time = new BzTime(23, 0, 0);
      expect(time.toString("hh")).to.be.eql("23");
    });

    it("should return a string representation of the time with a 'mm' format", () => {
      const time = new BzTime(23, 45, 0);
      expect(time.toString("mm")).to.be.eql("45");
    });

    it("should return a string representation of the time with a 'ss' format", () => {
      const time = new BzTime(8, 0, 23);
      expect(time.toString("ss")).to.be.eql("23");
    });

    it("should return a string representation of the time with a 'mm:ss' format", () => {
      const time = new BzTime(8, 12, 23);
      expect(time.toString("mm:ss")).to.be.eql("12:23");
    });
  });

  describe("#toString AMPM", () => {
    it("should return a string representation of the time", () => {
      const time = new BzTime(23, 0, 0);
      expect(time.toString(undefined, true)).to.be.eql("11:00:00 PM");
    });

    it("should return a string representation of the time with a 'hh:mm:ss' format", () => {
      const time = new BzTime(12, 0, 0);
      expect(time.toString("hh:mm:ss")).to.be.eql("12:00:00");
    });

    it("should return a string representation of the time with a 'hh:mm' format", () => {
      const time = new BzTime(23, 0, 0);
      expect(time.toString("hh:mm")).to.be.eql("23:00");
    });

    it("should return a string representation of the time with a 'hh' format", () => {
      const time = new BzTime(23, 0, 0);
      expect(time.toString("hh")).to.be.eql("23");
    });

    it("should return a string representation of the time with a 'mm' format", () => {
      const time = new BzTime(23, 45, 0);
      expect(time.toString("mm")).to.be.eql("45");
    });

    it("should return a string representation of the time with a 'ss' format", () => {
      const time = new BzTime(8, 0, 23);
      expect(time.toString("ss")).to.be.eql("23");
    });

    it("should return a string representation of the time with a 'mm:ss' format", () => {
      const time = new BzTime(8, 12, 23);
      expect(time.toString("mm:ss")).to.be.eql("12:23");
    });
  });
});