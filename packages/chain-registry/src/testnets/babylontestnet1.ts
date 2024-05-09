import type { Chain, AssetList, Versions } from '../types';

export const babylontestnet1: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'babylontestnet1',
  status: 'killed',
  website: 'https://www.babylonchain.io',
  network_type: 'testnet',
  pretty_name: 'Babylon Testnet',
  chain_id: 'bbn-test1',
  bech32_prefix: 'bbn',
  daemon_name: 'babylond',
  node_home: '$HOME/.babylond',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [
      {
        denom: 'ubbn',
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ubbn',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/babylonchain/babylon',
    recommended_version: 'v0.5.0',
    compatible_versions: ['v0.5.0'],
    genesis: {
      genesis_url:
        'https://github.com/babylonchain/networks/raw/main/bbn-test1/genesis.tar.bz2',
    },
    versions: [
      {
        name: 'v0.5.0',
        recommended_version: 'v0.5.0',
        compatible_versions: ['v0.5.0'],
      },
    ],
  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg',
  },
  peers: {
    seeds: [
      {
        id: '03ce5e1b5be3c9a81517d415f65378943996c864',
        address: '18.207.168.204:26656',
        provider: 'Babylon foundation',
      },
      {
        id: 'a5fabac19c732bf7d814cf22e7ffc23113dc9606',
        address: '34.238.169.221:26656',
        provider: 'Babylon foundation',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'testnet-seeds.polkachu.com:20656',
        provider: 'Polkachu',
      },
    ],
    persistent_peers: [
      {
        id: '03ce5e1b5be3c9a81517d415f65378943996c864',
        address: '18.207.168.204:26656',
        provider: 'Babylon foundation',
      },
      {
        id: 'a5fabac19c732bf7d814cf22e7ffc23113dc9606',
        address: '34.238.169.221:26656',
        provider: 'Babylon foundation',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'testnet-seeds.polkachu.com:20656',
        provider: 'Polkachu',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'rpc.testnet.babylonchain.io:26657',
        provider: 'Babylon foundation',
      },
    ],
    rest: [
      {
        address: 'rpc.testnet.babylonchain.io:1317',
        provider: 'Babylon foundation',
      },
    ],
    grpc: [],
  },
  explorers: [
    {
      kind: 'babylonscan',
      url: 'https://babylonscan.io',
    },
    {
      kind: 'explorers.guru',
      url: 'https://babylon.explorers.guru',
      tx_page: 'https://babylon.explorers.guru/transaction/${txHash}',
    },
  ],
  images: [
    {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg',
    },
  ],
};

export const babylontestnet1AssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'babylontestnet1',
  assets: [
    {
      description: 'The native staking token of Babylon.',
      denom_units: [
        {
          denom: 'ubbn',
          exponent: 0,
        },
        {
          denom: 'bbn',
          exponent: 6,
        },
      ],
      base: 'ubbn',
      name: 'Babylon BBN',
      display: 'bbn',
      symbol: 'BBN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg',
        },
      ],
    },
  ],
};
