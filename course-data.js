const academyData = [
  {
    id: "forex-beginner",
    title: "Forex Beginner Classroom",
    description: "Start from zero. Learn what Forex is, how money is made, and the core mechanics.",
    chapters: [
      { 
        id: "what-is-forex", 
        title: "1. What is Forex Trading?", 
        hasQuiz: true,
        content: `
          <h2>What is Forex Trading?</h2>
          <p><strong>Forex</strong> (Foreign Exchange) is the global marketplace where national currencies are traded against each other. It is the largest financial market in the world, with over <strong>$7 trillion</strong> traded daily.</p>
          
          <div class="diagram-container">
            <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="40" width="120" height="70" rx="8" fill="#0A1422" stroke="#10B981" stroke-width="2"/>
              <text x="110" y="80" fill="#E2E8F0" font-size="16" font-weight="bold" text-anchor="middle">EUR/USD</text>
              <path d="M 200 75 L 280 75" stroke="#10B981" stroke-width="4" marker-end="url(#arrow)"/>
              <rect x="300" y="40" width="80" height="70" rx="8" fill="#10B981" fill-opacity="0.1" stroke="#10B981" stroke-width="2"/>
              <text x="340" y="80" fill="#10B981" font-size="14" font-weight="bold" text-anchor="middle">PROFIT</text>
            </svg>
            <div class="diagram-caption">You trade the strength of two economies against each other.</div>
          </div>

          <p>If you have ever traveled to another country and exchanged your money for local currency, you have technically participated in Forex!</p>
          <div class="notice notice--legal">
            <strong>Risk Warning:</strong> Forex trading is highly risky. Never invest money you cannot afford to lose.
          </div>
        `
      },
      { 
        id: "currency-pairs", 
        title: "2. Currency Pairs", 
        hasQuiz: true,
        content: `
          <h2>Currency Pairs</h2>
          <p>In Forex, you always trade two currencies at the same time. The first is the <strong>Base</strong>, the second is the <strong>Quote</strong>.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 400 120">
              <text x="200" y="50" fill="#E2E8F0" font-size="32" font-family="monospace" font-weight="bold" text-anchor="middle">EUR / USD</text>
              <path d="M 100 70 L 100 90" stroke="#10B981" stroke-width="2"/>
              <text x="100" y="110" fill="#10B981" font-size="14" text-anchor="middle">Base</text>
              <path d="M 300 70 L 300 90" stroke="#94A3B8" stroke-width="2"/>
              <text x="300" y="110" fill="#94A3B8" font-size="14" text-anchor="middle">Quote</text>
            </svg>
          </div>
          <p>If EUR/USD is <strong>1.1000</strong>, it costs <strong>1.10 US Dollars</strong> to buy <strong>1 Euro</strong>.</p>
        `
      },
      { 
        id: "pips-and-lots", 
        title: "3. Pips and Lots", 
        hasQuiz: true,
        content: `
          <h2>Pips and Lots</h2>
          <p>A <strong>Pip</strong> is the smallest standard movement a currency can make (4th decimal place).</p>
          <div class="diagram-container">
            <svg viewBox="0 0 400 100">
              <text x="200" y="50" fill="#E2E8F0" font-size="28" font-family="monospace" font-weight="bold" text-anchor="middle">1.100<tspan fill="#10B981">0</tspan></text>
              <path d="M 280 60 L 280 80" stroke="#10B981" stroke-width="2"/>
              <text x="280" y="95" fill="#10B981" font-size="14" text-anchor="middle">1 Pip</text>
            </svg>
          </div>
          <ul>
            <li><strong>Standard Lot:</strong> 100,000 units (1 pip = $10)</li>
            <li><strong>Mini Lot:</strong> 10,000 units (1 pip = $1)</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "candlestick-classroom",
    title: "Candlestick Classroom",
    description: "Learn to read the language of the charts.",
    chapters: [
      { 
        id: "candle-anatomy", 
        title: "1. Anatomy of a Candle", 
        hasQuiz: false,
        content: `
          <h2>Anatomy of a Candlestick</h2>
          <p>Candlesticks tell a story. They show you exactly what buyers and sellers did during a specific timeframe.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 300 250">
              <line x1="100" y1="20" x2="100" y2="60" stroke="#10B981" stroke-width="4"/>
              <line x1="100" y1="160" x2="100" y2="220" stroke="#10B981" stroke-width="4"/>
              <rect x="75" y="60" width="50" height="100" fill="#10B981" rx="2"/>
              <text x="150" y="30" fill="#E2E8F0" font-size="12">High</text>
              <text x="150" y="70" fill="#E2E8F0" font-size="12">Close</text>
              <text x="150" y="150" fill="#E2E8F0" font-size="12">Open</text>
              <text x="150" y="230" fill="#E2E8F0" font-size="12">Low</text>
            </svg>
            <div class="diagram-caption">Green = Bullish. Price closed higher than it opened.</div>
          </div>
          <ul>
            <li><strong>Body:</strong> The thick part. Open to Close.</li>
            <li><strong>Wicks:</strong> The thin lines. High and Low.</li>
          </ul>
        `
      },
      { 
        id: "hammer", 
        title: "2. The Hammer", 
        hasQuiz: true,
        content: `
          <h2>The Hammer</h2>
          <p>A <strong>bullish reversal</strong> pattern. Sellers pushed price down, but buyers fought back.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 300 200">
              <rect x="50" y="50" width="40" height="60" fill="#EF4444"/>
              <path d="M 110 150 L 110 50" stroke="#94A3B8" stroke-dasharray="4 4"/>
              <line x1="200" y1="80" x2="200" y2="100" stroke="#10B981" stroke-width="4"/>
              <line x1="200" y1="120" x2="200" y2="180" stroke="#10B981" stroke-width="4"/>
              <rect x="180" y="100" width="40" height="20" fill="#10B981"/>
            </svg>
          </div>
          <p>Features: Small body at the top, long lower wick (at least 2x the body), little to no upper wick.</p>
        `
      }
    ]
  },
  {
    id: "buy-sell",
    title: "Buy and Sell Classroom",
    description: "Understand what happens when you click Buy or Sell.",
    chapters: [
      { 
        id: "buy-vs-sell", 
        title: "1. BUY vs SELL", 
        hasQuiz: true,
        content: `
          <h2>BUY vs SELL</h2>
          <p>You click <strong>BUY</strong> if you think the Base currency will go UP. You click <strong>SELL</strong> if you think it will go DOWN.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 400 200">
              <rect x="50" y="50" width="120" height="80" rx="8" fill="#10B981"/>
              <text x="110" y="95" fill="#04121F" font-size="24" font-weight="bold" text-anchor="middle">BUY</text>
              <rect x="230" y="50" width="120" height="80" rx="8" fill="#EF4444"/>
              <text x="290" y="95" fill="#FFF" font-size="24" font-weight="bold" text-anchor="middle">SELL</text>
            </svg>
          </div>
        `
      }
    ]
  },
  {
    id: "sl-tp",
    title: "Stop Loss & Take Profit",
    description: "Protect your account automatically.",
    chapters: [
      { 
        id: "sl-tp-basics", 
        title: "1. What is SL & TP?", 
        hasQuiz: true,
        content: `
          <h2>Stop Loss & Take Profit</h2>
          <p>Stop Loss limits your loss. Take Profit locks in your profit. Never trade without them.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 600 300">
              <line x1="0" y1="50" x2="600" y2="50" stroke="#10B981" stroke-dasharray="5 5"/>
              <text x="550" y="45" fill="#10B981" text-anchor="end">Take Profit</text>
              <line x1="0" y1="150" x2="600" y2="150" stroke="#94A3B8" stroke-dasharray="5 5"/>
              <text x="550" y="145" fill="#94A3B8" text-anchor="end">Entry</text>
              <line x1="0" y1="250" x2="600" y2="250" stroke="#EF4444" stroke-dasharray="5 5"/>
              <text x="550" y="245" fill="#EF4444" text-anchor="end">Stop Loss</text>
            </svg>
          </div>
        `
      }
    ]
  },
  {
    id: "indicators",
    title: "Technical Indicators",
    description: "Add RSI, MACD, and Moving Averages to your charts.",
    chapters: [
      { 
        id: "rsi", 
        title: "1. RSI (Relative Strength Index)", 
        hasQuiz: true,
        content: `
          <h2>RSI Indicator</h2>
          <p>Measures momentum on a scale of 0-100. Above 70 is Overbought. Below 30 is Oversold.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 600 150">
              <rect x="0" y="10" width="600" height="30" fill="#EF4444" fill-opacity="0.1"/>
              <line x1="0" y1="40" x2="600" y2="40" stroke="#EF4444"/>
              <rect x="0" y="110" width="600" height="30" fill="#10B981" fill-opacity="0.1"/>
              <line x1="0" y1="110" x2="600" y2="110" stroke="#10B981"/>
              <path d="M 50 75 Q 150 20, 250 75 T 450 20 T 550 75" fill="none" stroke="#E2E8F0" stroke-width="2"/>
            </svg>
          </div>
        `
      }
    ]
  },
  {
    id: "mt4-mt5",
    title: "MT4 & MT5 Visual Classroom",
    description: "Learn how to navigate the MetaTrader platform to place trades and analyze charts.",
    chapters: [
      { 
        id: "mt4-interface", 
        title: "1. The MT4/MT5 Interface", 
        hasQuiz: true,
        content: `
          <h2>The MetaTrader Interface</h2>
          <p>When you open MetaTrader, it can look overwhelming. But it is divided into 4 simple sections. Look at the diagram below to understand where everything is.</p>
          
          <div class="diagram-container">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
              <!-- Outer Frame -->
              <rect x="10" y="10" width="580" height="280" rx="6" fill="#0A1422" stroke="#94A3B8" stroke-width="2"/>
              
              <!-- Top Menu -->
              <rect x="10" y="10" width="580" height="30" fill="#15263A" rx="6"/>
              <text x="20" y="30" fill="#E2E8F0" font-size="12" font-family="sans-serif">File  View  Insert  Charts  Tools  Window  Help</text>
              
              <!-- Left Panel (Market Watch) -->
              <rect x="10" y="40" width="150" height="250" fill="#0D1A29"/>
              <text x="20" y="60" fill="#10B981" font-size="12" font-family="sans-serif" font-weight="bold">Market Watch</text>
              <text x="20" y="80" fill="#94A3B8" font-size="10">EURUSD  1.1000</text>
              <text x="20" y="95" fill="#94A3B8" font-size="10">GBPUSD  1.2500</text>
              <text x="20" y="110" fill="#94A3B8" font-size="10">USDJPY  150.00</text>
              
              <!-- Main Chart Area -->
              <rect x="160" y="40" width="430" height="180" fill="#050B14"/>
              <text x="170" y="60" fill="#E2E8F0" font-size="12" font-family="monospace">EURUSD, H1</text>
              <!-- Fake Candles -->
              <rect x="200" y="100" width="10" height="40" fill="#10B981"/>
              <rect x="220" y="80" width="10" height="30" fill="#10B981"/>
              <rect x="240" y="90" width="10" height="50" fill="#EF4444"/>
              <rect x="260" y="70" width="10" height="20" fill="#10B981"/>
              
              <!-- Bottom Panel (Terminal) -->
              <rect x="160" y="220" width="430" height="70" fill="#0D1A29"/>
              <text x="170" y="240" fill="#10B981" font-size="12" font-family="sans-serif" font-weight="bold">Terminal</text>
              <text x="170" y="260" fill="#94A3B8" font-size="10">Trade  Exposure  Account History  News  Alerts</text>
              
              <!-- Labels -->
              <text x="85" y="170" fill="#FFF" font-size="10" font-weight="bold" text-anchor="middle">1. Market</text>
              <text x="85" y="185" fill="#FFF" font-size="10" font-weight="bold" text-anchor="middle">Watch</text>
              
              <text x="375" y="140" fill="#FFF" font-size="14" font-weight="bold" text-anchor="middle">2. Main Chart Area</text>
              
              <text x="375" y="280" fill="#FFF" font-size="10" font-weight="bold" text-anchor="middle">3. Terminal (Open Trades & History)</text>
            </svg>
            <div class="diagram-caption">The standard MetaTrader layout.</div>
          </div>

          <h3>1. Market Watch (Left Panel)</h3>
          <p>This shows a list of all the currency pairs you can trade. If you don't see the pair you want, right-click and select "Show All".</p>
          
          <h3>2. Main Chart Area</h3>
          <p>This is where your candlesticks appear. You can change the timeframe (M1, M5, H1, D1) using the buttons at the top.</p>

          <h3>3. Terminal (Bottom Panel)</h3>
          <p>This is the most important panel. It shows your current open trades, your account balance, and your trade history.</p>

          <h3>4. Navigator (Shortcut: Ctrl+N)</h3>
          <p>This panel (usually on the left) is where you find your Indicators, Expert Advisors (robots), and Scripts.</p>
        `
      }
    ]
  },
  {
    id: "how-money-works",
    title: "How Trading Money Works",
    description: "Understand exactly how profits and losses are calculated based on pips and lot sizes.",
    chapters: [
      { 
        id: "calculating-profit", 
        title: "1. Calculating Profit and Loss", 
        hasQuiz: true,
        content: `
          <h2>Calculating Profit and Loss</h2>
          <p>Forex trading is about math. Every time the price moves by 1 pip, your account balance changes based on the size of your lot.</p>
          
          <h3>The Math</h3>
          <ul>
            <li><strong>1 Standard Lot (100,000 units):</strong> 1 Pip = $10.00</li>
            <li><strong>1 Mini Lot (10,000 units):</strong> 1 Pip = $1.00</li>
            <li><strong>1 Micro Lot (1,000 units):</strong> 1 Pip = $0.10</li>
          </ul>

          <div class="diagram-container">
            <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
              <!-- Good Trade -->
              <rect x="20" y="20" width="220" height="160" rx="8" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" stroke-width="2"/>
              <text x="130" y="50" fill="#10B981" font-size="18" font-family="sans-serif" font-weight="bold" text-anchor="middle">Winning Trade</text>
              <text x="40" y="80" fill="#E2E8F0" font-size="14">Size: 1 Standard Lot</text>
              <text x="40" y="105" fill="#E2E8F0" font-size="14">Move: +50 Pips (in favor)</text>
              <text x="40" y="140" fill="#10B981" font-size="20" font-family="monospace" font-weight="bold">Profit: +$500.00</text>
              
              <!-- Bad Trade -->
              <rect x="260" y="20" width="220" height="160" rx="8" fill="rgba(239, 68, 68, 0.1)" stroke="#EF4444" stroke-width="2"/>
              <text x="370" y="50" fill="#EF4444" font-size="18" font-family="sans-serif" font-weight="bold" text-anchor="middle">Losing Trade</text>
              <text x="280" y="80" fill="#E2E8F0" font-size="14">Size: 1 Standard Lot</text>
              <text x="280" y="105" fill="#E2E8F0" font-size="14">Move: -30 Pips (against)</text>
              <text x="280" y="140" fill="#EF4444" font-size="20" font-family="monospace" font-weight="bold">Loss: -$300.00</text>
            </svg>
          </div>

          <h3>How Leverage Changes Everything</h3>
          <p>If you only have $100 in your account, you cannot buy 1 Standard Lot (which requires $100,000). But with <strong>1:500 leverage</strong>, your broker will loan you the $100,000 for a margin deposit of just $200.</p>
          <p><strong>The Danger:</strong> If the trade goes against you by 10 pips, you lose $100. If your account only had $200 in it, you just lost 50% of your money in a few minutes.</p>
        `
      }
    ]
  },
  {
    id: "price-action-classroom",
    title: "Price Action Classroom",
    description: "Trade without indicators. Learn to read raw market structure and trends.",
    chapters: [
      { 
        id: "market-structure", 
        title: "1. Market Structure (HH & HL)", 
        hasQuiz: true,
        content: `
          <h2>Market Structure</h2>
          <p>Price action is all about identifying the trend. Markets do not move in straight lines; they move in waves.</p>
          
          <h3>Uptrends (Higher Highs & Higher Lows)</h3>
          <p>A market is in an uptrend if it creates a series of <strong>Higher Highs (HH)</strong> and <strong>Higher Lows (HL)</strong>.</p>

          <div class="diagram-container">
            <svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
              <!-- Grid -->
              <line x1="0" y1="50" x2="500" y2="50" stroke="#1B2A3D" stroke-width="1"/>
              <line x1="0" y1="150" x2="500" y2="150" stroke="#1B2A3D" stroke-width="1"/>
              <line x1="0" y1="200" x2="500" y2="200" stroke="#1B2A3D" stroke-width="1"/>

              <!-- Trendline -->
              <line x1="50" y1="200" x2="450" y2="50" stroke="#10B981" stroke-dasharray="5 5" stroke-width="2"/>
              
              <!-- Candles -->
              <rect x="70" y="180" width="15" height="30" fill="#10B981"/>
              <rect x="100" y="140" width="15" height="40" fill="#10B981"/> <!-- HH -->
              <rect x="130" y="160" width="15" height="20" fill="#EF4444"/>
              <rect x="160" y="170" width="15" height="20" fill="#EF4444"/> <!-- HL -->
              <rect x="190" y="110" width="15" height="60" fill="#10B981"/> <!-- HH -->
              <rect x="220" y="140" width="15" height="30" fill="#EF4444"/>
              <rect x="250" y="150" width="15" height="20" fill="#EF4444"/> <!-- HL -->
              <rect x="280" y="70" width="15" height="70" fill="#10B981"/> <!-- HH -->
              
              <!-- Labels -->
              <text x="110" y="130" fill="#10B981" font-size="12" font-family="sans-serif">HH</text>
              <text x="195" y="100" fill="#10B981" font-size="12" font-family="sans-serif">HH</text>
              <text x="285" y="60" fill="#10B981" font-size="12" font-family="sans-serif">HH</text>
              
              <text x="165" y="205" fill="#EF4444" font-size="12" font-family="sans-serif">HL</text>
              <text x="255" y="185" fill="#EF4444" font-size="12" font-family="sans-serif">HL</text>
            </svg>
            <div class="diagram-caption">An uptrend is simply a staircase moving upward.</div>
          </div>

          <h3>Downtrends (Lower Lows & Lower Highs)</h3>
          <p>A downtrend is the exact opposite. The price makes a series of <strong>Lower Highs (LH)</strong> and <strong>Lower Lows (LL)</strong>.</p>

          <div class="notice">
            <strong>Rule of Thumb:</strong> If the price breaks above the most recent Lower High, the downtrend might be ending. If it breaks below the most recent Higher Low, the uptrend might be ending.
          </div>
        `
      }
    ]
  },
  {
    id: "trading-strategies",
    title: "Trading Strategies Classroom",
    description: "Combine everything you've learned into specific, rules-based trading approaches.",
    chapters: [
      { 
        id: "breakout-strategy", 
        title: "1. The Breakout Strategy", 
        hasQuiz: true,
        content: `
          <h2>The Breakout Strategy</h2>
          <p>Markets often move sideways (consolidate) in a tight range. They build pressure like a coiled spring. When the price finally pushes out of that range, it often moves very fast. This is a <strong>Breakout</strong>.</p>
          
          <div class="diagram-container">
            <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
              <!-- Resistance Line -->
              <line x1="50" y1="70" x2="450" y2="70" stroke="#EF4444" stroke-width="2" stroke-dasharray="5 5"/>
              <text x="300" y="60" fill="#EF4444" font-size="12" font-family="sans-serif">Resistance (Ceiling)</text>
              
              <!-- Support Line -->
              <line x1="50" y1="130" x2="450" y2="130" stroke="#10B981" stroke-width="2" stroke-dasharray="5 5"/>
              <text x="300" y="145" fill="#10B981" font-size="12" font-family="sans-serif">Support (Floor)</text>

              <!-- Range Candles -->
              <rect x="80" y="90" width="10" height="20" fill="#10B981"/>
              <rect x="110" y="80" width="10" height="30" fill="#EF4444"/>
              <rect x="140" y="95" width="10" height="20" fill="#10B981"/>
              <rect x="170" y="85" width="10" height="30" fill="#EF4444"/>
              <rect x="200" y="90" width="10" height="25" fill="#10B981"/>
              
              <!-- Breakout Candle -->
              <rect x="230" y="40" width="15" height="60" fill="#10B981"/>
              <text x="250" y="50" fill="#10B981" font-size="12" font-family="sans-serif" font-weight="bold">BREAKOUT!</text>
            </svg>
          </div>

          <h3>How to trade it:</h3>
          <ul>
            <li><strong>Entry:</strong> Wait for a strong candle to close clearly above the resistance line.</li>
            <li><strong>Stop Loss:</strong> Placed back inside the range (e.g., below the breakout candle).</li>
            <li><strong>Take Profit:</strong> Measure the height of the range and project it upward. (If the range was 50 pips tall, aim for 50 pips above the breakout).</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "risk-management",
    title: "Risk Management Classroom",
    description: "The most important skill in trading. Learn how to survive the market.",
    chapters: [
      { 
        id: "risk-per-trade", 
        title: "1. Risking 1% Per Trade", 
        hasQuiz: true,
        content: `
          <h2>The 1% Rule</h2>
          <p>Professional traders do not think about "How much can I make?" They think about <strong>"How much can I lose?"</strong>.</p>
          
          <p>The golden rule of trading is to <strong>never risk more than 1% (or 2%) of your total account balance on a single trade.</strong></p>

          <div class="diagram-container">
            <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
              <!-- Safe Trader -->
              <rect x="20" y="20" width="220" height="160" rx="8" fill="#0A1422" stroke="#10B981" stroke-width="2"/>
              <text x="130" y="50" fill="#10B981" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle">Risking 1%</text>
              <text x="40" y="80" fill="#E2E8F0" font-size="14">Account: $1,000</text>
              <text x="40" y="105" fill="#E2E8F0" font-size="14">Risk: $10</text>
              <text x="40" y="140" fill="#10B981" font-size="14">Even after 10 losses in a row,</text>
              <text x="40" y="160" fill="#10B981" font-size="14">you still have $900.</text>
              
              <!-- Reckless Trader -->
              <rect x="260" y="20" width="220" height="160" rx="8" fill="#0A1422" stroke="#EF4444" stroke-width="2"/>
              <text x="370" y="50" fill="#EF4444" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle">Risking 20%</text>
              <text x="280" y="80" fill="#E2E8F0" font-size="14">Account: $1,000</text>
              <text x="280" y="105" fill="#E2E8F0" font-size="14">Risk: $200</text>
              <text x="280" y="140" fill="#EF4444" font-size="14">After just 5 losses,</text>
              <text x="280" y="160" fill="#EF4444" font-size="14">you are wiped out.</text>
            </svg>
          </div>

          <h3>Why 1% is the magic number</h3>
          <p>Losses are part of trading. You can have a losing streak. If you risk 50% of your account on one trade and lose, you now need to make a 100% return just to get back to where you started. By risking 1%, a losing streak stings, but it doesn't destroy you.</p>
        `
      }
    ]
  },
  {
    id: "trading-psychology",
    title: "Trading Psychology",
    description: "Master your mind. Greed and fear are your biggest enemies.",
    chapters: [
      { 
        id: "fomo-and-revenge", 
        title: "1. FOMO and Revenge Trading", 
        hasQuiz: true,
        content: `
          <h2>FOMO and Revenge Trading</h2>
          <p>90% of traders fail not because they are stupid, but because they cannot control their emotions.</p>
          
          <h3>FOMO (Fear Of Missing Out)</h3>
          <p>You see a massive green candle shooting up. You haven't done any analysis, but you don't want to miss out, so you buy at the very top. As soon as you buy, the price reverses and you lose. <strong>Solution:</strong> Wait for a pullback or a proper setup.</p>

          <h3>Revenge Trading</h3>
          <p>You just lost $50. You are angry. You immediately open another trade twice as big to win the money back. This is the fastest way to blow up an account. <strong>Solution:</strong> Walk away. Close the laptop.</p>

          <div class="diagram-container">
            <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
              <!-- Emotional Curve -->
              <path d="M 20 150 Q 100 20, 200 150 T 380 50" fill="none" stroke="#10B981" stroke-width="3"/>
              
              <text x="100" y="50" fill="#10B981" font-size="12" font-family="sans-serif">Euphoria (Greed)</text>
              <text x="150" y="180" fill="#EF4444" font-size="12" font-family="sans-serif">Panic (Loss)</text>
              <text x="300" y="80" fill="#E2E8F0" font-size="12" font-family="sans-serif">Logic / Neutrality</text>
              
              <!-- Neutral Line -->
              <line x1="0" y1="100" x2="400" y2="100" stroke="#94A3B8" stroke-dasharray="4 4"/>
            </svg>
            <div class="diagram-caption">The market is designed to trigger your emotions. Professionals stay neutral.</div>
          </div>
        `
      }
    ]
  },
  {
    id: "smart-money-concepts",
    title: "Smart Money Concepts",
    description: "Understand institutional liquidity, order blocks, and Fair Value Gaps.",
    chapters: [
      { 
        id: "fvg-and-order-blocks", 
        title: "1. Fair Value Gaps & Order Blocks", 
        hasQuiz: true,
        content: `
          <h2>Smart Money Concepts (SMC)</h2>
          <p>SMC is a modern style of trading that focuses on how banks and institutions (Smart Money) move the market.</p>
          
          <h3>What is a Fair Value Gap (FVG)?</h3>
          <p>When the market moves violently in one direction, it leaves a "gap" where no trading happened. The market often returns to fill this gap before continuing its trend.</p>

          <div class="diagram-container">
            <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
              <!-- Candle 1 -->
              <rect x="100" y="100" width="20" height="30" fill="#10B981"/>
              <!-- Candle 2 (Big FVG) -->
              <rect x="140" y="30" width="20" height="60" fill="#10B981"/>
              <!-- Candle 3 -->
              <rect x="180" y="50" width="20" height="30" fill="#10B981"/>
              
              <!-- FVG Zone -->
              <rect x="100" y="60" width="100" height="40" fill="#FBBF24" fill-opacity="0.2"/>
              <line x1="90" y1="60" x2="210" y2="60" stroke="#FBBF24" stroke-dasharray="4 4"/>
              <line x1="90" y1="100" x2="210" y2="100" stroke="#FBBF24" stroke-dasharray="4 4"/>
              
              <text x="220" y="85" fill="#FBBF24" font-size="12" font-family="sans-serif">Fair Value Gap (FVG)</text>
              <text x="220" y="105" fill="#94A3B8" font-size="10" font-family="sans-serif">Market will likely return here</text>
            </svg>
            <div class="diagram-caption">A gap between the high of candle 1 and the low of candle 3.</div>
          </div>

          <h3>Order Blocks</h3>
          <p>An Order Block is the last candle before a massive move. SMC traders believe institutions place their massive orders there. They wait for the price to return to that specific candle to enter a trade.</p>
        `
      }
    ]
  }
];
