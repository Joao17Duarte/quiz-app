export default function getAllDataJs(dataJsName, target = document) {
  return target.querySelectorAll(`[data-js="${dataJsName}"]`)
}
