
var cutOffDaylightDates = {
  "2012": {from: new BzDate("03/11/2012"), to: new BzDate("11/04/2012")},
  "2013": {from: new BzDate("03/10/2013"), to: new BzDate("11/03/2013")},
  "2014": {from: new BzDate("03/09/2014"), to: new BzDate("11/02/2014")},
  "2015": {from: new BzDate("03/08/2015"), to: new BzDate("11/01/2015")},
  "2016": {from: new BzDate("03/13/2016"), to: new BzDate("11/06/2016")},
  "2017": {from: new BzDate("03/12/2017"), to: new BzDate("11/05/2017")},
  "2018": {from: new BzDate("03/11/2018"), to: new BzDate("11/04/2018")},
  "2019": {from: new BzDate("03/10/2019"), to: new BzDate("11/03/2019")},
  "2020": {from: new BzDate("03/08/2020"), to: new BzDate("11/01/2020")},
  "2021": {from: new BzDate("03/14/2021"), to: new BzDate("11/07/2021")},
  "2022": {from: new BzDate("03/13/2022"), to: new BzDate("11/06/2022")},
  "2023": {from: new BzDate("03/12/2023"), to: new BzDate("11/05/2023")},
  "2024": {from: new BzDate("03/10/2024"), to: new BzDate("11/03/2024")},
  "2025": {from: new BzDate("03/09/2025"), to: new BzDate("11/02/2025")},
  "2026": {from: new BzDate("03/08/2026"), to: new BzDate("11/01/2026")}
};

