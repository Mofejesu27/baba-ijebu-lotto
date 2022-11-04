function play(){
    const randomno =[]
    for(let i =0; i  < 6; i++ ){
        randomno[i] = Math.floor(Math.random() *101)
}

    const correctscore = [];
    let correctIndex = 0
    let input = document.querySelector('#input').value;
    newInputvalue = input.split(',')
    const user = newInputvalue;
    

    for(let value of user){
        let number = parseInt(value);
        if(randomno.includes(number)){
            correctscore[correctIndex] = number;
            correctIndex++
        }
    

    if (correctscore.length >=3 && number >=1 || number<= 100 && number.length == 3){
        document.getElementById('result').innerHTML = "You win!";
        document.getElementById('random').value = randomno;
        document.getElementById('predictednum').value = correctscore;
}

    else if(correctscore.length < 3 && number >=1 || number <=100 && number.length == 3){
        document.getElementById('result').innerHTML = "You lose!";
        document.getElementById('random').value = randomno;
        document.getElementById('predictednum').value = correctscore;
}

    else{
        document.getElementById('result').innerHTML = "invalid!";
        document.getElementById('random').value = '';
        document.getElementById('predictednum').value = correctscore;
}
    }
}


