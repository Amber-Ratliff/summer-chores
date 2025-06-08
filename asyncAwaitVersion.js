function mowYard(person) {
    return new Promise(resolve => {
        setTimeout(() => { 
            resolve(`${person} mowed the yard.`)
    }, 2000);
    });   
}

function weedEat(person, complete) {
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

function trimHedges(person, complete) {
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

function collectWood(person, complete) {
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

function waterGarden(person, complete) {
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

async function doSummerChores() {
    const complete = Math.ceil(Math.random() * 10);
    const person = 'Alice';
    try {
        const mowYardResult = await mowYard(person, complete);
        console.log(mowYardResult);

        const weedEatResult = await weedEat(person, complete);
        console.log(weedEatResult);

        const trimHedgesResult = await trimHedges(person, complete);
        console.log(trimHedgesResult);

        const collectWoodResult = await collectWood(person, complete);
        console.log(collectWoodResult);

        const waterGardenResult = await waterGarden(person, complete);
        console.log(waterGardenResult);

        console.log(`${person} finished all the chores!`)
    }

    catch (error) {
        console.error(error);
    }
    
}

doSummerChores();
