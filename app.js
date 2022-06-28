'use strict'


function generateGreeting(){
    let firstName = getFirstName();
    let message = dinoHolder();
    let color = dinoTheme();
    return document.write('Hello '+ firstName +'! ' +'Role ' + message);
}

function getFirstName(){
    let firstName = prompt('What is your Name?');
    return firstName;
}

function dinoHolder(){
    let number = prompt('How many Dinos do you hold?(1-69)');
    let message = '';


    if(number <= 5 && number > 0){
    let number = prompt('Try again sucka!');
    } else if(number <= 15){
        message = 'Raptor!!!';
    } else if(number <= 68){
        message = 'T-Rex!!!';
    } else if(number >= 69){
        message = 'Whale!!!';
    } else{
        message = 'Future Holder!!!'
    }

    return message;
}

function dinoTheme(){
    let color = prompt('Whats your favorite color?')
    return document.body.style.backgroundColor = color;
}

function chooseFaction(){
    let answer = prompt ('Choose your side! (1) for Human or (2) for Xeno?');
    let image ='';
    if(answer == 1){
        image = ('<img class="subimage" alt="dino1" src="https://bafybeiblwbbkhy3xhttn5rtbjvrxjuqeadse7vzmbp5sat2cvsrpz7dhbi.ipfs.infura-ipfs.io/2310.png" width="300">' + '<img class="subimage" alt="dino1" src="https://bafybeiaqrchgjbv6fa6rawsycqrrd6y4dyow7gg4uv4qyy4fyvysi26gum.ipfs.infura-ipfs.io/2933.png" width="300">' + '<img class="subimage" alt="dino1" src="https://bafybeifu6lwn56vlanz4akckw4cqrrnvfa7v6maaqngbajzgvtxb6pkdei.ipfs.infura-ipfs.io/6762.png" width="300">')
    } else {
        image = ('<img class="subimage" alt="dino2" src="https://bafybeiedk7hgyz2mcyjr7pdli3rhniu2yqsaw2lfxpawzjymmxbt56f7we.ipfs.infura-ipfs.io/8413.png" width="300">' + '<img class="subimage" alt="dino2" src="https://bafybeifwsctudbjfl4ksrntuprg63minbccktzy7ommmo2ewnktbd2vmxm.ipfs.infura-ipfs.io/7511.png" width="300">' + '<img class="subimage" alt="dino2" src="https://bafybeif3o4ce7gxhow237c6onktorhlh257asrb2lrmia2lcdmmulxukam.ipfs.infura-ipfs.io/8546.png" width="300">')
    }
    return document.write(image);
}




