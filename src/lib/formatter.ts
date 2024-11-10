export function formatDate(dateStr: string): string {
  const dt: Date = new Date(dateStr);
  const today: Date = new Date();
  if (dt > today) {
    return "Present";
  }

  const month: string = dt.toLocaleDateString("default", {
    month: "short"
  });
  const year: number = dt.getFullYear();

  const formattedDate: string = `${month} ${year}`;

  return formattedDate;
}