var zones = {
  "(UTC-12:00) Baker Island (United States), Howland Island (United States)": {
      "tz": "Etc/GMT+12",
      "daylight": {key: "L12DT", name: "UTC-12 Daylight Time", offSet: -720},
      "standard": {key: "L12ST", name: "UTC-12 Standard Time", offSet: -720},
      "observe_DST": false
  },
  "(UTC-11:00) American Samoa (United States), Niue (New Zeland)": {
      "tz": "Pacific/Niue",
      "daylight": {key: "L11DT", name: "UTC-11 Daylight Time", offSet: -660},
      "standard": {key: "L11ST", name: "UTC-11 Standard Time", offSet: -660},
      "observe_DST": false
  },
  "(UTC-10:00) Hawaii (United States), Cook Island (New Zeland)": {
      "tz": "US/Hawaii",
      "daylight": {key: "L10DT", name: "UTC-10 Daylight Time", offSet: -540},
      "standard": {key: "L10ST", name: "UTC-10 Standard Time", offSet: -600},
      "observe_DST": false
  },
  "(UTC-9:30) Marquesas Islands (French Polynesia, France)": {
      "tz": "Pacific/Marquesas",
      "daylight": {key: "L930DT", name: "UTC-9:30 Daylight Time", offSet: -570},
      "standard": {key: "L930ST", name: "UTC-9:30 Standard Time", offSet: -570},
      "observe_DST": false
  },
  "(UTC-9:00) Alaska (United States), Gambier Islands (French Polynesia, France)": {
      "tz": "US/Alaska",
      "daylight": {key: "L9DT", name: "UTC-9 Daylight Time", offSet: -480},
      "standard": {key: "L9ST", name: "UTC-9 Standard Time", offSet: -540},
      "observe_DST": false
  },
  "(UTC-8:00) Baja California - Near US border (Mexico)": {
      "tz": "America/Tijuana",
      "daylight": {key: "L8DT-America/Tijuana", name: "UTC-8 Daylight Time", offSet: -420},
      "standard": {key: "L8ST-America/Tijuana", name: "UTC-8 Standard Time", offSet: -480},
      "observe_DST": true
  },
  "(UTC-8:00) Los Angeles (United States), San Francisco (United States)": {
      "tz": "America/Los_Angeles",
      "daylight": {key: "L8DT-America/Los_Angeles", name: "UTC-8 Daylight Time", offSet: -420},
      "standard": {key: "L8ST-America/Los_Angeles", name: "UTC-8 Standard Time", offSet: -480},
      "observe_DST": true
  },
  "(UTC-8:00) Vancouver (Canada)": {
      "tz": "America/Vancouver",
      "daylight": {key: "L8DT-America/Vancouver", name: "UTC-8 Daylight Time", offSet: -420},
      "standard": {key: "L8ST-America/Vancouver", name: "UTC-8 Standard Time", offSet: -480},
      "observe_DST": true
  },
  "(UTC-7:00) Yukon (Canada)": {
      "tz": "Canada/Yukon",
      "daylight": {key: "L7DT-Canada/Yukon", name: "UTC-7 Daylight Time", offSet: -420},
      "standard": {key: "L7ST-Canada/Yukon", name: "UTC-7 Standard Time", offSet: -420},
      "observe_DST": false
  },
  "(UTC-7:00) Chihuahua - Away from US border (Mexico)": {
      "tz": "America/Chihuahua",
      "daylight": {key: "L7DT-America/Chihuahua", name: "UTC-7 Daylight Time", offSet: -360},
      "standard": {key: "L7ST-America/Chihuahua", name: "UTC-7 Standard Time", offSet: -360},
      "observe_DST": false
  },
  "(UTC-7:00) Chihuahua - Near US border (Mexico), Ojinaga (Mexico)": {
      "tz": "America/Ojinaga",
      "daylight": {key: "L7DT-America/Ojinaga", name: "UTC-7 Daylight Time", offSet: -360},
      "standard": {key: "L7ST-America/Ojinaga", name: "UTC-7 Standard Time", offSet: -420},
      "observe_DST": true
  },
  "(UTC-7:00) Sonora (Mexico)": {
      "tz": "America/Hermosillo",
      "daylight": {key: "L7DT-America/Hermosillo", name: "UTC-7 Daylight Time", offSet: -420},
      "standard": {key: "L7ST-America/Hermosillo", name: "UTC-7 Standard Time", offSet: -420},
      "observe_DST": false
  },
  "(UTC-7:00) Calgary (Canada), Edmonton (Canada)": {
      "tz": "America/Edmonton",
      "daylight": {key: "L7DT-America/Edmonton", name: "UTC-7 Daylight Time", offSet: -360},
      "standard": {key: "L7ST-America/Edmonton", name: "UTC-7 Standard Time", offSet: -420},
      "observe_DST": true
  },
  "(UTC-7:00) Phoenix (United States)": {
      "tz": "America/Phoenix",
      "daylight": {key: "L7DT-America/Phoenix", name: "UTC-7 Daylight Time", offSet: -420},
      "standard": {key: "L7ST-America/Phoenix", name: "UTC-7 Standard Time", offSet: -420},
      "observe_DST": false
  },
  "(UTC-7:00) Denver (United States)": {
      "tz": "America/Denver",
      "daylight": {key: "L7DT-America/Denver", name: "UTC-7 Daylight Time", offSet: -360},
      "standard": {key: "L7ST-America/Denver", name: "UTC-7 Standard Time", offSet: -420},
      "observe_DST": true
  },
  "(UTC-7:00) Dawson Creek (Canada)": {
      "tz": "America/Dawson_Creek",
      "daylight": {key: "L7DT-America/Dawson_Creek", name: "UTC-7 Daylight Time", offSet: -420},
      "standard": {key: "L7ST-America/Dawson_Creek", name: "UTC-7 Standard Time", offSet: -420},
      "observe_DST": false
  },
  "(UTC-6:00) Chicago (United States)": {
      "tz": "America/Chicago",
      "daylight": {key: "L6DT-America/Chicago", name: "UTC-6 Daylight Time", offSet: -300},
      "standard": {key: "L6ST-America/Chicago", name: "UTC-6 Standard Time", offSet: -360},
      "observe_DST": true
  },
  "(UTC-6:00) Winnipeg (Canada)": {
      "tz": "America/Winnipeg",
      "daylight": {key: "L6DT-America/Winnipeg", name: "UTC-6 Daylight Time", offSet: -300},
      "standard": {key: "L6ST-America/Winnipeg", name: "UTC-6 Standard Time", offSet: -360},
      "observe_DST": true
  },
  "(UTC-6:00) Matamoros (Mexico)": {
      "tz": "America/Matamoros",
      "daylight": {key: "L6DT-America/Matamoros", name: "UTC-6 Daylight Time", offSet: -300},
      "standard": {key: "L6ST-America/Matamoros", name: "UTC-6 Standard Time", offSet: -360},
      "observe_DST": true
  },
  "(UTC-6:00) Mexico City (Mexico)": {
      "tz": "America/Mexico_City",
      "daylight": {key: "L6DT-America/Mexico_City", name: "UTC-6 Daylight Time", offSet: -360},
      "standard": {key: "L6ST-America/Mexico_City", name: "UTC-6 Standard Time", offSet: -360},
      "observe_DST": false
  },
  "(UTC-6:00) Monterrey (Mexico)": {
      "tz": "America/Monterrey",
      "daylight": {key: "L6DT-America/Monterrey", name: "UTC-6 Daylight Time", offSet: -360},
      "standard": {key: "L6ST-America/Monterrey", name: "UTC-6 Standard Time", offSet: -360},
      "observe_DST": false
  },
  "(UTC-6:00) Regina (Saskatchewan)": {
      "tz": "America/Regina",
      "daylight": {key: "L6DT-America/Regina", name: "UTC-6 Standard Time", offSet: -360},
      "standard": {key: "L6ST-America/Regina", name: "UTC-6 Standard Time", offSet: -360},
      "observe_DST": false
  },
  "(UTC-5:00) New York (United States), Toronto (Canada)": {
      "tz": "America/Toronto",
      "daylight": {key: "L5DT", name: "UTC-5 Daylight Time", offSet: -240},
      "standard": {key: "L5ST", name: "UTC-5 Standard Time", offSet: -300},
      "observe_DST": true
  },
  "(UTC-5:00) Quintana Roo (Mexico)": {
      "tz": "America/Cancun",
      "daylight": {key: "L5DT-America/Cancun", name: "UTC-5 Daylight Time", offSet: -300},
      "standard": {key: "L5ST-America/Cancun", name: "UTC-5 Standard Time", offSet: -300},
      "observe_DST": false
  },
  "(UTC-4:30) Caracas (Venezuela)": {
      "tz": "America/Caracas",
      "daylight": {key: "L430DT", name: "UTC-4:30 Daylight Time", offSet: -270},
      "standard": {key: "L430DT", name: "UTC-4:30 Standard Time", offSet: -270},
      "observe_DST": false
  },
  "(UTC-4:00) Nova Scotia (Canada)": {
      "tz": "America/Halifax",
      "daylight": {key: "L4DT-America/Halifax", name: "UTC-4 Daylight Time", offSet: -180},
      "standard": {key: "L4DT-America/Halifax", name: "UTC-4 Standard Time", offSet: -240},
      "observe_DST": true
  },
  "(UTC-4:00) Santiago de Chile (Chile)": {
      "tz": "America/Santiago",
      "daylight": {key: "L4DT-America/Santiago", name: "UTC-4 Daylight Time", offSet: -180},
      "standard": {key: "L4DT-America/Santiago", name: "UTC-4 Standard Time", offSet: -240},
      "observe_DST": true
  },
  "(UTC-3:30) St. John`s (Canada)": {
      "tz": "Canada/Newfoundland",
      "daylight": {key: "L330DT", name: "UTC-3:30 Daylight Time", offSet: -150},
      "standard": {key: "L330ST", name: "UTC-3:30 Standard Time", offSet: -210},
      "observe_DST": true
  },
  "(UTC-3:00) Buenos Aires (Argentina), São Paulo (Brazil)": {
      "tz": "America/Argentina/Buenos_Aires",
      "daylight": {key: "L3DT", name: "UTC-3 Daylight Time", offSet: -120},
      "standard": {key: "L3ST", name: "UTC-3 Standard Time", offSet: -180},
      "observe_DST": false
  },
  "(UTC-2:00) Fernando de Noronha (Brazil)": {
      "tz": "Brazil/DeNoronha",
      "daylight": {key: "L2DT", name: "UTC-2 Daylight Time", offSet: -120},
      "standard": {key: "L2ST", name: "UTC-2 Standard Time", offSet: -120},
      "observe_DST": false
  },
  "(UTC-1:00) Praia (Cape Verde), Azores Islands (Portugal)": {
      "tz": "Atlantic/Cape_Verde",
      "daylight": {key: "L1DT", name: "UTC-1 Daylight Time", offSet: -60},
      "standard": {key: "L1ST", name: "UTC-1 Standard Time", offSet: -60},
      "observe_DST": false
  },
  "(UTC+0:00) Dublin (Ireland), London (United Kingdom)": {
      "tz": "Europe/Dublin",
      "daylight": {key: "DT", name: "UTC+1 Daylight Time", offSet: 60},
      "standard": {key: "ST", name: "UTC+0 Standard Time", offSet: 0},
      "observe_DST": true
  },
  "(UTC+1:00) Berlin (Germany), Paris (France)": {
      "tz": "Europe/Berlin",
      "daylight": {key: "P1DT", name: "UTC+1 Daylight Time", offSet: 60},
      "standard": {key: "P1ST", name: "UTC+1 Standard Time", offSet: 60},
      "observe_DST": false
  },
  "(UTC+2:00) Athens (Greece), Tel Aviv (Israel)": {
      "tz": "Europe/Athens",
      "daylight": {key: "P2DT", name: "UTC+2 Daylight Time", offSet: 120},
      "standard": {key: "P2ST", name: "UTC+2 Standard Time", offSet: 120},
      "observe_DST": false
  },
  "(UTC+3:00) Baghdad (Iraq), Nairobi (Kenya)": {
      "tz": "Asia/Baghdad",
      "daylight": {key: "P3DT", name: "UTC+3 Daylight Time", offSet: 180},
      "standard": {key: "P3ST", name: "UTC+3 Standard Time", offSet: 180},
      "observe_DST": false
  },
  "(UTC+3:30) Tehran (Iran)": {
      "tz": "Asia/Tehran",
      "daylight": {key: "P330DT", name: "UTC+3:30 Daylight Time", offSet: 210},
      "standard": {key: "P330ST", name: "UTC+3:30 Standard Time", offSet: 210},
      "observe_DST": false
  },
  "(UTC+4:00) Dubai (United Arab Emirates), Moscow (Russia)": {
      "tz": "Asia/Dubai",
      "daylight": {key: "P4DT", name: "UTC+4 Daylight Time", offSet: 240},
      "standard": {key: "P4ST", name: "UTC+4 Standard Time", offSet: 240},
      "observe_DST": false
  },
  "(UTC+4:30) Kabul (Afghanistan)": {
      "tz": "Asia/Kabul",
      "daylight": {key: "P430DT", name: "UTC+4:30 Daylight Time", offSet: 270},
      "standard": {key: "P430ST", name: "UTC+4:30 Standard Time", offSet: 270},
      "observe_DST": false
  },
  "(UTC+5:00) Karachi (Pakistan), Tashkent (Uzbekistan)": {
      "tz": "Asia/Karachi",
      "daylight": {key: "P5DT", name: "UTC+5 Daylight Time", offSet: 300},
      "standard": {key: "P5ST", name: "UTC+5 Standard Time", offSet: 300},
      "observe_DST": false
  },
  "(UTC+5:30) Delhi (India), Colombo (Sri Lanka)": {
      "tz": "Asia/Colombo",
      "daylight": {key: "P530DT", name: "UTC+5:30 Daylight Time", offSet: 330},
      "standard": {key: "P530ST", name: "UTC+5:30 Standard Time", offSet: 330},
      "observe_DST": false
  },
  "(UTC+5:45) Kathmandu (Nepal)": {
      "tz": "Asia/Kathmandu",
      "daylight": {key: "P545DT", name: "UTC+5:45 Daylight Time", offSet: 345},
      "standard": {key: "P545ST", name: "UTC+5:45 Standard Time", offSet: 345},
      "observe_DST": false
  },
  "(UTC+6:00) Almaty (Kazakhstan), Dhaka (Bangladesh)": {
      "tz": "Asia/Almaty",
      "daylight": {key: "P6DT", name: "UTC+6 Daylight Time", offSet: 360},
      "standard": {key: "P6ST", name: "UTC+6 Standard Time", offSet: 360},
      "observe_DST": false
  },
  "(UTC+6:30) Cocos Islands (Australia), Yangon (Myanmar)": {
      "tz": "Indian/Cocos",
      "daylight": {key: "P630DT", name: "UTC+6:30 Daylight Time", offSet: 390},
      "standard": {key: "P630ST", name: "UTC+6:30 Standard Time", offSet: 390},
      "observe_DST": false
  },
  "(UTC+7:00) Jakarta (Indonesia), Bangkok (Thailand)": {
      "tz": "Asia/Jakarta",
      "daylight": {key: "P7DT", name: "UTC+7:00 Daylight Time", offSet: 420},
      "standard": {key: "P7ST", name: "UTC+7:00 Standard Time", offSet: 420},
      "observe_DST": false
  },
  "(UTC+8:00) Beijing (China), Singapore (Singapore)": {
      "tz": "Asia/Shanghai",
      "daylight": {key: "P8DT", name: "UTC+8:00 Daylight Time", offSet: 480},
      "standard": {key: "P8ST", name: "UTC+8:00 Standard Time", offSet: 480},
      "observe_DST": false
  },
  "(UTC+8:45) Eucla (Australia)": {
      "tz": "Australia/Eucla",
      "daylight": {key: "P845DT", name: "UTC+8:45 Daylight Time", offSet: 525},
      "standard": {key: "P845ST", name: "UTC+8:45 Standard Time", offSet: 525},
      "observe_DST": false
  },
  "(UTC+9:00) Seoul (South Korea), Tokyo (Japan)": {
      "tz": "Asia/Seoul",
      "daylight": {key: "P9DT", name: "UTC+9 Daylight Time", offSet: 540},
      "standard": {key: "P9ST", name: "UTC+9 Standard Time", offSet: 540},
      "observe_DST": false
  },
  "(UTC+9:30) Adelaide (Australia)": {
      "tz": "Australia/Adelaide",
      "daylight": {key: "P930DT", name: "UTC+9:30 Daylight Time", offSet: 570},
      "standard": {key: "P930ST", name: "UTC+9:30 Standard Time", offSet: 570},
      "observe_DST": false
  },
  "(UTC+10:00) Canberra (Australia), Yakutsk (Russia)": {
      "tz": "Australia/Canberra",
      "daylight": {key: "P10DT", name: "UTC+10:00 Daylight Time", offSet: 600},
      "standard": {key: "P10ST", name: "UTC+10:00 Standard Time", offSet: 600},
      "observe_DST": false
  },
  "(UTC+10:30) Lord Howe Island (Australia)": {
      "tz": "Australia/Lord_Howe",
      "daylight": {key: "P1030DT", name: "UTC+10:30 Daylight Time", offSet: 630},
      "standard": {key: "P1030ST", name: "UTC+10:30 Standard Time", offSet: 630},
      "observe_DST": false
  },
  "(UTC+11:00) Noumea (New Caledonia, France)": {
      "tz": "Pacific/Noumea",
      "daylight": {key: "P11DT", name: "UTC+11:00 Daylight Time", offSet: 660},
      "standard": {key: "P11ST", name: "UTC+11:00 Standard Time", offSet: 660},
      "observe_DST": false
  },
  "(UTC+11:30) Norfolk Island (Australia)": {
      "tz": "Pacific/Norfolk",
      "daylight": {key: "P1130DT", name: "UTC+11:30 Daylight Time", offSet: 690},
      "standard": {key: "P1130ST", name: "UTC+11:30 Standard Time", offSet: 690},
      "observe_DST": false
  },
  "(UTC+12:00) Auckland (New Zeland), Suva (Fiji)": {
      "tz": "Pacific/Auckland",
      "daylight": {key: "P12DT", name: "UTC+12:00 Daylight Time", offSet: 720},
      "standard": {key: "P12ST", name: "UTC+12:00 Standard Time", offSet: 720},
      "observe_DST": false
  },
  "(UTC+12:45) Chatham Islands (Australia)": {
      "tz": "Pacific/Chatham",
      "daylight": {key: "P1245DT", name: "UTC+12:45 Daylight Time", offSet: 765},
      "standard": {key: "P1245ST", name: "UTC+12:45 Standard Time", offSet: 765},
      "observe_DST": false
  },
  "(UTC+13:00) Phoenix Islands (Kiribati), Apia (Samoa)": {
      "tz": "Pacific/Enderbury",
      "daylight": {key: "P13DT", name: "UTC+13:00 Daylight Time", offSet: 780},
      "standard": {key: "P13ST", name: "UTC+13:00 Standard Time", offSet: 780},
      "observe_DST": false
  },
  "(UTC+14:00) Line Islands (Kiribati)": {
      "tz": "Pacific/Kiritimati",
      "daylight": {key: "P14DT", name: "UTC+14:00 Daylight Time", offSet: 840},
      "standard": {key: "P14ST", name: "UTC+14:00 Standard Time", offSet: 840},
      "observe_DST": false
  },


  /*********** DEPRECATED TIMEZONES ***********/
  // These timezones are intentionally hidden from the UI and are listed here for backwards-compatibility, in case an account or station
  // was historically configured to use one of these timezones.  They have issues and should not be used for new configurations.

  "(UTC-8:00) San Francisco (United States), Yukon (Canada)": {
      "deprecated": true,
      // San Fransisco and the Yukon aren't necessarily following the same DST changes
      "tz": "Canada/Yukon",
      "daylight": {key: "L7DT", name: "UTC-7 Daylight Time", offSet: -420},
      "standard": {key: "L7ST", name: "UTC-7 Standard Time", offSet: -420},
      "observe_DST": false
  },
  "(UTC-7:00) Phoenix (United States), Calgary (Canada)": {
      "deprecated": true,
      // This information is incorrect - Pheonix does not observe DST.  Calgary does observe DST.  They are two separate timezones.
      "tz": "America/Phoenix",
      "daylight": {key: "L7DT", name: "UTC-7 Daylight Time", offSet: -360},
      "standard": {key: "L7ST", name: "UTC-7 Standard Time", offSet: -420},
      "observe_DST": true
  },
  "(UTC-6:00) Matamoros (Mexico), Nuevo Léon (Mexico), Coahuila (Mexico)": {
      "deprecated": true,
      // Matamoros and Nuevo Léon do not share the same timezone
      "tz": "America/Matamoros",
      "daylight": {key: "L6DT-America/Matamoros", name: "UTC-6 Daylight Time", offSet: -300},
      "standard": {key: "L6ST-America/Matamoros", name: "UTC-6 Standard Time", offSet: -360},
      "observe_DST": true
  },
  "(UTC-6:00) Chicago (United States), Winnipeg (Canada)": {
      "deprecated": true,
      "tz": "America/Chicago",
      "daylight": {key: "L6DT", name: "UTC-6 Daylight Time", offSet: -300},
      "standard": {key: "L6ST", name: "UTC-6 Standard Time", offSet: -360},
      "observe_DST": true
  },
  "(UTC-4:00) Nova Scotia (Canada), Santiago de Chile (Chile)": {
      "deprecated": true,
      // Nova Scotia and Santiago de Chile observe DST changes on different days of the year
      "tz": "America/Santiago",
      "daylight": {key: "L4DT", name: "UTC-4 Daylight Time", offSet: -180},
      "standard": {key: "L4DT", name: "UTC-4 Standard Time", offSet: -240},
      "observe_DST": true
  },
};

