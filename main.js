let quoteDiv = document.getElementById('quote');
let author = document.getElementById('autor');

let generateQuotes = async() => {
    let quote = await fetch("https://api.quotable.io/random");
    let result = await quote.json();
    quoteDiv.textContent=result.content;
    author.textContent=`- ${result.author}`;

    // let image = await fetch("https://api.unsplash.com/photos/random/?client_id=MW3gI7eSJgNQNf2qdvH4SiA9yJESUcZJjlTgEtDVl2c");
    // let imageResult= await image.json();
    // document.body.style.backgroundImage=`url(${imageResult.links.download})`;

}

generateQuotes();


// text to speech
let textToSpeech= ()=>{
    let quote = document.getElementById('quote').textContent;
    let msg = new SpeechSynthesisUtterance(quote);
    speechSynthesis.speak(msg);
}

// copy to clipboard

function copyToClipboard() {
    let quote = document.getElementById('quote').textContent;
    quote.select();
    quote.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(quote);
  }