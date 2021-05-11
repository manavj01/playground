// setTimeout(() => {
//     console.log('Two Seconds are up')
// }, 2000)


// const names = ["Kunal", " gup", "Manav"]
// const shortNames = names.filter((name) => {
//     return name.length <= 4;
// })
/*
const sampleFunc = (callback) => {
    console.log("sampleFunc");
    console.log(callback);
    console.log(typeof callback);
    callback({name: "Manav"});
}

function callback(user) {
    console.log("callback called");
    console.log(user)
}

const useSampleFunc = () => {
    sampleFunc(callback);
}


useSampleFunc();

*/

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         console.log(address)
//         const data = {
//             lattitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)

// })

const add = (a , b, callback)=> {
    setTimeout(()=>{
        const sum= a+b;
        callback(sum) 
    }, 2000) 
}

add(5,4,(sum)=>{
    console.log(sum)
})