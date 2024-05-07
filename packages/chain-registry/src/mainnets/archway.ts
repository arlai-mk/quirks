import type { Chain, AssetList, Versions } from '../types';

export const archway: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'archway',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://archway.io/',
  pretty_name: 'Archway',
  chain_id: 'archway-1',
  bech32_prefix: 'archway',
  daemon_name: 'archwayd',
  node_home: '$HOME/.archway',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'aarch',
        fixed_min_gas_price: 140000000000,
        low_gas_price: 196000000000,
        average_gas_price: 225400000000,
        high_gas_price: 254800000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'aarch',
      },
    ],
    lock_duration: {
      time: '1209600s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/archway-network/archway',
    recommended_version: 'v7.0.0',
    compatible_versions: ['v7.0.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/archway-network/archway/releases/download/v7.0.0/archwayd_linux_amd64',
      'linux/arm64':
        'https://github.com/archway-network/archway/releases/download/v7.0.0/archwayd_linux_arm64',
      'darwin/amd64':
        'https://github.com/archway-network/archway/releases/download/v7.0.0/archwayd_darwin_amd64',
      'darwin/arm64':
        'https://github.com/archway-network/archway/releases/download/v7.0.0/archwayd_darwin_arm64',
    },
    cosmos_sdk_version: 'v0.47.11',
    ibc_go_version: 'v7.4.0',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5',
    },
    cosmwasm_version: 'v0.45.0',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://github.com/archway-network/networks/raw/main/archway/genesis/genesis.json.gz',
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.1',
        compatible_versions: ['v1.0.0', 'v1.0.1'],
        tag: 'v1.0.1',
        height: 1,
        consensus: {
          type: 'tendermint',
          version: 'v0.34.27',
        },
        cosmos_sdk_version: 'v0.45.16',
        cosmwasm_version: 'v0.32.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v4.3.1',
        cosmwasm_path: '$HOME/.archway/data/wasm',
        binaries: {
          'linux/amd64':
            'https://github.com/archway-network/archway/releases/download/v1.0.1/archwayd_linux_amd64',
          'linux/arm64':
            'https://github.com/archway-network/archway/releases/download/v1.0.1/archwayd_linux_arm64',
        },
        next_version_name: 'v2.0.0',
      },
      {
        name: 'v2.0.0',
        recommended_version: 'v2.0.0',
        compatible_versions: ['v2.0.0'],
        tag: 'v2.0.0',
        proposal: 10,
        height: 525000,
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27',
        },
        cosmos_sdk_version: 'v0.45.16',
        cosmwasm_version: 'v0.32.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v4.3.1',
        cosmwasm_path: '$HOME/.archway/data/wasm',
        binaries: {
          'linux/amd64':
            'https://github.com/archway-network/archway/releases/download/v2.0.0/archwayd_linux_amd64',
          'linux/arm64':
            'https://github.com/archway-network/archway/releases/download/v2.0.0/archwayd_linux_arm64',
        },
        next_version_name: 'v4.0.2',
      },
      {
        name: 'v4.0.2',
        recommended_version: 'v4.0.3',
        compatible_versions: ['v4.0.3'],
        proposal: 21,
        height: 1215711,
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27',
        },
        cosmos_sdk_version: 'v0.45.16',
        cosmwasm_version: 'v0.33.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v4.3.1',
        cosmwasm_path: '$HOME/.archway/data/wasm',
        binaries: {
          'linux/amd64':
            'https://github.com/archway-network/archway/releases/download/v4.0.3/archwayd_linux_amd64',
          'linux/arm64':
            'https://github.com/archway-network/archway/releases/download/v4.0.3/archwayd_linux_arm64',
          'darwin/amd64':
            'https://github.com/archway-network/archway/releases/download/v4.0.3/archwayd_darwin_amd64',
          'darwin/arm64':
            'https://github.com/archway-network/archway/releases/download/v4.0.3/archwayd_darwin_arm64',
        },
        next_version_name: 'v6.0.0',
      },
      {
        name: 'v6.0.0',
        recommended_version: 'v6.0.3',
        compatible_versions: ['v6.0.3'],
        proposal: 38,
        height: 3554500,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4',
        },
        cosmos_sdk_version: 'v0.47.10',
        cosmwasm_version: 'archway-network/archway-wasmd v0.45.0-archway',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.4.0',
        cosmwasm_path: '$HOME/.archway/data/wasm',
        binaries: {
          'linux/amd64':
            'https://github.com/archway-network/archway/releases/download/v6.0.3/archwayd_linux_amd64',
          'linux/arm64':
            'https://github.com/archway-network/archway/releases/download/v6.0.3/archwayd_linux_arm64',
          'darwin/amd64':
            'https://github.com/archway-network/archway/releases/download/v6.0.3/archwayd_darwin_amd64',
          'darwin/arm64':
            'https://github.com/archway-network/archway/releases/download/v6.0.3/archwayd_darwin_arm64',
        },
        next_version_name: 'v7.0.0',
      },
      {
        name: 'v7.0.0',
        proposal: 43,
        height: 4473000,
        recommended_version: 'v7.0.0',
        compatible_versions: ['v7.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/archway-network/archway/releases/download/v7.0.0/archwayd_linux_amd64',
          'linux/arm64':
            'https://github.com/archway-network/archway/releases/download/v7.0.0/archwayd_linux_arm64',
          'darwin/amd64':
            'https://github.com/archway-network/archway/releases/download/v7.0.0/archwayd_darwin_amd64',
          'darwin/arm64':
            'https://github.com/archway-network/archway/releases/download/v7.0.0/archwayd_darwin_arm64',
        },
        cosmos_sdk_version: 'v0.47.11',
        ibc_go_version: 'v7.4.0',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5',
        },
        cosmwasm_version: 'v0.45.0',
        cosmwasm_enabled: true,
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
  },
  description:
    'An incentivized L1 blockchain that allows developers to capture the value their dapps create, enabling sustainable economic models.',
  peers: {
    seeds: [
      {
        id: '3ba7bf08f00e228026177e9cdc027f6ef6eb2b39',
        address: '35.232.234.58:26656',
        provider: 'Archway Foundation',
      },
      {
        id: 'b308dda41e4db2ee00852d91846f981c49943d46',
        address: '161.97.96.91:46656',
        provider: 'AM Solutions',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:11556',
        provider: 'WhisperNode 🤐',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'archway-mainnet-seed.autostake.com:26946',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:11556',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'b6c1198fa025ce24d26d90527c5d2b71f9399756',
        address: 'seed-node.mms.team:34656',
        provider: 'MMS',
      },
      {
        id: '6471ac9ff8474373e8055d45b6246fd8c5204890',
        address: 'archway.seed.mzonder.com:10756',
        provider: 'MZONDER',
      },
      {
        id: '261acb73f483d1cace653cb54f7b8815f63b7e56',
        address: 'archway.lgns.net:26656',
        provider: 'Luganodes',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'archway.rpc.kjnodes.com:15659',
        provider: 'kjnodes',
      },
      {
        id: 'bd9332cd0a99f5830ea457a32a56b32790f68716',
        address: '135.181.58.28:27456',
        provider: 'Validatrium',
      },
      {
        id: '6b0ffcce9b59b91ceb8eea5d4599e27707e3604a',
        address: 'seeds.stakeup.tech:10214',
        provider: 'StakeUp',
      },
      {
        id: '17d6cb2601b67ad916d5433a404bfc000b0b6ef1',
        address: 'rpc.archway.nodestake.top:666',
        provider: 'NodeStake',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'archway-mainnet-peer.autostake.com:26946',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'a477bfcef79f283d82e531ec1a6717677c8caf59',
        address: 'peer-archway.mms.team:56108',
        provider: 'MMS',
      },
      {
        id: '218eed47b5472642034e81fdf408dec8b79dcba7',
        address: '138.201.21.197:31656',
        provider: 'StakeTown',
      },
      {
        id: '34999776ce08cb4298a9849609c4b43c78e8be37',
        address: '65.108.238.203:25656',
        provider: '[NODERS]TEAM',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.archway.io',
        provider: 'Archway Foundation',
      },
      {
        address: 'https://archway-mainnet-archive.allthatnode.com:26657',
        provider: 'All That Node',
      },
      {
        address: 'https://m-archway.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      },
      {
        address: 'https://rpc-1.archway.nodes.guru',
        provider: 'Nodes.Guru',
      },
      {
        address: 'https://archway.rpc.silknodes.io/',
        provider: 'Silk Nodes',
      },
      {
        address: 'https://archway.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://rpc-archway.cryptech.com.ua',
        provider: 'cryptech',
      },
      {
        address: 'https://rpc.archway.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://rpc-archway.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://rpc-archway.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://archway-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://m-archway.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      },
      {
        address: 'https://archway-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-archway.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://rpc-archway.mzonder.com',
        provider: 'MZONDER',
      },
      {
        address: 'https://rpc.archway.lgns.net',
        provider: 'Luganodes',
      },
      {
        address: 'https://archway-rpc.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://archway-rpc.0base.dev',
        provider: '0base.vc',
      },
      {
        address: 'https://archway-mainnet.rpc.l0vd.com',
        provider: 'L0vd.com',
      },
      {
        address: 'https://archway-rpc.openbitlab.com',
        provider: 'openbitlab',
      },
      {
        address: 'https://rpc-archway.mzonder.com',
        provider: 'MZONDER',
      },
      {
        address: 'https://rpc-archway.mainnet.validatrium.club',
        provider: 'Validatrium',
      },
      {
        address: 'https://rpc.archway.stakeup.tech',
        provider: 'StakeUp',
      },
      {
        address: 'https://archway.api.trivium.network:26657',
        provider: 'TriviumX | Architech',
      },
      {
        address: 'https://archway-rpc.tienthuattoan.ventures',
        provider: 'TienThuatToan',
      },
      {
        address: 'https://archway-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'https://rpc.archway.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'https://archway-rpc.noders.services',
        provider: '[NODERS]TEAM',
      },
    ],
    rest: [
      {
        address: 'https://api.mainnet.archway.io',
        provider: 'Archway Foundation',
      },
      {
        address: 'https://archway-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://m-archway.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      },
      {
        address: 'https://api-1.archway.nodes.guru',
        provider: 'Nodes.Guru',
      },
      {
        address: 'https://archway.api.silknodes.io/',
        provider: 'Silk Nodes',
      },
      {
        address: 'https://archway.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://api-archway.cryptech.com.ua',
        provider: 'cryptech',
      },
      {
        address: 'https://api.archway.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://rest-archway.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://lcd-archway.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://archway-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://api-archway.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://api-archway.mzonder.com',
        provider: 'MZONDER',
      },
      {
        address: 'https://rest.archway.lgns.net',
        provider: 'Luganodes',
      },
      {
        address: 'https://archway-api.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://archway-rest.0base.dev',
        provider: '0base.vc',
      },
      {
        address: 'https://archway-mainnet.api.l0vd.com',
        provider: 'L0vd.com',
      },
      {
        address: 'https://archway-api.openbitlab.com',
        provider: 'openbitlab',
      },
      {
        address: 'https://api-archway.mainnet.validatrium.club',
        provider: 'Validatrium',
      },
      {
        address: 'https://api.archway.stakeup.tech',
        provider: 'StakeUp',
      },
      {
        address: 'https://archway.api.trivium.network:1317',
        provider: 'TriviumX | Architech',
      },
      {
        address: 'https://archway-mainnet-archive.allthatnode.com:1317',
        provider: 'All That Node',
      },
      {
        address: 'https://archway-api.tienthuattoan.ventures',
        provider: 'TienThuatToan',
      },
      {
        address: 'https://archway-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'https://lcd.archway.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'https://archway-api.noders.services',
        provider: '[NODERS]TEAM',
      },
    ],
    grpc: [
      {
        address: 'grpc.mainnet.archway.io:443',
        provider: 'Archway Foundation',
      },
      {
        address: 'grpc-1.archway.nodes.guru:10690',
        provider: 'Nodes.Guru',
      },
      {
        address: 'archway.grpc.kjnodes.com:15690',
        provider: 'kjnodes',
      },
      {
        address: 'https://grpc-archway.cryptech.com.ua',
        provider: 'cryptech',
      },
      {
        address: 'https://grpc.archway.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'grpc-archway.theamsolutions.info:443',
        provider: 'AM Solutions',
      },
      {
        address: 'archway-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'archway.grpc.nodersteam.com:9090',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'grpc-archway.mms.team:443',
        provider: 'MMS',
      },
      {
        address: 'grpc-archway.mzonder.com:443',
        provider: 'MZONDER',
      },
      {
        address: 'grpc.archway.lgns.net:443',
        provider: 'Luganodes',
      },
      {
        address: 'archway-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'archway-grpc.huginn.tech:4090',
        provider: 'Huginn',
      },
      {
        address: 'archway-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com',
      },
      {
        address: 'archway-grpc.openbitlab.com:443',
        provider: 'openbitlab',
      },
      {
        address: 'grpc-archway.mainnet.validatrium.club:27490',
        provider: 'Validatrium',
      },
      {
        address: 'grpc.archway.stakeup.tech:443',
        provider: 'StakeUp',
      },
      {
        address: 'grpc-archway-mainnet.testnet-pride.com:9096',
        provider: 'TestnetPride',
      },
      {
        address: 'archway.api.trivium.network:9090',
        provider: 'TriviumX | Architech',
      },
      {
        address: 'archway-grpc.tienthuattoan.ventures:9290',
        provider: 'TienThuatToan',
      },
      {
        address: 'archway-grpc.stakeandrelax.net:11590',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'https://grpc.archway.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'archway-grpc.noders.services:13090',
        provider: '[NODERS]TEAM',
      },
    ],
  },
  explorers: [
    {
      kind: 'Nodes Guru',
      url: 'https://archway.explorers.guru/',
      tx_page: 'https://archway.explorers.guru/transaction/${txHash}',
      account_page: 'https://archway.explorers.guru/account/${accountAddress}',
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      url: 'https://exp.utsa.tech/archway',
      tx_page: 'https://exp.utsa.tech/archway/tx/${txHash}',
      account_page: 'https://exp.utsa.tech/archway/account/${accountAddress}',
    },
    {
      kind: 'Mintscan',
      url: 'https://mintscan.io/archway/',
      tx_page: 'https://mintscan.io/archway/transactions/${txHash}',
      account_page: 'https://mintscan.io/archway/accounts/${accountAddress}',
    },
    {
      kind: 'Silk Nodes',
      url: 'https://explorer.silknodes.io/archway',
      tx_page: 'https://explorer.silknodes.io/archway/tx/${txHash}',
      account_page:
        'https://explorer.silknodes.io/archway/account/${accountAddress}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/archway/',
      tx_page: 'https://explorer.nodestake.top/archway/txs/${txHash}',
      account_page:
        'https://explorer.nodestake.top/archway/account/${accountAddress}',
    },
    {
      kind: 'Exploreme',
      url: 'https://archway.exploreme.pro/',
      tx_page: 'https://archway.exploreme.pro/transaction/${txHash}',
      account_page: 'https://archway.exploreme.pro/account/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/archway',
      tx_page: 'https://ping.pub/archway/tx/${txHash}',
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/archway',
      tx_page: 'https://ezstaking.app/archway/txs/${txHash}',
      account_page: 'https://ezstaking.app/archway/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
    },
  ],
};

export const archwayAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'archway',
  assets: [
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom: 'aarch',
          exponent: 0,
        },
        {
          denom: 'uarch',
          exponent: 12,
        },
        {
          denom: 'arch',
          exponent: 18,
        },
      ],
      base: 'aarch',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
      },
      coingecko_id: 'archway',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
        },
      ],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ',
      },
    },
    {
      description: 'ERIS liquid staked ARCH',
      type_asset: 'cw20',
      address:
        'archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
      denom_units: [
        {
          denom:
            'cw20:archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
          exponent: 0,
        },
        {
          denom: 'ampARCH',
          exponent: 6,
        },
      ],
      base: 'cw20:archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
      name: 'ERIS Amplified ARCH',
      display: 'ampARCH',
      symbol: 'ampARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/amparch.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/amparch.png',
        },
      ],
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [
        {
          denom:
            'ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278',
          exponent: 0,
        },
        {
          denom: 'WOSMO',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-1429',
            path: 'transfer/channel-1429/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png',
      },
    },
    {
      description: 'The native token of Vidulum',
      denom_units: [
        {
          denom:
            'ibc/1BCF1FCAFE3568E234787EDFDA12460BD8931B17FE6A729DCD60FAD845558DA1',
          exponent: 0,
          aliases: ['uvdl'],
        },
        {
          denom: 'vdl',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/1BCF1FCAFE3568E234787EDFDA12460BD8931B17FE6A729DCD60FAD845558DA1',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'vidulum',
            base_denom: 'uvdl',
            channel_id: 'channel-24',
          },
          chain: {
            channel_id: 'channel-110',
            path: 'transfer/channel-110/uvdl',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'vidulum',
            base_denom: 'uvdl',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg',
        },
      ],
    },
    {
      description: 'Astrovault AXV',
      type_asset: 'cw20',
      address:
        'archway1ecjefhcf8r60wtfnhwefrxhj9caeqa90fj58cqsaafqveawn6cjs5znd2n',
      denom_units: [
        {
          denom:
            'cw20:archway1ecjefhcf8r60wtfnhwefrxhj9caeqa90fj58cqsaafqveawn6cjs5znd2n',
          exponent: 0,
        },
        {
          denom: 'AXV',
          exponent: 6,
        },
      ],
      base: 'cw20:archway1ecjefhcf8r60wtfnhwefrxhj9caeqa90fj58cqsaafqveawn6cjs5znd2n',
      name: 'Astrovault AXV',
      display: 'AXV',
      symbol: 'AXV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.svg',
        },
      ],
      coingecko_id: 'astrovault',
    },
  ],
};
