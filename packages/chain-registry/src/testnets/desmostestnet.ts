import type { Chain, AssetList, Versions } from '../types';

export const desmostestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'desmostestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Desmos Testnet',
  chain_id: 'morpheus-apollo-3',
  bech32_prefix: 'desmos',
  daemon_name: 'desmos',
  node_home: '$HOME/.desmos',
  key_algos: ['secp256k1'],
  slip44: 852,
  fees: {
    fee_tokens: [
      {
        denom: 'udaric',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.01,
        average_gas_price: 0.03,
        high_gas_price: 0.05,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'udaric',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/desmos-labs/desmos',
    recommended_version: 'v5.1.0',
    compatible_versions: ['5.1.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/desmos-labs/morpheus/master/morpheus-apollo-3/genesis.json',
    },
    versions: [
      {
        name: 'v4.8.0',
        recommended_version: 'v4.8.1',
        compatible_versions: ['v4.8.0', 'v4.8.1'],
        next_version_name: 'v5.0.0',
      },
      {
        name: 'v5.0.0',
        recommended_version: 'v5.1.0',
        compatible_versions: ['v5.1.0'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg',
  },
  peers: {
    seeds: [
      {
        id: 'be3db0fe5ee7f764902dbcc75126a2e082cbf00c',
        address: 'seed-1.morpheus.desmos.network:26656',
        provider: 'desmos',
      },
      {
        id: '4659ab47eef540e99c3ee4009ecbe3fbf4e3eaff',
        address: 'seed-2.morpheus.desmos.network:26656',
        provider: 'desmos',
      },
      {
        id: '1d9cc23eedb2d812d30d99ed12d5c5f21ff40c23',
        address: 'seed-3.morpheus.desmos.network:26656',
        provider: 'desmos',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.morpheus.desmos.network',
        provider: 'desmos',
      },
    ],
    rest: [
      {
        address: 'https://lcd.morpheus.desmos.network',
        provider: 'desmos',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.morpheus.desmos.network:443',
        provider: 'desmos',
      },
    ],
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://testnet.bigdipper.live/desmos',
      tx_page: 'https://testnet.live/desmos/transactions/${txHash}',
      account_page:
        'https://testnet.bigdipper.live/desmos/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg',
    },
  ],
};

export const desmostestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'desmostestnet',
  assets: [
    {
      description: 'The native token of Desmos',
      denom_units: [
        {
          denom: 'udaric',
          exponent: 0,
        },
        {
          denom: 'daric',
          exponent: 6,
        },
      ],
      base: 'udaric',
      name: 'Desmos Testnet',
      display: 'daric',
      symbol: 'DARIC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.svg',
      },
      coingecko_id: 'desmos',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.svg',
        },
      ],
    },
  ],
};
