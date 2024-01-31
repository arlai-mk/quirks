import type { Chain, AssetLists, ChainVersions } from '../types';

export const umee: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'umee',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.umee.cc/',
  pretty_name: 'Umee',
  chain_id: 'umee-1',
  bech32_prefix: 'umee',
  daemon_name: 'umeed',
  node_home: '$HOME/.umee',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uumee',
        fixed_min_gas_price: 0.1,
        low_gas_price: 0.1,
        average_gas_price: 0.12,
        high_gas_price: 0.2,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uumee',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/umee-network/umee',
    recommended_version: 'v6.0.2',
    compatible_versions: ['v6.0.2'],
    binaries: {
      'linux/amd64':
        'https://github.com/umee-network/umee/releases/download/v6.0.2/umeed-v6.0.2-linux-amd64.tar.gz',
    },
    cosmos_sdk_version: '0.46',
    consensus: {
      type: 'cometbft',
      version: '0.34',
    },
    cosmwasm_version: '0.31',
    cosmwasm_enabled: true,
    ibc_go_version: '6.2.0',
    genesis: {
      name: 'v1.0.1',
      genesis_url:
        'https://raw.githubusercontent.com/umee-network/mainnet/main/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.1',
        tag: 'v1.0.1',
        height: 0,
        next_version_name: 'v1.1.0',
        recommended_version: 'v1.0.1',
        compatible_versions: ['v1.0.1'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: '2.0.3',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v1.0.1/umeed-v1.0.1-linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/umee-network/umee/releases/download/v1.0.1/umeed-v1.0.1-linux-arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/umee-network/umee/releases/download/v1.0.1/umeed-v1.0.1-darwin-amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/umee-network/umee/releases/download/v1.0.1/umeed-v1.0.1-darwin-arm64.tar.gz',
        },
      },
      {
        name: 'v1.1.0',
        tag: 'v1.1.0',
        height: 3023282,
        next_version_name: 'v1.1-v3.0',
        recommended_version: 'v1.1.0',
        compatible_versions: ['v1.1.0'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: '2.0.3',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v1.1.0/umeed-v1.1.0-linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/umee-network/umee/releases/download/v1.1.0/umeed-v1.1.0-linux-arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/umee-network/umee/releases/download/v1.1.0/umeed-v1.1.0-darwin-amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/umee-network/umee/releases/download/v1.1.0/umeed-v1.1.0-darwin-arm64.tar.gz',
        },
      },
      {
        name: 'v1.1-v3.0',
        tag: 'v3.0.0',
        height: 3215778,
        next_version_name: 'v3.1.0',
        recommended_version: 'v3.0.0',
        compatible_versions: ['v3.0.0'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: '5.0.0',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v3.0.0/umeed-v3.0.0-linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/umee-network/umee/releases/download/v3.0.0/umeed-v3.0.0-linux-arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/umee-network/umee/releases/download/v3.0.0/umeed-v3.0.0-darwin-amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/umee-network/umee/releases/download/v3.0.0/umeed-v3.0.0-darwin-arm64.tar.gz',
        },
      },
      {
        name: 'v3.1.0',
        tag: 'v3.1.0',
        height: 3623090,
        next_version_name: 'v3.1-v3.3',
        recommended_version: 'v3.1.0',
        compatible_versions: ['v3.1.0'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: '5.0.0',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v3.1.0/umeed-v3.1.0-linux-amd64',
          'linux/arm64':
            'https://github.com/umee-network/umee/releases/download/v3.1.0/umeed-v3.1.0-linux-arm64',
          'darwin/amd64':
            'https://github.com/umee-network/umee/releases/download/v3.1.0/umeed-v3.1.0-darwin-amd64',
          'darwin/arm64':
            'https://github.com/umee-network/umee/releases/download/v3.1.0/umeed-v3.1.0-darwin-arm64',
        },
      },
      {
        name: 'v3.1-v3.3',
        tag: 'v3.3.0',
        height: 4513362,
        next_version_name: 'v4.0',
        recommended_version: 'v3.3.0',
        compatible_versions: ['v3.3.0'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.29',
        cosmwasm_enabled: true,
        ibc_go_version: '5.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v3.3.0/umeed-v3.3.0-linux-amd64',
        },
      },
      {
        name: 'v4.0',
        tag: 'v4.0.0',
        height: 4949483,
        next_version_name: 'v4.0.1',
        recommended_version: 'v4.0.0',
        compatible_versions: ['v4.0.0'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.29',
        cosmwasm_enabled: true,
        ibc_go_version: '5.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v4.0.0/umeed-v4.0.0-linux-amd64',
        },
      },
      {
        name: 'v4.0.1',
        tag: 'v4.0.1',
        height: 5243631,
        next_version_name: 'v4.1.0',
        recommended_version: 'v4.0.1',
        compatible_versions: ['v4.0.1'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.29',
        cosmwasm_enabled: true,
        ibc_go_version: '5.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v4.0.1/umeed-v4.0.1-linux-amd64',
        },
      },
      {
        name: 'v4.1.0',
        tag: 'v4.1.0',
        height: 5433933,
        next_version_name: 'v4.2',
        recommended_version: 'v4.1.0',
        compatible_versions: ['v4.1.0'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.29',
        cosmwasm_enabled: true,
        ibc_go_version: '5.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v4.1.0/umeed-v4.1.0-linux-amd64',
        },
      },
      {
        name: 'v4.2',
        tag: 'v4.2.0',
        height: 5741480,
        next_version_name: 'v4.3',
        recommended_version: 'v4.2.0',
        compatible_versions: ['v4.2.0'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.29',
        cosmwasm_enabled: true,
        ibc_go_version: '5.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v4.2.0/umeed-v4.2.0-linux-amd64',
        },
      },
      {
        name: 'v4.3',
        tag: 'v4.3.0',
        height: 6049552,
        recommended_version: 'v4.3.0',
        compatible_versions: ['v4.3.0'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
        ibc_go_version: '6.1.0',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v4.3.0/umeed-v4.3.0-linux-amd64',
        },
      },
      {
        name: 'v4.4',
        tag: 'v4.4.1',
        height: 6547400,
        recommended_version: 'v4.4.1',
        compatible_versions: ['v4.4.1', 'v4.4.0'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
        ibc_go_version: '6.1.0',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v4.4.0/umeed-v4.4.0-linux-amd64',
        },
      },
      {
        name: 'v5.0',
        tag: 'v5.0.1',
        height: 6986150,
        recommended_version: 'v5.0.1',
        compatible_versions: ['v5.0.1'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34',
        },
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '6.1.1',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v5.0.1/umeed-v5.0.1-linux-amd64.tar.gz',
        },
      },
      {
        name: 'v5.1',
        tag: 'v5.1.0',
        height: 7428000,
        recommended_version: 'v5.1.0',
        compatible_versions: ['v5.1.0'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34',
        },
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '6.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v5.1.0/umeed-v5.1.0-linux-amd64.tar.gz',
        },
      },
      {
        name: 'v5.2',
        tag: 'v5.2.0',
        height: 8220900,
        recommended_version: 'v5.2.0',
        compatible_versions: ['v5.2.0'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34',
        },
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '6.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v5.2.0/umeed-v5.2.0-linux-amd64.tar.gz',
        },
      },
      {
        name: 'v6.0',
        tag: 'v6.0.2',
        height: 8427800,
        recommended_version: 'v6.0.2',
        compatible_versions: ['v6.0.2'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34',
        },
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '6.2.0',
        binaries: {
          'linux/amd64':
            'https://github.com/umee-network/umee/releases/download/v6.0.2/umeed-v6.0.2-linux-amd64.tar.gz',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
  },
  peers: {
    seeds: [
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:13656',
        provider: 'Polkachu',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'umee-mainnet-seed.autostake.com:26756',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '86bd5cb6e762f673f1706e5889e039d5406b4b90',
        address: 'umee.seed.node75.org:10656',
        provider: 'Pro-Nodes75',
      },
      {
        id: '88373a3bf385c20ef0b4040f924cd99848012535',
        address: 'seed-umee-01.stakeflow.io:26696',
        provider: 'Stakeflow',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'umee.rpc.kjnodes.com:16259',
        provider: 'kjnodes',
      },
      {
        id: '64cdbb45575825f764af7ff9d6c71471bc131f87',
        address: 'seed-node.mms.team:32656',
        provider: 'MMS',
      },
      {
        id: '9aa8a73ea9364aa3cf7806d4dd25b6aed88d8152',
        address: 'umee.seed.mzonder.com:10256',
        provider: 'MZONDER',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:13656',
        provider: 'Polkachu',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'umee-mainnet-peer.autostake.com:26756',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '345970b5bdac916d95d8c64243d901766aff5475',
        address: '95.217.204.48:26656',
        provider: '[NODERS]TEAM',
      },
      {
        id: '1b728581c6d308078e2b969a0c6243852f77d28d',
        address: 'umee.peers.m.stavr.tech:10456',
        provider: '🔥STAVR🔥',
      },
      {
        id: '88373a3bf385c20ef0b4040f924cd99848012535',
        address: 'peer-umee-01.stakeflow.io:26696',
        provider: 'Stakeflow',
      },
      {
        id: '5656c2e3f18ffeb2e21bacbc62ca10f890525cf6',
        address: '65.21.91.99:16856',
        provider: 'Staketab',
      },
      {
        id: '532ffd92d571900b56fd3ad97dad186f7601c2ca',
        address: '159.69.110.238:46656',
        provider: 'Stake-Take',
      },
      {
        id: '618b74f829cc2dc7eeccf647b3a25168289f30c3',
        address: 'peer-umee.mms.team:56102',
        provider: 'MMS',
      },
      {
        id: '635debe6c5cbcb6861b6c8b32c47d8ee84d99c16',
        address: '138.201.21.197:29656',
        provider: 'StakeTown',
      },
      {
        id: '09b99a210b93a4e66571d7fd745f2d52dfbf59f2',
        address: 'umee.peer.stakevillage.net:11056',
        provider: 'Stake Village',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://umee-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc-umee-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://umee-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'http://umee.rpc.m.stavr.tech:10457',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc-umee.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'http://rpc-umee-0.node75.org:26657',
        provider: 'Pro-Nodes75',
      },
      {
        address: 'https://umee-rpc.quantnode.tech',
        provider: 'QuantNode',
      },
      {
        address: 'https://umee-rpc.tienthuattoan.ventures',
        provider: 'TienThuatToan',
      },
      {
        address: 'https://rpc-umee-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://umee-rpc.staketab.org:443',
        provider: 'Staketab',
      },
      {
        address: 'https://umee-rpc.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://umee.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://umee-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://rpc-umee.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://rpc-umee.mzonder.com',
        provider: 'MZONDER',
      },
      {
        address: 'https://umee-rpc.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://umee-rpc.highstakes.ch:26657/',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://umee.rpc.stakevillage.net:443',
        provider: 'Stake Village',
      },
    ],
    rest: [
      {
        address: 'https://api-umee-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://umee.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://api-umee.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://umee-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://umee-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://umee-lcd.quantnode.tech',
        provider: 'QuantNode',
      },
      {
        address: 'https://umee-api.tienthuattoan.ventures',
        provider: 'TienThuatToan',
      },
      {
        address: 'https://api-umee-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://umee-rest.staketab.org',
        provider: 'Staketab',
      },
      {
        address: 'https://umee-api.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://umee.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://umee-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://api-umee.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://api-umee.mzonder.com',
        provider: 'MZONDER',
      },
      {
        address: 'https://umee-api.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://umee-api.highstakes.ch:1317/',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://umee.api.stakevillage.net',
        provider: 'Stake Village',
      },
    ],
    grpc: [
      {
        address: 'grpc-umee-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'umee-grpc.polkachu.com:13690',
        provider: 'Polkachu',
      },
      {
        address: 'umee-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'grpc-umee.cosmos-spaces.cloud:2110',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'umee-grpc.quantnode.tech:9090',
        provider: 'QuantNode gRPC',
      },
      {
        address: 'umee.grpc.m.stavr.tech:9090',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'umee-grpc.quantnode.tech:9091',
        provider: 'QuantNode gRPCweb',
      },
      {
        address: 'umee-grpc.tienthuattoan.ventures:9090',
        provider: 'TienThuatToan',
      },
      {
        address: 'grpc-umee-01.stakeflow.io:9990',
        provider: 'Stakeflow',
      },
      {
        address: 'services.staketab.com:9020',
        provider: 'Staketab',
      },
      {
        address: 'umee.grpc.kjnodes.com:16290',
        provider: 'kjnodes',
      },
      {
        address: 'umee-grpc.w3coins.io:13690',
        provider: 'w3coins',
      },
      {
        address: 'grpc-umee.mms.team:443',
        provider: 'MMS',
      },
      {
        address: 'grpc-umee.mzonder.com:443',
        provider: 'MZONDER',
      },
      {
        address: 'umee-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'umee.grpc.stakevillage.net:11090',
        provider: 'Stake Village',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/umee/',
      tx_page: 'https://www.mintscan.io/umee/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/umee/accounts/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/umee',
      tx_page: 'https://ping.pub/umee/tx/${txHash}',
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/umee',
      tx_page: 'https://explorer.stavr.tech/umee/tx/${txHash}',
    },
    {
      kind: 'explorers.guru',
      url: 'https://umee.explorers.guru',
      tx_page: 'https://umee.explorers.guru/transaction/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/umee',
      tx_page: 'https://atomscan.com/umee/transactions/${txHash}',
      account_page: 'https://atomscan.com/umee/accounts/${accountAddress}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/umee',
      account_page: 'https://stakeflow.io/umee/accounts/${accountAddress}',
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/umee',
      tx_page: 'https://explorer.stake-take.com/umee/transactions/${txHash}',
      account_page:
        'https://explorer.stake-take.com/umee/account/${accountAddress}',
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/umee',
      tx_page: 'https://exp.stakevillage.net/umee/tx/${txHash}',
      account_page:
        'https://exp.stakevillage.net/umee/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
    },
  ],
};

export const umeeAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'umee',
  assets: [
    {
      description: 'The native token of Umee',
      denom_units: [
        {
          denom: 'uumee',
          exponent: 0,
        },
        {
          denom: 'umee',
          exponent: 6,
        },
      ],
      base: 'uumee',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
      },
      coingecko_id: 'umee',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
        },
      ],
    },
  ],
};
