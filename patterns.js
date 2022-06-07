const patterns = {
  naturalNumbers: /^\d+$/,
  wholeNumbers: /^-?\d+$/,
  positiveDecimalNumbers: /^\d*(\.\d+)?$/,
  decimalNumbers: /^-?\d*(\.\d+)?$/,
  alphabets:/^[a-zA-Z ]*$/,
  alphanumeric: /^[a-zA-Z0-9 ]*$/,
  email:/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
  dateYYYY_MM_dd:/([12]\d{3})[\/\-](0[1-9]|1[0-2])[\/\-](0[1-9]|[12]\d|3[01])/,
  datedd_MM_YYYY:/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
  time_HH_MM_SS:/(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/,
  url:/(?:http|https|ftp|mailto|file|data|irc):\/\/[A-Za-z0-9\-]{0,63}((\.)?[A-Za-z0-9\-]{0,63})+(:\d{1,4})?\/*(\/*[A-Za-z0-9\-._]+\/*)*(\?.*)?(#.*)?/,
  htmlTags:/<.+>/,
  ipv4:/(?:25[0-5]|2[0-4]\d|[01]\d{2}|\d{1,2})(?:.(?:25[0-5]|2[0-4]\d|[01]\d{2}|\d{1,2})){3}/,
  ipv6:/(?:[A-Fa-f0-9]){0,4}(?: ?:? ?(?:[A-Fa-f0-9]){0,4}){0,7}/
}

module.exports = patterns;