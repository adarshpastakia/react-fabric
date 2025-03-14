const dateFormat = (function () {
  const token =
      /P{1,4}|p{1,4}|d{1,2}|e{3,6}|M{1,4}|yy(?:yy)?|([Hhms])\1?|[a]{1,4}|[LloSZ]|('at')|"[^"]*"|'[^']*'/g,
    timezone =
      /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    timezoneClip = /[^-+\dA-Z]/g,
    pad = function (val, len) {
      val = String(val);
      len = len || 2;
      while (val.length < len) val = "0" + val;
      return val;
    };

  // Regexes and supporting functions are cached through closure
  return function (
    date,
    mask,
    options = {
      utc: false,
    },
  ) {
    const { locales, defaultLocale } = require("./HijriDate").default;
    options.locale = options.locale || defaultLocale;
    if (!locales[options.locale]) {
      throw new Error(`Locale ${options.locale} is not supported yet .
          Please, try to extend "HijriDate.locales" :
             i.e: HijriDate.locales.${options.locale} = {dayNames:[..14 items..], monthNames:[..24 items..]}
        `);
      return;
    }
    // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
    if (
      arguments.length == 1 &&
      Object.prototype.toString.call(date) == "[object String]" &&
      !/\d/.test(date)
    ) {
      mask = date;
      date = undefined;
    }

    mask = String(masks[mask] || mask || masks["default"]);

    // Allow setting the utc argument via the mask
    if (mask.slice(0, 4) == "UTC:") {
      mask = mask.slice(4);
      options.utc = true;
    }

    var _ = options.utc ? "getUTC" : "get",
      d = date[_ + "Date"](),
      D = date[_ + "Day"](),
      M = date[_ + "Month"](),
      mIndex = date[_ + "MonthIndex"](),
      y = date[_ + "FullYear"](),
      H = date[_ + "Hours"](),
      m = date[_ + "Minutes"](),
      s = date[_ + "Seconds"](),
      L = date[_ + "Milliseconds"](),
      o = options.utc ? 0 : date.getTimezoneOffset(),
      flags = {
        d: d,
        dd: pad(d),
        ddd: locales[options.locale].dayNames[D === 7 ? 0 : D + 1],
        dddd: locales[options.locale].dayNames[(D === 7 ? 0 : D + 1) + 7],
        ee: locales[options.locale].dayNames[D],
        eee: locales[options.locale].dayNames[D + 7],
        eeee: locales[options.locale].dayNames[D + 14],
        eeeeee: locales[options.locale].dayNames[D],
        M,
        MM: pad(M),
        MMM: locales[options.locale].monthNames[mIndex],
        MMMM: locales[options.locale].monthNames[mIndex + 12],
        yy: String(y).slice(2),
        yyyy: y,
        h: H % 12 || 12,
        hh: pad(H % 12 || 12),
        H: H,
        HH: pad(H),
        m,
        mm: pad(m),
        s: s,
        ss: pad(s),
        l: pad(L, 3),
        L: pad(L > 99 ? Math.round(L / 10) : L),
        a: H < 12 ? locales[options.locale].am : locales[options.locale].pm,
        aa: H < 12 ? locales[options.locale].am : locales[options.locale].pm,
        aaa: H < 12 ? locales[options.locale].am : locales[options.locale].pm,
        aaaa: H < 12 ? locales[options.locale].am : locales[options.locale].pm,
        aaaaa: H < 12 ? locales[options.locale].am : locales[options.locale].pm,
        "'at'": locales[options.locale].separator,
        t: H < 12 ? "a" : "p",
        tt: H < 12 ? "am" : "pm",
        T: H < 12 ? "A" : "P",
        TT: H < 12 ? "AM" : "PM",
        //  Z: options.utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
        o:
          (o > 0 ? "-" : "+") +
          pad(Math.floor(Math.abs(o) / 60) * 100 + (Math.abs(o) % 60), 4),
        S: ["th", "st", "nd", "rd"][
          d % 10 > 3 ? 0 : (((d % 100) - (d % 10) != 10) * d) % 10
        ],
      };

    return mask.replace(token, function ($0) {
      if ($0 === "P") return `${flags.d}/${flags.M}/${flags.yyyy} `;
      if ($0.startsWith("PP"))
        return `${flags.MMM} ${flags.dd}, ${flags.yyyy} `;
      if ($0 === "p") return `${flags.h}:${flags.m} ${flags.a}`;
      if ($0.startsWith("pp"))
        return `${flags.hh}:${flags.mm}:${flags.ss} ${flags.a}`;
      return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
    });
  };
})();

// Some common format strings
export const masks = {
  default: "ddd MMM dd yyyy HH:mm:ss",
  shortDate: "M/d/yy",
  mediumDate: "MMM d, yyyy",
  longDate: "MMMM d, yyyy",
  fullDate: "dddd, MMMM d, yyyy",
  shortTime: "h:mm TT",
  mediumTime: "h:mm:ss TT",
  longTime: "h:mm:ss TT Z",
  isoDate: "yyyy-MM-dd",
  isoTime: "HH:mm:ss",
  isoDateTime: "yyyy-MM-dd'T'HH:mm:ss",
  isoUtcDateTime: "UTC:yyyy-MM-dd'T'HH:mm:ss'Z'",
};

export default dateFormat;
