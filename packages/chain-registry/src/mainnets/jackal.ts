import type { Chain, AssetList, Versions } from '../types';

export const jackal: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'jackal',
  chain_id: 'jackal-1',
  website: 'https://jackalprotocol.com',
  pretty_name: 'Jackal',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'jkl',
  daemon_name: 'canined',
  node_home: '$HOME/.canine',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ujkl',
        fixed_min_gas_price: 0,
        low_gas_price: 0.002,
        average_gas_price: 0.002,
        high_gas_price: 0.02,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ujkl',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/JackalLabs/canine-chain',
    recommended_version: 'v3.2.2',
    compatible_versions: ['v3.2.1', 'v3.2.2'],
    binaries: {
      'linux/amd64':
        'https://github.com/JackalLabs/canine-chain/releases/download/v3.2.2/canined-Linux',
      'darwin/amd64':
        'https://github.com/JackalLabs/canine-chain/releases/download/v3.2.2/canined-macOS',
    },
    genesis: {
      genesis_url:
        'https://cdn.discordapp.com/attachments/1002389406650466405/1034968352591986859/updated_genesis2.json',
    },
    cosmwasm_enabled: true,
    versions: [
      {
        name: 'bouncybulldog',
        recommended_version: 'v1.2.1',
        compatible_versions: ['v1.2.1'],
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v1.2.1/canined-Linux',
          'darwin/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v1.2.1/canined-macOS',
        },
        next_version_name: 'recovery',
      },
      {
        name: 'recovery',
        tag: 'V2.0.1',
        proposal: 4,
        height: 2631260,
        recommended_version: 'v2.0.1',
        compatible_versions: ['v2.0.0', 'v2.0.1'],
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v2.0.2/canined-Linux',
          'darwin/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v2.0.2/canined-macOS',
        },
        next_version_name: 'v210',
      },
      {
        name: 'v210',
        tag: 'V2.1.0',
        proposal: 8,
        height: 3503000,
        recommended_version: 'v2.1.0',
        compatible_versions: ['v2.1.0'],
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v2.1.0/canined-Linux',
          'darwin/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v2.1.0/canined-macOS',
        },
        next_version_name: 'v3',
      },
      {
        name: 'v3',
        tag: 'V3.0.5',
        proposal: 9,
        height: 4074200,
        recommended_version: 'v3.0.5',
        compatible_versions: ['v3.0.5'],
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v3.0.5/canined-Linux',
          'darwin/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v3.0.5/canined-macOS',
        },
        next_version_name: 'v3.1.1',
      },
      {
        name: 'v3.1.1',
        tag: 'V3.1.3',
        proposal: 11,
        height: 6095000,
        recommended_version: 'v3.1.3',
        compatible_versions: ['v3.1.1', 'v3.1.3'],
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v3.1.3/canined-Linux',
          'darwin/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v3.1.3/canined-macOS',
        },
        next_version_name: 'v320',
      },
      {
        name: 'v3.2.0',
        tag: 'V3.2.2',
        proposal: 12,
        height: 6835000,
        recommended_version: 'v3.2.2',
        compatible_versions: ['v3.2.1', 'v3.2.2'],
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v3.2.2/canined-Linux',
          'darwin/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v3.2.2/canined-macOS',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg',
  },
  peers: {
    seeds: [
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:17556',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'jackal-mainnet-seed.autostake.com:26906',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:17556',
        provider: 'Polkachu',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'jackal.rpc.kjnodes.com:13759',
        provider: 'kjnodes',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:17556',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '0ab9ec918cd36a28be1fcf538f7f76ede2b81659',
        address: '89.58.38.59:26656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'jackal-mainnet-peer.autostake.com:26906',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '26b6255375a592c3b0664bd474a6975f468c3785',
        address: 'jkl.peer.stavr.tech:11126',
        provider: '🔥STAVR🔥',
      },
      {
        id: '713d202326eedaed41d467b26051aba62727febd',
        address: '5.9.69.241:26656',
        provider: '[NODERS]TEAM',
      },
      {
        id: '2af06d39d68345d41cd16182e3472d96c5a0150b',
        address: '136.244.29.116:27656',
      },
      {
        id: '41c19eebb3879cd9f4a7561c0953af7d1564624b',
        address: '167.114.159.157:26656',
      },
    ],
  },
  apis: {
    wss: [
      {
        address: 'wss://jackal-rpc.agoranodes.com',
        provider: 'AgoraNodes',
      },
    ],
    rpc: [
      {
        address: 'https://rpc.jackalprotocol.com',
        provider: 'Jackal Labs',
      },
      {
        address: 'https://jackal-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'http://jkl.rpc.m.stavr.tech:11127',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://jackal.rpc.bccnodes.com',
        provider: 'BccNodes',
      },
      {
        address: 'https://rpc.jackal.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://rpc-jackal.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://jackal-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://m-jackal.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      },
      {
        address: 'https://rpc-jackal.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://jackal-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://jackal.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://jackal.rpc.silknodes.io',
        provider: 'Silk Nodes',
      },
      {
        address: 'https://jackal.rpc.skynodejs.net',
        provider: 'skynodejs',
      },
      {
        address: 'https://public.stakewolle.com/cosmos/jackal/rpc',
        provider: 'Stakewolle',
      },
      {
        address: 'https://rpc.jackal.silentvalidator.com',
        provider: 'silent',
      },
      {
        address: 'https://rpc.jackal.mathnodes.com',
        provider: 'MathNodes',
      },
      {
        address: 'https://jackal-rpc.kleomedes.network',
        provider: 'Kleomedes',
      },
      {
        address: 'https://jackal-rpc.noders.services',
        provider: '[NODERS]TEAM',
      },
    ],
    rest: [
      {
        address: 'https://api.jackalprotocol.com',
        provider: 'Jackal Labs',
      },
      {
        address: 'https://jackal-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://jkl.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://api.jackal.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://api-jackal.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://jackal-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://m-jackal.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      },
      {
        address: 'https://jackal-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://lcd-jackal.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://jackal.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://jackal.api.silknodes.io',
        provider: 'Silk Nodes',
      },
      {
        address: 'https://jackal.api.skynodejs.net',
        provider: 'skynodejs',
      },
      {
        address: 'https://public.stakewolle.com/cosmos/jackal/rest',
        provider: 'Stakewolle',
      },
      {
        address: 'https://api.jackal.silentvalidator.com',
        provider: 'silent',
      },
      {
        address: 'https://api.jackal.mathnodes.com',
        provider: 'MathNodes',
      },
      {
        address: 'https://jackal-api.kleomedes.network',
        provider: 'Kleomedes',
      },
      {
        address: 'https://jackal-api.noders.services',
        provider: '[NODERS]TEAM',
      },
    ],
    grpc: [
      {
        address: 'grpc.jackalprotocol.com:443',
        provider: 'Jackal Labs',
      },
      {
        address: 'jackal.grpc.bccnodes.com:9490',
        provider: 'BccNodes',
      },
      {
        address: 'jackal.grpc.nodersteam.com:9990',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'jackal-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'grpc.jackal.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'jackal-grpc.polkachu.com:17590',
        provider: 'Polkachu',
      },
      {
        address: 'http://jkl.grpc.m.stavr.tech:5013',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'jackal-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'jackal.grpc.kjnodes.com:13790',
        provider: 'kjnodes',
      },
      {
        address: 'https://jackal.grpc.skynodejs.net',
        provider: 'skynodejs',
      },
      {
        address: 'grpc.jackal.silentvalidator.com:443',
        provider: 'silent',
      },
      {
        address: 'jackal-grpc.noders.services:26090',
        provider: '[NODERS]TEAM',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/jackal',
      tx_page: 'https://ping.pub/jackal/tx/${txHash}',
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/jackal',
      tx_page: 'https://explorer.nodestake.top/jackal/tx/${txHash}',
    },
    {
      kind: 'BccNodes',
      url: 'https://explorer.bccnodes.com/jackal',
      tx_page: 'https://explorer.bccnodes.com/jackal/tx/${txHash}',
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      url: 'https://exp.utsa.tech/jackal',
      tx_page: 'https://exp.utsa.tech/jackal/tx/${txHash}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/jackal',
      tx_page: 'https://explorer.stavr.tech/jackal/tx/${txHash}',
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/jackal',
      tx_page: 'https://exp.nodeist.net/jackal/tx/${txHash}',
    },
    {
      kind: 'Big Dipper',
      url: 'https://bigdipper.live/jackal',
      tx_page: 'https://bigdipper.live/jackal/transactions/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg',
    },
  ],
};

export const jackalAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'jackal',
  assets: [
    {
      description: 'The native staking and governance token of Jackal.',
      denom_units: [
        {
          denom: 'ujkl',
          exponent: 0,
        },
        {
          denom: 'jkl',
          exponent: 6,
        },
      ],
      base: 'ujkl',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg',
      },
      coingecko_id: 'jackal-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg',
        },
      ],
    },
  ],
};
