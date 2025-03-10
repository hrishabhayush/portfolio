document.addEventListener("DOMContentLoaded", function() {
  const typedTextSpan = document.querySelector(".typed");
  const cursorSpan = document.querySelector(".ityped-cursor");
  
  if (!typedTextSpan || !cursorSpan) {
      console.error("Could not find typing effect elements");
      return;
  }
  
  const textArrayString = typedTextSpan.getAttribute("data-type-text");
  const textArray = textArrayString.split("&&");
  
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
          if(textArrayIndex >= textArray.length) textArrayIndex = 0;
          setTimeout(type, typingDelay + 250);
      }
  }
  
  if(textArray.length) setTimeout(type, newTextDelay);
});

// Hamburger menu toggle function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}