function amPmHours(hours, ampm) {
  let _hours = hours;
  if (ampm && hours > 12) {
    _hours = hours - 12;
  } else if (ampm && hours === 0) {
    _hours = 12;
  }
  return padZero(_hours);
}

function padZero(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

class BzTime {
  constructor(hours, minutes, seconds, ampm) {
    let _hours = hours || 0;
    let _minutes = minutes || 0;
    let _seconds = seconds || 0;
    if (typeof hours === "string") {
      if (hours.indexOf(" ") !== -1) {
        const parts = hours.split(" ");
        hours = parts[0];
        ampm = (parts[1] || "").toUpperCase();
      }
      if (hours.indexOf(":") === -1) {
        _hours = parseInt(hours, 10);
      } else {
        const parts = hours.split(":");
        _hours = parseInt(parts[0], 10);
        if (parts.length > 1) {
          _minutes = parseInt(parts[1], 10);
        }
        if (parts.length > 2) {
          _seconds = parseInt(parts[2], 10);
        }
      }
    }
    if (ampm) {
      if (ampm.toUpperCase() === "PM" && _hours < 12) {
        _hours =  _hours + 12;
      } else if (ampm.toUpperCase() === "AM" && _hours === 12) {
        _hours = 0;
      }
    }
    
    this.date = new Date(0, 0, 0, _hours, _minutes, _seconds, 0);
  }
  get hours() {
    return this.date.getHours();
  }
  get minutes() {
    return this.date.getMinutes();
  }
  get seconds() {
    return this.date.getSeconds();
  }
  get milliseconds() {
    return this.date.getMilliseconds();
  }
  getTime() {
    return this.date.getTime();
  }

  toString(format, ampm = false) {
    const hh = parseInt(this.date.toTimeString().split(" ")[0].split(":")[0], 10);
    const mm = parseInt(this.date.toTimeString().split(" ")[0].split(":")[1], 10);
    const ss = parseInt(this.date.toTimeString().split(" ")[0].split(":")[2], 10);

    switch (format) {
      case "hh:mm":
       return `${amPmHours(hh, ampm)}:${padZero(mm)}${ampm ? (hh < 12 ? " AM" : " PM") : ""}`;
      case "mm:ss":
       return `${padZero(mm)}:${padZero(ss)}`;
      case "hh":
       return `${amPmHours(hh, ampm)}${ampm ? (hh < 12 ? " AM" : " PM") : ""}`;
      case "mm":
       return padZero(mm);
      case "ss":
       return padZero(ss);
      default:
       return `${amPmHours(hh, ampm)}:${padZero(mm)}:${padZero(ss)}${ampm ? (hh < 12 ? " AM" : " PM") : ""}`;
    }
  }

  static difference(time1, time2) {
    const diff = time2.getTime() - time1.getTime();
    return diff;
  }

  static addHours(time, hours) {
    if (time.hours === undefined && time.minutes === undefined
      && time.seconds === undefined && time.milliseconds === undefined) {
      throw new Error("Invalid BzTime");
    }
    const newTime = new BzTime(time.hours + hours, time.minutes, time.seconds);
    return newTime;
  }

  static addMinutes(time, minutes) {
    if (time.hours === undefined && time.minutes === undefined
      && time.seconds === undefined && time.milliseconds === undefined) {
      throw new Error("Invalid BzTime");
    }
    const newTime = new BzTime(time.hours, time.minutes + minutes, time.seconds);
    return newTime;
  }

  static addSeconds(time, seconds) {
    if (time.hours === undefined && time.minutes === undefined
      && time.seconds === undefined && time.milliseconds === undefined) {
      throw new Error("Invalid BzTime");
    }
    const newTime = new BzTime(time.hours, time.minutes, time.seconds + seconds);
    return newTime;
  }

  static addMilliseconds(time, milliseconds) {
    if (time.hours === undefined && time.minutes === undefined
      && time.seconds === undefined && time.milliseconds === undefined) {
      throw new Error("Invalid BzTime");
    }
    const newTime = new BzTime(time.hours, time.minutes, time.seconds + (milliseconds / 1000));
    return newTime;
  }
}

exports.BzTime = BzTime;