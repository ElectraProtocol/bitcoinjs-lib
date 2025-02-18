'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.testnet = exports.regtest = exports.bitcoin = void 0;
exports.bitcoin = {
  messagePrefix: '\x14XEP Signed Message:\n',
  bech32: 'ep',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x37,
  scriptHash: 0x89,
  wif: 0xa2,
};
exports.regtest = {
  messagePrefix: '\x14XEP Signed Message:\n',
  bech32: 'eprt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x8d,
  scriptHash: 0x13,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x14XEP Signed Message:\n',
  bech32: 'te',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x8d,
  scriptHash: 0x13,
  wif: 0xef,
};