var cutOffDaylightDatesByTimezone = {
  "America/Toronto": {
      "2019": {from: new BzDate("03/10/2019"), to: new BzDate("11/03/2019")},
      "2020": {from: new BzDate("03/08/2020"), to: new BzDate("11/01/2020")},
      "2021": {from: new BzDate("03/14/2021"), to: new BzDate("11/07/2021")},
      "2022": {from: new BzDate("03/13/2022"), to: new BzDate("11/06/2022")},
      "2023": {from: new BzDate("03/12/2023"), to: new BzDate("11/05/2023")},
      "2024": {from: new BzDate("03/10/2024"), to: new BzDate("11/03/2024")},
      "2025": {from: new BzDate("03/09/2025"), to: new BzDate("11/02/2025")},
      "2026": {from: new BzDate("03/08/2026"), to: new BzDate("11/01/2026")}
  },
  "America/Monterrey": {
      "2019": {from: new BzDate("04/07/2019"), to: new BzDate("10/27/2019")},
      "2020": {from: new BzDate("04/05/2020"), to: new BzDate("10/25/2020")},
      "2021": {from: new BzDate("04/04/2021"), to: new BzDate("10/31/2021")},
      "2022": {from: new BzDate("04/03/2022"), to: new BzDate("10/30/2022")},
      "2023": {from: new BzDate("04/02/2023"), to: new BzDate("10/29/2023")},
      "2024": {from: new BzDate("04/07/2024"), to: new BzDate("10/27/2024")},
      "2025": {from: new BzDate("04/07/2025"), to: new BzDate("10/27/2025")},
      "2026": {from: new BzDate("04/07/2026"), to: new BzDate("10/27/2026")}
  },
  "America/Matamoros": {
      "2019": {from: new BzDate("03/10/2019"), to: new BzDate("11/03/2019")},
      "2020": {from: new BzDate("03/08/2020"), to: new BzDate("11/01/2020")},
      "2021": {from: new BzDate("03/14/2021"), to: new BzDate("11/07/2021")},
      "2022": {from: new BzDate("03/13/2022"), to: new BzDate("11/06/2022")},
      "2023": {from: new BzDate("03/12/2023"), to: new BzDate("11/05/2023")},
      "2024": {from: new BzDate("03/10/2024"), to: new BzDate("11/03/2024")},
      "2025": {from: new BzDate("03/09/2025"), to: new BzDate("11/02/2025")},
      "2026": {from: new BzDate("03/08/2026"), to: new BzDate("11/01/2026")}
  },
  "America/Mexico_City": {
      "2019": {from: new BzDate("04/07/2019"), to: new BzDate("10/27/2019")},
      "2020": {from: new BzDate("04/05/2020"), to: new BzDate("10/25/2020")},
      "2021": {from: new BzDate("04/04/2021"), to: new BzDate("10/31/2021")},
      "2022": {from: new BzDate("04/03/2022"), to: new BzDate("10/30/2022")},
      "2023": {from: new BzDate("04/02/2023"), to: new BzDate("10/29/2023")},
      "2024": {from: new BzDate("04/07/2024"), to: new BzDate("10/27/2024")},
      "2025": {from: new BzDate("04/07/2025"), to: new BzDate("10/27/2025")},
      "2026": {from: new BzDate("04/07/2026"), to: new BzDate("10/27/2026")}
  },
  "America/Chihuahua": {
      "2019": {from: new BzDate("04/07/2019"), to: new BzDate("10/27/2019")},
      "2020": {from: new BzDate("04/05/2020"), to: new BzDate("10/25/2020")},
      "2021": {from: new BzDate("04/04/2021"), to: new BzDate("10/31/2021")},
      "2022": {from: new BzDate("04/03/2022"), to: new BzDate("10/30/2022")},
      "2023": {from: new BzDate("04/02/2023"), to: new BzDate("10/29/2023")},
      "2024": {from: new BzDate("04/07/2024"), to: new BzDate("10/27/2024")},
      "2025": {from: new BzDate("04/07/2025"), to: new BzDate("10/27/2025")},
      "2026": {from: new BzDate("04/07/2026"), to: new BzDate("10/27/2026")}
  },
  "America/Ojinaga": {
      "2019": {from: new BzDate("03/10/2019"), to: new BzDate("11/03/2019")},
      "2020": {from: new BzDate("03/08/2020"), to: new BzDate("11/01/2020")},
      "2021": {from: new BzDate("03/14/2021"), to: new BzDate("11/07/2021")},
      "2022": {from: new BzDate("03/13/2022"), to: new BzDate("11/06/2022")},
      "2023": {from: new BzDate("03/12/2023"), to: new BzDate("11/05/2023")},
      "2024": {from: new BzDate("03/10/2024"), to: new BzDate("11/03/2024")},
      "2025": {from: new BzDate("03/09/2025"), to: new BzDate("11/02/2025")},
      "2026": {from: new BzDate("03/08/2026"), to: new BzDate("11/01/2026")}
  },
  "America/Chicago": {
      "2019": {from: new BzDate("03/10/2019"), to: new BzDate("11/03/2019")},
      "2020": {from: new BzDate("03/08/2020"), to: new BzDate("11/01/2020")},
      "2021": {from: new BzDate("03/14/2021"), to: new BzDate("11/07/2021")},
      "2022": {from: new BzDate("03/13/2022"), to: new BzDate("11/06/2022")},
      "2023": {from: new BzDate("03/12/2023"), to: new BzDate("11/05/2023")},
      "2024": {from: new BzDate("03/10/2024"), to: new BzDate("11/03/2024")},
      "2025": {from: new BzDate("03/09/2025"), to: new BzDate("11/02/2025")},
      "2026": {from: new BzDate("03/08/2026"), to: new BzDate("11/01/2026")}
  },
  "America/Tijuana": {
      "2019": {from: new BzDate("03/10/2019"), to: new BzDate("11/03/2019")},
      "2020": {from: new BzDate("03/08/2020"), to: new BzDate("11/01/2020")},
      "2021": {from: new BzDate("03/14/2021"), to: new BzDate("11/07/2021")},
      "2022": {from: new BzDate("03/13/2022"), to: new BzDate("11/06/2022")},
      "2023": {from: new BzDate("03/12/2023"), to: new BzDate("11/05/2023")},
      "2024": {from: new BzDate("03/10/2024"), to: new BzDate("11/03/2024")},
      "2025": {from: new BzDate("03/09/2025"), to: new BzDate("11/02/2025")},
      "2026": {from: new BzDate("03/08/2026"), to: new BzDate("11/01/2026")}
  },
  "America/Los_Angeles": {
      "2019": {from: new BzDate("03/10/2019"), to: new BzDate("11/03/2019")},
      "2020": {from: new BzDate("03/08/2020"), to: new BzDate("11/01/2020")},
      "2021": {from: new BzDate("03/14/2021"), to: new BzDate("11/07/2021")},
      "2022": {from: new BzDate("03/13/2022"), to: new BzDate("11/06/2022")},
      "2023": {from: new BzDate("03/12/2023"), to: new BzDate("11/05/2023")},
      "2024": {from: new BzDate("03/10/2024"), to: new BzDate("11/03/2024")},
      "2025": {from: new BzDate("03/09/2025"), to: new BzDate("11/02/2025")},
      "2026": {from: new BzDate("03/08/2026"), to: new BzDate("11/01/2026")}
  },
  "America/Vancouver": {
      "2019": {from: new BzDate("03/10/2019"), to: new BzDate("11/03/2019")},
      "2020": {from: new BzDate("03/08/2020"), to: new BzDate("11/01/2020")},
      "2021": {from: new BzDate("03/14/2021"), to: new BzDate("11/07/2021")},
      "2022": {from: new BzDate("03/13/2022"), to: new BzDate("11/06/2022")},
      "2023": {from: new BzDate("03/12/2023"), to: new BzDate("11/05/2023")},
      "2024": {from: new BzDate("03/10/2024"), to: new BzDate("11/03/2024")},
      "2025": {from: new BzDate("03/09/2025"), to: new BzDate("11/02/2025")},
      "2026": {from: new BzDate("03/08/2026"), to: new BzDate("11/01/2026")}
  }
};

