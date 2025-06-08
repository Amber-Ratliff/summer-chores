//globally declared variable so each function uses the same random number
//used Math.ceil because I thought it might give a better shot at completion
const complete = Math.ceil(Math.random() * 10);

function mowYard(person) {
    return new Promise(resolve => {
        setTimeout(() => { 
            resolve(`${person} mowed the yard.`)
    }, 2000);
    });   
}

function weedEat(person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //the threshold to beat increases in each function to simulate the person getting more tired
            //starts at 2 because it will always be at least 1
            if (complete >= 2) {
                resolve(`${person} finished using the weed eater.`)
         } else {
                reject(`${person} fell asleep after mowing the yard.`)
         }
        }, 1500)
    });
}

function trimHedges(person) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (complete >= 3) {
                resolve(`${person} finished trimming the hedges.`)
         } else {
                reject(`${person} fell asleep after using the weed eater.`)
         }
        }, 1000)
    });

   
}

function collectWood(person) {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (complete >= 4) {
                resolve(`${person} finished collecting wood.`)
         } else {
                reject(`${person} fell asleep after trimming the hedges.`)
         }
        }, 2500)
    });   
}

function waterGarden(person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (complete >= 5) {
                resolve(`${person} finished watering the garden.`)
         } else {
                reject(`${person} fell asleep after collecting wood.`)
         }
        }, 500)
    });   
}

function doSummerChores(person) {
    return new Promise((resolve) => resolve(`${person} finished all their chores!`));
}

mowYard('James').then(value => { 
    console.log(value)
    return weedEat('James')
}).then(value => { 
    console.log(value)
    return trimHedges('James')
}).then(value => { 
    console.log(value)
    return collectWood('James')
}).then(value => { 
    console.log(value)
    return waterGarden('James')
}).then(value => { 
    console.log(value)
    return doSummerChores('James')
}).then(value => console.log(value))
  .catch(error => console.log(error));