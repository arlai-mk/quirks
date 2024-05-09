import type { Chain, AssetList, Versions } from '../types';

export const sagatestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'sagatestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Saga Testnet',
  chain_id: 'ssc-testnet-1',
  bech32_prefix: 'saga',
  daemon_name: 'sscd',
  node_home: '$HOME/.ssc',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'utsaga',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'utsaga',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/sagaxyz/ssc',
    recommended_version: 'v0.1.3',
    compatible_versions: ['v0.1.0', 'v0.1.1', 'v0.1.2', 'v0.1.3'],
    cosmos_sdk_version: '0.47',
    consensus: {
      type: 'tendermint',
      version: '0.37',
    },
    cosmwasm_enabled: false,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/sagaxyz/ssc-public-testnet/main/genesis.json',
    },
    versions: [
      {
        name: 'v0.1.3',
        recommended_version: 'v0.1.3',
        compatible_versions: ['v0.1.0', 'v0.1.1', 'v0.1.2', 'v0.1.3'],
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'tendermint',
          version: '0.37',
        },
        cosmwasm_enabled: false,
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '3abc213ec08ece180e6fa1443226689ecc4b7749',
        address: 'testnet-ssc-eu.sagarpc.io:26656',
        provider: 'Saga',
      },
    ],
    persistent_peers: [
      {
        id: 'e7f5e5327a8298eb04c29c4115ccf2d6a05ec732',
        address: 'testnet-ssc-us-west.sagarpc.io:26656',
        provider: 'Saga',
      },
      {
        id: '239b182bab3252c26fc116bf00301f30f1dea01e',
        address: 'testnet-ssc-asia.sagarpc.io:26656',
        provider: 'Saga',
      },
      {
        id: '8d936668e433e9e50cd4e60da218a9fe81950d3f',
        address: 'testnet-ssc-us-central.sagarpc.io:26656',
        provider: 'Saga',
      },
      {
        id: '65b64dc2d28e0116da22582cb947ec7bc8c91173',
        address: 'testnet-ssc-southamerica.sagarpc.io:26656',
        provider: 'Saga',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://testnet-ssc.sagarpc.io/',
        provider: 'Saga',
      },
    ],
    rest: [
      {
        address: 'https://testnet-ssc-lcd.sagarpc.io/',
        provider: 'Saga',
      },
    ],
    grpc: [
      {
        address: 'testnet-ssc-grpc.sagarpc.io:443',
        provider: 'Saga',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://mintscan.io/saga-testnet',
      tx_page: 'https://www.mintscan.io/saga-testnet/tx/${txHash}',
      account_page:
        'https://mintscan.io/saga-testnet/address/${accountAddress}',
    },
  ],
  keywords: ['testnet', 'chainlet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
    },
  ],
};

export const sagatestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'sagatestnet',
  assets: [
    {
      description: 'The native token of Saga Testnet',
      denom_units: [
        {
          denom: 'utsaga',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'tsaga',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'utsaga',
      name: 'Saga',
      display: 'tsaga',
      symbol: 'TSAGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
        },
      ],
    },
  ],
};
