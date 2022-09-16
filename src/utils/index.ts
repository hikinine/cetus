export function isDefined(k: any) {
  return typeof k !== "undefined" && k
}
export const seconds = (k: number) => 1000 * k
export const minutes = (k: number) => 1000 * 60 * k
export const hours = (k: number) => 1000 * 60 * 60 * k

export function millisToMinutesAndSeconds(millis: number) {
  var hours = Math.floor(millis / (60000 * 60))
  var minutes = Math.floor((millis / 60000) % 60);
  var seconds = parseInt(((millis % 60000) / 1000).toFixed(0))
  return hours + ":" + (minutes < 10 ? '0' : '') +minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
