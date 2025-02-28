import type { Chain, AssetList, Versions } from '../types';

export const juno: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'juno',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.junonetwork.io/',
  pretty_name: 'Juno',
  chain_id: 'juno-1',
  bech32_prefix: 'juno',
  daemon_name: 'junod',
  node_home: '$HOME/.juno',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ujuno',
        fixed_min_gas_price: 0.075,
        low_gas_price: 0.075,
        average_gas_price: 0.1,
        high_gas_price: 0.125,
      },
      {
        denom:
          'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        fixed_min_gas_price: 0.003,
        low_gas_price: 0.003,
        average_gas_price: 0.0035,
        high_gas_price: 0.004,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ujuno',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/CosmosContracts/juno',
    recommended_version: 'v22.0.0',
    compatible_versions: ['v22.0.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/CosmosContracts/juno/releases/download/v22.0.0/junod',
    },
    cosmos_sdk_version: 'v0.47.11-0.20240417094812-f556fd956fb1',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5',
    },
    cosmwasm_version: 'v0.45.0',
    cosmwasm_enabled: true,
    ibc_go_version: 'v7.4.0',
    genesis: {
      genesis_url: 'https://download.dimi.sh/juno-phoenix2-genesis.tar.gz',
    },
    versions: [
      {
        name: 'v13',
        proposal: 271,
        height: 7374801,
        recommended_version: 'v13.0.0',
        compatible_versions: ['v13.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v13.0.0/junod',
        },
        cosmos_sdk_version: '0.45.14',
        consensus: {
          type: 'tendermint',
          version: 'informalsystems/tendermint v0.34.26',
        },
        cosmwasm_version: '0.30.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v4.3.0',
        next_version_name: 'v14',
      },
      {
        name: 'v14',
        proposal: 282,
        height: 7875721,
        recommended_version: 'v14.1.0',
        compatible_versions: ['v14.0.0', 'v14.1.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v14.1.0/junod',
        },
        cosmos_sdk_version: '0.45.15',
        consensus: {
          type: 'cometbft',
          version: 'mev-cometbft v0.34.27-mev.18',
        },
        cosmwasm_version: '0.31.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v4.3.0',
        next_version_name: 'v15',
      },
      {
        name: 'v15',
        proposal: 295,
        height: 8577241,
        recommended_version: 'v15.0.0',
        compatible_versions: ['v15.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v15.0.0/junod',
        },
        cosmos_sdk_version: '0.45.16',
        consensus: {
          type: 'cometbft',
          version: 'mev-cometbft v0.34.27-mev.18',
        },
        cosmwasm_version: '0.31.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v4.3.1',
        next_version_name: 'v16',
      },
      {
        name: 'v16',
        proposal: 311,
        height: 9481382,
        recommended_version: 'v16.0.2',
        compatible_versions: ['v16.0.0', 'v16.0.2'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v16.0.2/junod',
        },
        cosmos_sdk_version: '0.47.3',
        consensus: {
          type: 'cometbft',
          version: '0.37.2',
        },
        cosmwasm_version: '0.40.2',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.2.0',
        next_version_name: 'v17',
      },
      {
        name: 'v17',
        proposal: 317,
        height: 10078449,
        recommended_version: 'v17.1.1',
        compatible_versions: ['v17.0.0', 'v17.1.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v17.1.1/junod',
        },
        cosmos_sdk_version: '0.47.5',
        consensus: {
          type: 'cometbft',
          version: '0.37.2',
        },
        cosmwasm_version: '0.41.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.0',
        next_version_name: 'v18',
      },
      {
        name: 'v18',
        proposal: 325,
        height: 12265007,
        recommended_version: 'v18.1.0',
        compatible_versions: ['v18.1.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v18.1.0/junod',
        },
        cosmos_sdk_version: '0.47.5',
        consensus: {
          type: 'cometbft',
          version: '0.37.2',
        },
        cosmwasm_version: '0.45.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.1',
        next_version_name: 'v19',
      },
      {
        name: 'v19',
        proposal: 333,
        height: 13678871,
        recommended_version: 'v20.0.0',
        compatible_versions: ['v20.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v20.0.0/junod',
        },
        cosmos_sdk_version: 'v0.47.6',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        cosmwasm_version: 'v0.45.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.1',
        next_version_name: 'v21',
      },
      {
        name: 'v21',
        proposal: 340,
        height: 14556500,
        recommended_version: 'v21.0.1',
        compatible_versions: ['v21.0.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/kintsugi-tech/juno/releases/download/v21.0.1/junod',
        },
        cosmos_sdk_version: 'v0.47.6',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        cosmwasm_version: 'v0.45.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.1',
        next_version_name: 'v22',
      },
      {
        name: 'v22',
        proposal: 347,
        height: 15873890,
        recommended_version: 'v22.0.0',
        compatible_versions: ['v22.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v22.0.0/junod',
        },
        cosmos_sdk_version: 'v0.47.11-0.20240417094812-f556fd956fb1',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5',
        },
        cosmwasm_version: 'v0.45.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.4.0',
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
  },
  description:
    'Juno is a completely community owned and operated smart contract platform.',
  peers: {
    seeds: [
      {
        id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
        address: 'seed.rhinostake.com:12656',
        provider: 'RHINO',
      },
      {
        id: '90b09362d9ce3845096c4938eea0dba682b0ad2c',
        address: 'juno-seed-new.blockpane.com:26656',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:12656',
        provider: 'Polkachu',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:12656',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ea67180befe4d9ca71142d21ada8ff58cc08f71c',
        address: 'seeds.goldenratiostaking.net:1627',
        provider: 'Golden Ratio Staking',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'juno-mainnet-seed.autostake.com:27136',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:12656',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '509f6dbae3133a9df177edea051b31e1210b117e',
        address: 'seed-juno-01.stakeflow.io:2307',
        provider: 'Stakeflow',
      },
      {
        id: '77c33f62d34c20a0e795240f4548ab741ea558d9',
        address: '138.201.21.121:24956',
        provider: 'Validatrium',
      },
      {
        id: 'cfc31e41e66527a3b12b65c06aa3eac58e27c6ab',
        address: 'seed.juno.validatus.com:3000',
        provider: 'Validatus',
      },
    ],
    persistent_peers: [
      {
        id: '7f593757c0cde8972ce929381d8ac8e446837811',
        address: '178.18.255.244:26656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'juno-mainnet-peer.autostake.com:27136',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '3ee2034cf0180e4d50f7b3ed952472add3316faf',
        address: 'juno.peer.stavr.tech:1066',
        provider: '🔥STAVR🔥',
      },
      {
        id: '509f6dbae3133a9df177edea051b31e1210b117e',
        address: 'peer-juno-01.stakeflow.io:2307',
        provider: 'Stakeflow',
      },
      {
        id: '397281b9fa745482127093f08ac05724c2b8d6f8',
        address: '65.108.195.213:33656',
        provider: 'StakeTown',
      },
      {
        id: '77c33f62d34c20a0e795240f4548ab741ea558d9',
        address: '138.201.21.121:24956',
        provider: 'Validatrium',
      },
      {
        id: '73ef1c0f9bc77fd925decf7fa41f22a35b5dc76d',
        address: 'juno.declab.pro:26612',
        provider: 'Decloud Nodes Lab',
      },
      {
        id: '637077d431f618181597706810a65c826524fd74',
        address: 'juno.rpc.nodeshub.online:12656',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-juno.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://rpc-juno.itastakers.com',
        provider: 'itastakers',
      },
      {
        address: 'http://juno.rpc.m.stavr.tech:1067',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc-juno.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://juno-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://juno-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-juno.pupmos.network',
        provider: 'PUPMØS',
      },
      {
        address: 'https://rpc-juno.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://rpc-juno-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://rpc.juno.chaintools.tech/',
        provider: 'ChainTools',
      },
      {
        address: 'https://juno-rpc.kleomedes.network',
        provider: 'Kleomedes',
      },
      {
        address: 'https://juno-rpc.icycro.org',
        provider: 'IcyCRO 🧊',
      },
      {
        address: 'https://rpc.juno.bh.rocks',
        provider: 'BlockHunters 🎯',
      },
      {
        address: 'https://juno-rpc.kingnodes.com',
        provider: 'kingnodes 👑',
      },
      {
        address: 'https://juno-rpc.reece.sh',
        provider: 'Reecepbcups',
      },
      {
        address: 'https://juno-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥',
      },
      {
        address: 'https://rpc-juno.architectnodes.com',
        provider: 'Architect Nodes',
      },
      {
        address: 'https://rpc-juno-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://rpc-juno.validavia.me',
        provider: 'Validavia',
      },
      {
        address: 'https://juno-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://juno-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://juno-rpc.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://rpc-juno.mainnet.validatrium.club:443',
        provider: 'Validatrium',
      },
      {
        address: 'https://juno-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'https://rpc.juno.validatus.com',
        provider: 'Validatus',
      },
      {
        address: 'https://rpc.juno.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'https://juno-rpc.cogwheel.zone',
        provider: 'Cogwheel',
      },
      {
        address: 'https://juno.declab.pro:26610',
        provider: 'Decloud Nodes Lab',
      },
      {
        address: 'https://juno.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
    rest: [
      {
        address: 'https://lcd-juno.itastakers.com',
        provider: 'itastakers',
      },
      {
        address: 'https://rest-juno.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://juno-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://juno.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://api-juno.pupmos.network',
        provider: 'PUPMØS',
      },
      {
        address: 'https://api-juno-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://api.juno.chaintools.tech/',
        provider: 'ChainTools',
      },
      {
        address: 'https://juno-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://api-juno.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://juno-api.kleomedes.network',
        provider: 'Kleomedes',
      },
      {
        address: 'https://api.juno.bh.rocks',
        provider: 'BlockHunters 🎯',
      },
      {
        address: 'https://juno-rest.kingnodes.com',
        provider: 'kingnodes 👑',
      },
      {
        address: 'https://juno-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥',
      },
      {
        address: 'https://rest-juno.architectnodes.com',
        provider: 'Architect Nodes',
      },
      {
        address: 'https://api-juno-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://lcd-juno.validavia.me',
        provider: 'Validavia',
      },
      {
        address: 'https://juno-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://juno-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://juno-api.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://lcd-juno.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://juno-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'https://api.juno.validatus.com',
        provider: 'Validatus',
      },
      {
        address: 'https://lcd.juno.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'https://juno-api.cogwheel.zone',
        provider: 'Cogwheel',
      },
      {
        address: 'https://juno.declab.pro:443',
        provider: 'Decloud Nodes Lab',
      },
      {
        address: 'https://juno.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
    grpc: [
      {
        address: 'grpc-juno-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'juno-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'juno-grpc.polkachu.com:12690',
        provider: 'Polkachu',
      },
      {
        address: 'http://juno.grpc.m.stavr.tech:504',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://juno-grpc.kingnodes.com:443',
        provider: 'kingnodes 👑',
      },
      {
        address: 'grpc-juno.cosmos-spaces.cloud:4830',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'http://juno-grpc.stakeandrelax.net:12690',
        provider: 'Stake&Relax Validator 🦥',
      },
      {
        address: 'grpc-juno.architectnodes.com:1443',
        provider: 'Architect Nodes',
      },
      {
        address: 'juno-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'http://167.235.211.168:9091',
        provider: 'CommunityStaking',
      },
      {
        address: 'grpc-juno-01.stakeflow.io:2302',
        provider: 'Stakeflow',
      },
      {
        address: 'juno-grpc.w3coins.io:12690',
        provider: 'w3coins',
      },
      {
        address: 'juno-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'juno-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: '138.201.21.121:24990',
        provider: 'Validatrium',
      },
      {
        address: 'juno-grpc.stakeandrelax.net:12690',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'grpc.juno.validatus.com',
        provider: 'Validatus',
      },
      {
        address: 'https://grpc.juno.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'juno-grpc.cogwheel.zone:443',
        provider: 'Cogwheel',
      },
      {
        address: 'https://juno.declab.pro:9007',
        provider: 'Decloud Nodes Lab',
      },
      {
        address: 'https://juno.grpc.nodeshub.online',
        provider: 'Nodes Hub',
      },
    ],
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/juno',
      tx_page: 'https://ezstaking.app/juno/txs/${txHash}',
      account_page: 'https://ezstaking.app/juno/account/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/juno',
      tx_page: 'https://ping.pub/juno/tx/${txHash}',
    },
    {
      kind: 'explorers.guru',
      url: 'https://juno.explorers.guru',
      tx_page: 'https://juno.explorers.guru/transaction/${txHash}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/juno',
      tx_page: 'https://www.mintscan.io/juno/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/juno/accounts/${accountAddress}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/juno',
      tx_page: 'https://atomscan.com/juno/transactions/${txHash}',
      account_page: 'https://atomscan.com/juno/accounts/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/juno',
      tx_page: 'https://explorer.stavr.tech/juno/transactions/${txHash}',
      account_page:
        'https://explorer.stavr.tech/juno/accounts/${accountAddress}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/juno',
      tx_page: 'https://explorer.tcnetwork.io/juno/transaction/${txHash}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/juno',
      account_page: 'https://stakeflow.io/juno/accounts/${accountAddress}',
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Juno',
      tx_page: 'https://explorer.declab.pro/Juno/tx/${txHash}',
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/juno/',
      tx_page: 'https://explorer.nodeshub.online/juno/tx/${txHash}',
      account_page:
        'https://explorer.nodeshub.online/juno/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
    },
  ],
};

export const junoAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'juno',
  assets: [
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom: 'ujuno',
          exponent: 0,
        },
        {
          denom: 'juno',
          exponent: 6,
        },
      ],
      base: 'ujuno',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
      },
      coingecko_id: 'juno-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
        },
      ],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork',
      },
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
        },
        {
          denom: 'atom',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'ATOM on Juno',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-207',
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uatom',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
      },
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      denom_units: [
        {
          denom:
            'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
          exponent: 0,
        },
        {
          denom: 'neta',
          exponent: 6,
        },
      ],
      base: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg',
      },
      coingecko_id: 'neta',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg',
        },
      ],
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      denom_units: [
        {
          denom:
            'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
          exponent: 0,
        },
        {
          denom: 'marble',
          exponent: 3,
        },
      ],
      base: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg',
      },
      coingecko_id: 'marble',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg',
        },
      ],
    },
    {
      description:
        'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      type_asset: 'cw20',
      address:
        'juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      denom_units: [
        {
          denom:
            'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
          exponent: 0,
        },
        {
          denom: 'hope',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg',
      },
      coingecko_id: 'hope-galaxy',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg',
        },
      ],
    },
    {
      description:
        'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      type_asset: 'cw20',
      address:
        'juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      denom_units: [
        {
          denom:
            'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
          exponent: 0,
        },
        {
          denom: 'rac',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      name: 'Racoon',
      display: 'rac',
      symbol: 'RAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg',
      },
      coingecko_id: 'racoon',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg',
        },
      ],
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      denom_units: [
        {
          denom:
            'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
          exponent: 0,
        },
        {
          denom: 'block',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg',
        },
      ],
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      type_asset: 'cw20',
      address:
        'juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
      denom_units: [
        {
          denom:
            'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
          exponent: 0,
          aliases: ['dhk'],
        },
      ],
      base: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg',
        },
      ],
    },
    {
      description: 'Token governance for Junoswap',
      type_asset: 'cw20',
      address:
        'juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      denom_units: [
        {
          denom:
            'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
          exponent: 0,
        },
        {
          denom: 'raw',
          exponent: 6,
        },
      ],
      base: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg',
      },
      coingecko_id: 'junoswap-raw-dao',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg',
        },
      ],
    },
    {
      description:
        'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      type_asset: 'cw20',
      address:
        'juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
      denom_units: [
        {
          denom:
            'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
          exponent: 0,
        },
        {
          denom: 'asvt',
          exponent: 6,
        },
      ],
      base: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png',
        },
      ],
    },
    {
      description:
        'IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno network.',
      type_asset: 'cw20',
      address:
        'juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
      denom_units: [
        {
          denom:
            'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
          exponent: 0,
        },
        {
          denom: 'hns',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
      name: 'IBC HNS (Handshake)',
      display: 'hns',
      symbol: 'HNS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg',
        },
      ],
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      type_asset: 'cw20',
      address:
        'juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      denom_units: [
        {
          denom:
            'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
          exponent: 0,
        },
        {
          denom: 'joe',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png',
        },
      ],
    },
    {
      description: 'Governance Token for Digital Land Acquisition DAO',
      type_asset: 'cw20',
      address:
        'juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
      denom_units: [
        {
          denom:
            'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
          exponent: 0,
        },
        {
          denom: 'dla',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
      name: 'Digital Land Acquisition DAO',
      display: 'dla',
      symbol: 'DLA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg',
        },
      ],
    },
    {
      description: 'DeFi gaming platform built on Juno',
      type_asset: 'cw20',
      address:
        'juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      denom_units: [
        {
          denom:
            'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
          exponent: 0,
        },
        {
          denom: 'glto',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg',
        },
      ],
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      type_asset: 'cw20',
      address:
        'juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
      denom_units: [
        {
          denom:
            'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
          exponent: 0,
        },
        {
          denom: 'gkey',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg',
        },
      ],
    },
    {
      description: 'The native token cw20 for BlackHole on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
      denom_units: [
        {
          denom:
            'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
          exponent: 0,
        },
        {
          denom: 'hole',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
      name: 'BlackHole',
      display: 'hole',
      symbol: 'HOLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg',
        },
      ],
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      type_asset: 'cw20',
      address:
        'juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      denom_units: [
        {
          denom:
            'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
          exponent: 0,
        },
        {
          denom: 'sejuno',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg',
      },
      coingecko_id: 'stakeeasy-juno-derivative',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg',
        },
      ],
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      type_asset: 'cw20',
      address:
        'juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      denom_units: [
        {
          denom:
            'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
          exponent: 0,
        },
        {
          denom: 'bjuno',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg',
      },
      coingecko_id: 'stakeeasy-bjuno',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg',
        },
      ],
    },
    {
      description:
        'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      type_asset: 'cw20',
      address:
        'juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
      denom_units: [
        {
          denom:
            'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
          exponent: 0,
        },
        {
          denom: 'solar',
          exponent: 6,
        },
      ],
      base: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg',
        },
      ],
    },
    {
      description: 'StakeEasy governance token',
      type_asset: 'cw20',
      address:
        'juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      denom_units: [
        {
          denom:
            'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
          exponent: 0,
        },
        {
          denom: 'seasy',
          exponent: 6,
        },
      ],
      base: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg',
        },
      ],
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      denom_units: [
        {
          denom:
            'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
          exponent: 0,
        },
        {
          denom: 'muse',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png',
        },
      ],
    },
    {
      description: 'The native token cw20 for Loop Finance on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      denom_units: [
        {
          denom:
            'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
          exponent: 0,
        },
        {
          denom: 'loop',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      name: 'Loop Finance',
      display: 'loop',
      symbol: 'LOOP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png',
      },
      coingecko_id: 'loop',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png',
        },
      ],
    },
    {
      description: 'The deprecated cw20 token for Fanfury on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
      denom_units: [
        {
          denom:
            'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
          exponent: 0,
        },
        {
          denom: 'fury',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
      name: 'FURY.legacy',
      display: 'fury',
      symbol: 'FURY.legacy',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png',
      },
      coingecko_id: 'fanfury',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png',
        },
      ],
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
      denom_units: [
        {
          denom:
            'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
          exponent: 0,
        },
        {
          denom: 'phmn',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg',
      },
      coingecko_id: 'posthuman',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg',
        },
      ],
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
      denom_units: [
        {
          denom:
            'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
          exponent: 0,
        },
        {
          denom: 'hopers',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg',
      },
      coingecko_id: 'hopers-io',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg',
        },
      ],
    },
    {
      description: 'RED',
      type_asset: 'cw20',
      address:
        'juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
      denom_units: [
        {
          denom:
            'cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
          exponent: 0,
        },
        {
          denom: 'red',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
      name: 'Red',
      display: 'red',
      symbol: 'RED',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png',
        },
      ],
    },
    {
      description: 'BLUE',
      type_asset: 'cw20',
      address:
        'juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
      denom_units: [
        {
          denom:
            'cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
          exponent: 0,
        },
        {
          denom: 'blue',
          exponent: 6,
        },
      ],
      base: 'cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
      name: 'Blue',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png',
        },
      ],
    },
    {
      description: 'WYND DAO Governance Token',
      type_asset: 'cw20',
      address:
        'juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
      denom_units: [
        {
          denom:
            'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
          exponent: 0,
        },
        {
          denom: 'wynd',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg',
      },
      coingecko_id: 'wynd',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg',
        },
      ],
    },
    {
      description: 'Bored APE IBC club token',
      type_asset: 'cw20',
      address:
        'juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
      denom_units: [
        {
          denom:
            'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
          exponent: 0,
        },
        {
          denom: 'banana',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
      name: 'Banana Token',
      display: 'banana',
      symbol: 'BANANA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png',
        },
      ],
    },
    {
      description: 'nRide Token',
      type_asset: 'cw20',
      address:
        'juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
      denom_units: [
        {
          denom:
            'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
          exponent: 0,
        },
        {
          denom: 'nride',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg',
        },
      ],
    },
    {
      description: 'Signal Art and Gaming on Juno',
      type_asset: 'cw20',
      address:
        'juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
      denom_units: [
        {
          denom:
            'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
          exponent: 0,
        },
        {
          denom: 'sgnl',
          exponent: 6,
        },
      ],
      base: 'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png',
        },
      ],
    },
    {
      description:
        'Governance and utility token for the Junø Apes NFT platform on Juno',
      type_asset: 'cw20',
      address:
        'juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
      denom_units: [
        {
          denom:
            'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
          exponent: 0,
        },
        {
          denom: 'jape',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png',
        },
      ],
    },
    {
      description:
        'A community meme token with a fantasy fiction storyline and comic based NFTs on Juno',
      type_asset: 'cw20',
      address:
        'juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
      denom_units: [
        {
          denom:
            'cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
          exponent: 0,
        },
        {
          denom: 'catom',
          exponent: 6,
        },
      ],
      base: 'cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
      name: 'Catom',
      display: 'catom',
      symbol: 'CATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png',
        },
      ],
    },
    {
      description:
        'Utility token of Howl.social, an on chain micro-blogging platform on Juno',
      type_asset: 'cw20',
      address:
        'juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
      denom_units: [
        {
          denom:
            'cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
          exponent: 0,
        },
        {
          denom: 'howl',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
      name: 'Howl',
      display: 'howl',
      symbol: 'HOWL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png',
        },
      ],
    },
    {
      description:
        'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      type_asset: 'cw20',
      address:
        'juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
      denom_units: [
        {
          denom:
            'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
          exponent: 0,
        },
        {
          denom: 'fox',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png',
        },
      ],
    },
    {
      description: 'Evmos Guardians governance token.',
      type_asset: 'cw20',
      address:
        'juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
      denom_units: [
        {
          denom:
            'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
          exponent: 0,
        },
        {
          denom: 'grdn',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png',
        },
      ],
    },
    {
      description: 'Mini Punks Token',
      type_asset: 'cw20',
      address:
        'juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
      denom_units: [
        {
          denom:
            'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
          exponent: 0,
        },
        {
          denom: 'mnpu',
          exponent: 6,
        },
      ],
      base: 'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg',
        },
      ],
    },
    {
      description: 'Kleomedes Token',
      extended_description:
        'Kleomedes is an infrastructure provider that self-hosts nodes that validate IBC networks. We are active in supporting the chains we validate through providing infrastructure support in the form of RPC endpoints and relayers.\n\nAs a DAO, we have a community of delegators who are active in the discussion of governance on all the chains we validate. We are one of the only validators in the Cosmos Ecosystem that places 100% of profits under the control of DAO governance.\n\nWe support innovation in the Cosmos Ecosystem by funding and supporting projects that we believe, support the growth and decentralization of the networks we validate.',
      type_asset: 'cw20',
      address:
        'juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
      denom_units: [
        {
          denom:
            'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
          exponent: 0,
        },
        {
          denom: 'kleo',
          exponent: 6,
        },
      ],
      base: 'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png',
        },
      ],
    },
    {
      description: 'Sikoba Governance Token',
      type_asset: 'cw20',
      address:
        'juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
      denom_units: [
        {
          denom:
            'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
          exponent: 0,
        },
        {
          denom: 'sikoba',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg',
        },
      ],
    },
    {
      description: 'Shiba Cosmos',
      type_asset: 'cw20',
      address:
        'juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
      denom_units: [
        {
          denom:
            'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
          exponent: 0,
        },
        {
          denom: 'shibac',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png',
        },
      ],
    },
    {
      description: 'Celestims',
      type_asset: 'cw20',
      address:
        'juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
      denom_units: [
        {
          denom:
            'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
          exponent: 0,
        },
        {
          denom: 'clst',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png',
        },
      ],
    },
    {
      description:
        'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
      type_asset: 'cw20',
      address:
        'juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
      denom_units: [
        {
          denom:
            'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
          exponent: 0,
        },
        {
          denom: 'watr',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png',
        },
      ],
    },
    {
      description: 'An innovative DAO dedicated to housing the most vulnerable',
      type_asset: 'cw20',
      address:
        'juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
      denom_units: [
        {
          denom:
            'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
          exponent: 0,
        },
        {
          denom: 'casa',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png',
        },
      ],
    },
    {
      description:
        'Social Impact DAO providing showers, meals, and vehicles to the homeless',
      type_asset: 'cw20',
      address:
        'juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
      denom_units: [
        {
          denom:
            'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
          exponent: 0,
        },
        {
          denom: 'summit',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png',
        },
      ],
    },
    {
      description:
        'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
      type_asset: 'cw20',
      address:
        'juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
      denom_units: [
        {
          denom:
            'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
          exponent: 0,
        },
        {
          denom: 'manna',
          exponent: 6,
        },
      ],
      base: 'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png',
        },
      ],
    },
    {
      description: 'Social Impact DAO focused on youth empowerment',
      type_asset: 'cw20',
      address:
        'juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
      denom_units: [
        {
          denom:
            'cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
          exponent: 0,
        },
        {
          denom: 'empwr',
          exponent: 6,
        },
      ],
      base: 'cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
      name: 'EMPWR',
      display: 'empwr',
      symbol: 'EMPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png',
        },
      ],
    },
    {
      description: 'Join us in fighting against world hunger',
      type_asset: 'cw20',
      address:
        'juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
      denom_units: [
        {
          denom:
            'cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
          exponent: 0,
        },
        {
          denom: 'middle',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
      name: 'Middle',
      display: 'middle',
      symbol: 'MIDDLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png',
        },
      ],
    },
    {
      description:
        'Social Impact DAO taking a wholistic approach to helping abused and mentally ill women and children',
      type_asset: 'cw20',
      address:
        'juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
      denom_units: [
        {
          denom:
            'cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
          exponent: 0,
        },
        {
          denom: 'sunset',
          exponent: 6,
        },
      ],
      base: 'cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
      name: 'Sunset',
      display: 'sunset',
      symbol: 'SUNSET',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png',
        },
      ],
    },
    {
      description:
        'Social Impact DAO dedicated to helping restore and protect our environment',
      type_asset: 'cw20',
      address:
        'juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
      denom_units: [
        {
          denom:
            'cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
          exponent: 0,
        },
        {
          denom: 'tree',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
      name: 'Living Tree',
      display: 'tree',
      symbol: 'TREE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png',
        },
      ],
    },
    {
      description: "Evmos Guardians' Invaders DAO token.",
      type_asset: 'cw20',
      address:
        'juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
      denom_units: [
        {
          denom:
            'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
          exponent: 0,
        },
        {
          denom: 'invdrs',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png',
        },
      ],
    },
    {
      description: 'Apemos',
      type_asset: 'cw20',
      address:
        'juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
      denom_units: [
        {
          denom:
            'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
          exponent: 0,
        },
        {
          denom: 'apemos',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png',
        },
      ],
    },
    {
      description: 'The First Doge on Osmosis',
      type_asset: 'cw20',
      address:
        'juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
      denom_units: [
        {
          denom:
            'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
          exponent: 0,
        },
        {
          denom: 'osdoge',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png',
        },
      ],
    },
    {
      description: 'Doge Apr',
      type_asset: 'cw20',
      address:
        'juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
      denom_units: [
        {
          denom:
            'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
          exponent: 0,
        },
        {
          denom: 'doga',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png',
        },
      ],
    },
    {
      description: 'Osmo Pepe',
      type_asset: 'cw20',
      address:
        'juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
      denom_units: [
        {
          denom:
            'cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
          exponent: 0,
        },
        {
          denom: 'pepe',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
      name: 'Osmo Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png',
        },
      ],
    },
    {
      description: 'Catmos',
      type_asset: 'cw20',
      address:
        'juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
      denom_units: [
        {
          denom:
            'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
          exponent: 0,
        },
        {
          denom: 'catmos',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png',
        },
      ],
    },
    {
      description: 'Spacer',
      type_asset: 'cw20',
      address:
        'juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
      denom_units: [
        {
          denom:
            'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
          exponent: 0,
        },
        {
          denom: 'spacer',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png',
        },
      ],
    },
    {
      description: 'Light: LumenX community DAO treasury token',
      type_asset: 'cw20',
      address:
        'juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
      denom_units: [
        {
          denom:
            'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
          exponent: 0,
        },
        {
          denom: 'light',
          exponent: 9,
        },
      ],
      base: 'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png',
        },
      ],
    },
    {
      description: 'Mille: the 1000th token on osmosis',
      type_asset: 'cw20',
      address:
        'juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
      denom_units: [
        {
          denom:
            'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
          exponent: 0,
        },
        {
          denom: 'mile',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png',
        },
      ],
    },
    {
      description: 'Void',
      type_asset: 'cw20',
      address:
        'juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
      denom_units: [
        {
          denom:
            'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
          exponent: 0,
        },
        {
          denom: 'void',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png',
        },
      ],
    },
    {
      description: 'Silica',
      type_asset: 'cw20',
      address:
        'juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
      denom_units: [
        {
          denom:
            'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
          exponent: 0,
        },
        {
          denom: 'silica',
          exponent: 6,
        },
      ],
      base: 'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png',
        },
      ],
    },
    {
      description: 'Pepec',
      type_asset: 'cw20',
      address:
        'juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
      denom_units: [
        {
          denom:
            'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
          exponent: 0,
        },
        {
          denom: 'pepec',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png',
        },
      ],
    },
    {
      description: 'Palantin',
      type_asset: 'cw20',
      address:
        'juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
      denom_units: [
        {
          denom:
            'cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
          exponent: 0,
        },
        {
          denom: 'pltn',
          exponent: 6,
        },
      ],
      base: 'cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
      name: 'Palantin',
      display: 'pltn',
      symbol: 'PLTN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png',
        },
      ],
    },
    {
      description: 'Propose. Vote. Build.',
      type_asset: 'cw20',
      address:
        'juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
      denom_units: [
        {
          denom:
            'cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
          exponent: 0,
        },
        {
          denom: 'yfd',
          exponent: 6,
        },
      ],
      base: 'cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
      name: 'Y-Foundry DAO',
      display: 'yfd',
      symbol: 'YFD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX',
          exponent: 0,
        },
        {
          denom: 'nexx',
          exponent: 6,
        },
      ],
      address: 'juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh',
      base: 'factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX',
      name: 'NEXX GEN AI',
      display: 'nexx',
      symbol: 'NEXX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
          exponent: 0,
        },
        {
          denom: 'dgl',
          exponent: 6,
        },
      ],
      address: 'juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e',
      base: 'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png',
        },
      ],
    },
    {
      description: 'ERIS liquid staked JUNO',
      type_asset: 'cw20',
      address:
        'juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
      denom_units: [
        {
          denom:
            'cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
          exponent: 0,
        },
        {
          denom: 'ampJUNO',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
      name: 'ERIS Amplified JUNO',
      display: 'ampJUNO',
      symbol: 'ampJUNO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg',
        },
      ],
    },
    {
      description: 'BITS - Native token of Bitswift Cash',
      type_asset: 'cw20',
      address:
        'juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
      denom_units: [
        {
          denom:
            'cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
          exponent: 0,
        },
        {
          denom: 'bits',
          exponent: 8,
        },
      ],
      base: 'cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
      name: 'BITS',
      display: 'bits',
      symbol: 'BITS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png',
        },
      ],
    },
    {
      description:
        "The least memeable memecoin in existence. The cats have had their day, it's time for $POIL coin to take reign.",
      type_asset: 'cw20',
      address:
        'juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw',
      denom_units: [
        {
          denom:
            'cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw',
          exponent: 0,
        },
        {
          denom: 'poil',
          exponent: 6,
        },
      ],
      base: 'cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw',
      name: 'POIL',
      display: 'poil',
      symbol: 'POIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/poil.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/poil.png',
        },
      ],
    },
    {
      description:
        'Minerva was one of the main goddesses worshiped by the Roman Pagans and is a goddess from Roman Mythology.',
      type_asset: 'cw20',
      address:
        'juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82',
      denom_units: [
        {
          denom:
            'cw20:juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82',
          exponent: 0,
        },
        {
          denom: 'minerva',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82',
      name: 'MINERVA',
      display: 'minerva',
      symbol: 'MRVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/minerva.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/minerva.png',
        },
      ],
    },
    {
      description:
        'In Roman mythology, Juno (Latin: Iuno; pronounced [[Help:Pronunciation|[ˈjuːnoː]]]) was the protector and advisor of the state.',
      type_asset: 'cw20',
      address:
        'juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk',
      denom_units: [
        {
          denom:
            'cw20:juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk',
          exponent: 0,
        },
        {
          denom: 'luno',
          exponent: 6,
        },
      ],
      base: 'cw20:juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk',
      name: 'LUNO',
      display: 'luno',
      symbol: 'LUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/luno.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/luno.png',
        },
      ],
    },
    {
      description: 'ATEN is NETA.',
      type_asset: 'cw20',
      address:
        'juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r',
      denom_units: [
        {
          denom:
            'cw20:juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r',
          exponent: 0,
        },
        {
          denom: 'aten',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r',
      name: 'ATEN',
      display: 'aten',
      symbol: 'ATEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/aten.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/aten.png',
        },
      ],
    },
    {
      description: 'HERA is the goddess of marriage in Greek mythology.',
      type_asset: 'cw20',
      address:
        'juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0',
      denom_units: [
        {
          denom:
            'cw20:juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0',
          exponent: 0,
        },
        {
          denom: 'hera',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0',
      name: 'HERA',
      display: 'hera',
      symbol: 'HERA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hera.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hera.png',
        },
      ],
    },
    {
      description: 'BackBone Labs Liquid Staked JUNO',
      type_asset: 'cw20',
      address:
        'juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
      denom_units: [
        {
          denom:
            'cw20:juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
          exponent: 0,
        },
        {
          denom: 'bJUNO',
          exponent: 6,
        },
      ],
      base: 'cw20:juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
      name: 'BackBone Labs Liquid Staked JUNO',
      display: 'bJUNO',
      symbol: 'bJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bJUNO-bbl.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bJUNO-bbl.png',
        },
      ],
      coingecko_id: 'backbone-labs-staked-juno',
    },
    {
      type_asset: 'ics20',
      description: 'USD Coin on Juno',
      denom_units: [
        {
          denom:
            'ibc/4A482FA914A4B9B05801ED81C33713899F322B24F76A06F4B8FE872485EA22FF',
          exponent: 0,
          aliases: ['uusdc', 'microusdc'],
        },
        {
          denom: 'usdc',
          exponent: 6,
        },
      ],
      base: 'ibc/4A482FA914A4B9B05801ED81C33713899F322B24F76A06F4B8FE872485EA22FF',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      coingecko_id: 'usd-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
        },
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uusdc',
            chain_name: 'noble',
          },
          chain: {
            channel_id: 'channel-224',
            path: 'transfer/channel-224/uusdc',
          },
        },
      ],
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F0C440C8040E2FCCAC621D32D3A00D9B347C989D52CE869A91CB34D07B0021D2',
          exponent: 0,
          aliases: [
            'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
          ],
        },
        {
          denom: 'rstk',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/F0C440C8040E2FCCAC621D32D3A00D9B347C989D52CE869A91CB34D07B0021D2',
      name: 'Restake DAO Token',
      display: 'rstk',
      symbol: 'RSTK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom:
              'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-210',
            path: 'transfer/channel-210/factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'migaloo',
            base_denom:
              'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg',
      },
    },
    {
      denom_units: [
        {
          denom: 'factory/juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq/uwind',
          exponent: 0,
        },
        {
          denom: 'wind',
          exponent: 6,
        },
      ],
      address: 'juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq',
      base: 'factory/juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq/uwind',
      name: 'Wind Token',
      display: 'wind',
      symbol: 'WIND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wind.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wind.png',
        },
      ],
    },
  ],
};
