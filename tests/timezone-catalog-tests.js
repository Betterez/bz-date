const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const moment = require("moment-timezone");
const { BzDate, timezones } = require("../index");

// Zones that knowingly disagree with IANA, with the card that owns the fix.
// Fixing one without deleting its entry fails the test on purpose.
const KNOWN_DEVIATIONS = {
  // Deferred to CU-86bcmmvgm (audited timezones diverging from IANA).
  "US/Alaska": "CU-86bcmmvgm - observe_DST is false but Alaska does observe DST",
  "America/Ojinaga": "CU-86bcmmvgm - wrong year-round offset (standard -420, should be -360)",
  "America/Caracas": "CU-86bcmmvgm - wrong year-round offset (-270, should be -240)",
  "Asia/Almaty": "CU-86bcmmvgm - wrong year-round offset (360, should be 300); also shares label with Dhaka",
  "Europe/Dublin": "CU-86bcmmvgm - inherits US DST dates instead of EU dates",
  "Europe/Berlin": "CU-86bcmmvgm - observe_DST false; needs EU cutoff row",
  "Europe/Athens": "CU-86bcmmvgm - observe_DST false; needs EU cutoff row",
  "America/Santiago": "CU-86bcmmvgm - needs wrap-around predicate and Chile cutoff dates",
  "Australia/Adelaide": "CU-86bcmmvgm - observe_DST false; needs southern cutoff dates",
  "Australia/Canberra": "CU-86bcmmvgm - observe_DST false; needs southern cutoff dates",
  "Australia/Lord_Howe": "CU-86bcmmvgm - observe_DST false; 30-minute DST; southern cutoff dates",
  "Pacific/Norfolk": "CU-86bcmmvgm - wrong standard offset and DST never enabled",
  "Pacific/Auckland": "CU-86bcmmvgm - observe_DST false; needs southern cutoff dates",
  "Pacific/Chatham": "CU-86bcmmvgm - observe_DST false; needs southern cutoff dates"
};

// Labels whose (UTC±H:MM) prefix disagrees with standard.offSet.
const KNOWN_LABEL_DEVIATIONS = {
  "(UTC-7:00) Chihuahua - Away from US border (Mexico)":
    "CU-86bcmmvgm - label says UTC-7 but offsets are UTC-6 (Mexican reform 2022)"
};

const WINDOW_DAYS = 730;

function daysFromToday(dayCount) {
  const days = [];
  const start = new Date();
  start.setHours(12, 0, 0, 0);
  for (let i = 0; i < dayCount; i++) {
    const d = new Date(start.getTime());
    d.setDate(start.getDate() + i);
    const y = d.getFullYear();
    const m = d.getMonth() + 1;
    const day = d.getDate();
    days.push({
      y,
      m,
      d: day,
      iso: y + "-" + String(m).padStart(2, "0") + "-" + String(day).padStart(2, "0")
    });
  }
  return days;
}

function parseLabelOffsetMinutes(label) {
  const match = /^\(UTC([+-])(\d+):(\d+)\)/.exec(label);
  if (!match) {
    return null;
  }
  const minutes = (parseInt(match[2], 10) * 60) + parseInt(match[3], 10);
  return match[1] === "-" ? -minutes : minutes;
}

describe("timezone catalog vs IANA (tzdata " + moment.tz.dataVersion + ")", function () {
  const zones = timezones.getZonesWithDST();

  for (const [label, zone] of Object.entries(zones)) {
    if (zone.deprecated) {
      continue;
    }

    it(label + " matches " + zone.tz, function () {
      const wrong = [];
      for (const day of daysFromToday(WINDOW_DAYS)) {
        const expected = moment.tz([day.y, day.m - 1, day.d, 12], zone.tz).utcOffset();
        const actual = timezones.getOffset({name: label}, new BzDate(day.y, day.m, day.d, 12, 0, 0));
        if (actual !== expected) {
          wrong.push(day.iso + " got " + actual + " want " + expected);
        }
      }
      if (KNOWN_DEVIATIONS[zone.tz]) {
        assert.ok(
          wrong.length > 0,
          zone.tz + " no longer deviates from IANA - remove it from KNOWN_DEVIATIONS (" + KNOWN_DEVIATIONS[zone.tz] + ")"
        );
        return;
      }
      assert.deepEqual(wrong, [], wrong.slice(0, 5).join("; ") + (wrong.length > 5 ? " ..." : ""));
    });
  }

  describe("label prefix matches standard.offSet", function () {
    for (const [label, zone] of Object.entries(zones)) {
      if (zone.deprecated) {
        continue;
      }

      it(label, function () {
        const fromLabel = parseLabelOffsetMinutes(label);
        assert.notEqual(fromLabel, null, "unparseable label: " + label);
        if (KNOWN_LABEL_DEVIATIONS[label]) {
          assert.notEqual(
            fromLabel,
            zone.standard.offSet,
            label + " no longer has a label/offset mismatch - remove it from KNOWN_LABEL_DEVIATIONS"
          );
          return;
        }
        assert.equal(
          fromLabel,
          zone.standard.offSet,
          "label prefix " + fromLabel + " !== standard.offSet " + zone.standard.offSet
        );
      });
    }
  });
});
