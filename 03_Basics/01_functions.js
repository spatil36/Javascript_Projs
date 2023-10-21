

function sayMyName() {
    console.log("S")
    console.log("A")
    console.log("M")
}

//sayMyName()


// function add2Nos(n1, n2){
//     console.log(n1+n2)
// }


// add2Nos(3, 4)


function logiNuser(username){
    return `${username} user is now logged in`
}

let ans = logiNuser("SAM")

console.log(ans)

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(100, 200, 300))


const user = {
    name: "SAM",
    age: 18
}


function handleObj(anyObject){
    console.log(`username is ${anyObject.name} and age is ${anyObject.age}`)
}

handleObj({
    name: "SAMMY",
    age: 22
})
// handleObj(user)

const myNewArray = [100,200,300]

function return2ndArray(getAraay){
    return getAraay[1]
}

console.log(return2ndArray(myNewArray))
