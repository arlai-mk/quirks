import type { Chain, AssetLists } from '../types';

export const evmos: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'evmos',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://evmos.org/',
  pretty_name: 'Evmos',
  chain_id: 'evmos_9001-2',
  bech32_prefix: 'evmos',
  node_home: '$HOME/.evmosd',
  daemon_name: 'evmosd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'aevmos',
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
        denom: 'aevmos',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/evmos/evmos',
    recommended_version: 'v14.0.0',
    compatible_versions: ['v14.0.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Linux_amd64.tar.gz',
      'linux/arm64':
        'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Darwin_amd64.tar.gz',
      'darwin/arm64':
        'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Darwin_arm64.tar.gz',
      'windows/amd64':
        'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Windows_amd64.zip',
    },
    cosmos_sdk_version: 'v0.47.4-evmos.2',
    consensus: {
      type: 'cometbft',
      version: '0.37.2',
    },
    ibc_go_version: '7.3.0',
    genesis: {
      genesis_url: 'https://archive.evmos.org/mainnet/genesis.json',
    },
    versions: [
      {
        name: 'v12',
        tag: 'v12.1.5',
        proposal: 137,
        height: 12303000,
        recommended_version: 'v12.1.5',
        compatible_versions: [
          'v12.1.5',
          'v12.1.3',
          'v12.1.2',
          'v12.1.1',
          'v12.1.0',
        ],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: '6.1.0',
        binaries: {
          'linux/amd64':
            'https://github.com/evmos/evmos/releases/download/v12.1.5/evmos_12.1.5_Linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/evmos/evmos/releases/download/v12.1.5/evmos_12.1.5_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/evmos/evmos/releases/download/v12.1.5/evmos_12.1.5_Darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/evmos/evmos/releases/download/v12.1.5/evmos_12.1.5_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/evmos/evmos/releases/download/v12.1.5/evmos_12.1.5_Windows_amd64.zip',
        },
        next_version_name: 'v13.0.2',
      },
      {
        name: 'v13.0.2',
        tag: 'v13.0.2',
        proposal: 149,
        height: 14538200,
        recommended_version: 'v13.0.2',
        compatible_versions: ['v13.0.2'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29',
        },
        ibc_go_version: 'v6.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/evmos/evmos/releases/download/v13.0.2/evmos_13.0.2_Linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/evmos/evmos/releases/download/v13.0.2/evmos_13.0.2_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/evmos/evmos/releases/download/v13.0.2/evmos_13.0.2_Darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/evmos/evmos/releases/download/v13.0.2/evmos_13.0.2_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/evmos/evmos/releases/download/v13.0.2/evmos_13.0.2_Windows_amd64.zip',
        },
        next_version_name: 'v14.0.0',
      },
      {
        name: 'v14.0.0',
        tag: 'v14.0.0',
        proposal: 196,
        height: 16105000,
        recommended_version: 'v14.0.0',
        compatible_versions: ['v14.0.0'],
        cosmos_sdk_version: 'v0.47.4-evmos.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        ibc_go_version: 'v7.3.0',
        binaries: {
          'linux/amd64':
            'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Windows_amd64.zip',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
  },
  peers: {
    seeds: [
      {
        id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
        address: 'seed.rhinostake.com:13456',
        provider: 'RHINO',
      },
      {
        id: '7aa31684d201f8ebc0b1e832d90d7490345d77ee',
        address: '52.10.99.253:26656',
        provider: 'Cosmostation',
      },
      {
        id: '5740e4a36e646e80cc5648daf5e983e5b5d8f265',
        address: '54.39.18.27:26656',
        provider: 'Figment',
      },
      {
        id: '588cedb70fa1d98c14a2f2c1456bfa41e1a156a8',
        address: 'evmos-sentry.mercury-nodes.net:29539',
        provider: 'Mercury',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:13456',
        provider: 'Polkachu',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:13456',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'evmos-mainnet-seed.autostake.com:26736',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '40f4fac63da8b1ce8f850b0fa0f79b2699d2ce72',
        address: 'seed.evmos.jerrychong.com:26656',
        provider: "Jerry's Pool",
      },
      {
        id: '86bd5cb6e762f673f1706e5889e039d5406b4b90',
        address: 'evmos.seed.node75.org:10756',
        provider: 'Pro-nodes75',
      },
      {
        id: 'e1b058e5cfa2b836ddaa496b10911da62dcf182e',
        address: 'evmos-seed-de.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: 'e726816f42831689eab9378d5d577f1d06d25716',
        address: 'evmos-seed-us.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: 'e4f7c3181d0028209c664bfd4c259f2c4d947491',
        address: 'seeds.whispernode.com:13456',
        provider: 'WhisperNode🤐',
      },
      {
        id: '27b6d74c8408e033e2e5a9e966a0d15782e33596',
        address: 'seeds.nethernode.xyz:13456',
        provider: 'carbonZERO🌲',
      },
      {
        id: 'ac009a9564d3471852795b5d703095a1d4b6a3e1',
        address: 'seed-evmos-01.stakeflow.io:1707',
        provider: 'Stakeflow',
      },
      {
        id: '008175475229d09bcbbbe713c4e50faa85719c9e',
        address: 'seed-node.mms.team:37656',
        provider: 'MMS',
      },
    ],
    persistent_peers: [
      {
        id: '7aa31684d201f8ebc0b1e832d90d7490345d77ee',
        address: '52.10.99.253:26656',
        provider: 'Cosmostation',
      },
      {
        id: '5740e4a36e646e80cc5648daf5e983e5b5d8f265',
        address: '54.39.18.27:26656',
        provider: 'Figment',
      },
      {
        id: '588cedb70fa1d98c14a2f2c1456bfa41e1a156a8',
        address: 'evmos-sentry.mercury-nodes.net:29539',
        provider: 'Mercury',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'evmos-mainnet-peer.autostake.com:26736',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'ac009a9564d3471852795b5d703095a1d4b6a3e1',
        address: 'peer-evmos-01.stakeflow.io:1707',
        provider: 'Stakeflow',
      },
      {
        id: 'd3c8c2ecd3cf0d05cc49ff12b81c52b3ec9675a5',
        address: 'peer-evmos.mms.team:26656',
        provider: 'MMS',
      },
      {
        id: 'c8e2800e5743a1575fd8a0fcbb7a74c6f67a23a9',
        address: '88.99.208.54:40656',
        provider: 'StakeTown',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-evmos.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://rpc-evmos.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://evmos-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://tendermint.bd.evmos.org:26657',
        provider: 'Blockdaemon',
      },
      {
        address: 'https://rpc-evmos-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'https://rpc.evmos.interbloc.org',
        provider: 'Interbloc',
      },
      {
        address: 'https://rpc-evmos.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://rpc.evmos.testnet.run',
        provider: 'TestNetRun',
      },
      {
        address: 'https://rpc.evmos.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://rpc.evmos.bh.rocks',
        provider: 'BlockHunters',
      },
      {
        address: 'https://rpc.evmos.chaintools.tech/',
        provider: 'ChainTools',
      },
      {
        address: 'https://evmos-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc.evmos.silentvalidator.com/',
        provider: 'silent',
      },
      {
        address: 'https://rpc.evmos.tcnetwork.io',
        provider: 'TC Network',
      },
      {
        address: 'https://evmos.rpc.stakin-nodes.com',
        provider: 'Stakin',
      },
      {
        address: 'https://rpc-evmos.architectnodes.com',
        provider: 'Architect Nodes',
      },
      {
        address: 'https://evmos-rpc.validatrium.club',
        provider: 'Validatrium',
      },
      {
        address: 'https://evmos-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://evmos-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥',
      },
      {
        address: 'https://evmos.rpc.interchain.ivaldilabs.xyz',
        provider: 'ivaldilabs',
      },
      {
        address: 'https://evmos.api.onfinality.io/public',
        provider: 'OnFinality',
      },
      {
        address: 'https://evmos-rpc.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://rpc-evmos-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://evmos-rpc.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://rpc-evmos.validavia.me',
        provider: 'Validavia',
      },
      {
        address: 'https://evmos-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://rpc-evmos.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://evmos-rpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'https://evmos.rpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://evmos-rpc.antrixy.org/',
        provider: 'Antrix Validators',
      },
    ],
    rest: [
      {
        address: 'https://lcd-evmos.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://rest.bd.evmos.org:1317',
        provider: 'Blockdaemon',
      },
      {
        address: 'https://evmos-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://api-evmos-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://api.evmos.interbloc.org',
        provider: 'Interbloc',
      },
      {
        address: 'https://lcd.evmos.bh.rocks',
        provider: 'BlockHunters',
      },
      {
        address: 'https://api-evmos.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://api.evmos.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://evmos-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://api.evmos.silentvalidator.com/',
        provider: 'silent',
      },
      {
        address: 'https://rest.evmos.tcnetwork.io',
        provider: 'TC Network',
      },
      {
        address: 'https://evmos.rest.stakin-nodes.com',
        provider: 'Stakin',
      },
      {
        address: 'https://rest-evmos.architectnodes.com',
        provider: 'Architect Nodes',
      },
      {
        address: 'https://evmos-api.validatrium.club',
        provider: 'Validatrium',
      },
      {
        address: 'https://evmos-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://evmos-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥',
      },
      {
        address: 'https://rest-evmos.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://evmos.rest.interchain.ivaldilabs.xyz',
        provider: 'ivaldilabs',
      },
      {
        address: 'https://evmos-rest.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://api-evmos-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://evmos-api.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://lcd-evmos.validavia.me',
        provider: 'Validavia',
      },
      {
        address: 'https://evmos-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://api-evmos.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://evmos-api.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'https://evmos.api.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://evmos-rest.antrixy.org/',
        provider: 'Antrix Validators',
      },
    ],
    grpc: [
      {
        address: 'grpc.bd.evmos.org:9090',
        provider: 'evmos.org',
      },
      {
        address: 'grpc-evmos-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'evmos-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'grpc.evmos.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'grpc-evmos.cosmos-spaces.cloud:1190',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'evmos.grpcui.chaintools.host:443',
        provider: 'ChainTools',
      },
      {
        address: 'evmos-grpc.polkachu.com:13490',
        provider: 'Polkachu',
      },
      {
        address: 'evmos.grpc.stakin-nodes.com:443',
        provider: 'Stakin',
      },
      {
        address: 'evmos-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'evmos.grpc.interchain.ivaldilabs.xyz:443',
        provider: 'ivaldilabs',
      },
      {
        address: 'evmos-grpc.publicnode.com:443',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'grpc-evmos-01.stakeflow.io:1702',
        provider: 'Stakeflow',
      },
      {
        address: 'https://evmos-grpc.theamsolutions.info ',
        provider: 'AM Solutions',
      },
      {
        address: 'evmos-grpc.w3coins.io:13490',
        provider: 'w3coins',
      },
      {
        address: 'grpc-evmos.mms.team:443',
        provider: 'MMS',
      },
      {
        address: 'evmos-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'evmos.grpc.liveraven.net:443',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://evmos-grpc.antrixy.org/',
        provider: 'Antrix Validators',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://eth.bd.evmos.org:8545',
        provider: 'Blockdaemon',
      },
      {
        address: 'https://jsonrpc-evmos-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://evmos-json-rpc.stakely.io',
        provider: 'Stakely',
      },
      {
        address: 'https://jsonrpc.evmos.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://json-rpc.evmos.bh.rocks',
        provider: 'BlockHunters',
      },
      {
        address: 'https://evmos-json-rpc.agoranodes.com',
        provider: 'AgoraNodes',
      },
      {
        address: 'https://evm-rpc.evmos.silentvalidator.com/',
        provider: 'silent',
      },
      {
        address: 'https://json-rpc.evmos.tcnetwork.io',
        provider: 'TC Network',
      },
      {
        address: 'https://evmosevm.rpc.stakin-nodes.com',
        provider: 'Stakin',
      },
      {
        address: 'https://evmos-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://evmos-jsonrpc.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://jsonrpc-evmos.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://evmos-jsonrpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'https://evmos.jsonrpc.liveraven.net',
        provider: 'LiveRaveN',
      },
    ],
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/evmos',
      tx_page: 'https://app.ezstaking.io/evmos/txs/${txHash}',
      account_page: 'https://app.ezstaking.io/evmos/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/evmos',
      tx_page: 'https://www.mintscan.io/evmos/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/evmos/accounts/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/evmos',
      tx_page: 'https://bigdipper.live/evmos/transactions/${txHash}',
      account_page: 'https://bigdipper.live/evmos/accounts/${accountAddress}',
    },
    {
      kind: 'blockscout',
      url: 'https://evm.evmos.org',
      tx_page: 'https://evm.evmos.org/tx/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/evmos',
      tx_page: 'https://ping.pub/evmos/tx/${txHash}',
    },
    {
      kind: 'explorers.guru',
      url: 'https://evmos.explorers.guru',
      tx_page: 'https://evmos.explorers.guru/transaction/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/evmos',
      tx_page: 'https://atomscan.com/evmos/transactions/${txHash}',
      account_page: 'https://atomscan.com/evmos/accounts/${accountAddress}',
    },
    {
      kind: 'tcnetwork',
      url: 'https://evmos.tcnetwork.io',
      tx_page: 'https://evmos.tcnetwork.io/transaction/${txHash}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/evmos',
      account_page: 'https://stakeflow.io/evmos/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
    },
  ],
};

export const evmosAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'evmos',
  assets: [
    {
      description:
        'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [
        {
          denom: 'aevmos',
          exponent: 0,
        },
        {
          denom: 'evmos',
          exponent: 18,
        },
      ],
      base: 'aevmos',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
      },
      coingecko_id: 'evmos',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
        },
      ],
    },
    {
      description: 'Tether USDt on Evmos',
      denom_units: [
        {
          denom:
            'ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5',
          exponent: 0,
        },
        {
          denom: 'usdt',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-117',
          },
          chain: {
            channel_id: 'channel-83',
            path: 'transfer/channel-83',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
          },
        },
      ],
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [
        {
          denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
          exponent: 0,
        },
        {
          denom: 'neok',
          exponent: 18,
        },
      ],
      base: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg',
        },
      ],
    },
  ],
};