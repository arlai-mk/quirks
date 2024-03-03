import type { Chain, AssetLists, ChainVersions } from '../types';

export const shentu: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'shentu',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.shentu.technology/',
  pretty_name: 'Shentu',
  chain_id: 'shentu-2.2',
  bech32_prefix: 'shentu',
  daemon_name: 'shentud',
  node_home: '$HOME/.shentud',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uctk',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uctk',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/ShentuChain/shentu',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/ShentuChain/mainnet/main/shentu-2.2/genesis.json',
    },
    recommended_version: 'v2.8.0',
    compatible_versions: ['v2.8.0'],
    ibc_go_version: 'v4.2.1',
    ics_enabled: ['ics20-1'],
    binaries: {
      'linux/amd64':
        'https://github.com/shentufoundation/shentu/releases/download/v2.8.0/shentud_2.8.0_linux_amd64',
      'darwin/amd64':
        'https://github.com/shentufoundation/shentu/releases/download/v2.8.0/shentud_2.8.0_arm64_macos',
      'windows/amd64':
        'https://github.com/shentufoundation/shentu/releases/download/v2.8.0/shentud_2.8.0_win_x86_64.exe',
    },
    versions: [
      {
        name: 'v2.6.0',
        height: 10485430,
        proposal: 14,
        tag: 'v2.6.0',
        ibc_go_version: 'v4.2.0',
        recommended_version: 'v2.6.0',
        compatible_versions: ['v2.6.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/shentufoundation/shentu/releases/download/v2.6.0/shentud_2.6.0_linux_amd64',
          'darwin/amd64':
            'https://github.com/shentufoundation/shentu/releases/download/v2.6.0/shentud_2.6.0_arm64_macos',
          'windows/amd64':
            'https://github.com/shentufoundation/shentu/releases/download/v2.6.0/shentud_2.6.0_win_x86_64.exe',
        },
        next_version_name: 'v2.7.0',
      },
      {
        name: 'v2.7.0',
        height: 12926000,
        proposal: 17,
        tag: 'v2.7.0',
        ibc_go_version: 'v4.2.1',
        ics_enabled: ['ics20-1'],
        recommended_version: 'v2.7.0',
        compatible_versions: ['v2.7.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/shentufoundation/shentu/releases/download/v2.7.1/shentud_2.7.1_linux_amd64',
          'darwin/amd64':
            'https://github.com/shentufoundation/shentu/releases/download/v2.7.1/shentud_2.7.1_arm64_macos',
          'windows/amd64':
            'https://github.com/shentufoundation/shentu/releases/download/v2.7.1/shentud_2.7.1_win_x86_64.exe',
        },
        next_version_name: 'v2.7.2',
      },
      {
        name: 'v2.7.2',
        height: 14875800,
        proposal: 21,
        tag: 'v2.7.2',
        ibc_go_version: 'v4.2.1',
        ics_enabled: ['ics20-1'],
        recommended_version: 'v2.7.2',
        compatible_versions: ['v2.7.2'],
        binaries: {
          'linux/amd64':
            'https://github.com/shentufoundation/shentu/releases/download/v2.7.2/shentud_2.7.2_linux_amd64',
          'darwin/amd64':
            'https://github.com/shentufoundation/shentu/releases/download/v2.7.2/shentud_2.7.2_arm64_macos',
          'windows/amd64':
            'https://github.com/shentufoundation/shentu/releases/download/v2.7.2/shentud_2.7.2_win_x86_64.exe',
        },
        next_version_name: 'v2.8.0',
      },
      {
        name: 'v2.8.0',
        height: 15094300,
        proposal: 23,
        tag: 'v2.8.0',
        ibc_go_version: 'v4.2.1',
        ics_enabled: ['ics20-1'],
        recommended_version: 'v2.8.0',
        compatible_versions: ['v2.8.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/shentufoundation/shentu/releases/download/v2.8.0/shentud_2.8.0_linux_amd64',
          'darwin/amd64':
            'https://github.com/shentufoundation/shentu/releases/download/v2.8.0/shentud_2.8.0_arm64_macos',
          'windows/amd64':
            'https://github.com/shentufoundation/shentu/releases/download/v2.8.0/shentud_2.8.0_win_x86_64.exe',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg',
  },
  peers: {
    seeds: [
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:14056',
        provider: 'Polkachu',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'f97807210f9547b8a5016fb18000b46072ca5e30',
        address: 'seed-shentu-01.stakeflow.io:2407',
        provider: 'Stakeflow',
      },
      {
        id: '3edd4e16b791218b623f883d04f8aa5c3ff2cca6',
        address: 'shentu-seed.panthea.eu:36656',
        provider: 'Panthea EU',
      },
    ],
    persistent_peers: [
      {
        id: '8f91d396e3395210ef3a8394d48d1888af6d01cd',
        address: 'shentu.ramuchi.tech:56656',
        provider: 'ramuchi.tech',
      },
      {
        id: '060027d3bc10ff7ebc1ec315ae5671c541e1568c',
        address: 'shentu.peer.stavr.tech:20016',
        provider: '🔥STAVR🔥',
      },
      {
        id: 'f97807210f9547b8a5016fb18000b46072ca5e30',
        address: 'peer-shentu-01.stakeflow.io:2407',
        provider: 'Stakeflow',
      },
      {
        id: '207c47bed435e4174844064ef3f51ca35b059de2',
        address: 'shentu-peer.panthea.eu:26656',
        provider: 'Panthea EU',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://shenturpc.noopsbycertik.com/',
        provider: 'Shentu',
      },
      {
        address: 'https://shentu-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://shentu.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://shentu-rpc.ramuchi.tech',
        provider: 'ramuchi.tech',
      },
      {
        address: 'https://rpc-shentu-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://shentu-rpc.tienthuattoan.ventures',
        provider: 'TienThuatToan',
      },
      {
        address: 'https://shentu-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://shentu-rpc.highstakes.ch:26657/',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://shentu-rpc.panthea.eu',
        provider: 'Panthea EU',
      },
    ],
    rest: [
      {
        address: 'https://rest.noopsbycertik.com/',
        provider: 'Shentu',
      },
      {
        address: 'https://shentu-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://shentu.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://shentu-api.ramuchi.tech',
        provider: 'ramuchi.tech',
      },
      {
        address: 'https://api-shentu-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://shentu-api.tienthuattoan.ventures',
        provider: 'TienThuatToan',
      },
      {
        address: 'https://shentu-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://shentu-api.highstakes.ch:1317/',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://shentu-api.panthea.eu',
        provider: 'Panthea EU',
      },
    ],
    grpc: [
      {
        address: 'shentu-grpc.polkachu.com:14090',
        provider: 'Polkachu',
      },
      {
        address: 'shentu.grpc.m.stavr.tech:9593',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://shentu-grpc.ramuchi.tech:12090',
        provider: 'ramuchi.tech',
      },
      {
        address: 'grpc-shentu-01.stakeflow.io:2402',
        provider: 'Stakeflow',
      },
      {
        address: 'shentu-grpc.tienthuattoan.ventures:9490',
        provider: 'TienThuatToan',
      },
      {
        address: 'shentu-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'shentu-grpc.panthea.eu:16700',
        provider: 'Panthea EU',
      },
    ],
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/shentu',
      tx_page: 'https://app.ezstaking.io/shentu/txs/${txHash}',
      account_page: 'https://app.ezstaking.io/shentu/account/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Shentu-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Shentu-Mainnet/txs/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Shentu-Mainnet/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/shentu',
      tx_page: 'https://www.mintscan.io/shentu/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/shentu/accounts/${accountAddress}',
    },
    {
      kind: 'Shentu Explorer',
      url: 'https://explorer.shentu.technology/?net=shentu-2.2',
      tx_page:
        'https://explorer.shentu.technology/transactions/${txHash}?net=shentu-2.2',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/shentu',
      tx_page: 'https://ping.pub/shentu/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/shentu',
      tx_page: 'https://atomscan.com/shentu/transactions/${txHash}',
      account_page: 'https://atomscan.com/shentu/accounts/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/shentu',
      tx_page: 'https://bigdipper.live/shentu/transactions/${txHash}',
      account_page: 'https://bigdipper.live/shentu/accounts/${accountAddress}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/shentu',
      account_page: 'https://stakeflow.io/shentu/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg',
    },
  ],
};

export const shentuAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'shentu',
  assets: [
    {
      description: 'The native token of Shentu',
      denom_units: [
        {
          denom: 'uctk',
          exponent: 0,
        },
        {
          denom: 'ctk',
          exponent: 6,
        },
      ],
      base: 'uctk',
      name: 'Shentu',
      display: 'ctk',
      symbol: 'CTK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg',
      },
      coingecko_id: 'certik',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg',
        },
      ],
    },
  ],
};
