export function formatBytes(bytes, decimals = 2, sep = " ") {
  if (!+bytes) return `0${sep}Bytes`;
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))}${sep}${sizes[i]}`;
}

export const trimTitle = (
  title,
  minchars = 20,
  lastchars = 7,
  midchars = "..."
) => {
  const _len = title.length;
  if (_len < minchars) return title;
  let _ = "";
  if (_len > minchars + lastchars) {
    _ = title.substring(0, minchars);
    _ = _ + midchars + title.substring(_len - lastchars, _len);
  } else _ = title;
  return _;
};

export const createForm = (obj_) => {
  const form = new FormData();
  for (const item in obj_) form.append(item, obj_[item]);
  return form;
};

export const randomColor = () => {
  const colorList = [
    "#0000ff0f",
    "#00ff661c",
    "#ff95001c",
    "#e400ff1c",
    "#00ffdc1c",
    "#ff00001c",
    "#ff980014",
    "#4caf5033",
  ];
  return colorList[Math.ceil(Math.random() * colorList.length - 1)];
};

export const monthName = (_i) =>
  "January_February_March_April_May_June_July_August_September_October_November_December".split(
    "_"
  )[_i];

export const life = (__time__) => {
  /**
   * Format Datetime (Created by LittleZabi -> blueterminal Lab )
   * @param {time} time object
   * FORMATS:
   * month formats ~
   * MM -> full month name e.g March
   * Mm -> short month name e.g Mar
   * mm -> month number with zero if month < 10 e.g 03
   * m -> month number e.g 3
   * Date formats ~
   * Do -> Date with ordinal indicators like 1st, 2nd, 3rd, 20th
   * DD -> Date with zero if Date less then 10 e.g 08
   * D -> only Date number
   * Days formats ~
   * dddd -> Day of the week full like Monday
   * ddd -> Day of the week only 3 chars like Mon
   * dd -> Day of the week only 2 chars like Mo
   * Year formats ~
   * YYYY -> Full Year like 2023
   * YY -> only last two numbers like 23
   */
  let dt = new Date(__time__);
  if (!dt.getDate()) dt = new Date();
  const mF = (_i) =>
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    )[_i];
  const mS = (_i) =>
    "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")[_i];
  const dF = (_i) =>
    "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")[_i];
  const dS = (_i) => "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")[_i];
  const dSx = (_i) => "Su_Mo_Tu_We_Th_Fr_Sa".split("_")[_i];
  const xd = [dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getDay()];
  return {
    format: (f_) => {
      let __ = f_;
      if (f_.includes("MM")) __ = __.replace("MM", mF(xd[1]));
      if (f_.includes("Mm")) __ = __.replace("Mm", mS(xd[1]));
      if (f_.includes("mm"))
        __ = __.replace(
          "mm",
          xd[1] + 1 < 10 ? "0" + (xd[1] + 1).toString() : (xd[1] + 1).toString()
        );
      if (f_.includes("m")) __ = __.replace("m", (xd[1] + 1).toString());
      if (f_.includes("Do"))
        __ = __.replace(
          "Do",
          xd[2] > 3
            ? xd[2].toString() + "th"
            : xd[2] === 1
            ? "1st"
            : xd[2] === 2
            ? "2nd"
            : "3rd"
        );
      if (f_.includes("DD"))
        __ = __.replace(
          "DD",
          xd[2] < 10 ? "0" + xd[1].toString() : xd[1].toString()
        );
      if (f_.includes("D")) __ = __.replace("D", xd[2].toString());
      if (f_.includes("dddd")) __ = __.replace("dddd", dF(xd[3]).toString());
      if (f_.includes("ddd")) __ = __.replace("ddd", dS(xd[3]).toString());
      if (f_.includes("dd")) __ = __.replace("dd", dSx(xd[3]).toString());
      if (f_.includes("YYYY")) __ = __.replace("YYYY", xd[0].toString());
      if (f_.includes("YY"))
        __ = __.replace("YY", xd[0].toString().substring(2, 4));
      return __;
    },
    from: () => {
      let dn = new Date().getTime();
      let e = dn - dt.getTime();
      if (e < 1000) return "Just now";
      const s = Math.floor(e / 1000);
      if (s < 60) return `${s} second${s !== 1 ? "s" : ""} ago`;
      const m = Math.floor(e / (1000 * 60));
      if (m < 60) return `${m} minute${m !== 1 ? "s" : ""} ago`;
      const h = Math.floor(e / (1000 * 60 * 60));
      if (h < 24) return `${h} hour${h !== 1 ? "s" : ""} ago`;
      const d = Math.floor(e / (1000 * 60 * 60 * 24));
      if (d < 7) return d === 1 ? `24 hours ago` : `${d} days ago`;
      if (d <= 30) return `${Math.floor(d / 7)} week ago`;
      const mo = Math.floor(d / 30);
      if (mo >= 1 && mo < 12)
        return mo > 1 ? `${mo} months ago` : `1 month ago`;
      if (mo === 12) return "1 year ago";
      const moy = Math.floor(
        (e % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      const y = Math.floor(e / (1000 * 60 * 60 * 24 * 365));
      if (moy === 0) return `${y} yrs ago`;
      return `${y} ${y === 1 ? "years" : "years"} and ${moy} months ago`;
    },
    dayPortion: () => {
      let a = "";
      let b = "";
      let curTime = dt.getHours();
      a =
        curTime >= 2 && curTime < 12
          ? "morning"
          : curTime >= 12 && curTime <= 18
          ? "afternoon"
          : "evening";
      a = `Good ${a}!`;
      b =
        curTime >= 0 && curTime < 1
          ? "Midnight"
          : curTime >= 1 && curTime < 2
          ? "Middle of the night"
          : curTime >= 2 && curTime < 6
          ? "Early morning"
          : curTime >= 6 && curTime < 8
          ? "Dawn"
          : curTime >= 8 && curTime < 9
          ? "Morning"
          : curTime >= 9 && curTime < 12
          ? "Late morning"
          : curTime >= 12 && curTime < 13
          ? "Noon"
          : curTime >= 13 && curTime < 14
          ? "Afternoon"
          : curTime >= 14 && curTime < 17
          ? "Late afternoon"
          : curTime >= 17 && curTime < 18
          ? "Dusk"
          : curTime >= 18 && curTime < 19
          ? "Early evening"
          : curTime >= 19 && curTime < 21
          ? "Evening"
          : curTime >= 21 && curTime < 23
          ? "Late evening"
          : "Night";
      return [a, b];
    },
  };
};
