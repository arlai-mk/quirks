import type { Chain, AssetList, Versions } from '../types';

export const lavatestnet1: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'lavatestnet1',
  status: 'killed',
  network_type: 'testnet',
  website: 'https://www.lavanet.xyz/',
  pretty_name: 'Lava',
  chain_id: 'lava-testnet-1',
  bech32_prefix: 'lava@',
  daemon_name: 'lavad',
  node_home: '$HOME/.lava',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ulava',
        fixed_min_gas_price: 0.0025,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ulava',
      },
    ],
    lock_duration: {
      time: '1209600s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/lavanet/lava',
    recommended_version: 'v0.12.1',
    compatible_versions: ['v0.12.1'],
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.30',
    cosmwasm_enabled: false,
    ibc_go_version: 'v7.2.0',
    ics_enabled: ['ics20-1'],
    genesis: {
      name: 'v0.3.0',
      genesis_url:
        'https://raw.githubusercontent.com/lavanet/lava-config/main/testnet-1/genesis_json/genesis.json',
    },
    versions: [
      {
        name: 'v0.4.0',
        tag: 'v0.4.0',
        height: 838,
        next_version_name: 'v0.4.3',
      },
      {
        name: 'v0.4.3',
        tag: 'v0.4.3',
        height: 22300,
        next_version_name: 'v0.4.4',
      },
      {
        name: 'v0.4.4',
        tag: 'v0.4.4',
        height: 41735,
        next_version_name: 'v0.5.2',
      },
      {
        name: 'v0.5.2',
        tag: 'v0.5.2',
        height: 63760,
        next_version_name: 'v0.6.0-RC3',
      },
      {
        name: 'v0.6.0-RC3',
        tag: 'v0.6.0-RC3',
        height: 82570,
        next_version_name: 'v0.7.0',
      },
      {
        name: 'v0.7.0',
        tag: 'v0.7.0',
        height: 102800,
        next_version_name: 'v0.8.1',
      },
      {
        name: 'v0.8.1',
        tag: 'v0.8.1',
        height: 133100,
        next_version_name: 'v0.9.8',
      },
      {
        name: 'v0.9.8',
        tag: 'v0.9.8',
        height: 163960,
        next_version_name: 'v0.10.1',
      },
      {
        name: 'v0.10.1',
        tag: 'v0.10.1',
        height: 184620,
        next_version_name: 'v0.11.2',
      },
      {
        name: 'v0.11.2',
        tag: 'v0.11.2',
        height: 208115,
        next_version_name: 'v0.12.1',
        binaries: {
          'linux/amd64':
            'https://github.com/lavanet/lava/releases/download/v0.11.2/lavad-v0.11.2-linux-amd64',
        },
      },
      {
        name: 'v0.12.1',
        tag: 'v0.12.1',
        height: 227130,
        recommended_version: 'v0.12.1',
        compatible_versions: ['v0.12.1'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_enabled: false,
        ibc_go_version: 'v7.2.0',
        ics_enabled: ['ics20-1'],
      },
    ],
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      theme: {
        primary_color_hex: '#D7001F',
      },
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
  },
  peers: {
    seeds: [
      {
        id: '3a445bfdbe2d0c8ee82461633aa3af31bc2b4dc0',
        address: 'prod-pnet-seed-node.lavanet.xyz:26656',
        provider: 'Lava',
      },
      {
        id: 'e593c7a9ca61f5616119d6beb5bd8ef5dd28d62d',
        address: 'prod-pnet-seed-node2.lavanet.xyz:26656',
        provider: 'Lava',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'testnet-seeds.polkachu.com:19956',
        provider: 'Polkachu',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://public-rpc-testnet2.lavanet.xyz/',
        provider: 'Lava',
      },
      {
        address: 'http://lava.rpc.t.stavr.tech:198',
        provider: '🔥STAVR🔥',
      },
    ],
    rest: [
      {
        address: 'https://public-rpc-testnet2.lavanet.xyz/rest/',
        provider: 'Lava',
      },
      {
        address: 'https://lava.api.t.stavr.tech',
        provider: '🔥STAVR🔥',
      },
    ],
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://lava.explorers.guru/',
      tx_page: 'https://lava.explorers.guru//transaction/${txHash}',
      account_page: 'https://lava.explorers.guru//account/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Lava-Testnet',
      tx_page: 'https://explorer.stavr.tech/Lava-Testnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Lava-Testnet/account/${accountAddress}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/lava-testnet',
      tx_page: 'https://explorer.nodestake.org/lava-testnet/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.org/lava-testnet/account/${accountAddress}',
    },
  ],
  keywords: ['rpc', 'api'],
};

export const lavatestnet1AssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'lavatestnet1',
  assets: [
    {
      description: 'The native token of Lava',
      denom_units: [
        {
          denom: 'ulava',
          exponent: 0,
        },
        {
          denom: 'lava',
          exponent: 6,
        },
      ],
      base: 'ulava',
      name: 'LAVA',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg',
      },
      keywords: ['rpc', 'api'],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg',
        },
      ],
    },
  ],
};
