import type { Chain, AssetList, Versions } from '../types';

export const cronos: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cronos',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://cronos.org',
  pretty_name: 'Cronos',
  chain_id: 'cronosmainnet_25-1',
  bech32_prefix: 'crc',
  daemon_name: 'cronosd',
  node_home: '$HOME/.cronos',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'basecro',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/crypto-org-chain/cronos',
    recommended_version: 'v1.2.1',
    compatible_versions: ['v1.2.0', 'v1.2.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/crypto-org-chain/cronos/releases/download/v1.2.1/cronos_1.2.1_Linux_x86_64.tar.gz',
      'linux/arm64':
        'https://github.com/crypto-org-chain/cronos/releases/download/v1.2.1/cronos_1.2.1_Linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/crypto-org-chain/cronos/releases/download/v1.2.1/cronos_1.2.1_Darwin_x86_64.tar.gz',
      'darwin/arm64':
        'https://github.com/crypto-org-chain/cronos/releases/download/v1.2.1/cronos_1.2.1_Darwin_arm64.tar.gz',
      'windows/amd64':
        'https://github.com/crypto-org-chain/cronos/releases/download/v1.2.1/cronos_1.2.1_Windows_x86_64.zip',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/crypto-org-chain/cronos-mainnet/master/cronosmainnet_25-1/genesis.json',
    },
    versions: [
      {
        name: 'v1.2.1',
        recommended_version: 'v1.2.1',
        compatible_versions: ['v1.2.0', 'v1.2.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/crypto-org-chain/cronos/releases/download/v1.2.1/cronos_1.2.1_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/crypto-org-chain/cronos/releases/download/v1.2.1/cronos_1.2.1_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/crypto-org-chain/cronos/releases/download/v1.2.1/cronos_1.2.1_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/crypto-org-chain/cronos/releases/download/v1.2.1/cronos_1.2.1_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/crypto-org-chain/cronos/releases/download/v1.2.1/cronos_1.2.1_Windows_x86_64.zip',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
  },
  peers: {
    seeds: [
      {
        id: '0d5cf1394a1cfde28dc8f023567222abc0f47534',
        address: 'cronos-seed-0.crypto.org:26656',
        provider: 'cronos.org',
      },
      {
        id: '3032073adc06d710dd512240281637c1bd0c8a7b',
        address: 'cronos-seed-1.crypto.org:26656',
        provider: 'cronos.org',
      },
      {
        id: '04f43116b4c6c70054d9c2b7485383df5b1ed1da',
        address: 'cronos-seed-2.crypto.org:26656',
        provider: 'cronos.org',
      },
      {
        id: '337377dcda43d79c537d2c4d93ad3b698ce9452e',
        address: 'bd-cronos-mainnet-seed-node-01.bdnodes.net:26656',
        provider: 'Blockdaemon.com',
      },
      {
        id: 'abedfe94dd5731e9750e045ca8d8e40aa6d3c60b',
        address: 'seed.cronos.jerrychong.com:26656',
        provider: "Jerry's Pool",
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '0d5cf1394a1cfde28dc8f023567222abc0f47534',
        address: 'cronos-seed-0.crypto.org:26656',
        provider: 'cronos.org',
      },
      {
        id: '3032073adc06d710dd512240281637c1bd0c8a7b',
        address: 'cronos-seed-1.crypto.org:26656',
        provider: 'cronos.org',
      },
      {
        id: '04f43116b4c6c70054d9c2b7485383df5b1ed1da',
        address: 'cronos-seed-2.crypto.org:26656',
        provider: 'cronos.org',
      },
      {
        id: '337377dcda43d79c537d2c4d93ad3b698ce9452e',
        address: 'bd-cronos-mainnet-seed-node-01.bdnodes.net:26656',
        provider: 'Blockdaemon.com',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cronos.org/',
        provider: 'cronos.org',
      },
      {
        address: 'https://cronos-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    rest: [
      {
        address: 'https://rest.cronos.org/',
        provider: 'cronos.org',
      },
      {
        address: 'https://cronos-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    grpc: [
      {
        address: 'grpc.cronos.org:443',
        provider: 'cronos.org',
      },
      {
        address: 'cronos-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://evm.cronos.org/',
        provider: 'cronos.org',
      },
      {
        address: 'https://cronos-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'cronoscan',
      url: 'https://cronoscan.com',
      tx_page: 'https://cronoscan.com/tx/${txHash}',
    },
    {
      kind: 'crypto.org',
      url: 'https://cronos.org/explorer',
      tx_page: 'https://cronos.org/explorer/tx/${txHash}',
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/cronos',
      tx_page: 'https://ezstaking.app/cronos/txs/${txHash}',
      account_page: 'https://ezstaking.app/cronos/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
    },
  ],
};

export const cronosAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'cronos',
  assets: [
    {
      description:
        'Cronos Chain - Get Instant DApp Portability with EVM Support',
      denom_units: [
        {
          denom: 'basecro',
          exponent: 0,
        },
        {
          denom: 'cro',
          exponent: 18,
        },
      ],
      base: 'basecro',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'cryptoorgchain',
            base_denom: 'basecro',
          },
          provider: 'Cronos',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cryptoorgchain',
            base_denom: 'basecro',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
      },
    },
    {
      description: 'Tether USDt on Cronos',
      denom_units: [
        {
          denom:
            'ibc/9106F2626880DF7FAD30621F355423B2A7523D8E2274475F009644D708A90682',
          exponent: 0,
        },
        {
          denom: 'usdt',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/9106F2626880DF7FAD30621F355423B2A7523D8E2274475F009644D708A90682',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-125',
          },
          chain: {
            channel_id: 'channel-11',
            path: 'transfer/channel-11/erc20/tether/usdt',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
      },
    },
  ],
};
