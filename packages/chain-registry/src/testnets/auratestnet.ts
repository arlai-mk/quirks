import type { Chain, AssetList, Versions } from '../types';

export const auratestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'auratestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://aura.network/',
  pretty_name: 'Aura Euphoria Network',
  chain_id: 'aura_6321-3',
  bech32_prefix: 'aura',
  daemon_name: 'aurad',
  node_home: '$HOME/.aura',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ueaura',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.002,
        high_gas_price: 0.0025,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ueaura',
      },
    ],
    lock_duration: {
      time: '172800s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/aura-nw/aura',
    recommended_version: 'v0.8.0-euphoria',
    compatible_versions: ['v0.8.0-euphoria'],
    cosmos_sdk_version: 'v0.47.8',
    ibc_go_version: 'v7.3.1',
    consensus: {
      type: 'cometbft',
      version: '0.37.4',
    },
    cosmwasm_version: '0.42.0',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url: 'https://images.aura.network/aura_6321-3-genesis.tar.gz',
    },
    versions: [
      {
        name: 'v0.8.0-euphoria',
        recommended_version: 'v0.8.0-euphoria',
        compatible_versions: ['v0.8.0-euphoria'],
        cosmos_sdk_version: 'v0.47.8',
        ibc_go_version: 'v7.3.1',
        consensus: {
          type: 'cometbft',
          version: '0.37.4',
        },
        cosmwasm_version: '0.42.0',
        cosmwasm_enabled: true,
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg',
  },
  peers: {
    seeds: [
      {
        id: '705e3c2b2b554586976ed88bb27f68e4c4176a33',
        address: '52.76.203.126:26656',
      },
    ],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.euphoria.aura.network/',
        provider: 'Aura Network Foundation',
      },
    ],
    rest: [
      {
        address: 'https://lcd.euphoria.aura.network/',
        provider: 'Aura Network Foundation',
      },
    ],
    grpc: [
      {
        address: 'http://grpc.euphoria.aura.network:9090',
        provider: 'Aura Network Foundation',
      },
    ],
  },
  explorers: [
    {
      kind: 'aurascan',
      url: 'https://euphoria.aurascan.io',
      tx_page: 'https://euphoria.aurascan.io/tx/${txHash}',
      account_page: 'https://euphoria.aurascan.io/address/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg',
    },
  ],
};

export const auratestnetAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'auratestnet',
  assets: [
    {
      description: 'The native token of Aura Test Network',
      denom_units: [
        {
          denom: 'ueaura',
          exponent: 0,
        },
        {
          denom: 'eaura',
          exponent: 6,
        },
      ],
      base: 'ueaura',
      name: 'EAura',
      display: 'eaura',
      symbol: 'EAURA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg',
        },
      ],
    },
  ],
};
