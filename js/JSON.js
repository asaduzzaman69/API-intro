const shop ={
    name:'Moon store',
    address:'alimuddin road',
    products:['laptop','mobile','watch'],
    owner:{
        name:'moon',
        age:18,
        address:'Alimuddin'
    }
}
const stringifyShop=JSON.stringify(shop)
console.log(stringifyShop)
const shpoParse = JSON.parse(stringifyShop)
console.log(shpoParse)