function isDaylightTime(date, tz) {
  var year = date.getYear();
  var cutOffDates = cutOffDaylightDates[year];
  if (cutOffDaylightDatesByTimezone[tz] && cutOffDaylightDatesByTimezone[tz][year]) {
      cutOffDates = cutOffDaylightDatesByTimezone[tz][year];
  }
  if (!cutOffDates) { return false; }
  return (date.isGreaterOrEqual(cutOffDates.from) &&
      date.isLessThan(cutOffDates.to));
}

const timezones = {
  getZones: function () {
      return Object.keys(zones);
  },
  getZonesWithDST: function () {
      return zones;
  },
  getOffset: function (zone, date) {
      var timezone = zones[zone.name];
      if (timezone && timezone.observe_DST && isDaylightTime(date, timezone.tz)) {
          return timezone.daylight.offSet;
      }
      return timezone.standard.offSet;
  },
  getTZ: function (key) {
      return zones[key] ? zones[key].tz : "America/Toronto"
  }
};




// var timezones = require("./timezones");

function NullBzDate() {

  this.addYears = function () {
      return this;
  };

  this.addMonths = function () {
      return this;
  };

  this.addDays = function () {
      return this;
  };

  this.addHours = function () {
      return this;
  };

  this.addMinutes = function () {
      return this;
  };

  this.addSeconds = function () {
      return this;
  };

  this.getTime = function () {
      return 0;
  };

  this.getTimezoneOffset = function () {
      return 0;
  };

  this.getYear = function () {
      return 0;
  };

  this.getMonth = function () {
      return 0;
  };

  this.getMonthName = function () {
      return "";
  };

  this.getDayOfMonth = function () {
      return 0;
  };

  this.getDayOfWeek = function () {
      return 0;
  };

  this.getDayOfWeekName = function () {
      return "";
  };

  this.getHours = function () {
      return 0;
  };

  this.getMinutes = function () {
      return 0;
  };

  this.getSeconds = function () {
      return 0;
  };

  this.getMilliseconds = function () {
      return 0;
  };

  this.setTimezoneOffset = function (offset) {
      throw new Error("Can set on null object");
  };

  this.setYear = function () {
      throw new Error("Can set on null object");
  };

  this.setMonth = function (month) {
      throw new Error("Can set on null object");
  };

  this.setDayOfMonth = function (day) {
      throw new Error("Can set on null object");
  };

  this.setHours = function (hours) {
      throw new Error("Can set on null object");
  };

  this.setMinutes = function (minutes) {
      throw new Error("Can set on null object");
  };

  this.setSeconds = function (seconds) {
      throw new Error("Can set on null object");
  };

  this.setMilliseconds = function (seconds) {
    throw new Error("Can set on null object");
  };

  this.toLiteral = function () {
      return {value: 0, offset: 0};
  };

  this.toString = function () {
      return "";
  };

  this.isSameDay = function (date) {
      return false;
  };

  this.isEqual = function (date) {
      if (!(isBzDate(date))) {
          throw new Error("Invalid argument - date: " + date);
      }

      if (date.getTime() === this.getTime() &&
          date.getTimezoneOffset() === this.getTimezoneOffset()) {
          return true;
      }
      return false;
  };

  this.isGreaterThan = function (date) {
      return (BzDate.compare(this, date) === 1);
  };

  this.isLessThan = function (date) {
      return (BzDate.compare(this, date) === -1);
  };

  this.isGreaterOrEqual = function (date) {
      return (BzDate.compare(this, date) >= 0);
  };

  this.isLessOrEqual = function (date) {
      return (BzDate.compare(this, date) <= 0);
  };
}

