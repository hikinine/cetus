export function isDefined(k: any) {
  return typeof k !== "undefined" && k
}
export const seconds = (k: number) => 1000 * k
export const minutes = (k: number) => 1000 * 60 * k
export const hours = (k: number) => 1000 * 60 * 60 * k