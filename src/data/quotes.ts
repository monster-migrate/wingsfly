export interface Quote {
    text: string;
    author?: string;
  }
  
  const quotesByDate: Record<string, Quote> = {
    '2025-07-04': { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    '2025-07-05': { text: "It’s not whether you get knocked down; it’s whether you get up.", author: "Vince Lombardi" },
    '2025-07-06': { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    '2025-07-07': { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    '2025-07-08': { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    '2025-07-09': { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    '2025-07-10': { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  };
  
  export default quotesByDate;
  