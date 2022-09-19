// Primitives : number,string,boolean
// Complex : array,object
// Function,Parameter 


// Primitives

let age : number  
age = 12.1
// age = "12"

let userName : string | string[]
userName = ["Mecit Can"],"Yazar"

let isLoading : boolean
isLoading = true

// let hobilerim : null
// hobilerim = 12

// Complex(Karmaşık Türler)

let hobilerim : string[] // array içinde string
hobilerim = ["Mecit","Can"]



type Person = {
    name:string
    age:number  
}


// let person:any // herhangi bir tür
let person:Person

person = {
    name:"Mecit",
    age:28
}

// person = {
//     isEmployee:true
// }


// let people : {
//     name:string
//     age:number
// }[]  // array içinde bu tür objeler oluşsun istiyorum

// artık bunun yerine yukarıda tanımladığım type Person'ı atayabilirm.

let people: Person[]

// Tür Çıkarımı

let kurs:string | number = "React"  //string veya number

kurs = 1234


// Function & Types

function addTo(a:number,b:number) {
    return a + b
}

function printOutput(value:any){
    console.log(value)
}

// Generics 

function insert<T>(array:T[],value:T) {
    const yeniDizi = [value,...array]
    return yeniDizi
}


const demoArray = [1,2,3]

const updateArray = insert(demoArray,-1) // [-1,1,2,3]

const stringArray = insert(["a","b","c"],"d")

// updateArray[0].split("")


// let numbers = [1,2,3]

// let numbers : number[] = [1,2,3]

// let numbers : Array<number> = [1,2,3]