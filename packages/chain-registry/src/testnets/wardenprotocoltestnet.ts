import type { Chain, AssetList, Versions } from '../types';

export const wardenprotocoltestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'wardenprotocoltestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Warden Protocol Buenavista',
  chain_id: 'buenavista-1',
  bech32_prefix: 'warden',
  daemon_name: 'wardend',
  node_home: '$HOME/.warden',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uward',
        fixed_min_gas_price: 0.005,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uward',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/warden-protocol/wardenprotocol',
    recommended_version: 'v0.3.0',
    compatible_versions: ['v0.3.0'],
    cosmos_sdk_version: '0.50',
    consensus: {
      type: 'cometbft',
      version: '0.38',
    },
    cosmwasm_enabled: false,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/warden-protocol/networks/main/testnets/buenavista/genesis.json',
    },
    versions: [
      {
        name: 'v0.3.0',
        recommended_version: 'v0.3.0',
        compatible_versions: ['v0.3.0'],
        cosmos_sdk_version: '0.50',
        consensus: {
          type: 'cometbft',
          version: '0.38',
        },
        cosmwasm_enabled: false,
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
        address: 'https://rpc.buenavista.wardenprotocol.org/',
        provider: 'Warden Protocol',
      },
    ],
    rest: [
      {
        address: 'https://api.buenavista.wardenprotocol.org/',
        provider: 'Warden Protocol',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.buenavista.wardenprotocol.org/',
        provider: 'Warden Protocol',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
  },
  explorers: [],
  keywords: ['testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
    },
  ],
};

export const wardenprotocoltestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'wardenprotocoltestnet',
  assets: [
    {
      description: 'The native token of Warden Protocol Testnet',
      denom_units: [
        {
          denom: 'uward',
          exponent: 0,
        },
        {
          denom: 'ward',
          exponent: 6,
        },
      ],
      base: 'uward',
      name: 'Ward',
      display: 'ward',
      symbol: 'WARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg',
        },
      ],
    },
  ],
};
