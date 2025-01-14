import type { Chain, AssetList, Versions } from '../types';

export const dydx: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dydx',
  status: 'live',
  website: 'https://dydx.trade/',
  network_type: 'mainnet',
  pretty_name: 'dYdX Protocol',
  chain_id: 'dydx-mainnet-1',
  bech32_prefix: 'dydx',
  daemon_name: 'dydxprotocold',
  node_home: '$HOME/.dydxprotocol',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'adydx',
        fixed_min_gas_price: 12500000000,
        low_gas_price: 12500000000,
        average_gas_price: 12500000000,
        high_gas_price: 20000000000,
      },
      {
        denom:
          'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.03,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'adydx',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/dydxprotocol/v4-chain/',
    recommended_version: 'protocol/v4.1.0',
    compatible_versions: ['protocol/v4.1.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv4.1.0/dydxprotocold-v4.1.0-linux-amd64.tar.gz',
      'linux/arm64':
        'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv4.1.0/dydxprotocold-v4.1.0-linux-arm64.tar.gz',
    },
    cosmos_sdk_version:
      'dydxprotocol/cosmos-sdk v0.50.5-0.20240220212824-35f31482370c',
    ibc_go_version: 'v8.0.0',
    consensus: {
      type: 'cometbft',
      version: 'dydxprotocol/cometbft v0.38.6-0.20240409171441-6d0767b72c06',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/dydxopsdao/networks/main/dydx-mainnet-1/genesis.json',
    },
    versions: [
      {
        name: 'v2',
        recommended_version: 'protocol/v2.0.1',
        compatible_versions: ['protocol/v2.0.0', 'protocol/v2.0.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv2.0.0/dydxprotocold-v2.0.0-linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv2.0.0/dydxprotocold-v2.0.0-linux-arm64.tar.gz',
        },
        cosmos_sdk_version:
          'dydxprotocol/cosmos-sdk v0.47.5-0.20231011192538-b95c66dedbd5',
        ibc_go_version: 'v7.3.0',
        consensus: {
          type: 'cometbft',
          version:
            'dydxprotocol/cometbft v0.37.3-0.20230908230338-65f7a2f25c18',
        },
        next_version_name: 'v3.0.0',
      },
      {
        name: 'v3.0.0',
        proposal: 7,
        height: 7147832,
        recommended_version: 'protocol/v3.0.2',
        compatible_versions: ['protocol/v3.0.0', 'protocol/v3.0.2'],
        binaries: {
          'linux/amd64':
            'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv3.0.0/dydxprotocold-v3.0.0-linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv3.0.0/dydxprotocold-v3.0.0-linux-arm64.tar.gz',
        },
        cosmos_sdk_version:
          'dydxprotocol/cosmos-sdk v0.47.5-0.20240111163003-128eb0a555af',
        ibc_go_version: 'v7.3.0',
        consensus: {
          type: 'cometbft',
          version:
            'dydxprotocol/cometbft v0.37.3-0.20230908230338-65f7a2f25c18',
        },
        next_version_name: 'v4.0.0',
      },
      {
        name: 'v4.0.0',
        proposal: 46,
        height: 12791712,
        recommended_version: 'protocol/v4.0.5',
        compatible_versions: ['protocol/v4.0.5'],
        binaries: {
          'linux/amd64':
            'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv4.0.5/dydxprotocold-v4.0.5-linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv4.0.5/dydxprotocold-v4.0.5-linux-arm64.tar.gz',
        },
        cosmos_sdk_version:
          'dydxprotocol/cosmos-sdk v0.50.5-0.20240220212824-35f31482370c',
        ibc_go_version: 'v8.0.0',
        consensus: {
          type: 'cometbft',
          version:
            'dydxprotocol/cometbft v0.38.6-0.20240409171441-6d0767b72c06',
        },
        next_version_name: 'v4.1.0',
      },
      {
        name: 'v4.1.0',
        proposal: 53,
        height: 14404200,
        recommended_version: 'protocol/v4.1.0',
        compatible_versions: ['protocol/v4.1.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv4.1.0/dydxprotocold-v4.1.0-linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv4.1.0/dydxprotocold-v4.1.0-linux-arm64.tar.gz',
        },
        cosmos_sdk_version:
          'dydxprotocol/cosmos-sdk v0.50.5-0.20240220212824-35f31482370c',
        ibc_go_version: 'v8.0.0',
        consensus: {
          type: 'cometbft',
          version:
            'dydxprotocol/cometbft v0.38.6-0.20240409171441-6d0767b72c06',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
  },
  description:
    'Our goal is to build open source code that can power a first class product and trading experience.',
  peers: {
    seeds: [
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:23856',
        provider: 'Polkachu',
      },
      {
        id: '65b740ee326c9260c30af1f044e9cda63c73f7c1',
        address: 'seeds.kingnodes.net:23856',
        provider: 'KingNodes',
      },
      {
        id: 'f04a77b92d0d86725cdb2d6b7a7eb0eda8c27089',
        address: 'dydx-mainnet-seed.bwarelabs.com:36656',
        provider: 'Bware Labs',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:23856',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'c2c2fcb5e6e4755e06b83b499aff93e97282f8e8',
        address: 'tenderseed.ccvalidators.com:26401',
        provider: 'CryptoCrew',
      },
      {
        id: '4f20c3e303c9515051b6276aeb89c0b88ee79f8f',
        address: 'seed.dydx.cros-nest.com:26656',
        provider: 'Crosnest',
      },
      {
        id: 'a9cae4047d5c34772442322b10ef5600d8e54900',
        address: 'dydx-mainnet-seednode.allthatnode.com:26656',
        provider: 'DSRV',
      },
      {
        id: '802607c6db8148b0c68c8a9ec1a86fd3ba606af6',
        address: '64.227.38.88:26656',
        provider: 'Luganodes',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'dydx.rpc.kjnodes.com:17059',
        provider: 'kjnodes',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: '4c30c8a95e26b07b249813b677caab28bf0c54eb',
        address: 'rpc.dydx.nodestake.top:666',
        provider: 'NodeStake',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'dydx-mainnet-seed.autostake.com:27366',
        provider: 'AutoStake | StakeDrops',
      },
      {
        id: '09ba537d6563018b97c502979c3478df4decf426',
        address: 'dydxprotocol-seed.genznodes.dev:22656',
        provider: 'genznodes',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'dydx-mainnet-peer.autostake.com:27366',
        provider: 'AutoStake | StakeDrops',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://dydx-rpc.kingnodes.com:443',
        provider: 'Kingnodes 👑',
      },
      {
        address: 'https://dydx-dao-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://dydx-mainnet-full-rpc.public.blastapi.io',
        provider: 'Bware Labs',
      },
      {
        address: 'https://dydx-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://dydx-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake | StakeDrops',
      },
      {
        address: 'https://rpc-dydx.ecostake.com:443',
        provider: 'ecostake',
      },
      {
        address: 'https://rpc.dydx.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'https://rpc-dydx.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://dydx-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://rpc-dydx.cros-nest.com:443',
        provider: 'Crosnest',
      },
      {
        address: 'https://dydx-rpc.enigma-validator.com',
        provider: 'Enigma',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/dydx/trpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://dydx-rpc.noders.services',
        provider: '[NODERS]TEAM',
      },
    ],
    rest: [
      {
        address: 'https://community.nuxian-node.ch:6797/dydx/crpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://dydx-dao-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://dydx-mainnet-full-lcd.public.blastapi.io',
        provider: 'Bware Labs',
      },
      {
        address: 'https://dydx-rest.kingnodes.com:443',
        provider: 'Kingnodes 👑',
      },
      {
        address: 'https://dydx-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://dydx-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake | StakeDrops',
      },
      {
        address: 'https://rest-dydx.ecostake.com:443',
        provider: 'ecostake',
      },
      {
        address: 'https://api-dydx.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://api.dydx.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'https://dydx-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://rest-dydx.cros-nest.com:443',
        provider: 'Crosnest',
      },
      {
        address: 'https://dydx-lcd.enigma-validator.com',
        provider: 'Enigma',
      },
      {
        address: 'https://dydx-api.noders.services',
        provider: '[NODERS]TEAM',
      },
    ],
    grpc: [
      {
        address: 'dydx-dao-grpc-1.polkachu.com:23890',
        provider: 'Polkachu (1)',
      },
      {
        address: 'dydx-dao-grpc-2.polkachu.com:23890',
        provider: 'Polkachu (2)',
      },
      {
        address: 'dydx-dao-grpc-3.polkachu.com:23890',
        provider: 'Polkachu (3)',
      },
      {
        address: 'dydx-dao-grpc-4.polkachu.com:23890',
        provider: 'Polkachu (4)',
      },
      {
        address: 'dydx-dao-grpc-5.polkachu.com:23890',
        provider: 'Polkachu (5)',
      },
      {
        address: 'dydx-mainnet-full-grpc.public.blastapi.io:443',
        provider: 'Bware Labs',
      },
      {
        address: 'https://dydx-grpc.kingnodes.com:443',
        provider: 'Kingnodes 👑',
      },
      {
        address: 'https://dydx-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'dydx-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake | StakeDrops',
      },
      {
        address: 'https://grpc.dydx.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'dydx.grpc.kjnodes.com:443',
        provider: 'kjnodes',
      },
      {
        address: 'grpc-dydx.cosmos-spaces.cloud:4990',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'dydx-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'dydx-grpc.noders.services:37090',
        provider: '[NODERS]TEAM',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/dydx',
      tx_page: 'https://www.mintscan.io/dydx/txs/${txHash}',
      account_page: 'https://www.mintscan.io/dydx/account/${accountAddress}',
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/dydx',
      tx_page: 'https://ezstaking.app/dydx/txs/${txHash}',
      account_page: 'https://ezstaking.app/dydx/account/${accountAddress}',
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/dydx/',
      tx_page: 'https://explorer.nodestake.top/dydx/txs/${txHash}',
      account_page:
        'https://explorer.nodestake.top/dydx/account/${accountAddress}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/dydx',
      tx_page: 'https://explorer.tcnetwork.io/dydx/transaction/${txHash}',
      account_page:
        'https://explorer.tcnetwork.io/dydx/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
    },
  ],
};

export const dydxAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dydx',
  assets: [
    {
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [
        {
          denom: 'adydx',
          exponent: 0,
        },
        {
          denom: 'dydx',
          exponent: 18,
        },
      ],
      base: 'adydx',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
      },
      coingecko_id: 'dydx-chain',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true,
          },
        },
      ],
      socials: {
        website: 'https://dydx.trade/',
        twitter: 'https://twitter.com/dYdX',
      },
    },
    {
      description: 'Noble USDC on dYdX Protocol.',
      denom_units: [
        {
          denom:
            'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
          exponent: 0,
        },
        {
          denom: 'usdc',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
      name: 'Noble USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-33',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/uusdc',
          },
        },
      ],
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
      },
    },
  ],
};
