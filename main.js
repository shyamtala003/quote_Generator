let quoteDiv = document.getElementById('quote');
let author = document.getElementById('author');
let TwitterLink;

let generateQuotes = async () => {
    let quote = await fetch("https://api.quotable.io/random");
    let result = await quote.json();
    quoteDiv.textContent = result.content;
    author.textContent = `- ${result.author}`;

    // code for twitte
    let twitterText = `${result.content} \n-- ${result.author}`

    TwitterLink = `https://twitter.com/intent/tweet?text=${twitterText}`

    let twitterBtn = document.getElementById('twitter__btn');
    twitterBtn.setAttribute("href", TwitterLink);

}

generateQuotes();


// text to speech
let textToSpeech = () => {
    let quote = document.getElementById('quote').textContent;
    quote += "\tWritten by" + document.getElementById('author').textContent;
    let msg = new SpeechSynthesisUtterance(quote);
    speechSynthesis.speak(msg);
}

// copy to clipboard

var clipboard = new ClipboardJS('.copy__to_clipboard');

clipboard.on('success', function (e) {
    let alertMsg = document.querySelector("#msg");
    alertMsg.classList.remove("hideMsg");
    alertMsg.classList.add("showMsg");
    setTimeout(() => {
        alertMsg.classList.add("hideMsg");
        alertMsg.classList.remove("showMsg");
    }, 1500)

    e.clearSelection();
});

clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});