import type { Chain, AssetLists, ChainVersions } from '../types';

export const gitopia: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'gitopia',
  status: 'live',
  website: 'https://gitopia.com/',
  network_type: 'mainnet',
  pretty_name: 'Gitopia',
  chain_id: 'gitopia',
  bech32_prefix: 'gitopia',
  daemon_name: 'gitopiad',
  node_home: '$HOME/.gitopia',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ulore',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.0012,
        average_gas_price: 0.0016,
        high_gas_price: 0.0024,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ulore',
      },
    ],
    lock_duration: {
      time: '1814400s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/gitopia/gitopia',
    genesis: {
      genesis_url:
        'https://github.com/gitopia/mainnet/raw/master/genesis.tar.gz',
    },
    recommended_version: 'v3.3.0',
    compatible_versions: ['v3.3.0'],
    cosmos_sdk_version: 'v0.46.13',
    consensus: {
      type: 'cometbft',
      version: 'v0.34.28',
    },
    ibc_go_version: '5.3.1',
    ics_enabled: ['ics20-1'],
    versions: [
      {
        name: 'v2',
        recommended_version: 'v2.1.1',
        compatible_versions: ['v2.0.0', 'v2.1.1'],
        binaries: {
          'linux/amd64':
            'https://server.gitopia.com/releases/Gitopia/gitopia/v2.1.1/gitopiad_2.1.1_linux_amd64.tar.gz',
          'linux/arm64':
            'https://server.gitopia.com/releases/Gitopia/gitopia/v2.1.1/gitopiad_2.1.1_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://server.gitopia.com/releases/Gitopia/gitopia/v2.1.1/gitopiad_2.1.1_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://server.gitopia.com/releases/Gitopia/gitopia/v2.1.1/gitopiad_2.1.1_darwin_arm64.tar.gz',
        },
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: '5.0.0',
        ics_enabled: ['ics20-1'],
        next_version_name: 'v3',
      },
      {
        name: 'v3',
        recommended_version: 'v3.0.1',
        compatible_versions: ['v3.0.1'],
        binaries: {
          'linux/amd64':
            'https://server.gitopia.com/releases/Gitopia/gitopia/v3.0.1/gitopiad_3.0.1_linux_amd64.tar.gz',
          'linux/arm64':
            'https://server.gitopia.com/releases/Gitopia/gitopia/v3.0.1/gitopiad_3.0.1_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://server.gitopia.com/releases/Gitopia/gitopia/v3.0.1/gitopiad_3.0.1_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://server.gitopia.com/releases/Gitopia/gitopia/v3.0.1gitopiad_3.0.1_darwin_arm64.tar.gz',
        },
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34',
        },
        ibc_go_version: '5.3.1',
        ics_enabled: ['ics20-1'],
        next_version_name: 'v3.2.0',
      },
      {
        name: 'v3.2.0',
        recommended_version: 'v3.2.0',
        compatible_versions: ['v3.2.0'],
        proposal: 12,
        height: 6446000,
        cosmos_sdk_version: 'v0.46.13',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28',
        },
        ibc_go_version: '5.3.1',
        ics_enabled: ['ics20-1'],
        next_version_name: 'v3.3.0',
      },
      {
        name: 'v3.3.0',
        recommended_version: 'v3.3.0',
        compatible_versions: ['v3.3.0'],
        proposal: 14,
        height: 6720000,
        cosmos_sdk_version: 'v0.46.13',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28',
        },
        ibc_go_version: '5.3.1',
        ics_enabled: ['ics20-1'],
        next_version_name: '',
      },
    ],
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png',
    },
  ],
  description:
    'Gitopia is the next-generation Code Collaboration Platform fuelled by a decentralized network and interactive token economy. It is designed to optimize the open-source software development process through collaboration, transparency, and incentivization.',
  peers: {
    seeds: [
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:11356',
        provider: 'polkachu',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:11356',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'gitopia-mainnet-seed.autostake.com',
        provider: 'autostake',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:11356',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '187425bc3739daaef8cb1d7cf47d655117396dbe',
        address: 'seed-gitopia.ibs.team:16660',
        provider: 'Inter Blockchain Services',
      },
      {
        id: '9aa8a73ea9364aa3cf7806d4dd25b6aed88d8152',
        address: 'gitopia-seed.mzonder.com:11056',
        provider: 'MZONDER',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'gitopia.rpc.kjnodes.com:14159',
        provider: 'kjnodes',
      },
      {
        id: 'f280239045928af4e1b289d9df4059b7f941777b',
        address: 'seed-node.mms.team:35656',
        provider: 'MMS',
      },
      {
        id: 'a74403b9fbf58ba7538e0a9584510c67a0877beb',
        address: 'rpc.gitopia.nodestake.top:666',
        provider: 'NodeStake',
      },
      {
        id: '6d41d36d54abd868c4cdaf5b956ac047327bff67',
        address: 'seeds-3.anode.team:10260',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: '91706fd6ec45e38661ba7bb7567fc572b738c3ea',
        address: 'seed-gitopia.tothemars.network:11156',
        provider: 'ToTheMars',
      },
    ],
    persistent_peers: [
      {
        id: '8f67a2fcdd7ade970b1983bf1697111d35dfdd6f',
        address: '52.79.199.137:26656',
        provider: 'nodestake',
      },
      {
        id: '4979b96c4453efb66c677876fe0e9109b15a8440',
        address: '65.21.235.144:26656',
        provider: '[NODERS]TEAM',
      },
      {
        id: 'be0c48bbcefb13702008d819ee4292f5afa4dc4c',
        address: '148.251.235.130:11656',
        provider: 'Staketab',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'gitopia-mainnet-peer.autostake.com',
        provider: 'autostake',
      },
      {
        id: 'c6f7524b45ae2d9da2a272858c804fd67a29cf72',
        address: '95.214.53.218:33656',
        provider: 'genznodes',
      },
      {
        id: 'adc84ea4f4c2e758ec83b0487c52a5d2d1ed1d56',
        address: 'seeds-gitopia.hexnodes.co:16656',
        provider: 'Hexnodes',
      },
      {
        id: 'c903e98ce3923865f521151d97f36510157c8bc1',
        address: 'gitopia.peers.stavr.tech:51056',
        provider: '🔥STAVR🔥',
      },
      {
        id: 'fdf51e3445ef8b3b28c313d98c65516b8faf3317',
        address: 'rpc.gitopia.indonode.net:26656',
        provider: 'Indonode',
      },
      {
        id: 'd5525675ceb88d2c4f4df828ec01d237bcc11950',
        address: '138.201.21.197:26656',
        provider: 'StakeTown',
      },
      {
        id: '1c90a7d16090e69fca5d53b6558b2cef7b8f88a8',
        address: '116.203.35.46:36656',
        provider: 'Stake-Take',
      },
      {
        id: 'cc7d9f8d2fa2225063d8d5ac3fe70cbb64d7a0f7',
        address: 'gitopia.ramuchi.tech:20000',
        provider: 'ramuchi.tech',
      },
      {
        id: '4112e75275da1fef14904036a76354a13d40dc8f',
        address: 'peer-gitopia.mms.team:31656',
        provider: 'MMS',
      },
      {
        id: '31ef9b9bceeea15fcafe4a3be0a81c8c04071bc7',
        address: 'mainnet-gitopia.konsortech.xyz:38656',
        provider: 'KonsorTech',
      },
      {
        id: 'abd217aa49d5ee86c271d04feef2cf4c97ff8d55',
        address: 'gitopia.p2p.roomit.xyz:16601',
        provider: 'RoomIT',
      },
      {
        id: 'f93ac5cc7f69e825e87bf32556b4633ce543bb6e',
        address: 'gitopia.peer.stakevillage.net:14156',
        provider: 'Stake Village',
      },
      {
        id: '901c393d17c1e6094cbbc83c34f167a67bb5fab1',
        address: '65.108.70.119:36656',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        id: 'aa26aa0baa5dfc41c126d16d4dc48bb45151d560',
        address: 'gitopia-mainnet.peers.l0vd.com:22656',
        provider: 'L0vd.com ❤️',
      },
      {
        id: 'c160c99489ca08ce5c59af1025460544619acdad',
        address: 'peer-gitopia.tothemars.network:21156',
        provider: 'ToTheMars',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://gitopia-rpc.polkachu.com:443',
        provider: 'polkachu',
      },
      {
        address: 'https://gitopia-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc.gitopia.nodestake.top:443',
        provider: 'nodestake',
      },
      {
        address: 'https://gitopia-rpc.staketab.org:443',
        provider: 'Staketab',
      },
      {
        address: 'https://gitopia-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://m-gitopia.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      },
      {
        address: 'http://gitopia.rpc.m.stavr.tech:51057',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://gitopia-rpc.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://rpc-gitopia.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://gitopia.rpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://gitopia-rpc.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://rpc.gitopia.silentvalidator.com',
        provider: 'silent',
      },
      {
        address: 'https://gitopia-rpc.ramuchi.tech',
        provider: 'ramuchi.tech',
      },
      {
        address: 'https://rpc-gitopia.mzonder.com',
        provider: 'MZONDER',
      },
      {
        address: 'https://gitopia.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://rpc.gitopia.sgtstake.com',
        provider: 'SGTstake',
      },
      {
        address: 'https://mainnet-gitopia-rpc.konsortech.xyz',
        provider: 'KonsorTech',
      },
      {
        address: 'https://rpc.gitopia.quokkastake.io',
        provider: '🐹 Quokka Stake',
      },
      {
        address: 'https://rpc.gitopia.roomit.xyz',
        provider: 'RoomIT',
      },
      {
        address: 'https://gitopia.rpc.moonbridge.team',
        provider: 'Moonbridge',
      },
      {
        address: 'https://gitopia-rpc.stakeangle.com',
        provider: 'StakeAngle',
      },
      {
        address: 'https://gitopia.rpc.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        address: 'https://gitopia.rpc.stakevillage.net',
        provider: 'Stake Village',
      },
      {
        address: 'https://gitopia-rpc.enigma-validator.com/',
        provider: 'Enigma',
      },
      {
        address: 'https://rpc.gitopia.tcnetwork.io/',
        provider: 'TC Network',
      },
      {
        address: 'https://gitopia.nodejumper.io:443',
        provider: 'NODEJUMPER',
      },
      {
        address: 'https://rpc.gitopia.stakeup.tech/',
        provider: 'StakeUp',
      },
      {
        address: 'https://gitopia-mainnet.rpc.l0vd.com:443',
        provider: 'L0vd.com ❤️',
      },
      {
        address: 'https://gitopia-rpc.tothemars.network:443',
        provider: 'ToTheMars',
      },
    ],
    rest: [
      {
        address: 'https://gitopia-api.polkachu.com:443',
        provider: 'polkachu',
      },
      {
        address: 'https://gitopia-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://api.gitopia.nodestake.top:443',
        provider: 'nodestake',
      },
      {
        address: 'https://gitopia-rest.staketab.org',
        provider: 'Staketab',
      },
      {
        address: 'https://gitopia-mainnet-lcd.autostake.com:443',
        provider: 'autostake',
      },
      {
        address: 'https://gitopia-api.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://m-gitopia.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      },
      {
        address: 'https://gitopia.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://gitopia-api.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://lcd-gitopia.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://gitopia.api.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://gitopia-api.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://api.gitopia.silentvalidator.com',
        provider: 'silent',
      },
      {
        address: 'https://gitopia-api.ramuchi.tech',
        provider: 'ramuchi.tech',
      },
      {
        address: 'https://api-gitopia.mzonder.com',
        provider: 'MZONDER',
      },
      {
        address: 'https://gitopia.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://api.gitopia.sgtstake.com/',
        provider: 'SGTstake',
      },
      {
        address: 'https://mainnet-gitopia-api.konsortech.xyz',
        provider: 'KonsorTech',
      },
      {
        address: 'https://api.gitopia.quokkastake.io',
        provider: '🐹 Quokka Stake',
      },
      {
        address: 'https://api.gitopia.roomit.xyz',
        provider: 'RoomIT',
      },
      {
        address: 'https://gitopia.api.moonbridge.team',
        provider: 'Moonbridge',
      },
      {
        address: 'http://gitopia-rpc.stakeangle.com:41317',
        provider: 'StakeAngle',
      },
      {
        address: 'https://gitopia.api.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        address: 'https://gitopia.api.stakevillage.net',
        provider: 'Stake Village',
      },
      {
        address: 'https://gitopia-lcd.enigma-validator.com/',
        provider: 'Enigma',
      },
      {
        address: 'https://rest.gitopia.tcnetwork.io/',
        provider: 'TC Network',
      },
      {
        address: 'https://gitopia.nodejumper.io:1317',
        provider: 'NODEJUMPER',
      },
      {
        address: 'https://api.gitopia.stakeup.tech/',
        provider: 'StakeUp',
      },
      {
        address: 'https://gitopia-mainnet.api.l0vd.com:443',
        provider: 'L0vd.com ❤️',
      },
      {
        address: 'https://gitopia-api.tothemars.network:443',
        provider: 'ToTheMars',
      },
    ],
    grpc: [
      {
        address: 'grpc.gitopia.indonode.net:26090',
        provider: 'indonode',
      },
      {
        address: 'gitopia.grpc.nodersteam.com:9201',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'gitopia-grpc.polkachu.com:11390',
        provider: 'polkachu',
      },
      {
        address: 'services.staketab.com:9410',
        provider: 'Staketab',
      },
      {
        address: 'https://gitopia-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://grpc.gitopia.nodestake.top:443',
        provider: 'nodestake',
      },
      {
        address: 'https://grpc-gitopia.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'http://gitopia.grpc.m.stavr.tech:5123',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'gitopia-grpc.genznodes.dev:33090',
        provider: 'genznodes',
      },
      {
        address: 'https://grpc.gitopia.hexnodes.co:16090',
        provider: 'Hexnodes',
      },
      {
        address: 'https://gitopia.grpc.liveraven.net:443',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://grpc.gitopia.indonode.net:26090',
        provider: 'Indonode',
      },
      {
        address: 'gitopia-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'grpc.gitopia.silentvalidator.com:443',
        provider: 'silent',
      },
      {
        address: 'https://gitopia-grpc.ramuchi.tech:16001',
        provider: 'ramuchi.tech',
      },
      {
        address: 'grpc-gitopia.mzonder.com:443',
        provider: 'MZONDER',
      },
      {
        address: 'gitopia.grpc.kjnodes.com:14190',
        provider: 'kjnodes',
      },
      {
        address: 'grpc.gitopia.roomit.xyz:8443',
        provider: 'RoomIT',
      },
      {
        address: 'https://gitopia.grpc.moonbridge.team',
        provider: 'Moonbridge',
      },
      {
        address: 'http://gitopia-rpc.stakeangle.com:41390',
        provider: 'StakeAngle',
      },
      {
        address: 'https://gitopia.grpc.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        address: 'https://grpc.gitopia.sbgid.com',
        provider: 'kokos',
      },
      {
        address: 'mainnet-gitopia-grpc.konsortech.xyz:38090',
        provider: 'KonsorTech',
      },
      {
        address: 'gitopia.grpc.stakevillage.net:14190',
        provider: 'Stake Village',
      },
      {
        address: 'gitopia.nodejumper.io:9090',
        provider: 'NODEJUMPER',
      },
      {
        address: 'grpc.gitopia.stakeup.tech:443',
        provider: 'StakeUp',
      },
      {
        address: 'gitopia-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com ❤️',
      },
      {
        address: 'gitopia-grpc.tothemars.network:21190',
        provider: 'ToTheMars',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/gitopia',
      tx_page: 'https://ping.pub/gitopia/tx/${txHash}',
      account_page: 'https://ping.pub/gitopia/account/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Gitopia-M',
      tx_page: 'https://explorer.stavr.tech/Gitopia-M/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Gitopia-M/account/${accountAddress}',
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      url: 'https://exp.utsa.tech/gitopia',
      tx_page: 'https://exp.utsa.tech/gitopia/tx/${txHash}',
      account_page: 'https://exp.utsa.tech/gitopia/account/${accountAddress}',
    },
    {
      kind: 'Nodeist',
      url: 'https://exp.nodeist.net/gitopia',
      tx_page: 'https://exp.nodeist.net/gitopia/tx/${txHash}',
      account_page: 'https://exp.nodeist.net/gitopia/account/${accountAddress}',
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/gitopia',
      tx_page: 'https://explorer.stake-take.com/gitopia/tx/${txHash}',
      account_page:
        'https://explorer.stake-take.com/gitopia/account/${accountAddress}',
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/gitopia',
      tx_page: 'https://explorer.nodexcapital.com/gitopia/tx/${txHash}',
      account_page:
        'https://explorer.nodexcapital.com/gitopia/account/${accountAddress}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/gitopia',
      tx_page: 'https://explorer.tcnetwork.io/gitopia/transaction/${txHash}',
      account_page:
        'https://explorer.tcnetwork.io/gitopia/account/${accountAddress}',
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/gitopia',
      tx_page: 'https://explorer.nodestake.top/gitopia/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.top/gitopia/account/${accountAddress}',
    },
    {
      kind: 'RoomIT',
      url: 'https://explorer.tendermint.roomit.xyz/gitopia',
      tx_page:
        'https://explorer.tendermint.roomit.xyz/gitopia/transaction/${txHash}',
      account_page:
        'https://explorer.tendermint.roomit.xyz/gitopia/account/${accountAddress}',
    },
    {
      kind: 'Moonbridge',
      url: 'https://explorer.moonbridge.team/gitopia',
      tx_page: 'https://explorer.moonbridge.team/gitopia/tx/${txHash}',
      account_page:
        'https://explorer.moonbridge.team/gitopia/account/${accountAddress}',
    },
    {
      kind: 'KonsorTech',
      url: 'https://explorer.konsortech.xyz/gitopia',
      tx_page: 'https://explorer.konsortech.xyz/gitopia/tx/${txHash}',
      account_page:
        'https://explorer.konsortech.xyz/gitopia/account/${accountAddress}',
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/gitopia',
      tx_page: 'https://exp.stakevillage.net/gitopia/tx/${txHash}',
      account_page:
        'https://exp.stakevillage.net/gitopia/account/${accountAddress}',
    },
    {
      kind: 'AlxVoy ⚡ ANODE.TEAM',
      url: 'https://main.anode.team/gitopia',
      tx_page: 'https://main.anode.team/gitopia/tx/${txHash}',
      account_page: 'https://main.anode.team/gitopia/account/${accountAddress}',
    },
    {
      kind: 'L0vd.com ❤️',
      url: 'https://chain-services.l0vd.com/mainnets/gitopia',
      tx_page: 'https://chain-services.l0vd.com/mainnets/gitopia/tx/${txHash}',
      account_page:
        'https://chain-services.l0vd.com/mainnets/gitopia/account/${accountAddress}',
    },
    {
      kind: 'ToTheMars',
      url: 'https://explorer.tothemars.network/gitopia',
      tx_page: 'https://explorer.tothemars.network/gitopia/tx/${txHash}',
      account_page:
        'https://explorer.tothemars.network/gitopia/account/${accountAddress}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png',
  },
};

export const gitopiaAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'gitopia',
  assets: [
    {
      description: 'The native token of Gitopia',
      denom_units: [
        {
          denom: 'ulore',
          exponent: 0,
        },
        {
          denom: 'LORE',
          exponent: 6,
        },
      ],
      base: 'ulore',
      name: 'LORE',
      display: 'LORE',
      symbol: 'LORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg',
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png',
        },
      ],
      coingecko_id: 'gitopia',
    },
  ],
};
