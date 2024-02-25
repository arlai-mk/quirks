import type { Chain, AssetLists, ChainVersions } from '../types';

export const passage: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'passage',
  chain_id: 'passage-2',
  pre_fork_chain_name: 'passage1',
  pretty_name: 'Passage',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://passage3d.com/',
  bech32_prefix: 'pasg',
  daemon_name: 'passage',
  node_home: '$HOME/.passage',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'upasg',
        fixed_min_gas_price: 0,
        low_gas_price: 0.001,
        average_gas_price: 0.0025,
        high_gas_price: 0.01,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'upasg',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/envadiv/Passage3D',
    recommended_version: 'v2.4.0',
    compatible_versions: ['v2.4.0'],
    cosmos_sdk_version: 'v0.45.16',
    ibc_go_version: 'v4.4.2',
    consensus: {
      type: 'cometbft',
      version: 'v0.34.27',
    },
    cosmwasm_version: 'v0.31.0',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/envadiv/mainnet/main/passage-2/genesis.json',
    },
    versions: [
      {
        name: 'v2.0.0',
        recommended_version: 'v2.0.1',
        compatible_versions: ['v2.0.1'],
        cosmos_sdk_version: 'v0.45.16',
        ibc_go_version: 'v4.4.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27',
        },
        next_version_name: 'v2.2.0',
      },
      {
        name: 'v2.2.0',
        recommended_version: 'v2.2.0',
        compatible_versions: ['v2.2.0'],
        cosmos_sdk_version: 'v0.45.16',
        ibc_go_version: 'v4.4.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27',
        },
        next_version_name: 'v2.4.0',
      },
      {
        name: 'v2.4.0',
        recommended_version: 'v2.4.0',
        compatible_versions: ['v2.4.0'],
        cosmos_sdk_version: 'v0.45.16',
        ibc_go_version: 'v4.4.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27',
        },
        cosmwasm_version: 'v0.31.0',
        next_version_name: '',
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'aebb8431609cb126a977592446f5de252d8b7fa1',
        address: '104.236.201.138:26656',
      },
      {
        id: 'b6beabfb9309330944f44a1686742c2751748b83',
        address: '5.161.47.163:26656',
      },
      {
        id: '7a9a36630523f54c1a0d56fc01e0e153fd11a53d',
        address: '167.235.24.145:26656',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:15656',
        provider: 'Polkachu',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:15656',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'passage-mainnet-seed.autostake.com:26916',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:15656',
        provider: 'WhisperNode 🤐',
      },
      {
        id: 'df949a46ae6529ae1e09b034b49716468d5cc7e9',
        address: 'seeds.stakerhouse.com:10556',
        provider: 'StakerHouse',
      },
      {
        id: '2b238d2c05c47629e03608a6107e156fcb50344c',
        address: '65.108.101.158:20556',
        provider: 'Validatrium',
      },
      {
        id: '526d07b882df4cb820a8b9df819e14532d1811b0',
        address: 'seed-passage.ibs.team:16666',
        provider: 'Inter Blockchain Services',
      },
    ],
    persistent_peers: [
      {
        id: 'd35d652b6cb3bf7d6cb8d4bd7c036ea03e7be2ab',
        address: '116.203.182.185:26656',
      },
      {
        id: '8e0b0d4f80d0d2853f853fbd6a76390113f07d72',
        address: '65.108.127.249:26656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'passage-mainnet-peer.autostake.com:26916',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '621f75a74a95298fe16e0c2dd899c087bcba6594',
        address: '65.108.195.29:50656',
        provider: 'Staketab',
      },
      {
        id: '2b238d2c05c47629e03608a6107e156fcb50344c',
        address: '65.108.101.158:20556',
        provider: 'Validatrium',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.passage.vitwit.com',
        provider: 'vitwit',
      },
      {
        address: 'https://passage-rpc.staketab.org:443',
        provider: 'Staketab',
      },
      {
        address: 'https://rpc-passage.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://passage-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-passage-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://rpc-passage.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://rpc.passage.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://passage-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://passage-rpc.ibs.team/',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://rpc-passage.d-stake.xyz',
        provider: 'D-stake',
      },
      {
        address: 'https://rpc-passage.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://passage-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://passage-rpc.stakerhouse.com',
        provider: 'StakerHouse',
      },
      {
        address: 'https://passage-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://passage-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'https://rpc-passage.mainnet.validatrium.club',
        provider: 'Validatrium',
      },
      {
        address: 'https://rpc.passage.silentvalidator.com',
        provider: 'silent',
      },
    ],
    rest: [
      {
        address: 'https://api.passage.vitwit.com',
        provider: 'vitwit',
      },
      {
        address: 'https://passage-rest.staketab.org',
        provider: 'Staketab',
      },
      {
        address: 'https://rest-passage.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://passage-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://api-passage.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://api-passage-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://api.passage.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://passage-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://passage-api.ibs.team/',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://api-passage.d-stake.xyz',
        provider: 'D-stake',
      },
      {
        address: 'https://passage-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://lcd-passage.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://passage-rest.stakerhouse.com',
        provider: 'StakerHouse',
      },
      {
        address: 'https://passage-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://passage-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'https://api-passage.mainnet.validatrium.club',
        provider: 'Validatrium',
      },
      {
        address: 'https://api.passage.silentvalidator.com',
        provider: 'silent',
      },
    ],
    grpc: [
      {
        address: 'grpc-passage-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'passage-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'passage-grpc.polkachu.com:15690',
        provider: 'Polkachu',
      },
      {
        address: 'grpc-passage.cosmos-spaces.cloud:2320',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'grpc.passage.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'passage-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'services.staketab.com:9023',
        provider: 'Staketab',
      },
      {
        address: 'passage-grpc.stakerhouse.com:443',
        provider: 'StakerHouse',
      },
      {
        address: 'passage-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'passage-grpc.stakeandrelax.net:15690',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'grpc-passage.mainnet.validatrium.club:20590',
        provider: 'Validatrium',
      },
      {
        address: 'grpc.passage.silentvalidator.com:443',
        provider: 'silent',
      },
    ],
  },
  explorers: [
    {
      kind: 'aneka',
      url: 'https://passage.aneka.io',
      tx_page: 'https://passage.aneka.io/txs/${txHash}',
      account_page: 'https://passage.aneka.io/accounts/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/passage',
      tx_page: 'https://www.mintscan.io/passage/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/passage/accounts/${accountAddress}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/passage',
      tx_page: 'https://atomscan.com/passage/transactions/${txHash}',
      account_page: 'https://atomscan.com/passage/accounts/${accountAddress}',
    },
    {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/passage',
      tx_page: 'https://cosmotracker.com/passage/tx/${txHash}',
      account_page:
        'https://cosmotracker.com/passage/account/${accountAddress}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
    },
  ],
};

export const passageAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'passage',
  assets: [
    {
      description:
        'The native staking and governance token of the Passage chain.',
      denom_units: [
        {
          denom: 'upasg',
          exponent: 0,
        },
        {
          denom: 'pasg',
          exponent: 6,
        },
      ],
      base: 'upasg',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      coingecko_id: 'passage',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
        },
      ],
    },
  ],
};