function isBzDate(bzDate) {
  return bzDate && bzDate.toLiteral !== undefined;
}

function BzDate(dateOrLiteralOrYear, formatOrOffsetOrMonth, offsetOrDay, hour, min, sec, msec, offset) {
  var _date = new Date();
  var _timezoneOffset = 0;

  /* Constructors */
  if (dateOrLiteralOrYear) {
      // A Javascript Date object
      if (dateOrLiteralOrYear instanceof Date) {
          _date = new Date(dateOrLiteralOrYear);
          if (formatOrOffsetOrMonth) {
              if (typeof formatOrOffsetOrMonth === "number") {
                  _timezoneOffset = formatOrOffsetOrMonth;
              } else {
                  throw new Error("BzDate::constructor - Invalid argument - formatOrOffsetOrMonth: " + formatOrOffsetOrMonth);
              }
          }

      // A BzDate object
      } else if (isBzDate(dateOrLiteralOrYear)) {
          _date = new Date(dateOrLiteralOrYear.getTime());
          _timezoneOffset = dateOrLiteralOrYear.getTimezoneOffset();

      // A literal date object
      } else if (dateOrLiteralOrYear.value && (dateOrLiteralOrYear.offset !== undefined)) {
          _date = new Date(dateOrLiteralOrYear.value);
          _timezoneOffset = dateOrLiteralOrYear.offset;

      // A date string
      } else if (typeof dateOrLiteralOrYear === "string") {
          if (!formatOrOffsetOrMonth) {
              dateOrLiteralOrYear = dateOrLiteralOrYear.replace("-", "/");
              _date = new Date(dateOrLiteralOrYear);
              _date.setUTCMinutes(_date.getUTCMinutes() - _date.getTimezoneOffset());

          // A format
          } else if (typeof formatOrOffsetOrMonth === "string") {
              _date = dateFormat.fromString(dateOrLiteralOrYear, formatOrOffsetOrMonth);

              if (offsetOrDay) {
                  if (isNaN(offsetOrDay) || (typeof offsetOrDay === "boolean")) {
                      throw new Error("BzDate::constructor - Invalid argument - offsetOrDay: " + offsetOrDay);
                  } else {
                      _timezoneOffset = offsetOrDay;
                  }
              }

          // An offset
          } else if (typeof formatOrOffsetOrMonth === "number") {
              dateOrLiteralOrYear = dateOrLiteralOrYear.replace("-", "/");
              _date = new Date(dateOrLiteralOrYear);
              _date.setUTCMinutes(_date.getUTCMinutes() - _date.getTimezoneOffset());
              _timezoneOffset = formatOrOffsetOrMonth;

          } else {
              throw new Error("BzDate::constructor - Invalid argument - formatOrOffsetOrMonth: " + formatOrOffsetOrMonth);
          }

      // More than one date parameter
      } else if (typeof dateOrLiteralOrYear === "number") {
          var year = dateOrLiteralOrYear;
          var month = formatOrOffsetOrMonth || 1;
          var day = offsetOrDay || 1;
          hour = hour || 0;
          min = min || 0;
          sec = sec || 0;
          msec = msec || 0;

          _date = new Date(year, month - 1, day, hour, min, sec, msec);
          _date.setUTCMinutes(_date.getUTCMinutes() - _date.getTimezoneOffset());
          _timezoneOffset = offset || _timezoneOffset;

      // Invalid argument
      } else {
          throw new Error("BzDate::constructor - Invalid argument - dateOrLiteralOrYear: " + dateOrLiteralOrYear);
      }
  }

  /* Instance Methods */

  this.addYears = function (years) {
      this.setYear(this.getYear() + (years * 1));
      return this;
  };

  this.addMonths = function (months) {
      this.setMonth(this.getMonth() + (months * 1));
      return this;
  };

  this.addDays = function (days) {
      this.setDayOfMonth(this.getDayOfMonth() + (days * 1));
      return this;
  };

  this.addHours = function (hours) {
      this.setHours(this.getHours() + (hours * 1));
      return this;
  };

  this.addMinutes = function (minutes) {
      this.setMinutes(this.getMinutes() + (minutes * 1));
      return this;
  };

  this.addSeconds = function (seconds) {
      this.setSeconds(this.getSeconds() + (seconds * 1));
      return this;
  };

  this.getTime = function (applyOrAddOffset) {
      if (applyOrAddOffset) {
          var newDate = BzDate.applyOffset(this, applyOrAddOffset);
          return newDate.getTime();
      } else {
          return _date.getTime();
      }
  };

  this.getTimezoneOffset = function () {
      return _timezoneOffset;
  };

  this.getYear = function (applyOrAddOffset) {
      if (applyOrAddOffset) {
          var newDate = BzDate.applyOffset(this, applyOrAddOffset);
          return newDate.getYear();
      } else {
          return _date.getUTCFullYear();
      }
  };

  this.getMonth = function (applyOrAddOffset) {
      if (applyOrAddOffset) {
          var newDate = BzDate.applyOffset(this, applyOrAddOffset);
          return newDate.getMonth();
      } else {
          return _date.getUTCMonth() + 1;
      }
  };

  this.getMonthName = function (longForm, applyOrAddOffset) {
      longForm = (!longForm) ? 1 : 0;
      var month;

      if (applyOrAddOffset) {
          var newDate = BzDate.applyOffset(this, applyOrAddOffset);
          month = newDate.getMonth();
      } else {
          month = this.getMonth();
      }

      var index = month + (longForm * 12) - 1;
      return dateFormat.i18n.monthNames[index];
  }

  this.getDayOfMonth = function (applyOrAddOffset) {
      if (applyOrAddOffset) {
          var newDate = BzDate.applyOffset(this, applyOrAddOffset);
          return newDate.getDayOfMonth();
      } else {
          return _date.getUTCDate();
      }
  };

  this.getDayOfWeek = function (applyOrAddOffset) {
      if (applyOrAddOffset) {
          var newDate = BzDate.applyOffset(this, applyOrAddOffset);
          return newDate.getDayOfWeek();
      } else {
          return _date.getUTCDay();
      }
  };

  this.getDayOfWeekName = function (longForm, applyOrAddOffset) {
      longForm = (!longForm) ? 1 : 0;
      var day;

      if (applyOrAddOffset) {
          var newDate = BzDate.applyOffset(this, applyOrAddOffset);
          day = newDate.getDayOfWeek();
      } else {
          day = this.getDayOfWeek();
      }

      var index = day + (longForm * 7);
      return dateFormat.i18n.dayNames[index];
  }

  this.getHours = function (applyOrAddOffset) {
      if (applyOrAddOffset) {
          var newDate = BzDate.applyOffset(this, applyOrAddOffset);
          return newDate.getHours();
      } else {
          return _date.getUTCHours();
      }
  };

  this.getMinutes = function (applyOrAddOffset) {
      if (applyOrAddOffset) {
          var newDate = BzDate.applyOffset(this, applyOrAddOffset);
          return newDate.getMinutes();
      } else {
          return _date.getUTCMinutes();
      }
  };

  this.getSeconds = function () {
      return _date.getUTCSeconds();
  };

  this.getMilliseconds = function () {
      return _date.getUTCMilliseconds();
  };

  this.isEqual = function (date) {
      if (!(isBzDate(date))) {
          throw new Error("Invalid argument - date: " + date);
      }

      if (date.getTime() === this.getTime() &&
          date.getTimezoneOffset() === this.getTimezoneOffset()) {
          return true;
      }
      return false;
  }

  this.setTimezoneOffset = function (offset) {
      if (isNaN(offset)) {
          throw new Error("Invalid argument - offset: " + offset);
      }

      _timezoneOffset = Number(offset);
      return this;
  }

  this.setYear = function (year) {
      _date.setUTCFullYear(year);
      return this;
  }

  this.setMonth = function (month) {
      _date.setUTCMonth(month - 1);
      return this;
  }

  this.setDayOfMonth = function (day) {
      _date.setUTCDate(day);
      return this;
  }

  this.setHours = function (hours) {
      _date.setUTCHours(hours);
      return this;
  };

  this.setMinutes = function (minutes) {
      _date.setUTCMinutes(minutes);
      return this;
  };

  this.setSeconds = function (seconds) {
      _date.setUTCSeconds(seconds);
      return this;
  }

  this.setMilliseconds = function (milliseconds) {
    _date.setUTCMilliseconds(milliseconds);
    return this;
  }

  this.toLiteral = function () {
      return {value: _date, offset: this.getTimezoneOffset()};
  }

  this.isSameDay = function (date) {
      return (date.toString("yyyy-mm-dd") === this.toString("yyyy-mm-dd"));
  }

  this.isGreaterThan = function (date) {
      return (BzDate.compare(this, date) === 1);
  }

  this.isLessThan = function (date) {
      return (BzDate.compare(this, date) === -1);
  }

  this.isGreaterOrEqual = function (date) {
      return (BzDate.compare(this, date) >= 0);
  }

  this.isLessOrEqual = function (date) {
      return (BzDate.compare(this, date) <= 0);
  }

  this.toString = function (mask, applyOrAddOffset) {
      if (typeof mask !== "string") {
          applyOrAddOffset = mask;
          mask = null;
      }

      if (applyOrAddOffset) {
          return dateFormat.toString(BzDate.applyOffset(this, applyOrAddOffset), mask);
      } else {
          return dateFormat.toString(this, mask, true);
      }
  }
}

