export const dateBuilder = (d, condition) => {
  let ndate = new Date(d * 1000);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let day = days[ndate.getDay()];
  let date = ndate.getDate();
  let month = months[ndate.getMonth()];
  // let year = ndate.getFullYear();
  let hour = ndate.getHours();
  let minute = ndate.getMinutes();
  if (condition === "date") {
    return `${day}, ${date} ${month}`;
  } else if (condition === "time") {
    return `${hour} : ${minute}`;
  }
};
