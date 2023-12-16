import type { Chain, AssetLists } from '../types';

export const archwaytestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'archwaytestnet',
  chain_id: 'constantine-3',
  pretty_name: 'Archway Testnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://archway.io',
  bech32_prefix: 'archway',
  daemon_name: 'archwayd',
  node_home: '$HOME/.archway',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'aconst',
        low_gas_price: 1000000000000,
        average_gas_price: 1500000000000,
        high_gas_price: 2000000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'aconst',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/archway-network/archway',
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.svg',
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.constantine.archway.tech',
        provider: 'Archway',
      },
      {
        address: 'https://archway-testnet-rpc.polkachu.com',
        provider: 'Polkachu',
      },
    ],
    rest: [
      {
        address: 'https://api.constantine.archway.tech',
        provider: 'Archway',
      },
    ],
  },
  explorers: [
    {
      kind: 'archwayscan',
      url: 'https://testnet.archway.explorers.guru',
      tx_page: 'https://testnet.archway.explorers.guru/transaction/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.svg',
    },
  ],
};

export const archwaytestnetAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'archwaytestnet',
  assets: [
    {
      description: 'The native token of Archway testnetwork',
      denom_units: [
        {
          denom: 'aconst',
          exponent: 0,
        },
        {
          denom: 'uconst',
          exponent: 12,
        },
        {
          denom: 'const',
          exponent: 18,
        },
      ],
      base: 'aconst',
      name: 'Archway',
      display: 'const',
      symbol: 'CONST',
    },
  ],
};