BzDate.applyOffset = function (bzDate, applyOrAddOffset) {
  if (isBzDate(bzDate)) {
      var offset;

      if (applyOrAddOffset === true) {
          offset = bzDate.getTimezoneOffset();
      } else if (!isNaN(applyOrAddOffset)) {
          offset = Number(applyOrAddOffset);
      } else if (applyOrAddOffset.toLowerCase) {
          try {
              applyOrAddOffset = JSON.parse(applyOrAddOffset);
              if (applyOrAddOffset.name && (applyOrAddOffset.daylight !== undefined)) {
                  offset = timezones.getOffset(applyOrAddOffset, bzDate);
              } else {
                  throw new Error("BzDate::applyOffset - Invalid argument - applyOrAddOffset: " + JSON.stringify(applyOrAddOffset));
              }
          } catch (e) {
            throw new Error("BzDate::applyOffset - Invalid argument - applyOrAddOffset: " + JSON.stringify(applyOrAddOffset));
          }
      } else if (applyOrAddOffset.name && (applyOrAddOffset.daylight !== undefined)) {
          offset = timezones.getOffset(applyOrAddOffset, bzDate);
      } else {
        throw new Error("BzDate::applyOffset - Invalid argument - applyOrAddOffset: " + JSON.stringify(applyOrAddOffset));
      }
      var newDate = new BzDate(bzDate);
      newDate.addMinutes(offset);
      return newDate;
  } else {
      throw new Error("BzDate::applyOffset - Invalid argument - bzDate not an instance of BzDate");
  }
};

