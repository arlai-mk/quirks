import type { Chain, AssetList, Versions } from '../types';

export const titantestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'titantestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://titanlab.io/',
  pretty_name: 'Titan Testnet',
  chain_id: 'titan_18889-1',
  bech32_prefix: 'titan',
  node_home: '$HOME/.titand',
  daemon_name: 'titand',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'atkx',
        fixed_min_gas_price: 100000000000,
        low_gas_price: 100000000000,
        average_gas_price: 110000000000,
        high_gas_price: 200000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'atkx',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/titantkx/titan',
    recommended_version: 'v2.0.1',
    compatible_versions: ['v2.0.1'],
    cosmos_sdk_version: '0.47.6-titan.4',
    consensus: {
      type: 'cometbft',
      version: '0.37.4',
    },
    ibc_go_version: '7.3.0',
    cosmwasm_version: '0.45.0',
    cosmwasm_enabled: true,
    ics_enabled: ['ics20-1', 'ics27-1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/titantkx/titan-testnets/main/public/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0',
        tag: 'v1.0.0',
        height: 0,
        next_version_name: 'v2.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0-alpha.1', 'v1.0.0'],
        cosmos_sdk_version: '0.47.6-titan.3',
        consensus: {
          type: 'cometbft',
          version: '0.37.4',
        },
        ibc_go_version: '7.3.0',
        cosmwasm_version: '0.45.0',
        cosmwasm_enabled: true,
        ics_enabled: ['ics20-1', 'ics27-1'],
      },
      {
        name: 'v2.0.0',
        tag: 'v2.0.0',
        height: 727408,
        next_version_name: 'v2.0.1',
        recommended_version: 'v2.0.0',
        compatible_versions: ['v2.0.0'],
        cosmos_sdk_version: '0.47.6-titan.4',
        consensus: {
          type: 'cometbft',
          version: '0.37.4',
        },
        ibc_go_version: '7.3.0',
        cosmwasm_version: '0.45.0',
        cosmwasm_enabled: true,
        ics_enabled: ['ics20-1', 'ics27-1'],
      },
      {
        name: 'v2.0.1',
        tag: 'v2.0.1',
        height: 967678,
        recommended_version: 'v2.0.1',
        compatible_versions: ['v2.0.1'],
        cosmos_sdk_version: '0.47.6-titan.4',
        consensus: {
          type: 'cometbft',
          version: '0.37.4',
        },
        ibc_go_version: '7.3.0',
        cosmwasm_version: '0.45.0',
        cosmwasm_enabled: true,
        ics_enabled: ['ics20-1', 'ics27-1'],
      },
    ],
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/chain.svg',
    },
  ],
  peers: {
    seeds: [
      {
        id: '1f61a190809e4413079174b6236bc00a502722b6',
        address: 'titan-testnet-node-1.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
      {
        id: 'c580270d0741f08d8ed88eda5d7de272622e7c02',
        address: 'titan-testnet-node-2.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
      {
        id: 'acb90d29636059abd5c4ca36f3731a69de73cf5b',
        address: 'titan-testnet-seed-1.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
      {
        id: '0e05f4f0c57ed26089e1d10dba6a1ac24e1eaa68',
        address: 'titan-testnet-full-1.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
    ],
    persistent_peers: [
      {
        id: '1f61a190809e4413079174b6236bc00a502722b6',
        address: 'titan-testnet-node-1.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
      {
        id: 'c580270d0741f08d8ed88eda5d7de272622e7c02',
        address: 'titan-testnet-node-2.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
      {
        id: '0e05f4f0c57ed26089e1d10dba6a1ac24e1eaa68',
        address: 'titan-testnet-full-1.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://titan-testnet-rpc.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-testnet-rpc-1.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-testnet-rpc-2.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-testnet-rpc-3.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-testnet-rpc-4.titanlab.io:443',
        provider: 'Titanlab.io',
      },
    ],
    rest: [
      {
        address: 'https://titan-testnet-lcd.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-testnet-lcd-1.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-testnet-lcd-2.titanlab.io:443',
        provider: 'Titanlab.io',
      },
    ],
    grpc: [],
    'evm-http-jsonrpc': [
      {
        address: 'https://titan-testnet-json-rpc.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-testnet-json-rpc-1.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-testnet-json-rpc-2.titanlab.io:443',
        provider: 'Titanlab.io',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://titan-testnet-explorer-light.titanlab.io',
      tx_page:
        'https://titan-testnet-explorer-light.titanlab.io/Titan%20Testnet/tx/${txHash}',
      account_page:
        'https://titan-testnet-explorer-light.titanlab.io/Titan%20Testnet/account/${accountAddress}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/chain.svg',
  },
};

export const titantestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'titantestnet',
  assets: [
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'atkx',
          exponent: 0,
          aliases: ['attotkx'],
        },
        {
          denom: 'utkx',
          exponent: 12,
          aliases: ['microtkx'],
        },
        {
          denom: 'mtkx',
          exponent: 15,
          aliases: ['millitkx'],
        },
        {
          denom: 'tkx',
          exponent: 18,
          aliases: [],
        },
      ],
      base: 'atkx',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png',
        },
      ],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png',
      },
    },
  ],
};
