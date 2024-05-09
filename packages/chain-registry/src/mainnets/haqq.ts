import type { Chain, AssetList, Versions } from '../types';

export const haqq: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'haqq',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://haqq.network/',
  pretty_name: 'Haqq Network',
  chain_id: 'haqq_11235-1',
  bech32_prefix: 'haqq',
  node_home: '$HOME/.haqqd',
  daemon_name: 'haqqd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'aISLM',
        fixed_min_gas_price: 250000000,
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'aISLM',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/haqq-network/haqq',
    recommended_version: 'v1.7.4',
    compatible_versions: ['v1.7.4'],
    binaries: {
      'linux/amd64':
        'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Linux_x86_64.tar.gz',
      'linux/arm64':
        'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Darwin_x86_64.tar.gz',
      'darwin/arm64':
        'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Darwin_arm64.tar.gz',
      'windows/amd64':
        'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Windows_x86_64.zip',
    },
    cosmos_sdk_version: 'evmos/cosmos-sdk v0.47.5-evmos',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.3',
    },
    ibc_go_version: '7.3.1',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/haqq-network/mainnet/master/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.2',
        tag: 'v1.0.2',
        recommended_version: 'v1.0.2',
        compatible_versions: ['v1.0.2'],
        proposal: 4,
        height: 1027509,
        cosmos_sdk_version: 'v0.45.5-0.20220523154235-2921a1c3c918',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.20-0.20220517115723-e6f071164839',
        },
        ibc_go_version: '3.1.0',
        next_version_name: 'v1.1.9',
      },
      {
        name: 'v1.1.9',
        tag: 'v1.1.9',
        recommended_version: 'v1.1.9',
        compatible_versions: ['v1.1.9'],
        proposal: 6,
        height: 2853700,
        cosmos_sdk_version: 'v0.45.6',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.20-0.20220517115723-e6f071164839',
        },
        ibc_go_version: '3.1.1',
        next_version_name: 'v1.2.1',
      },
      {
        name: 'v1.2.1',
        tag: 'v1.2.1',
        recommended_version: 'v1.2.1',
        compatible_versions: ['v1.2.1'],
        proposal: 7,
        height: 2865555,
        cosmos_sdk_version: 'v0.45.9',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.21',
        },
        ibc_go_version: '3.2.0',
        next_version_name: 'v1.3.0',
      },
      {
        name: 'v1.3.0',
        tag: 'v1.3.0',
        recommended_version: 'v1.3.0',
        compatible_versions: ['v1.3.0'],
        proposal: 8,
        height: 5978000,
        cosmos_sdk_version: 'v0.45.9',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.21',
        },
        ibc_go_version: '3.2.0',
        next_version_name: 'v1.3.1',
      },
      {
        name: 'v1.3.1',
        tag: 'v1.3.1',
        recommended_version: 'v1.3.1',
        compatible_versions: ['v1.3.1'],
        proposal: 9,
        height: 5978800,
        cosmos_sdk_version: 'v0.45.9',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.21',
        },
        ibc_go_version: '3.2.0',
        next_version_name: 'v1.4.0',
      },
      {
        name: 'v1.4.0',
        tag: 'v1.4.0',
        recommended_version: 'v1.4.0',
        compatible_versions: ['v1.4.0'],
        proposal: 10,
        height: 6134000,
        cosmos_sdk_version: 'v0.46.9-ledger',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.26',
        },
        ibc_go_version: 'v5.2.1',
        next_version_name: 'v1.4.1',
      },
      {
        name: 'v1.4.1',
        tag: 'v1.4.1',
        recommended_version: 'v1.4.1',
        compatible_versions: ['v1.4.1'],
        cosmos_sdk_version: 'v0.46.9-ledger',
        consensus: {
          type: 'tendermint',
          version: '0.34.26',
        },
        ibc_go_version: '5.2.1',
        binaries: {
          'linux/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.4.1/haqq_1.4.1_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.4.1/haqq_1.4.1_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.4.1/haqq_1.4.1_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.4.1/haqq_1.4.1_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.4.1/haqq_1.4.1_Windows_x86_64.zip',
        },
        next_version_name: 'v1.5.0',
      },
      {
        name: 'v1.5.0',
        tag: 'v1.5.0',
        recommended_version: 'v1.5.0',
        compatible_versions: ['v1.5.0'],
        proposal: 18,
        height: 7770000,
        cosmos_sdk_version: 'v0.46.10-ledger.3',
        consensus: {
          type: 'tendermint',
          version: '0.34.26',
        },
        ibc_go_version: '5.2.1',
        binaries: {
          'linux/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.5.0/haqq_1.5.0_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.5.0/haqq_1.5.0_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.5.0/haqq_1.5.0_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.5.0/haqq_1.5.0_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.5.0/haqq_1.5.0_Windows_x86_64.zip',
        },
        next_version_name: 'v1.6.0',
      },
      {
        name: 'v1.6.0',
        tag: 'v1.6.0',
        recommended_version: 'v1.6.0',
        compatible_versions: ['v1.6.0'],
        proposal: 21,
        height: 8002000,
        cosmos_sdk_version: 'v0.46.13-ledger.3',
        consensus: {
          type: 'cometbft',
          version: '0.34.29',
        },
        ibc_go_version: '6.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.0/haqq_1.6.0_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.0/haqq_1.6.0_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.0/haqq_1.6.0_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.0/haqq_1.6.0_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.0/haqq_1.6.0_Windows_x86_64.zip',
        },
        next_version_name: 'v1.6.1',
      },
      {
        name: 'v1.6.1',
        tag: 'v1.6.1',
        recommended_version: 'v1.6.1',
        compatible_versions: ['v1.6.1'],
        proposal: 22,
        height: 8076500,
        cosmos_sdk_version: 'v0.46.13-ledger.3',
        consensus: {
          type: 'cometbft',
          version: '0.34.29',
        },
        ibc_go_version: '6.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.1/haqq_1.6.1_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.1/haqq_1.6.1_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.1/haqq_1.6.1_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.1/haqq_1.6.1_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.1/haqq_1.6.1_Windows_x86_64.zip',
        },
        next_version_name: 'v1.6.2',
      },
      {
        name: 'v1.6.2',
        tag: 'v1.6.2',
        recommended_version: 'v1.6.2',
        compatible_versions: ['v1.6.2'],
        proposal: 23,
        height: 8193000,
        cosmos_sdk_version: 'v0.46.13-ledger.3',
        consensus: {
          type: 'cometbft',
          version: '0.34.29',
        },
        ibc_go_version: '6.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.2/haqq_1.6.2_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.2/haqq_1.6.2_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.2/haqq_1.6.2_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.2/haqq_1.6.2_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.2/haqq_1.6.2_Windows_x86_64.zip',
        },
        next_version_name: 'v1.6.3',
      },
      {
        name: 'v1.6.3',
        tag: 'v1.6.3',
        recommended_version: 'v1.6.3',
        compatible_versions: ['v1.6.3'],
        proposal: 25,
        height: 8282000,
        cosmos_sdk_version: 'v0.46.13-ledger.3',
        consensus: {
          type: 'cometbft',
          version: '0.34.29',
        },
        ibc_go_version: '6.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.3/haqq_1.6.3_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.3/haqq_1.6.3_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.3/haqq_1.6.3_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.3/haqq_1.6.3_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.3/haqq_1.6.3_Windows_x86_64.zip',
        },
        next_version_name: 'v1.6.4',
      },
      {
        name: 'v1.6.4',
        tag: 'v1.6.4',
        recommended_version: 'v1.6.4',
        compatible_versions: ['v1.6.4'],
        proposal: 26,
        height: 9070000,
        cosmos_sdk_version: 'v0.46.13-ledger.3',
        consensus: {
          type: 'cometbft',
          version: '0.34.29',
        },
        ibc_go_version: '6.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.4/haqq_1.6.4_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.4/haqq_1.6.4_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.4/haqq_1.6.4_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.4/haqq_1.6.4_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.6.4/haqq_1.6.4_Windows_x86_64.zip',
        },
        next_version_name: 'v1.7.0',
      },
      {
        name: 'v1.7.0',
        tag: 'v1.7.0',
        recommended_version: 'v1.7.0',
        compatible_versions: ['v1.7.0'],
        proposal: 27,
        height: 9451000,
        cosmos_sdk_version: 'evmos/cosmos-sdk v0.47.5-evmos',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3',
        },
        ibc_go_version: '7.3.1',
        binaries: {
          'linux/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.0/haqq_1.7.0_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.0/haqq_1.7.0_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.0/haqq_1.7.0_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.0/haqq_1.7.0_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.0/haqq_1.7.0_Windows_x86_64.zip',
        },
        next_version_name: 'v1.7.1',
      },
      {
        name: 'v1.7.1',
        tag: 'v1.7.1',
        recommended_version: 'v1.7.1',
        compatible_versions: ['v1.7.1'],
        proposal: 28,
        height: 9774000,
        cosmos_sdk_version: 'evmos/cosmos-sdk v0.47.5-evmos',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3',
        },
        ibc_go_version: '7.3.1',
        binaries: {
          'linux/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.1/haqq_1.7.1_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.1/haqq_1.7.1_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.1/haqq_1.7.1_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.1/haqq_1.7.1_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.1/haqq_1.7.1_Windows_x86_64.zip',
        },
        next_version_name: 'v1.7.2',
      },
      {
        name: 'v1.7.2',
        tag: 'v1.7.2',
        recommended_version: 'v1.7.2',
        compatible_versions: ['v1.7.2'],
        proposal: 29,
        height: 9862000,
        cosmos_sdk_version: 'evmos/cosmos-sdk v0.47.5-evmos',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3',
        },
        ibc_go_version: '7.3.1',
        binaries: {
          'linux/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.2/haqq_1.7.2_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.2/haqq_1.7.2_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.2/haqq_1.7.2_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.2/haqq_1.7.2_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.2/haqq_1.7.2_Windows_x86_64.zip',
        },
        next_version_name: 'v1.7.3',
      },
      {
        name: 'v1.7.3',
        tag: 'v1.7.3',
        recommended_version: 'v1.7.3',
        compatible_versions: ['v1.7.3'],
        proposal: 30,
        height: 9950000,
        cosmos_sdk_version: 'evmos/cosmos-sdk v0.47.5-evmos',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3',
        },
        ibc_go_version: '7.3.1',
        binaries: {
          'linux/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.3/haqq_1.7.3_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.3/haqq_1.7.3_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.3/haqq_1.7.3_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.3/haqq_1.7.3_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.3/haqq_1.7.3_Windows_x86_64.zip',
        },
        next_version_name: 'v1.7.4',
      },
      {
        name: 'v1.7.4',
        tag: 'v1.7.4',
        recommended_version: 'v1.7.4',
        compatible_versions: ['v1.7.4'],
        proposal: 31,
        height: 10881000,
        cosmos_sdk_version: 'evmos/cosmos-sdk v0.47.5-evmos',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3',
        },
        ibc_go_version: '7.3.1',
        binaries: {
          'linux/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Windows_x86_64.zip',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg',
  },
  peers: {
    seeds: [
      {
        id: '0533e20e65912f72f2ad88a4c91eefbc634212d7',
        address: 'haqq-sync.rpc.p2p.world:26656',
        provider: 'P2P.org',
      },
      {
        id: '977ee99c89207677f116801a595c97979a0c0cd1',
        address: '80.240.20.106:26656',
        provider: 'kioqq',
      },
      {
        id: '731f27fe9cd05257fcfc68b96147aec79035f920',
        address: 'seed1.haqq.network:26656',
        provider: 'Haqq',
      },
      {
        id: '681da1f78742b2a0f8e0e7dac6e6f72166d82a8c',
        address: 'seed2.haqq.network:26656',
        provider: 'Haqq',
      },
      {
        id: 'd8e2d0095763ed3c6f38814e7752eccc3c547913',
        address: '167.235.192.194:26656',
        provider: 'kioqq',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:24056',
        provider: 'Lavender.Five Nodes 🐝',
      },
    ],
    persistent_peers: [
      {
        id: '0533e20e65912f72f2ad88a4c91eefbc634212d7',
        address: 'haqq-sync.rpc.p2p.world:26656',
        provider: 'P2P.org',
      },
      {
        id: '977ee99c89207677f116801a595c97979a0c0cd1',
        address: '80.240.20.106:26656',
        provider: '[NODERS]TEAM',
      },
      {
        id: '977ee99c89207677f116801a595c97979a0c0cd1',
        address: '80.240.20.106:26656',
        provider: 'kioqq',
      },
      {
        id: '28498a11b7e3bdf7e63fb6c57b07cfcbe89d6a20',
        address: 'mainnet-haqq.konsortech.xyz:11656',
        provider: 'KonsorTech',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.tm.haqq.network',
        provider: 'Haqq',
      },
      {
        address: 'https://m-s1-tm.haqq.sh',
        provider: 'kioqq',
      },
      {
        address: 'https://rpc.haqq.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://haqq-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://haqq-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-haqq.sr20de.xyz:443',
        provider: 'Sr20de',
      },
      {
        address: 'https://haqq-rpc.palamar.io',
        provider: 'Palamar',
      },
      {
        address: 'https://haqq-rpc.noders.services',
        provider: '[NODERS]TEAM',
      },
    ],
    rest: [
      {
        address: 'https://rest.cosmos.haqq.network',
        provider: 'Haqq',
      },
      {
        address: 'https://m-s1-sdk.haqq.sh',
        provider: 'kioqq',
      },
      {
        address: 'https://api.haqq.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://haqq-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://haqq-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://mainnet-haqq-api.konsortech.xyz',
        provider: 'KonsorTech',
      },
      {
        address: 'https://api-haqq.sr20de.xyz',
        provider: 'Sr20de',
      },
      {
        address: 'https://haqq-api.palamar.io',
        provider: 'Palamar',
      },
      {
        address: 'https://haqq-api.noders.services',
        provider: '[NODERS]TEAM',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.cosmos.haqq.network',
        provider: 'Haqq',
      },
      {
        address: 'grpc://m-s1-grpc.haqq.sh:1337',
        provider: 'kioqq',
      },
      {
        address: 'haqq.grpc.nodersteam.com:9191',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://grpc.haqq.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'haqq-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://haqq-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'mainnet-haqq-grpc.konsortech.xyz:11090',
        provider: 'KonsorTech',
      },
      {
        address: 'https://grpc-haqq.sr20de.xyz',
        provider: 'Sr20de',
      },
      {
        address: 'haqq-grpc.palamar.io:443',
        provider: 'Palamar',
      },
      {
        address: 'haqq-grpc.noders.services:14090',
        provider: '[NODERS]TEAM',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://rpc.eth.haqq.network',
        provider: 'Haqq',
      },
      {
        address: 'https://m-s1-evm-rpc.haqq.sh',
        provider: 'kioqq',
      },
      {
        address: 'https://jsonrpc.haqq.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://haqq-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://haqq-jsonrpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://mainnet-haqq-evm.konsortech.xyz',
        provider: 'KonsorTech',
      },
      {
        address: 'https://evm-haqq.sr20de.xyz',
        provider: 'Sr20de',
      },
      {
        address: 'https://haqq-jsonrpc.noders.services',
        provider: '[NODERS]TEAM',
      },
    ],
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://explorer.haqq.network',
      tx_page: 'https://explorer.haqq.network/tx/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/haqq',
      tx_page: 'https://ping.pub/haqq/tx/${txHash}',
    },
    {
      kind: 'explorers.guru',
      url: 'https://haqq.explorers.guru',
      tx_page: 'https://haqq.explorers.guru/transaction/${txHash}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/haqq',
      tx_page: 'https://explorer.nodestake.top/haqq/tx/${txHash}',
    },
    {
      kind: 'KonsorTech Explorer',
      url: 'https://explorer.konsortech.xyz/haqq',
      tx_page: 'https://explorer.konsortech.xyz/haqq/tx/${txHash}',
    },
    {
      kind: 'Palamar Explorer',
      url: 'https://explorer.palamar.io/haqq',
      tx_page: 'https://explorer.palamar.io/haqq/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg',
    },
  ],
};

export const haqqAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'haqq',
  assets: [
    {
      description:
        'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [
        {
          denom: 'aISLM',
          exponent: 0,
        },
        {
          denom: 'ISLM',
          exponent: 18,
        },
      ],
      base: 'aISLM',
      name: 'Islamic Coin',
      display: 'ISLM',
      symbol: 'ISLM',
      coingecko_id: 'islamic-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
        },
      ],
    },
  ],
};
