// models/Coin.js
const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  coinId: {
    type: String, // CoinGecko coin ID (e.g., "bitcoin", "ethereum")
    required: true
  },
  coinName: {
    type: String, // e.g., "Bitcoin"
    required: true
  },
  symbol: {
    type: String, // e.g., "BTC"
    required: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Coin', coinSchema);
