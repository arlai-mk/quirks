import type { Chain, AssetList, Versions } from '../types';

export const nibiru: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'nibiru',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://nibiru.fi/',
  pretty_name: 'Nibiru',
  chain_id: 'cataclysm-1',
  bech32_prefix: 'nibi',
  daemon_name: 'nibid',
  node_home: '$HOME/.nibid',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'unibi',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.05,
        high_gas_price: 0.1,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'unibi',
      },
    ],
    lock_duration: {
      time: '1814400s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/NibiruChain/nibiru',
    recommended_version: 'v1.2.0',
    compatible_versions: ['v1.2.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/NibiruChain/nibiru/releases/download/v1.2.0/nibid_1.2.0_linux_amd64.tar.gz',
      'linux/arm64':
        'https://github.com/NibiruChain/nibiru/releases/download/v1.2.0/nibid_1.2.0_linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/NibiruChain/nibiru/releases/download/v1.2.0/nibid_1.2.0_darwin_amd64.tar.gz',
      'darwin/arm64':
        'https://github.com/NibiruChain/nibiru/releases/download/v1.2.0/nibid_1.2.0_darwin_arm64.tar.gz',
    },
    cosmos_sdk_version: 'v0.47.10',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4',
    },
    ibc_go_version: 'v7.3.2',
    cosmwasm_version: 'v0.44.0',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/NibiruChain/Networks/main/Mainnet/cataclysm-1/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
        tag: 'v1.0.0',
        height: 1,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        cosmos_sdk_version: 'v0.45.5',
        cosmwasm_version: 'v0.44.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.1',
        cosmwasm_path: '$HOME/.nibid/data/wasm',
        binaries: {
          'linux/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.0/nibid_1.0.0_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.0/nibid_1.0.0_linux_arm64.tar.gz',
        },
        next_version_name: 'v1.0.1',
      },
      {
        name: 'v1.0.1',
        recommended_version: 'v1.0.1',
        compatible_versions: ['v1.0.1'],
        tag: 'v1.0.1',
        binaries: {
          'linux/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_darwin_arm64.tar.gz',
        },
        proposal: 2,
        height: 2753803,
        cosmos_sdk_version: 'v0.47.7',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4',
        },
        cosmwasm_version: 'v0.44.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.1',
        next_version_name: 'v1.0.2',
      },
      {
        name: 'v1.0.2',
        recommended_version: 'v1.0.2',
        compatible_versions: ['v1.0.2'],
        tag: 'v1.0.2',
        binaries: {
          'linux/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.2/nibid_1.0.2_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.2/nibid_1.0.2_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.2/nibid_1.0.2_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.2/nibid_1.0.2_darwin_arm64.tar.gz',
        },
        proposal: 6,
        height: 3539699,
        cosmos_sdk_version: 'v0.47.10',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4',
        },
        cosmwasm_version: 'v0.44.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.1',
        next_version_name: 'v1.0.3',
      },
      {
        name: 'v1.0.3',
        recommended_version: 'v1.0.3',
        compatible_versions: ['v1.0.3'],
        tag: 'v1.0.3',
        binaries: {
          'linux/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.3/nibid_1.0.3_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.3/nibid_1.0.3_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.3/nibid_1.0.3_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.3/nibid_1.0.3_darwin_arm64.tar.gz',
        },
        proposal: 8,
        height: 4088799,
        cosmos_sdk_version: 'v0.47.10',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4',
        },
        cosmwasm_version: 'v0.44.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.2',
        next_version_name: 'v1.1.0',
      },
      {
        name: 'v1.1.0',
        recommended_version: 'v1.1.0',
        compatible_versions: ['v1.1.0'],
        tag: 'v1.1.0',
        binaries: {
          'linux/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.1.0/nibid_1.1.0_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.1.0/nibid_1.1.0_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.1.0/nibid_1.1.0_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.1.0/nibid_1.1.0_darwin_arm64.tar.gz',
        },
        proposal: 9,
        height: 4447094,
        cosmos_sdk_version: 'v0.47.10',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4',
        },
        ibc_go_version: 'v7.3.2',
        cosmwasm_version: 'v0.44.0',
        cosmwasm_enabled: true,
        next_version_name: 'v1.2.0',
      },
      {
        name: 'v1.2.0',
        recommended_version: 'v1.2.0',
        compatible_versions: ['v1.2.0'],
        tag: 'v1.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.2.0/nibid_1.2.0_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.2.0/nibid_1.2.0_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.2.0/nibid_1.2.0_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.2.0/nibid_1.2.0_darwin_arm64.tar.gz',
        },
        proposal: 10,
        height: 4804662,
        cosmos_sdk_version: 'v0.47.10',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4',
        },
        ibc_go_version: 'v7.3.2',
        cosmwasm_version: 'v0.44.0',
        cosmwasm_enabled: true,
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
  },
  description: 'A Web3 hub ushering in the next era of money',
  peers: {
    seeds: [
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:19856',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'b7262df35a7e1d1fb4027464efe9d9d6218ca4c7',
        address: '35.233.111.89:26656',
        provider: 'Nibiru Foundation',
      },
      {
        id: 'ebf72163ad536ca73a037fa5d564d511be59c2f4',
        address: '34.34.137.54:26656',
        provider: 'Nibiru Foundation',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'nibiru.rpc.kjnodes.com:13959',
        provider: 'kjnodes.com 🦄',
      },
      {
        id: 'c416d67c3dbb2d30b803611469e6d2634099292d',
        address: 'nibiru.seed.stavr.tech:11036',
        provider: '🔥STAVR🔥',
      },
    ],
    persistent_peers: [
      {
        id: '05106550b6e738d8ce50cb857520124bbcce318f',
        address: '35.189.236.126:26656',
        provider: 'Nibiru Foundation',
      },
      {
        id: 'e7af24b15365bff9537e2776c2a5fdf01b933dc5',
        address: '34.76.178.49:26656',
        provider: 'Nibiru Foundation',
      },
      {
        id: '637077d431f618181597706810a65c826524fd74',
        address: 'nibiru.rpc.nodeshub.online:19856',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
      {
        id: 'c2f97c34c7df4ed57fcaf088ef59dd568dd19f01',
        address: 'nibiru-mainnet.peer.stakevillage.net:16156',
        provider: 'Stake Village',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.nibiru.fi',
        provider: 'Nibiru Foundation',
      },
      {
        address: 'https://nibiru.rpc.kjnodes.com',
        provider: 'kjnodes.com 🦄',
      },
      {
        address: 'https://rpc.nibiru.nodestake.org',
        provider: 'NodeStake',
      },
      {
        address: 'https://nibiru-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc.nibiru.silentvalidator.com',
        provider: 'silent',
      },
      {
        address: 'https://nibiru.rpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://nibiru-rpc.cogwheel.zone',
        provider: 'Cogwheel ⚙️',
      },
      {
        address: 'https://nibiru.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
      {
        address: 'https://nibiru.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://nibiru-rpc.noders.services',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://nibiru-mainnet.rpc.stakevillage.net:443',
        provider: 'Stake Village',
      },
    ],
    rest: [
      {
        address: 'https://lcd.nibiru.fi',
        provider: 'Nibiru Foundation',
      },
      {
        address: 'https://nibiru.api.kjnodes.com',
        provider: 'kjnodes.com 🦄',
      },
      {
        address: 'https://api.nibiru.nodestake.org',
        provider: 'NodeStake',
      },
      {
        address: 'https://api.nibiru.silentvalidator.com',
        provider: 'silent',
      },
      {
        address: 'https://nibiru-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://nibiru.api.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://nibiru-api.cogwheel.zone',
        provider: 'Cogwheel ⚙️',
      },
      {
        address: 'https://nibiru.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://nibiru.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
      {
        address: 'https://nibiru.api.staking-explorer.com',
        provider: 'Daily DROP | 2% Fee',
      },
      {
        address: 'https://nibiru-api.noders.services',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://nibiru-mainnet.api.stakevillage.net',
        provider: 'Stake Village',
      },
    ],
    grpc: [
      {
        address: 'grpc.nibiru.fi:443',
        provider: 'Nibiru Foundation',
      },
      {
        address: 'nibiru.grpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄',
      },
      {
        address: 'grpc.nibiru.nodestake.org:443',
        provider: 'NodeStake',
      },
      {
        address: 'grpc.nibiru.silentvalidator.com:443',
        provider: 'silent',
      },
      {
        address: 'https://nibiru-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'nibiru.grpc.liveraven.net:443',
        provider: 'LiveRaveN',
      },
      {
        address: 'nibiru-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️',
      },
      {
        address: 'https://nibiru.grpc.nodeshub.online',
        provider: 'Nodes Hub',
      },
      {
        address: 'nibiru.grpc.m.stavr.tech:5023',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'nibiru-grpc.noders.services:35090',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'nibiru-mainnet.grpc.stakevillage.net:443',
        provider: 'Stake Village',
      },
    ],
  },
  explorers: [
    {
      kind: 'Nodes Guru',
      url: 'https://nibiru.explorers.guru/',
      tx_page: 'https://nibiru.explorers.guru/transaction/${txHash}',
      account_page: 'https://nibiru.explorers.guru/account/${accountAddress}',
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/nibiru',
      tx_page: 'https://explorer.nodestake.org/nibiru/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.org/nibiru/account/${accountAddress}',
    },
    {
      kind: 'LiveRaveN',
      url: 'https://mainnet.explorer.liveraven.net/nibiru',
      tx_page: 'https://mainnet.explorer.liveraven.net/nibiru/tx/${txHash}',
      account_page:
        'https://mainnet.explorer.liveraven.net/nibiru/account/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Nibiru-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Nibiru-Mainnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Nibiru-Mainnet/account/${accountAddress}',
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/nibiru/',
      tx_page: 'https://explorer.nodeshub.online/nibiru/tx/${txHash}',
      account_page:
        'https://explorer.nodeshub.online/nibiru/accounts/${accountAddress}',
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/nibiru-mainnet',
      tx_page: 'https://exp.stakevillage.net/nibiru-mainnet/tx/${txHash}',
      account_page:
        'https://exp.stakevillage.net/nibiru-mainnet/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
    },
  ],
};

export const nibiruAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'nibiru',
  assets: [
    {
      description: 'The native token of Nibiru network',
      denom_units: [
        {
          denom: 'unibi',
          exponent: 0,
        },
        {
          denom: 'nibi',
          exponent: 6,
        },
      ],
      base: 'unibi',
      name: 'Nibiru',
      display: 'nibi',
      symbol: 'NIBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
      },
      coingecko_id: 'nibiru',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
        },
      ],
    },
  ],
};
