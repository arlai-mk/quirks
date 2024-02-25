import type { Chain, AssetLists, ChainVersions } from '../types';

export const planq: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'planq',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://planq.network/',
  pretty_name: 'Planq',
  chain_id: 'planq_7070-2',
  bech32_prefix: 'plq',
  node_home: '$HOME/.planqd',
  daemon_name: 'planqd',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'aplanq',
        fixed_min_gas_price: 20000000000,
        low_gas_price: 30000000000,
        average_gas_price: 35000000000,
        high_gas_price: 40000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'aplanq',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/planq-network/planq',
    recommended_version: 'v1.1.0',
    compatible_versions: ['v1.1.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_linux_amd64.tar.gz',
      'linux/arm64':
        'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_darwin_amd64.tar.gz',
      'darwin/arm64':
        'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_darwin_arm64.tar.gz',
      'windows/amd64':
        'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_windows_amd64.zip',
    },
    cosmos_sdk_version: 'v0.46.3',
    consensus: {
      type: 'cometbft',
      version: '0.34.26',
    },
    ibc_go_version: '5.0.2',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/planq-network/networks/main/mainnet/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.3',
        recommended_version: 'v1.0.3',
        compatible_versions: ['v1.0.0', 'v1.0.1', 'v1.0.2', 'v1.0.3'],
        binaries: {
          'linux/amd64':
            'https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Windows_x86_64.zip',
        },
      },
      {
        name: 'v1.0.7',
        recommended_version: 'v1.1.0',
        compatible_versions: ['v1.1.0'],
        cosmos_sdk_version: 'v0.46.3',
        consensus: {
          type: 'cometbft',
          version: '0.34.26',
        },
        ibc_go_version: '5.0.2',
        binaries: {
          'linux/amd64':
            'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_windows_amd64.zip',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
  },
  peers: {
    seeds: [
      {
        id: 'dd2f0ceaa0b21491ecae17413b242d69916550ae',
        address: '135.125.247.70:26656',
        provider: 'Planq Foundation EU',
      },
      {
        id: '5966b4ef17da12ee63ef30e50512ad41d541195c',
        address: 'seeds-planq.sxlzptprjkt.xyz:18656',
        provider: 'sxlzptprjkt | VALIDATOR',
      },
      {
        id: 'c443eb8888e96e260dc23b9ef3c5a5773ec0e261',
        address: 'rpc.planq.nodexcapital.com:12756',
        provider: 'NodeX Validator',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'dd2f0ceaa0b21491ecae17413b242d69916550ae',
        address: '135.125.247.70:26656',
        provider: 'Planq Foundation EU',
      },
      {
        id: 'e6d553dffbbabbfe9602b43d87e5b0ac1a46348a',
        address: '135.125.247.70:26656',
        provider: 'Nodine.ID',
      },
      {
        id: 'b611a4058ac5caf8b56c1012c695afc75aea4217',
        address: 'peers-planq.sxlzptprjkt.xyz:18656',
        provider: 'sxlzptprjkt | VALIDATOR',
      },
      {
        id: '2702b546525dd402197483121800a09edd4edea1',
        address: 'rpc.planq.indonode.net:10656',
        provider: 'Indonode',
      },
      {
        id: '3eb12284b7fb707490b8adfda6fa7d94e2fa5cd9',
        address: 'p2p-pve01.roomit.xyz:16603',
        provider: 'RoomIT',
      },
      {
        id: '8391cf5a7fe59098205015870635f90acfb5dcb4',
        address: 'rpc.planq.hexnodes.co:33656',
        provider: 'Hexnodes',
      },
      {
        id: 'c48fd9194479c2f462bded977cfff7fa46327d17',
        address: '95.214.55.138:28656',
        provider: 'genznodes',
      },
      {
        id: 'e755cbe005d920e5bca555f14251abae464b6a54',
        address: 'p2p.planq.safeblock.space:26656',
        provider: 'Safe Block',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.planq.network',
        provider: 'planq.network',
      },
      {
        address: 'https://planq.rpc.bccnodes.com',
        provider: 'BccNodes',
      },
      {
        address: 'https://rpc.planq.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://planq-rpc.kynraze.com',
        provider: 'Kynraze',
      },
      {
        address: 'https://rpc.planq.indonode.net',
        provider: 'Indonode',
      },
      {
        address: 'https://rpc.planq.roomit.xyz',
        provider: 'RoomIT',
      },
      {
        address: 'https://planq-rpc.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://rpc.planq.safeblock.space',
        provider: 'Safe Block',
      },
      {
        address: 'https://planq.rpc.skynodejs.net',
        provider: 'skynodejs',
      },
      {
        address: 'https://planq-rpc.stake-town.com',
        provider: 'StakeTown',
      },
    ],
    rest: [
      {
        address: 'https://rest.planq.network',
        provider: 'planq.network',
      },
      {
        address: 'https://api.planq.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://planq-api.kynraze.com',
        provider: 'Kynraze',
      },
      {
        address: 'https://api.planq.indonode.net',
        provider: 'Indonode',
      },
      {
        address: 'https://api.planq.roomit.xyz',
        provider: 'RoomIT',
      },
      {
        address: 'https://planq-api.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://api.planq.safeblock.space',
        provider: 'Safe Block',
      },
      {
        address: 'https://planq.api.skynodejs.net',
        provider: 'skynodejs',
      },
      {
        address: 'https://planq-api.stake-town.com',
        provider: 'StakeTown',
      },
    ],
    grpc: [
      {
        address: 'grpc.planq.network:443',
        provider: 'planq.network',
      },
      {
        address: 'planq.grpc.bccnodes.com:443',
        provider: 'BccNodes',
      },
      {
        address: 'grpc.planq.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'https://grpc-planq.nodine.id',
        provider: 'Nodine.id',
      },
      {
        address: 'https://grpc-planq.sxlzptprjkt.xyz:443',
        provider: 'sxlzptprjkt | VALIDATOR',
      },
      {
        address: 'https://grpc.planq.nodexcapital.com:443',
        provider: 'NodeX Validator',
      },
      {
        address: 'https://grpc.planq.roomit.xyz:8443',
        provider: 'RoomIT',
      },
      {
        address: 'https://grpc.planq.hexnodes.co:33090',
        provider: 'Hexnodes',
      },
      {
        address: 'planq-grpc.genznodes.dev:28090',
        provider: 'genznodes',
      },
      {
        address: 'grpc.planq.safeblock.space:9090',
        provider: 'Safe Block',
      },
      {
        address: 'https://planq.grpc.skynodejs.net',
        provider: 'skynodejs',
      },
      {
        address: 'planq-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://evm-rpc.planq.network',
        provider: 'planq.network',
      },
      {
        address: 'https://jsonrpc.planq.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://rpc-evm-planq.sxlzptprjkt.xyz',
        provider: 'sxlzptprjkt | VALIDATOR',
      },
      {
        address: 'https://jsonrpc.planq.nodexcapital.com',
        provider: 'NodeX Validator',
      },
      {
        address: 'https://planq-rpc-evm.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://evm.planq.safeblock.space',
        provider: 'Safe Block',
      },
      {
        address: 'https://planq-jsonrpc.stake-town.com',
        provider: 'StakeTown',
      },
    ],
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.planq.network',
      tx_page: 'https://explorer.planq.network/transactions/${txHash}',
    },
    {
      kind: 'blockscout',
      url: 'https://evm.planq.network',
      tx_page: 'https://evm.planq.network/tx/${txHash}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/planq',
      tx_page: 'https://explorer.nodestake.top/planq/tx/${txHash}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/planq',
      tx_page: 'https://explorer.tcnetwork.io/planq/transaction/${txHash}',
    },
    {
      kind: 'RoomIT',
      url: 'https://explorer.tendermint.roomit.xyz/planq',
      tx_page:
        'https://explorer.tendermint.roomit.xyz/planq/transaction/${txHash}',
    },
    {
      kind: 'Kynraze',
      url: 'https://explorer.kynraze.com/planq',
      tx_page: 'https://explorer.kynraze.com/planq/tx/${txHash}',
    },
    {
      kind: 'THE EXPLORER',
      url: 'https://explorer.sxlzptprjkt.xyz/planq',
      tx_page: 'https://explorer.sxlzptprjkt.xyz/planq/tx/${txHash}',
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/planq',
      tx_page: 'https://explorer.nodexcapital.com/planq/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/planq',
      tx_page: 'https://atomscan.com/planq/transactions/${txHash}',
      account_page: 'https://atomscan.com/planq/accounts/${accountAddress}',
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/planq',
      tx_page: 'https://explorer.indonode.net/planq/tx/${txHash}',
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblock.space/planq',
      tx_page: 'https://explorer.safeblock.space/planq/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
    },
  ],
};

export const planqAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'planq',
  assets: [
    {
      description:
        'The native EVM, governance and staking token of the Planq Network',
      denom_units: [
        {
          denom: 'aplanq',
          exponent: 0,
        },
        {
          denom: 'planq',
          exponent: 18,
        },
      ],
      base: 'aplanq',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
      },
      coingecko_id: 'planq',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
        },
      ],
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [
        {
          denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
          exponent: 0,
        },
        {
          denom: 'srcx',
          exponent: 9,
        },
      ],
      base: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff',
          },
          chain: {
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff',
          },
          provider: 'DeltaSwap.io',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
      },
    },
  ],
};
