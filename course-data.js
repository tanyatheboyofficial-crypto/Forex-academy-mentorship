const academyData = [
  {
    id: "forex-fundamentals",
    title: "Forex Fundamentals",
    description: "Learn what Forex is, how currency pairs work, pips, lots, spreads, and leverage.",
    chapters: [
      { 
        id: "what-is-forex", 
        title: "1. What is Forex?", 
        hasQuiz: true,
        content: `
          <h2>What is Forex?</h2>
          <p><strong>Forex (Foreign Exchange)</strong> is the global marketplace where currencies are traded against each other. It is the largest and most liquid financial market in the world, with an estimated daily trading volume exceeding $7 trillion.</p>
          
          <h3>How does it work?</h3>
          <p>Unlike a stock exchange, Forex does not have a central physical location. It operates electronically over-the-counter (OTC) between banks, brokers, institutions, and retail traders 24 hours a day, 5 days a week.</p>
          
          <div class="notice">
            <strong>Example:</strong> If you believe the Euro (EUR) will strengthen against the US Dollar (USD), you buy the EUR/USD pair. If the Euro's value increases relative to the Dollar, you make a profit. If it decreases, you incur a loss.
          </div>

          <h3>Why do currencies change in value?</h3>
          <p>Currency values fluctuate based on supply and demand. Factors include:</p>
          <ul>
            <li><strong>Interest Rates:</strong> Set by central banks (like the Federal Reserve).</li>
            <li><strong>Inflation:</strong> Rising prices affect purchasing power.</li>
            <li><strong>Economic Health:</strong> GDP growth, employment, and manufacturing data.</li>
            <li><strong>Geopolitics:</strong> Elections, wars, and trade agreements.</li>
          </ul>

          <h3>Key Forex Terms to Know First</h3>
          <ul>
            <li><strong>Pips:</strong> The smallest unit of price movement (usually the 4th decimal place).</li>
            <li><strong>Lots:</strong> The standard size of a trade (Standard = 100,000 units, Mini = 10,000, Micro = 1,000).</li>
            <li><strong>Leverage:</strong> Borrowed capital from your broker that allows you to control a larger position. (High risk!).</li>
            <li><strong>Spread:</strong> The difference between the Bid (sell) and Ask (buy) price, which is the broker's fee.</li>
          </ul>

          <div class="notice notice--legal">
            <strong>Risk Warning:</strong> Leverage can amplify losses just as easily as gains. Never trade with money you cannot afford to lose.
          </div>
        `
      },
      { 
        id: "currency-pairs", 
        title: "2. Currency Pairs (Major, Minor, Exotic)", 
        hasQuiz: true,
        content: `
          <h2>Currency Pairs</h2>
          <p>In Forex, you always trade one currency against another. This is called a "currency pair." The first currency is the <strong>Base Currency</strong>, and the second is the <strong>Quote Currency</strong>.</p>
          
          <h3>How to read a pair: EUR/USD</h3>
          <p>The price tells you how much of the Quote currency (USD) is needed to buy one unit of the Base currency (EUR). If EUR/USD is 1.1000, it costs 1.10 US Dollars to buy 1 Euro.</p>

          <h3>The Three Categories of Pairs</h3>
          <p><strong>1. Major Pairs</strong><br>These include the US Dollar on one side and are the most heavily traded, resulting in lower spreads.</p>
          <ul>
            <li>EUR/USD (Euro / US Dollar)</li>
            <li>USD/JPY (US Dollar / Japanese Yen)</li>
            <li>GBP/USD (British Pound / US Dollar)</li>
            <li>USD/CHF (US Dollar / Swiss Franc)</li>
          </ul>

          <p><strong>2. Minor Pairs (Crosses)</strong><br>These do not include the US Dollar. They are slightly less liquid and have wider spreads than majors.</p>
          <ul>
            <li>EUR/GBP (Euro / British Pound)</li>
            <li>AUD/NZD (Australian Dollar / New Zealand Dollar)</li>
          </ul>

          <p><strong>3. Exotic Pairs</strong><br>One major currency paired with a currency from a developing economy. High volatility and high spreads.</p>
          <ul>
            <li>USD/ZAR (US Dollar / South African Rand)</li>
            <li>USD/TRY (US Dollar / Turkish Lira)</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "candlestick-masterclass",
    title: "Candlestick Masterclass",
    description: "An illustrated encyclopedia of 23 candlestick patterns, including Doji, Hammer, Engulfing, and Stars.",
    chapters: [
      { 
        id: "candle-anatomy", 
        title: "1. Anatomy of a Candlestick", 
        hasQuiz: false,
        content: `
          <h2>Anatomy of a Candlestick</h2>
          <p>Candlesticks show price movement over a specific timeframe (e.g., 1 hour, 4 hours, 1 day). They tell you the Open, High, Low, and Close (OHLC) prices for that period.</p>
          
          <div style="background:#0A1422; padding:20px; border-radius:12px; border:1px solid #10B981; margin:20px 0;">
            <svg viewBox="0 0 200 200" width="100%" height="200" style="max-width:300px; margin:auto; display:block;">
              <line x1="100" y1="20" x2="100" y2="180" stroke="#10B981" stroke-width="2"/>
              <rect x="85" y="60" width="30" height="80" fill="#10B981" rx="2"/>
              <text x="130" y="30" fill="#E2E8F0" font-size="12" font-family="sans-serif">High</text>
              <text x="130" y="70" fill="#E2E8F0" font-size="12" font-family="sans-serif">Close</text>
              <text x="130" y="130" fill="#E2E8F0" font-size="12" font-family="sans-serif">Open</text>
              <text x="130" y="170" fill="#E2E8F0" font-size="12" font-family="sans-serif">Low</text>
            </svg>
          </div>

          <h3>Body vs. Wicks</h3>
          <ul>
            <li><strong>The Body:</strong> The thick part. Shows the difference between the Opening and Closing price. A green/white body means Close > Open (Bullish). A red/black body means Close < Open (Bearish).</li>
            <li><strong>The Wicks (Shadows):</strong> The thin lines above and below the body. They show the highest and lowest prices reached during the timeframe.</li>
          </ul>
        `
      },
      { 
        id: "hammer-pattern", 
        title: "2. The Hammer (Bullish Reversal)", 
        hasQuiz: true,
        content: `
          <h2>The Hammer Candlestick</h2>
          <p>The Hammer is a <strong>bullish reversal</strong> pattern that forms at the bottom of a downtrend. It signals that sellers pushed the price down, but buyers stepped in and pushed it back up.</p>

          <h3>Structure</h3>
          <ul>
            <li>Small real body (near the top of the candle).</li>
            <li>Little to no upper wick.</li>
            <li>Long lower wick (at least twice the length of the body).</li>
          </ul>

          <div class="notice">
            <strong>Interpretation:</strong> During the candle's formation, price dropped significantly (creating the lower wick). However, strong buying pressure rejected the lower prices, pushing the close back near the open. This indicates buyers are taking control.
          </div>

          <h3>Limitations & Confirmation</h3>
          <p>A Hammer alone is not a guarantee of a reversal. It must be followed by a bullish confirmation candle (e.g., a strong green candle closing above the hammer's high). Traders often combine it with Support levels or oversold RSI readings.</p>
        `
      },
      { 
        id: "doji-pattern", 
        title: "3. The Doji (Indecision)", 
        hasQuiz: true,
        content: `
          <h2>The Doji</h2>
          <p>A Doji is a candlestick where the Open and Close prices are virtually identical, leaving a horizontal line for the body. It represents extreme <strong>indecision</strong> between buyers and sellers.</p>

          <h3>Types of Doji</h3>
          <ul>
            <li><strong>Standard Doji:</strong> Wicks on both sides. The market is neutral.</li>
            <li><strong>Dragonfly Doji:</strong> Long lower wick, no upper wick. Bullish reversal signal.</li>
            <li><strong>Gravestone Doji:</strong> Long upper wick, no lower wick. Bearish reversal signal.</li>
          </ul>

          <h3>How to trade it?</h3>
          <p>Never trade a Doji in isolation. Wait for the next candle to confirm direction. If a Doji forms at strong resistance, the next bearish candle might signal a reversal downward.</p>
        `
      }
    ]
  },
  {
    id: "technical-indicators",
    title: "Technical Indicators",
    description: "Master RSI, MACD, Moving Averages, Bollinger Bands, and more.",
    chapters: [
      { 
        id: "rsi-indicator", 
        title: "1. RSI (Relative Strength Index)", 
        hasQuiz: true,
        content: `
          <h2>RSI — Relative Strength Index</h2>
          <p><strong>What it does:</strong> RSI is a momentum oscillator that measures the speed and change of price movements on a scale of 0 to 100.</p>
          
          <h3>Default Settings</h3>
          <p>The standard period is <strong>14</strong>.</p>

          <h3>How to read it</h3>
          <ul>
            <li><strong>Overbought (Above 70):</strong> The asset may be overvalued and due for a pullback or reversal.</li>
            <li><strong>Oversold (Below 30):</strong> The asset may be undervalued and due for a bounce upward.</li>
            <li><strong>Divergence:</strong> When price makes a higher high, but RSI makes a lower high. This often signals weakening momentum and a potential reversal.</li>
          </ul>

          <h3>How to install on MT4/MT5</h3>
          <ol>
            <li>Open MetaTrader.</li>
            <li>Go to <strong>Insert > Indicators > Oscillators > Relative Strength Index</strong>.</li>
            <li>Click OK to add it to your chart.</li>
          </ol>

          <div class="notice notice--legal">
            <strong>Warning:</strong> In strong trends, RSI can remain overbought/oversold for a long time. Do not blindly sell just because RSI is above 70.
          </div>
        `
      }
    ]
  }
];
