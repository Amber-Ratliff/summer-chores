function mowYard(person, callback) {
    setTimeout(() => { 
        console.log(`${person} mowed the yard.`)
    callback();
    }, 2000);
    
}
function weedEat(person, callback) {
    const complete = Math.random() < 0.9; 
    setTimeout(() => {
        if (!complete) {
            console.log(`${person} fell asleep after mowing the yard.`)
            return;
        }
        console.log(`${person} finished using the weed eater.`)
        callback();
        }, 1500)
}

function trimHedges(person, callback) {
    const complete = Math.random() < 0.8;
    setTimeout(() => {
        if (!complete) {
           console.log(`${person} fell asleep after weed eating the yard.`) ;
           return;
        }
        console.log(`${person} finished trimming the hedges.`);
        callback();
    }, 1000);
}

function collectWood(person, callback) {
    const complete = Math.random() < 0.7;
    setTimeout(() => {
        if (!complete) {
            console.log(`${person} fell asleep after trimming the hedges.`);
            return;
        }
        console.log(`${person} finished collecting wood.`)
        callback()
    }, 2500);   
}

function waterGarden(person, callback) {
    const complete = Math.random() < 0.6
    setTimeout(() => {
        if (!complete) {
            console.log(`${person} fell asleep after collecting wood.`)
            return;
        }
        console.log(`${person} finished watering the garden.`);
        callback()
    } , 500);
}

function doSummerChores(person) {
    mowYard(person, () => {
        weedEat(person, () => {
            trimHedges(person, () => {
                collectWood(person, () => {
                    waterGarden(person, () => console.log(`${person} finished all their chores!`))
                });
            });
        });
    });
};

doSummerChores('John');