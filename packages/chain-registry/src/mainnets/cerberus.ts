import type { Chain, AssetLists } from '../types';

export const cerberus: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cerberus',
  status: 'killed',
  network_type: 'mainnet',
  website: 'https://cerberus.zone/',
  pretty_name: 'Cerberus',
  chain_id: 'cerberus-chain-1',
  bech32_prefix: 'cerberus',
  daemon_name: 'cerberusd',
  node_home: '$HOME/.cerberus',
  codebase: {
    git_repo: 'https://github.com/cerberus-zone/cerberus',
    recommended_version: 'v3.1.0',
    compatible_versions: ['v3.1.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/cerberus-zone/cerberus_genesis/main/genesis.json',
    },
    versions: [
      {
        name: 'v3.1.0',
        recommended_version: 'v3.1.0',
        compatible_versions: ['v3.1.0'],
      },
    ],
  },
  fees: {
    fee_tokens: [
      {
        denom: 'ucrbrus',
        fixed_min_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ucrbrus',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg',
  },
  peers: {
    seeds: [
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:13856',
        provider: 'Polkachu',
      },
    ],
    persistent_peers: [
      {
        id: 'd7f578c4295c7cf05164a2f786601050bf2f2356',
        address: '142.132.202.98:46656',
        provider: 'ecostake',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://cerberus-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://cerberus-rpc.kleomedes.network',
        provider: 'Kleomedes',
      },
    ],
    rest: [
      {
        address: 'https://cerberus-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://cerberus-api.kleomedes.network',
        provider: 'Kleomedes',
      },
    ],
    grpc: [
      {
        address: 'grpc-cerberus-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'cerberus-grpc.polkachu.com:13890',
        provider: 'Polkachu',
      },
    ],
  },
  explorers: [
    {
      kind: 'skynetexplorers',
      url: 'https://skynetexplorers.com/cerberus',
      tx_page: 'https://skynetexplorers.com/cerberus/tx/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cerberus',
      tx_page: 'https://ping.pub/cerberus/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/cerberus',
      tx_page: 'https://atomscan.com/cerberus/transactions/${txHash}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/cerberus',
      tx_page: 'https://explorer.tcnetwork.io/cerberus/transaction/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg',
    },
  ],
};

export const cerberusAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'cerberus',
  assets: [
    {
      description: 'The native token of Cerberus Chain',
      denom_units: [
        {
          denom: 'ucrbrus',
          exponent: 0,
        },
        {
          denom: 'crbrus',
          exponent: 6,
        },
      ],
      base: 'ucrbrus',
      name: 'Cerberus',
      display: 'crbrus',
      symbol: 'CRBRUS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
      },
      coingecko_id: 'cerberus-2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg',
        },
      ],
    },
  ],
};