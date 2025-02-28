import type { Chain, AssetList, Versions } from '../types';

export const onex: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'onex',
  status: 'live',
  website: 'https://app.onomy.io/',
  network_type: 'mainnet',
  pretty_name: 'ONEX',
  chain_id: 'onex-mainnet-1',
  bech32_prefix: 'onomy',
  daemon_name: 'onexd',
  node_home: '$HOME/.onomy_onex',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'aonex',
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
        denom: 'aonex',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/onomyprotocol/onex',
    recommended_version: 'v1.1.0',
    compatible_versions: ['v1.1.0'],
    cosmos_sdk_version: '0.45.16',
    consensus: {
      type: 'cometbft',
      version: '0.34.28',
    },
    genesis: {
      name: 'v1',
      genesis_url:
        'https://raw.githubusercontent.com/onomyprotocol/onex/main/chain/onex-mainnet-1/genesis-with-ccv.json',
    },
    versions: [
      {
        name: 'v1.1.0',
        tag: 'v1.1.0',
        recommended_version: 'v1.1.0',
        compatible_versions: ['v1.1.0'],
        cosmos_sdk_version: '0.45.16',
        consensus: {
          type: 'cometbft',
          version: '0.34.28',
        },
        height: 0,
        next_version_name: 'v1.2.0',
      },
    ],
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
      theme: {
        primary_color_hex: '#000000',
      },
    },
  ],
  peers: {
    seeds: [
      {
        id: 'fdbeb23dab3a697751edcc723480723e8e788431',
        address: '141.95.85.153:17400',
        provider: 'cosmostation',
      },
      {
        id: '41caa4106f68977e3a5123e56f57934a2d34a1c1',
        address: '95.214.53.20:27386',
        provider: 'autostake',
      },
    ],
    persistent_peers: [
      {
        id: '2f96d16645fd52dba217fb477a66c7b637fbb3c7',
        address: '52.79.199.137:26656',
        provider: 'cosmostation',
      },
      {
        id: '2bd4696ae55870d031ff355460a57c8770b8747e',
        address: '149.102.128.71:26756',
        provider: 'stakecito',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.onex.onomy.io',
        provider: 'pendulum',
      },
    ],
    rest: [
      {
        address: 'https://rest.mainnet.onex.onomy.io',
        provider: 'pendulum',
      },
    ],
    grpc: [
      {
        address: 'a.node.mainnet.onomy.io:19091',
        provider: 'pendulum',
      },
    ],
  },
  explorers: [
    {
      kind: 'Dexplorer - must enter rpc link provided above',
      url: 'https://dexplorer.cakralabs.site',
      tx_page: 'https://dexplorer.cakralabs.site/txs/${txHash}',
      account_page: 'https://dexplorer.cakralabs.site/${accountAddress}',
    },
  ],
  keywords: ['dex'],
};

export const onexAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'onex',
  assets: [
    {
      description: 'The native token of ONEX',
      denom_units: [
        {
          denom: 'aonex',
          exponent: 0,
        },
        {
          denom: 'onex',
          exponent: 18,
        },
      ],
      base: 'aonex',
      name: 'ONEX',
      display: 'onex',
      symbol: 'ONEX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.svg',
      },
      keywords: ['dex'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.svg',
        },
      ],
    },
  ],
};