BzDate.compare = function (bzDate1, bzDate2, applyOffsets) {
  if (!(isBzDate(bzDate1))) {
      throw new Error("Invalid argument - bzDate1: " + bzDate1);
  } else if (!(isBzDate(bzDate2))) {
      throw new Error("Invalid argument - bzDate2: " + bzDate2);
  }

  if (applyOffsets) {
      bzDate1 = BzDate.applyOffset(bzDate1, true);
      bzDate2 = BzDate.applyOffset(bzDate2, true);
  }

  if (bzDate1.getTime() > bzDate2.getTime()) {
      return 1;
  } else if (bzDate1.getTime() < bzDate2.getTime()) {
      return -1;
  } else {
      return 0;
  }
}

BzDate.getDateAtMidnight = function (year, month, day, offset) {
  var now = new BzDate();
  year = year || now.getYear();
  month = month || now.getMonth();
  day = day || now.getDayOfMonth();
  offset = offset || 0;

  var date = new BzDate(year, month, day, 0, 0, 0, 0);

  if (isNaN(offset)) {
      offset = timezones.getOffset(offset, date);
  }
  return date.addMinutes(offset * -1);
}

BzDate.isStringADate = function (dateString, format) {
  if (typeof dateString !== "string") {
      return false;
  }

  try {
      var test = new BzDate(dateString, format);
  } catch (err) {
      return false;
  }

  if (test.getDayOfWeekName() === undefined) {
      return false;
  } else {
      return true;
  }
};

BzDate.isBzDate = isBzDate;

