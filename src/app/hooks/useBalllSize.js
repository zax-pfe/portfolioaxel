export default function useBallSize(device) {
  switch (device) {
    case "phone":
      return 5;
    case "m":
      return 6;
    case "l":
      return 6.5;
    case "xl":
      return 7;
    default:
      return 6;
  }
}
