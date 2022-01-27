// Chapter 6.0
const quotes = [
    {
        quote: "Where there is a will there is a way.",
        author: "Love youself"
    },
    {
        quote: "If not now, then when?",
        author: "Love youself"
    },
    {
        quote: "Habit is a second nature.",
        author: "Love youself"
    },
    {
        quote: "Only I can change my life, no one can do it for me.",
        author: "Love youself"
    },
    {
        quote: "You deserve to be loved.",
        author: "Love youself"
    },
    {
        quote: "Live live there is no tomorrow.",
        author: "Love youself"
    },
    {
        quote: "Don't waste your youth.",
        author: "Love youself"
    },
    {
        quote: "Pain past is pleasure.",
        author: "Love youself"
    },
    {
        quote: "Life is all about timing.",
        author: "Love youself"
    },
    {
        quote: "Seize the day.",
        author: "Love youself"
    }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;