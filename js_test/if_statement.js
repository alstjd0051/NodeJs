import random from './getRandom'
// 조건문(If statement)
// console.log(random())
let a = random()

if(a ===0) {
    console.log('a is 0')
} else if(a === 2) {
    console.log('a is 2')
}else if(a === 4) {
    console.log('a is 4')
}else if(a === 6) {
    console.log('a is 6')
}else {
    console.log('rest...')
}