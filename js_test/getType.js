export default function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}
console.log(getType(123))
console.log(getType(false))
console.log(getType('무야호'))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))