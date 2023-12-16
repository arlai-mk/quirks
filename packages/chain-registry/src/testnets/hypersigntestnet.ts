import type { Chain, AssetLists } from '../types';

export const hypersigntestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'hypersigntestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'hypersign',
  chain_id: 'jagrat',
  bech32_prefix: 'hid',
  daemon_name: 'hid-noded',
  node_home: '$HOME/.hid-node',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uhid',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.02,
        high_gas_price: 0.05,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/hypersign-protocol/hid-node',
    recommended_version: 'v0.1.5',
    compatible_versions: ['v0.1.5'],
    binaries: {
      'linux/amd64':
        'https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-linux-amd64.tar.gz',
      'linux/arm64':
        'https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-linux-arm64.tar.gz',
      'darwin/arm64':
        'https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-darwin-arm64.tar.gz',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/hypersign-protocol/networks/master/testnet/jagrat/final_genesis.json',
    },
    versions: [
      {
        name: 'v0.1.5',
        recommended_version: 'v0.1.5',
        compatible_versions: ['v0.1.5'],
        binaries: {
          'linux/amd64':
            'https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-linux-arm64.tar.gz',
          'darwin/arm64':
            'https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-darwin-arm64.tar.gz',
        },
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'df949a46ae6529ae1e09b034b49716468d5cc7e9',
        address: 'testnet-seeds.stakerhouse.com:11456',
        provider: 'StakerHouse',
      },
    ],
    persistent_peers: [
      {
        id: '70db7f0ae54e329474ecd0649d04884bc6f6abe9',
        address: 'hid.peer.stavr.tech:11056',
        provider: '🔥STAVR🔥',
      },
      {
        id: 'd7c9b9a3c3a6c5f4ccdfb37a8358755b277271c1',
        address: '3.110.226.164:26656',
        provider: 'hypersign',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.jagrat.hypersign.id',
        provider: 'hypersign',
      },
      {
        address: 'http://hid.rpc.t.stavr.tech:11057',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://hypersign-testnet-rpc.stakerhouse.com',
        provider: 'StakerHouse',
      },
    ],
    rest: [
      {
        address: 'https://api.jagrat.hypersign.id',
        provider: 'hypersign',
      },
      {
        address: 'https://hid.api.t.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://hypersign-testnet-rest.stakerhouse.com',
        provider: 'StakerHouse',
      },
    ],
    grpc: [
      {
        address: 'grpc.jagrat.hypersign.id:5099',
        provider: 'hypersign',
      },
      {
        address: 'http://hid.grpc.t.stavr.tech:8022',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'hypersign-testnet-grpc.stakerhouse.com:443',
        provider: 'StakerHouse',
      },
    ],
  },
  explorers: [
    {
      kind: 'Ping Pub',
      url: 'https://explorer.hypersign.id/hypersign-testnet',
      tx_page: 'https://explorer.hypersign.id/hypersign-testnet/tx/${txHash}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/HyperSign',
      tx_page: 'https://explorer.stavr.tech/HyperSign/tx/${txHash}',
    },
    {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/hypersign',
      tx_page: 'https://cosmotracker.com/hypersign/tx/${txHash}',
    },
  ],
};

export const hypersigntestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'hypersigntestnet',
  assets: [
    {
      description: 'Native token for Hypersign Identity Network',
      denom_units: [
        {
          denom: 'uhid',
          exponent: 0,
        },
        {
          denom: 'hid',
          exponent: 6,
        },
      ],
      base: 'uhid',
      display: 'hid',
      name: 'Hypersign',
      symbol: 'HID',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hypersigntestnet/images/hypersign.png',
      },
      coingecko_id: 'hypersign-identity-token',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hypersigntestnet/images/hypersign.png',
        },
      ],
    },
  ],
};
