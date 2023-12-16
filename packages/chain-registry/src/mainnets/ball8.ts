import type { Chain, AssetLists } from '../types';

export const ball8: Chain = {
  $schema: '../chain.schema.json',
  chain_name: '8ball',
  status: 'live',
  website: 'https://8ball.info/',
  network_type: 'mainnet',
  pretty_name: '8ball',
  chain_id: 'eightball-1',
  bech32_prefix: '8ball',
  daemon_name: '8ball',
  node_home: '$HOME/.8ball',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uebl',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uebl',
      },
    ],
  },
  codebase: {
    git_repo: 'https://secp256k1.net/8ball.git',
    recommended_version: 'v1',
    compatible_versions: ['v1'],
    cosmos_sdk_version: '0.46.7',
    cosmwasm_enabled: true,
    binaries: {
      'linux/amd64': 'https://8ball.info/8ball.tar.gz',
    },
    genesis: {
      genesis_url: 'https://8ball.info/8ball-genesis.json',
    },
    versions: [
      {
        name: 'v1',
        recommended_version: 'v1',
        compatible_versions: ['v1'],
        cosmos_sdk_version: '0.46.7',
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64': 'https://8ball.info/8ball.tar.gz',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg',
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: 'fca96d0a1d7357afb226a49c4c7d9126118c37e9',
        address: 'one.8ball.info:26656',
        provider: '8ball',
      },
      {
        id: 'aa918e17c8066cd3b031f490f0019c1a95afe7e3',
        address: 'two.8ball.info:26656',
        provider: '8ball',
      },
      {
        id: 'ce168b8022e525650011352175fa020ce75edcfa',
        address: '45.141.122.178:34656',
        provider: 'genznodes',
      },
      {
        id: '49778546e7511a1cd6dde65805cd70547c75ce2b',
        address: 'rpc.8ball.nodexcapital.com:11056',
        provider: 'NodeX Validator',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.8ball.info/',
        provider: '8ball',
      },
      {
        address: 'https://rpc.8ball.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://8ball-rpc.genznodes.dev/',
        provider: 'genznodes',
      },
    ],
    rest: [
      {
        address: 'https://rest.8ball.info',
        provider: '8ball',
      },
      {
        address: 'https://api.8ball.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://8ball-api.genznodes.dev/',
        provider: 'genznodes',
      },
      {
        address: 'https://api-8ball.nodine.id/',
        provider: 'Nodine.ID',
      },
    ],
    grpc: [
      {
        address: 'grpc.8ball.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: '8ball-grpc.genznodes.dev:31090',
        provider: 'genznodes',
      },
      {
        address: 'https://grpc.8ball.nodexcapital.com:443',
        provider: 'NodeX Validator',
      },
    ],
  },
  explorers: [
    {
      url: 'https://explorer.8ball.info/',
      tx_page: 'https://explorer.8ball.info/8ball/tx/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/8ball',
      tx_page: 'https://ping.pub/8ball/tx/${txHash}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/8ball/',
      tx_page: 'https://explorer.nodestake.top/8ball/tx/${txHash}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/8ball',
      tx_page: 'https://explorer.tcnetwork.io/8ball/transaction/${txHash}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.co.id/8ball',
      tx_page: 'https://explorer.co.id/8ball/tx/${txHash}',
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/8ball',
      tx_page: 'https://explorer.nodexcapital.com/8ball/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg',
    },
  ],
};

export const ball8AssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: '8ball',
  assets: [
    {
      description: 'The native staking token of 8ball.',
      denom_units: [
        {
          denom: 'uebl',
          exponent: 0,
        },
        {
          denom: 'ebl',
          exponent: 6,
        },
      ],
      base: 'uebl',
      name: '8ball',
      display: 'ebl',
      symbol: 'EBL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg',
        },
      ],
    },
  ],
};
