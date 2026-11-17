const quizData = {
  "what-is-forex": [
    {
      question: "What does the term 'Forex' stand for?",
      options: ["Foreign Exchange", "Forex Trading", "Formula Exchange", "Foreign Export"],
      correct: 0,
      explanation: "Forex is short for Foreign Exchange, which is the global marketplace for trading national currencies."
    },
    {
      question: "Which of the following is true about the Forex market?",
      options: ["It has a central physical location", "It is only open on weekends", "It operates 24 hours a day, 5 days a week", "It only trades stocks"],
      correct: 2,
      explanation: "The Forex market is an over-the-counter (OTC) market that operates 24/5."
    },
    {
      question: "What is the primary goal of Forex trading?",
      options: ["To collect foreign coins", "To profit from changes in currency exchange rates", "To hold money in a foreign bank", "To pay for international goods"],
      correct: 1,
      explanation: "Traders buy and sell currencies to profit from the fluctuating exchange rates between them."
    }
  ],
  "currency-pairs": [
    {
      question: "In the pair EUR/USD, which is the Base Currency?",
      options: ["USD", "EUR", "Both", "Neither"],
      correct: 1,
      explanation: "The first currency listed in a pair is always the Base Currency. Here, it is the Euro (EUR)."
    },
    {
      question: "What does a quote of 1.1000 for EUR/USD mean?",
      options: ["1 Euro costs 1.10 USD", "1 USD costs 1.10 Euro", "The Euro is weaker than the Dollar", "It costs 1.10 Euros to buy 1 Dollar"],
      correct: 0,
      explanation: "The quote tells you how much of the Quote currency (USD) is needed to buy one unit of the Base currency (EUR)."
    }
  ],
  "hammer": [
    {
      question: "What does a Hammer candlestick indicate?",
      options: ["A strong downtrend continuing", "A potential bullish reversal", "Complete market indecision", "A guaranteed price drop"],
      correct: 1,
      explanation: "A Hammer shows that sellers pushed the price down, but buyers rejected the lower prices and pushed it back up, hinting at a bullish reversal."
    },
    {
      question: "Where should a Hammer appear to be considered valid?",
      options: ["At the top of an uptrend", "In the middle of nowhere", "At the bottom of a downtrend", "Only on a 1-minute chart"],
      correct: 2,
      explanation: "A Hammer is only meaningful if it appears at the end of a downtrend, suggesting a reversal."
    }
  ],
  "sl-tp-basics": [
    {
      question: "What is the purpose of a Stop Loss?",
      options: ["To guarantee a profit", "To automatically close a trade if the price goes against you", "To double your position size", "To keep the trade open forever"],
      correct: 1,
      explanation: "A Stop Loss is an order that automatically closes your trade at a specific loss level to protect your account."
    },
    {
      question: "If you BUY a pair, where should your Stop Loss be placed?",
      options: ["Above the entry price", "Exactly at the entry price", "Below the entry price", "It doesn't matter"],
      correct: 2,
      explanation: "For a BUY trade, you want to get out if the price drops, so your Stop Loss must be placed below your entry price."
    }
  ]
};
