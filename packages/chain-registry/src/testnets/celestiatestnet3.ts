import type { Chain, AssetList, Versions } from '../types';

export const celestiatestnet3: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'celestiatestnet3',
  chain_id: 'mocha-4',
  pretty_name: 'Mocha Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'celestia',
  daemon_name: 'celestia-appd',
  node_home: '$HOME/.celestia-app',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'utia',
        fixed_min_gas_price: 0,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.1,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/celestiaorg/celestia-app',
    recommended_version: 'v1.3.0',
    compatible_versions: ['v1.3.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/celestiaorg/networks/master/mocha-3/genesis.json',
    },
    versions: [
      {
        name: 'v1.3.0',
        recommended_version: 'v1.3.0',
        compatible_versions: ['v1.3.0'],
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '3314051954fc072a0678ec0cbac690ad8676ab98',
        address: '65.108.66.220:26656',
        provider: 'P-OPS',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: '8c780fa4df00621926a9b20e80410895548cb0d9',
        address: 'mocha-full.avril14th.org:26656',
        provider: 'Avril 14th',
      },
      {
        id: '5d0bf034d6e6a8b5ee31a2f42f753f1107b3a00e',
        address: 'celestia-testnet-seed.itrocket.net:11656',
        provider: '🚀ITRocket🚀',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mocha.pops.one',
        provider: 'P-OPs',
      },
      {
        address: 'https://celestia-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://rpc-mocha-full.avril14th.org',
        provider: 'Avril 14th',
      },
      {
        address: 'https://celestia-testnet-rpc.itrocket.net',
        provider: '🚀ITRocket🚀',
      },
    ],
    rest: [
      {
        address: 'https://api-mocha.pops.one',
        provider: 'P-OPs',
      },
      {
        address: 'https://celestia-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://api-mocha-full.avril14th.org',
        provider: 'Avril 14th',
      },
      {
        address: 'https://celestia-testnet-api.itrocket.net',
        provider: '🚀ITRocket🚀',
      },
    ],
    grpc: [
      {
        address: 'celestia-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'grpc-mocha-full.avril14th.org',
        provider: 'Avril 14th',
      },
      {
        address: 'celestia-testnet-grpc.itrocket.net:11090',
        provider: '🚀ITRocket🚀',
      },
    ],
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/celestia-testnet',
      tx_page: 'https://testnet.mintscan.io/celestia-testnet/txs/${txHash}',
    },
    {
      kind: '🚀ITRocket🚀',
      url: 'https://testnet.itrocket.net/celestia',
      tx_page: 'https://testnet.itrocket.net/celestia/tx/${txHash}',
      account_page:
        'https://testnet.itrocket.net/celestia/account/${accountAddress}',
    },
  ],
};

export const celestiatestnet3AssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'celestiatestnet3',
  assets: [
    {
      description: '',
      denom_units: [
        {
          denom: 'utia',
          exponent: 0,
        },
        {
          denom: 'tia',
          exponent: 6,
        },
      ],
      base: 'utia',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png',
        },
      ],
    },
  ],
};
