import type { Chain, AssetLists } from '../types';

export const chain4Energytestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'chain4energytestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://c4e.io/',
  pretty_name: 'Chain4Energy Testnet',
  chain_id: 'babajaga-1',
  bech32_prefix: 'c4e',
  daemon_name: 'c4ed',
  node_home: '$HOME/.c4e-chain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uc4e',
        fixed_min_gas_price: 0,
        low_gas_price: 0.02,
        average_gas_price: 0.03,
        high_gas_price: 0.06,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uc4e',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/chain4energy/c4e-chain',
    recommended_version: 'v1.2.0',
    compatible_versions: ['v1.2.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/chain4energy/c4e-chains/main/babajaga-1/genesis.json',
    },
    versions: [
      {
        name: 'v1.2.0',
        recommended_version: 'v1.2.0',
        compatible_versions: ['v1.2.0'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png',
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: 'de18fc6b4a5a76bd30f65ebb28f880095b5dd58b',
        address: '66.70.177.76:36656',
        provider: 'C4E',
      },
      {
        id: '36656,33f90a0ac7e8f48305ea7e64610b789bbbb33224',
        address: '151.80.19.186:36656',
        provider: 'C4E',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-testnet.c4e.io',
        provider: 'C4E',
      },
    ],
    rest: [
      {
        address: 'https://lcd-testnet.c4e.io',
        provider: 'C4E',
      },
    ],
    grpc: [
      {
        address: 'grpc-testnet.c4e.io:8443',
        provider: 'C4E',
      },
    ],
  },
  explorers: [
    {
      kind: 'explorer',
      url: 'https://explorer-testnet.c4e.io/',
      tx_page: 'https://explorer-testnet.c4e.io/transactions/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png',
    },
  ],
};

export const chain4EnergytestnetAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'chain4energytestnet',
  assets: [
    {
      description: 'The native token of Chain4Energy',
      denom_units: [
        {
          denom: 'uc4e',
          exponent: 0,
        },
        {
          denom: 'c4e',
          exponent: 6,
        },
      ],
      base: 'uc4e',
      name: 'Chain4Energy',
      display: 'c4e',
      symbol: 'C4E',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png',
        },
      ],
    },
  ],
};