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
