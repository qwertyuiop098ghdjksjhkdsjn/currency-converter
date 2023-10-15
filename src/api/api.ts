

const apiKey = "http://data.fixer.io/api/latest?access_key=b4e4b32ba21bff1e56f54529ca1fda84"; 


type Age = number | string;


interface Person {
   name: string;
   age: Age;
   isAdmin?: boolean
}

const person1: Person = {
   name: "aswd",
   age: 12,
}

type PersonType = {
   name: string;
   age: Age;
}


const obj: Person = {
   name: "Pete",
   age: 40
}


 

function getRate () {
   return fetch(apiKey, {referrerPolicy: "unsafe-url"}).then(response => response.json())
};

export default getRate
