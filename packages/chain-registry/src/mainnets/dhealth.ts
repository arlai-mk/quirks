import type { Chain, AssetList, Versions } from '../types';

export const dhealth: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dhealth',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://dhealth.com/',
  pretty_name: 'dHealth',
  chain_id: 'dhealth',
  bech32_prefix: 'dh',
  daemon_name: 'dhealthd',
  node_home: '$HOME/.dhealth',
  key_algos: ['secp256k1'],
  slip44: 10111,
  fees: {
    fee_tokens: [
      {
        denom: 'udhp',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.035,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'udhp',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/dhealthproject/dhealth',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/dhealthproject/dhealth/releases/download/v1.0.0/dhealthd-1.0.0-linux-amd64',
    },
    cosmos_sdk_version: 'cosmos/cosmos-sdk v0.47.4',
    ibc_go_version: 'v7.2.0',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2',
    },
    cosmwasm_version: 'v0.41.0',
    cosmwasm_enabled: true,
    cosmwasm_path: '$HOME/.dhealth/wasm',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/dhealthproject/mainnet/main/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/dhealthproject/dhealth/releases/download/v1.0.0/dhealthd-1.0.0-linux-amd64',
        },
        cosmos_sdk_version: 'cosmos/cosmos-sdk v0.47.4',
        ibc_go_version: 'v7.2.0',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        cosmwasm_version: 'v0.41.0',
        cosmwasm_enabled: true,
        cosmwasm_path: '$HOME/.dhealth/wasm',
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
  },
  peers: {
    seeds: [
      {
        id: '67243a0ed11567250aa02d5e47f6c4a0b8313975',
        address: 'rpc.dhealth.com:26656',
        provider: 'dhealth',
      },
      {
        id: '052ab696b79fbcf24bfb0e5cf2e6b9d7e4efe8f8',
        address: 'rpc.dhealth.nodestake.org:26656',
        provider: 'NodeStake',
      },
    ],
    persistent_peers: [
      {
        id: '67243a0ed11567250aa02d5e47f6c4a0b8313975',
        address: '142.93.174.93:26656',
        provider: 'dhealth',
      },
      {
        id: '69d16d1147e90cdfb8ed066331a0abb9c71c3ae2',
        address: '162.19.223.89:26656',
        provider: 'NodeStake',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.dhealth.com',
        provider: 'dhealth',
      },
      {
        address: 'https://rpc.dhealth.nodestake.org',
        provider: 'NodeStake',
      },
    ],
    rest: [
      {
        address: 'https://lcd.dhealth.com',
        provider: 'dhealth',
      },
      {
        address: 'https://api.dhealth.nodestake.org',
        provider: 'NodeStake',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.dhealth.com:443',
        provider: 'dhealth',
      },
      {
        address: 'https://grpc.dhealth.nodestake.org:443',
        provider: 'NodeStake',
      },
    ],
  },
  explorers: [
    {
      kind: 'nodestake',
      url: 'https://explorer.nodestake.org/dhealth',
      tx_page: 'https://explorer.nodestake.org/dhealth/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.org/dhealth/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
    },
  ],
};

export const dhealthAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dhealth',
  assets: [
    {
      description: 'The native token of dHealth',
      denom_units: [
        {
          denom: 'udhp',
          exponent: 0,
        },
        {
          denom: 'dhp',
          exponent: 6,
        },
      ],
      base: 'udhp',
      name: 'Digital Health Point',
      display: 'dhp',
      symbol: 'DHP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
      },
      coingecko_id: 'dhealth',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
        },
      ],
    },
  ],
};
