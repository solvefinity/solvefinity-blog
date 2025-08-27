// src/filters/date-filter.js

// Parse safely to a valid Date or return null
function toDate(value) {
  if (!value) return null;
  if (value instanceof Date) return isNaN(value) ? null : value;
  const d = new Date(value);
  return isNaN(d) ? null : d;
}

// English ordinal suffix
function daySuffix(day) {
  const j = day % 10, k = day % 100;
  if (j === 1 && k !== 11) return "st";
  if (j === 2 && k !== 12) return "nd";
  if (j === 3 && k !== 13) return "rd";
  return "th";
}

module.exports = function dateFilter(value) {
  const d = toDate(value);
  if (!d) return "";

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const day = d.getDate();
  return `${day}${daySuffix(day)} ${months[d.getMonth()]} ${d.getFullYear()}`;
};