/*
* Date Format 1.2.3
* (c) 2007-2009 Steven Levithan <stevenlevithan.com>
* MIT license
*
* Includes enhancements by Scott Trenda <scott.trenda.net>
* and Kris Kowal <cixar.com/~kris.kowal/>
*
* Accepts a date, a mask, or a date and a mask.
* Returns a formatted version of the given date.
* The date defaults to the current date/time.
* The mask defaults to dateFormat.masks.default.
*
* Modified by: Mani Fazeli (2012)
*/
var dateFormat = function () {
  var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZW]|"[^"]*"|"[^"]*"/g;
  var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
  var timezoneClip = /[^-+\dA-Z]/g;

  function pad(val, len) {
      val = String(val);
      len = len || 2;
      while (val.length < len) val = "0" + val;
      return val;
  };

  /**
   * Get the ISO 8601 week number
   * Based on comments from
   * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
   */
  function getWeek(date) {
      // Remove time components of date
      var targetThursday = new BzDate(date.getYear(), date.getMonth(), date.getDayOfMonth());

      // Change date to Thursday same week
      targetThursday.setDayOfMonth(targetThursday.getDayOfMonth() - ((targetThursday.getDayOfWeek() + 6) % 7) + 3);

      // Take January 4th as it is always in week 1 (see ISO 8601)
      var firstThursday = new BzDate(targetThursday.getYear(), 0, 4);

      // Change date to Thursday same week
      firstThursday.setDayOfMonth(firstThursday.getDayOfMonth() - ((firstThursday.getDayOfWeek() + 6) % 7) + 3);

      // Check if daylight-saving-time-switch occured and correct for it
      // var ds = targetThursday.getTimezoneOffset()/firstThursday.getTimezoneOffset() - 1;
      // targetThursday.setHours(targetThursday.getHours() + ds);

      // Number of weeks between target Thursday and first Thursday
      // Date would do targetThursday - firstThursday, BzDate reverses
      var weekDiff = (targetThursday.getTime() - firstThursday.getTime()) / (86400000 * 7);
      return 1 + weekDiff;
  };

  // Regexes and supporting functions are cached through closure
  return {
      toString: function (date, mask, offsetVisible) {
          if (!(isBzDate(date))) {
              throw new Error("Invalid argument - date: " + date);
          } else if (mask && (typeof mask !== "string")) {
              throw new Error("Invalid argument - mask: " + mask);
          }

          if (!offsetVisible) {
              offsetVisible = false;
          }

          var dF = dateFormat;
          mask = mask || "ddd mmm dd yyyy HH:MM:ss:l Zo";

          var d = date.getDayOfMonth(),
              D = date.getDayOfWeek(),
              m = date.getMonth(),
              y = date.getYear(),
              H = date.getHours(),
              M = date.getMinutes(),
              s = date.getSeconds(),
              L = date.getMilliseconds(),
              o = date.getTimezoneOffset(),
              W = getWeek(date),
              flags = {
                  d:    d,
                  dd:   pad(d),
                  ddd:  dF.i18n.dayNames[D],
                  dddd: dF.i18n.dayNames[D + 7],
                  m:    m,
                  mm:   pad(m),
                  mmm:  dF.i18n.monthNames[m - 1],
                  mmmm: dF.i18n.monthNames[m + 11],
                  yy:   String(y).slice(2),
                  yyyy: y,
                  h:    H % 12 || 12,
                  hh:   pad(H % 12 || 12),
                  H:    H,
                  HH:   pad(H),
                  M:    M,
                  MM:   pad(M),
                  s:    s,
                  ss:   pad(s),
                  l:    pad(L, 3),
                  L:    pad(L > 99 ? Math.round(L / 10) : L),
                  t:    H < 12 ? "a"  : "p",
                  tt:   H < 12 ? "am" : "pm",
                  T:    H < 12 ? "A"  : "P",
                  TT:   H < 12 ? "AM" : "PM",
                  Z:    offsetVisible ? "UTC" : "", //offset ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                  o:    offsetVisible ? (o > 0 ? "+" : "-") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4) : "",
                  S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
                  W:    W
              };

          return (mask.replace(token, function ($0) {
              return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1)
          })).trim();
      },

      fromString: function (str, mask) {
          var regexStr = dateFormat.masks[mask];
          if (!regexStr) {
              throw new Error("Invalid argument - mask: corresponding regex not found");
          }

          var regex = new RegExp(regexStr);
          var maskParts = regex.exec(mask);
          var strParts = regex.exec(str);

          if (!strParts) {
              throw new Error("Invalid date format, should be as " + mask);
          }

          var dateParts = {};
          for (var i = 1; i < maskParts.length; i += 1) {
              dateParts[maskParts[i]] = strParts[i] * 1;
          }

          var current = new Date();
          var year = current.getUTCFullYear();
          var month = current.getUTCMonth();
          var day = current.getUTCDate();
          var hour = 0;
          var min = 0;
          var sec = 0;
          var msec = 0;

          if (dateParts.yyyy !== undefined) {
              year = dateParts.yyyy;
          } else if (dateParts.yy !== undefined) {
              if (dateParts.yy > ((new Date()).getUTCFullYear() - 2000)) {
                  year = dateParts.yy + 1900;
              } else {
                  year = dateParts.yy + 2000;
              }
          }

          if (dateParts.mm !== undefined) { month = dateParts.mm - 1; }
          if (dateParts.dd !== undefined) { day = dateParts.dd; }
          if (dateParts.HH !== undefined) { hour = dateParts.HH; }
          if (dateParts.MM !== undefined) { min = dateParts.MM; }
          if (dateParts.ss !== undefined) { sec = dateParts.ss; }

          return new Date(Date.UTC(year, month, day, hour, min, sec, msec));
      }
  };
}();

// Some common format strings and their respective regexes
dateFormat.masks = {
  "dd/mm/yy": "^(\\w{2})/(\\w{2})/(\\w{2})$",
  "dd/mm/yy HH:MM": "^(\\w{2})/(\\w{2})/(\\w{2}) (\\w{2}):(\\w{2})$",
  "dd/mm/yyyy": "^(\\w{2})/(\\w{2})/(\\w{4})$",
  "dd/mm/yyyy HH:MM": "^(\\w{2})/(\\w{2})/(\\w{4}) (\\w{2}):(\\w{2})$",
  "mm/dd/yy": "^(\\w{2})/(\\w{2})/(\\w{2})$",
  "mm/dd/yy HH:MM": "^(\\w{2})/(\\w{2})/(\\w{2}) (\\w{2}):(\\w{2})$",
  "mm/dd/yyyy": "^(\\w{2})/(\\w{2})/(\\w{4})$",
  "mm/dd/yyyy HH:MM": "^(\\w{2})/(\\w{2})/(\\w{4}) (\\w{2}):(\\w{2})$",
  "yyyy-mm-dd": "^(\\w{4})-(\\w{2})-(\\w{2})$",
  "yyyy-mm-dd HH:MM": "^(\\w{4})-(\\w{2})-(\\w{2}) (\\w{2}):(\\w{2})$",
  "yyyy/mm/dd": "^(\\w{4})/(\\w{2})/(\\w{2})$",
  "yyyy/mm/dd HH:MM": "^(\\w{4})/(\\w{2})/(\\w{2}) (\\w{2}):(\\w{2})$",
  "HH:MM:ss": "^(\\w{2}):(\\w{2}):(\\w{2})$",
  "yyyy-mm-dd'T'HH:MM:ss": "^(\\w{4})-(\\w{2})-(\\w{2})'T'(\\w{2}):(\\w{2}):(\\w{2})$"
};

// Internationalization strings
dateFormat.i18n = {
  dayNames: [
      "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ],
  monthNames: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ]
};

exports.BzDate = BzDate;
exports.NullBzDate = NullBzDate;
exports.timezones = timezones;
