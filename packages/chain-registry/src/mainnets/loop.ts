import type { Chain, AssetList, Versions } from '../types';

export const loop: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'loop',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.loop.fans/',
  pretty_name: 'Loop',
  chain_id: 'loop-1',
  bech32_prefix: 'loop',
  daemon_name: 'loopd',
  node_home: '$HOME/.loopchain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'token',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'upoa',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/LoopFans/loop-chain',
    genesis: {
      name: 'v1',
      genesis_url:
        'https://github.com/LoopFans/loop-chain/blob/main/network/loop-1/genesis.json',
    },
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    cosmwasm_enabled: true,
    ibc_go_version: 'v7.3.1',
    ics_enabled: ['ics20-1'],
    go_version: '1.21',
    binaries: {
      'linux/amd64':
        'https://github.com/LoopFans/loop-chain/releases/download/v1.0.0/loopchain_1.0.0_linux_amd64.tar.gz',
    },
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg',
      layout: 'logomark',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg',
  },
  description: 'Empowering Artists and Superfans.',
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '66250af94e333a8798f7b7a843bcd532c60d7a4e',
        address: 'cluster.pfc.zone:31953',
        provider: 'PFC',
      },
      {
        id: '4ca5c65eead022b6e930fbcd5febdd0acb1387ff',
        address: 'cluster.yieldpay.money:30149',
        provider: 'PFC',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.loop.pfc.zone/',
        provider: 'PFC',
      },
    ],
    rest: [
      {
        address: 'https://api.loop.pfc.zone/',
        provider: 'PFC',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pfc.zone/loop',
      tx_page: 'https://ping.pfc.zone/loop/tx/${txHash}',
    },
  ],
  keywords: ['fans'],
};

export const loopAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'loop',
  assets: [
    {
      description: 'The native token of Loop',
      denom_units: [
        {
          denom: 'token',
          exponent: 0,
        },
      ],
      type_asset: 'sdk.coin',
      base: 'token',
      name: 'Token',
      display: 'token',
      symbol: 'TOKEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg',
        },
      ],
      coingecko_id: '',
      keywords: [],
      socials: {
        website: 'https://www.loop.fans/',
        twitter: 'https://twitter.com/LoopFans',
      },
    },
    {
      denom_units: [
        {
          denom: 'upoa',
          exponent: 0,
        },
        {
          denom: 'poa',
          exponent: 6,
        },
      ],
      type_asset: 'sdk.coin',
      base: 'upoa',
      name: 'POA',
      display: 'poa',
      symbol: 'POA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/poa.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/poa.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/poa.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/poa.svg',
        },
      ],
      coingecko_id: '',
      keywords: ['poa'],
    },
  ],
};
