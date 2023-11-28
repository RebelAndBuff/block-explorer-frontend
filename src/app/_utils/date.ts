export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  });
  return formattedDate;
}
