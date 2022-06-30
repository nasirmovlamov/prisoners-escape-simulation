
let mainstep = 0
let step = 0

const strategy1 = () => {
    let boxNumbersFrom0to100 = []

    for (let i = 1; i <= 100; i++) {
        boxNumbersFrom0to100.push(i)
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array
    }

    const randomNumbers = shuffleArray(boxNumbersFrom0to100)
    let randomBoxes = []

    for (let i = 1; i <= randomNumbers.length; i++) {
        randomBoxes.push({
            id: i,
            number: randomNumbers[i-1],
        })    
    }

    const prisonersNumbersFrom0to100 = []

    for (let j = 1; j <= 100; j++) {
        prisonersNumbersFrom0to100.push(j)
    }

    const randomPrisonersNumbers = shuffleArray(prisonersNumbersFrom0to100)
    let randomPrisoners = []

    for (let i = 1; i <= randomPrisonersNumbers.length; i++) {
        randomPrisoners.push({
            id: i,
            number: randomPrisonersNumbers[i-1],
        })    
    }
    
    if(mainstep === 100){
        console.log("all step failed")
        return
    }
    if(step === 1000000){
        mainstep++
        return setTimeout(strategy1, 0)
    }
    
    for (let i = 0; i < 100; i++) {
        //loop for prisoners
        let prisoner = randomPrisoners[i]
        let selectedBoxes = []
        for (let j = 0; j < 50; j++) {
            //loop for prisoner taking boxes one by one
            let selectedRandomBoxNotInSelectedBoxes = randomBoxes[Math.floor(Math.random() * randomBoxes.length)] 
            selectedBoxes.push(selectedRandomBoxNotInSelectedBoxes)
            if(j===49){
                //all failed than reset everything add new step
                if(i === 20){
                    //Testing with 20 prisoner pass rate 
                    step = 0
                    mainstep++
                    return  setTimeout(()=>{
                        strategy1()
                    },0)
                }
                step++
                return  setTimeout(()=>{
                    strategy1()
                },0)
            }
            if (prisoner.number !== selectedRandomBoxNotInSelectedBoxes.number) {
                //if prisoner taking box that is not the right box
                continue
            }
            if(prisoner.number === selectedRandomBoxNotInSelectedBoxes.number){
                //if prisoner taking box that is the right box
                break
            }
        }
    }
    console.log("All Prisoners passed")
    return
}

const strategy2 = () => {
    let boxNumbersFrom0to100 = []

    for (let i = 1; i <= 100; i++) {
        boxNumbersFrom0to100.push(i)
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array
    }

    const randomNumbers = shuffleArray(boxNumbersFrom0to100)
    let randomBoxes = []

    for (let i = 1; i <= randomNumbers.length; i++) {
        randomBoxes.push({
            id: i,
            number: randomNumbers[i-1],
        })    
    }

    const prisonersNumbersFrom0to100 = []

    for (let j = 1; j <= 100; j++) {
        prisonersNumbersFrom0to100.push(j)
    }

    const randomPrisonersNumbers = shuffleArray(prisonersNumbersFrom0to100)
    let randomPrisoners = []

    for (let i = 1; i <= randomPrisonersNumbers.length; i++) {
        randomPrisoners.push({
            id: i,
            number: randomPrisonersNumbers[i-1],
        })    
    }
    if(mainstep === 100){
        console.log("all step failed")
        return
    }
    if(step === 5){
        mainstep++
        return setTimeout(strategy2, 0)
    }
    
    for (let i = 0; i < 100; i++) {
        //loop for prisoners
        let prisoner = randomPrisoners[i]
        let selectedBoxNumber = prisoner.number
        for (let j = 0; j < 50; j++) {
            //loop for prisoner taking boxes one by one
            let selectedRandomBox = randomBoxes.find(box => box.id === selectedBoxNumber)
            selectedBoxNumber = selectedRandomBox.number

            if(j===49){
                //prisoner taking box 1 by 1 till he finds the right box
                //in here he failed than all prisoners died reset everything start checking again
                console.log("step failed " + step)
                step++
                return  setTimeout(()=>{
                    strategy2()
                },0)
            }
            if (prisoner.number !== selectedRandomBox.number) {
                //if prisoner taking box that is not the right box
                continue
            }
            if(prisoner.number === selectedRandomBox.number){
                //if prisoner taking box that is the right box
                break
            }
        }
    }
    console.log("All Prisoners passed")
    console.log("mainstep " + mainstep)
    console.log("step " + step)
    return
}




strategy2()