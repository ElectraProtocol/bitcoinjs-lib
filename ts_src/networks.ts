// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

export const bitcoin: Network = {
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
export const regtest: Network = {
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
export const testnet: Network = {
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
