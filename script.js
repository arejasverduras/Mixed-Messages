const messageContent = {
    snowboarders: ['Shaun White', 'JP Walker', 'JP Solberg'],
    tricks: ['1080', 'hardway cab 270 fs bluntslide to revert', 'Misty Flip'],
    result: ['STOMPED IT!!', '..bails', '..chickens..']
};

function randomItem (array){
    randomIndex = Math.floor((Math.random()*array.length));
    return array[randomIndex];
};

function generateMessage (object){
    let rider = randomItem(object.snowboarders);
    let trick = randomItem(object.tricks);
    let result = randomItem(object.result);

    let message = 'Snowboarder ' + rider + ' approaches..\n\n' + '<br>' + 'He is going to try a ' + trick + '\n\n' +'<br>' + 'He....' + result;
    return message;
};


let message = (generateMessage(messageContent));
document.write('<h3>'+ message +'</h3>');