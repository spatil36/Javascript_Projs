// singleton - -constructor se bnega
//Object.create

// object literals

const mysym = Symbol("keky1")

const jUser = {
    name: "sam",
    "full name": "SAM PATIL",
    [mysym]: "mykey1",
    age: 18,
    location: "Mumbai",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDaya: ["Monday", "Tuesday"]

}

console.log(jUser.age)
console.log(jUser["email"])
console.log(jUser["full name"])
console.log(jUser[mysym])
console.log(typeof jUser[mysym])
console.log(jUser)

jUser.age = 23
//Object.freeze(jUser)   // it will freeze the obj no changes will take place
jUser.age = 32

console.log(jUser)


jUser.greeting = function(){
    console.log("Hello JS User")
}

jUser.greeting2 = function(){
    console.log(`Hello JS User ${this["full name"]}`)
}


console.log(jUser.greeting())
console.log(jUser.greeting)
console.log(jUser.greeting2())




