import type { Chain, AssetList, Versions } from '../types';

export const migalootestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'migalootestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.whitewhale.money/',
  pretty_name: 'Migaloo Testnet',
  chain_id: 'narwhal-2',
  bech32_prefix: 'migaloo',
  daemon_name: 'migalood',
  node_home: '$HOME/.migalood',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uwhale',
        fixed_min_gas_price: 0.25,
        low_gas_price: 0.25,
        average_gas_price: 0.5,
        high_gas_price: 0.75,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uwhale',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg',
  },
  codebase: {
    git_repo: 'https://github.com/White-Whale-Defi-Platform/migaloo-chain',
    recommended_version: 'v3.0.4',
    compatible_versions: ['v3.0.4'],
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.28',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/White-Whale-Defi-Platform/migaloo-chain/release/v2.0.x/networks/testnet/genesis.json',
    },
    versions: [
      {
        name: 'v3.0.4',
        recommended_version: 'v3.0.4',
        compatible_versions: ['v3.0.4'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.28',
        cosmwasm_enabled: true,
      },
    ],
  },
  peers: {
    seeds: [],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://migaloo-testnet-rpc.polkachu.com',
        provider: 'Polkachu',
      },
    ],
    rest: [
      {
        address: 'https://migaloo-testnet-api.polkachu.com',
        provider: 'Polkachu',
      },
    ],
    grpc: [],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pfc.zone/narwhal-testnet',
      tx_page: 'https://ping.pfc.zone/narwhal-testnet/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg',
    },
  ],
};

export const migalootestnetAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'migalootestnet',
  assets: [
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [
        {
          denom: 'uwhale',
          exponent: 0,
        },
        {
          denom: 'whale',
          exponent: 6,
        },
      ],
      base: 'uwhale',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
        },
      ],
    },
  ],
};
