// src/filters/w3-date-filter.js

function toDate(value) {
  if (!value) return null;
  if (value instanceof Date) return isNaN(value) ? null : value;
  const d = new Date(value);
  return isNaN(d) ? null : d;
}

module.exports = function w3Date(value) {
  const d = toDate(value);
  if (!d) return "";
  return d.toISOString();
};
