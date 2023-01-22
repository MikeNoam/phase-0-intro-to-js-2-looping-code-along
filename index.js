console.log(writeCards(["Mike", "Kaley", "John"], "wedding"));
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); debugger;
    }
    return messages;
}


/*const gifts = ["apple", "orange", "pear"];
function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}
wrapGifts(gifts); 
*/
function countDown(integer) {
    while (integer > 0) {
        console.log(integer);
        integer --; 
} 
    console.log(0);
    }
      


