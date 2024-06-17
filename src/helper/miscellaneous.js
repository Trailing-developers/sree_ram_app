export const formatSecondsToMinute = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

export const convertTo12HourFormat = (time24) => {
  if (time24 == null) {
    return ``;
  }
  let [hours, minutes] = time24.split(":").map(Number);

  const suffix = hours >= 12 ? "PM" : "AM";
  hours = ((hours + 11) % 12) + 1; // Convert to 12-hour format
  minutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero to minutes if needed

  return `${hours}:${minutes} ${suffix}`;
};

export function timeToMinutes(timeStr) {
  // Example timeStr format: "4:30 PM"
  const [timePart, period] = timeStr.split(" "); // Split time and AM/PM
  const [hoursStr, minutesStr] = timePart.split(":"); // Split hours and minutes

  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  if (period === "PM" && hours < 12) {
    hours += 12; // Convert PM hours to 24-hour format
  } else if (period === "AM" && hours === 12) {
    hours = 0; // Midnight (12 AM) is 0 hours in 24-hour format
  }

  const totalMinutes = hours * 60 + minutes;
  return totalMinutes;
}
