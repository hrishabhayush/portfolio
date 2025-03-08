require('dotenv').config();

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const typedTextSpan = document.querySelector(".typed");
const cursorSpan = document.querySelector(".ityped-cursor");

const textArray = ["DeFi", "Quant", "ML/AI", "Web Dev", "Blockchain"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;


function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);

  const navLinks = document.querySelectorAll(".nav-links li a");
  navLinks.forEach(link => scrambleText(link));

  // Fetch latest tweets
  fetchLatestTweets();
});

function fetchLatestTweets() {
    const tweetContainer = document.getElementById('tweet-container');
    const twitterUsername = 'hrishabhayush'; 

    fetch(`https://api.twitter.com/2/tweets?ids=${twitterUsername}`, {
        headers: {
            'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}` 
        }
    })
    .then(response => response.json())
    .then(data => {
        const userId = data.data.id;

        // Step 2: Get the latest tweets by user ID
        return fetch(`https://api.twitter.com/2/users/${userId}/tweets`, {
          headers: {
              'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}` 
          }
        });
    })
    .then(response => response.json())
    .then(data => {
      const tweets = data.data;
      tweets.slice(0, 2).forEach(tweet => {
          const tweetElement = document.createElement('div');
          tweetElement.classList.add('tweet');
          tweetElement.innerHTML = `
              <p>${tweet.text}</p>
              <a href="https://twitter.com/${twitterUsername}/status/${tweet.id}" target="_blank">View on Twitter</a>
          `;
          tweetContainer.appendChild(tweetElement);
      });
    })
    .catch(error => console.error('Error fetching tweets:', error));
}