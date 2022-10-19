function play (){
    let input = document.querySelector('#input');
    let newInput = Array.from(input.value)
   
    const random =[]
    const user = newInput;
    
    for(let i =0; i  < 6; i++ ){
        random[i] = Math.floor(Math.random() * 11)
}

    const correctGuess = [];
    let correctIndex = 0

    for(let value of user){
        let toNum = parseInt(value)
        if(random.includes(toNum)){
            correctGuess[correctIndex] = value;
            correctIndex++
        }
    }

    if(correctGuess.length >=3){
        document.getElementById('result').innerHTML = "You win!!"
    }else{
        document.getElementById('result').innerHTML = "You lose, money wasted!"
    }

    document.getElementById('random').innerHTML = random
    document.getElementById('predictednum').innerHTML = correctGuess 
}