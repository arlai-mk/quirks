import type { Chain, AssetList, Versions } from '../types';

export const doravota: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'doravota',
  chain_id: 'vota-ash',
  pretty_name: 'Dora Vota',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'dora',
  daemon_name: 'dorad',
  node_home: '$HOME/.dora',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'peaka',
        fixed_min_gas_price: 100000000000,
        low_gas_price: 100000000000,
        average_gas_price: 100000000000,
        high_gas_price: 100000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'peaka',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/dorafactory/doravota',
    recommended_version: 'v11.0.0',
    compatible_versions: ['v11.0.0'],
    binaries: {},
    genesis: {
      genesis_url:
        'https://github.com/DoraFactory/doravota/blob/main/config/mainnet/genesis.json',
    },
    versions: [
      {
        name: 'v9.0.1',
        recommended_version: 'v9.0.1',
        compatible_versions: ['v9.0.1'],
        binaries: {},
      },
      {
        name: 'v10.0.1',
        recommended_version: 'v10.0.1',
        compatible_versions: ['v10.0.1'],
        binaries: {},
      },
      {
        name: 'v11',
        recommended_version: 'v11.0.0',
        compatible_versions: ['v11.0.0'],
        binaries: {},
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
        address: 'https://vota-rpc.dorafactory.org/',
        provider: 'dorafactory',
      },
      {
        address: 'https://m-dora.rpc.utsa.tech',
        provider: 'lesnik | UTSA',
      },
    ],
    rest: [
      {
        address: 'https://vota-rest.dorafactory.org',
        provider: 'dorafactory',
      },
      {
        address: 'https://m-dora.api.utsa.tech',
        provider: 'lesnik | UTSA',
      },
    ],
    grpc: [
      {
        address: 'vota-grpc.dorafactory.org:443',
        provider: 'dorafactory',
      },
    ],
  },
  explorers: [
    {
      kind: 'Dora Vota Ping Pub',
      url: 'https://vota-explorer.dorafactory.org',
      tx_page: 'https://vota-explorer.dorafactory.org/doravota/tx/${txHash}',
    },
    {
      kind: 'lesnik | UTSA Ping Pub',
      url: 'https://exp.utsa.tech/dora/staking',
      tx_page: 'https://exp.utsa.tech/dora/tx/${txHash}',
    },
  ],
};

export const doravotaAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'doravota',
  assets: [
    {
      description:
        'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [
        {
          denom: 'peaka',
          exponent: 0,
        },
        {
          denom: 'DORA',
          exponent: 18,
        },
      ],
      base: 'peaka',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg',
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png',
        },
      ],
    },
  ],
};
