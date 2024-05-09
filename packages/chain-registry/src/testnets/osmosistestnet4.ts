import type { Chain, AssetList, Versions } from '../types';

export const osmosistestnet4: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'osmosistestnet4',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Osmosis Testnet',
  chain_id: 'osmo-test-4',
  bech32_prefix: 'osmo',
  daemon_name: 'osmosisd',
  node_home: '$HOME/.osmosisd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uosmo',
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
        denom: 'uosmo',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/osmosis-labs/osmosis',
    recommended_version: 'v15.0.0-rc3',
    compatible_versions: ['v15.0.0-rc3'],
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.29',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://github.com/osmosis-labs/networks/raw/main/osmo-test-4/genesis.tar.bz2',
    },
    versions: [
      {
        name: 'v14.0.0-rc1',
        recommended_version: 'v14.0.0-rc1',
        compatible_versions: ['v14.0.0-rc1'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.29',
        cosmwasm_enabled: true,
      },
      {
        name: 'v15.0.0-rc3',
        recommended_version: 'v15.0.0-rc3',
        compatible_versions: ['v15.0.0-rc3'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.29',
        cosmwasm_enabled: true,
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '0f9a9c694c46bd28ad9ad6126e923993fc6c56b1',
        address: '137.184.181.105:26656',
        provider: '',
      },
    ],
    persistent_peers: [
      {
        id: '4ab030b7fd75ed895c48bcc899b99c17a396736b',
        address: '137.184.190.127:26656',
        provider: '',
      },
      {
        id: '3dbffa30baab16cc8597df02945dcee0aa0a4581',
        address: '143.198.139.33:26656',
        provider: '',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.osmo-test.ccvalidators.com/',
        provider: 'CryptoCrew',
      },
      {
        address: 'https://osmosistest-rpc.quickapi.com/',
        provider: 'ChainLayer',
      },
      {
        address: 'https://rpc.testnet.osmosis.zone/',
        provider: 'Osmosis',
      },
    ],
    rest: [
      {
        address: 'https://osmosistest-lcd.quickapi.com/',
        provider: 'CryptoCrew',
      },
      {
        address: 'https://lcd.osmo-test.ccvalidators.com/',
        provider: 'ChainLayer',
      },
      {
        address: 'https://testnet-rest.osmosis.zone/',
        provider: '',
      },
    ],
    grpc: [
      {
        address: 'https://grpc-test.osmosis.zone:443',
        provider: 'Osmosis',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png',
  },
  keywords: ['dex', 'testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png',
    },
  ],
};

export const osmosistestnet4AssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'osmosistestnet4',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom: 'uosmo',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'uosmo',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'uion',
          exponent: 0,
        },
        {
          denom: 'ion',
          exponent: 6,
        },
      ],
      base: 'uion',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
      },
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
        },
      ],
    },
  ],
};
