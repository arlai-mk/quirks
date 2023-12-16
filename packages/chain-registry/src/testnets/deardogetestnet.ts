import type { Chain, AssetLists } from '../types';

export const deardogetestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'deardogetestnet',
  chain_id: 'deardoge-testnet',
  pretty_name: 'Dear Doge Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'deardoge',
  daemon_name: 'dogd',
  node_home: '$HOME/.deardoge',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'udear',
        fixed_min_gas_price: 0.25,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'udear',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/DoraFactory/Dear-Doge',
    recommended_version: 'v11.0.0',
    compatible_versions: ['v11.0.0'],
    binaries: {},
    genesis: {
      genesis_url:
        'https://github.com/DoraFactory/Dear-Doge/blob/main/config/testnet/genesis.json',
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
        address: 'https://testnet-rpc.deardoge.org',
        provider: 'dorafactory',
      },
    ],
    rest: [
      {
        address: 'https://testnet-rest.deardoge.org',
        provider: 'dorafactory',
      },
    ],
    grpc: [
      {
        address: 'testnet-grpc.deardoge.org:443',
        provider: 'dorafactory',
      },
    ],
  },
  explorers: [
    {
      kind: 'Dear Doge Ping Pub',
      url: 'https://testnet-explorer.deardoge.org/deardoge',
      tx_page: 'https://testnet-explorer.deardoge.org/deardoge/tx/${txHash}',
    },
  ],
};

export const deardogetestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'deardogetestnet',
  assets: [
    {
      description:
        'The native staking and governance token of the Theta testnet version of the Dear Doge Testnet.',
      denom_units: [
        {
          denom: 'udear',
          exponent: 0,
        },
        {
          denom: 'dear',
          exponent: 6,
        },
      ],
      base: 'udear',
      name: 'Dear Doge Testnet',
      display: 'dear',
      symbol: 'DEAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/deardogetestnet/images/deardoge.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/deardogetestnet/images/deardoge.png',
        },
      ],
    },
  ],
};
