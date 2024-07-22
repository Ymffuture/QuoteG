import React, { useState, useEffect } from "react";
import { FaTwitter, FaFacebook, FaPinterestP, FaInstagram, FaLinkedin } from "react-icons/fa";

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "Life is not about getting and having, it is about giving and being.",
    author: "Kevin Kruse",
  });

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote({ text: data.content, author: data.author });
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };

  useEffect(() => {
    fetchRandomQuote(); // Fetch a random quote when the component mounts
  }, []);
const CopyText = () => {
  window.navigator.clipboard.writeText(quote.text);
  alert("Copied to clipboard");

}
const linkIcon = () => {
   window.open('https://twitter.com/intent/tweet?text='+quote.text + ' - ' + quote.author);
}
const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quote.text + ' - ' + quote.author)}`);
  };
  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(quote.text + ' - ' + quote.author)}`);
  };
  return (
    <div className="container">
      <div className="quote" onClick={CopyText}>{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author"> - {quote.author}</div>
         
        </div>
      </div>
      <button onClick={fetchRandomQuote} className="new-quote-button">
        New Quote
      </button>
      <div className="icons">
            <FaTwitter  className="icon" onClick={linkIcon}/>
            <FaFacebook className="icon" onClick={shareOnFacebook}/>
            <FaLinkedin className="icon" onClick={shareOnLinkedIn}/>
          </div>
    </div>
  );
};

export default RandomQuote;
