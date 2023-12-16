import type { Chain, AssetLists } from '../types';

export const pryzmtestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'pryzmtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Pryzm Testnet',
  chain_id: 'indigo-1',
  bech32_prefix: 'pryzm',
  daemon_name: 'pryzmd',
  node_home: '$HOME/.pryzm',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'upryzm',
        fixed_min_gas_price: 0,
        low_gas_price: 0.015,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'upryzm',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/pryzm-finance/pryzm-core',
    recommended_version: 'v0.9.0',
    compatible_versions: ['v0.9.0'],
    cosmos_sdk_version: '0.47',
    consensus: {
      type: 'tendermint',
      version: '0.37',
    },
    ibc_go_version: '7.3.1',
    genesis: {
      genesis_url:
        'https://storage.googleapis.com/pryzm-resources/indigo-1/genesis.json',
    },
    versions: [
      {
        name: 'v0.9.0',
        recommended_version: 'v0.9.0',
        compatible_versions: ['v0.9.0'],
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'tendermint',
          version: '0.37',
        },
        ibc_go_version: '7.3.1',
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'ff17ca4f46230306412ff5c0f5e85439ee5136f0',
        address: 'testnet-seed.pryzm.zone:26656',
        provider: 'PRYZM',
      },
    ],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://testnet-rpc.pryzm.zone',
        provider: 'PRYZM',
      },
    ],
    rest: [
      {
        address: 'https://testnet-api.pryzm.zone',
        provider: 'PRYZM',
      },
    ],
    grpc: [
      {
        address: 'https://testnet-grpc.pryzm.zone',
        provider: 'PRYZM',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.svg',
  },
  explorers: [
    {
      kind: 'PingPub',
      url: 'https://testnets.cosmosrun.info/pryzm-indigo-1',
      tx_page: 'https://testnets.cosmosrun.info/pryzm-indigo-1/tx/${txHash}',
      account_page:
        'https://testnets.cosmosrun.info/pryzm-indigo-1/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.svg',
    },
  ],
};

export const pryzmtestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'pryzmtestnet',
  assets: [
    {
      description: 'The native token of PRYZM',
      denom_units: [
        {
          denom: 'upryzm',
          exponent: 0,
        },
        {
          denom: 'pryzm',
          exponent: 6,
        },
      ],
      base: 'upryzm',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm.svg',
        },
      ],
    },
  ],
};
