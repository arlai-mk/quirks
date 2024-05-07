import type { Chain, AssetList, Versions } from '../types';

export const likecointestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'likecointestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'LikeCoin Testnet',
  chain_id: 'likecoin-public-testnet-5',
  bech32_prefix: 'like',
  daemon_name: 'liked',
  node_home: '$HOME/.liked',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'nanoekil',
        fixed_min_gas_price: 1000,
        low_gas_price: 1000,
        average_gas_price: 10000,
        high_gas_price: 1000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'nanoekil',
      },
    ],
    lock_duration: {
      time: '1814400s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/likecoin/likecoin-chain',
    recommended_version: 'v4.1.1',
    compatible_versions: ['v4.1.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Linux_x86_64.tar.gz',
      'linux/arm64':
        'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Darwin_x86_64.tar.gz',
      'darwin/arm64':
        'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Darwin_arm64.tar.gz',
      'windows/amd64':
        'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Windows_x86_64.zip',
    },
    cosmos_sdk_version: '0.46',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_enabled: false,
    ibc_go_version: '6.2.1',
    ics_enabled: ['ics20-1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/likecoin/testnets/aeba532ba9162a876a2180e925a49cbedba512e5/likecoin-public-testnet-5/genesis.json',
    },
  },
  peers: {
    seeds: [
      {
        id: '49976c3bd43da9271f226cbedf02d4b6b8fc880c',
        address: '35.233.143.230:26656',
        provider: 'like.co',
      },
    ],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://node.testnet.like.co/rpc/',
        provider: 'like.co',
      },
    ],
    rest: [
      {
        address: 'https://node.testnet.like.co/',
        provider: 'like.co',
      },
    ],
    grpc: [
      {
        address: 'https://node.testnet-grpc.like.co/',
        provider: 'like.co',
      },
    ],
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://testnet.bigdipper.live/likecoin',
      tx_page: 'https://testnet.bigdipper.live/likecoin/transactions/${txHash}',
      account_page:
        'https://testnet.bigdipper.live/likecoin/accounts/${accountAddress}',
    },
    {
      kind: 'lunie-ng',
      url: 'https://likecoin-public-testnet-5.netlify.app/',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg',
  },
  keywords: [],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg',
    },
  ],
};

export const likecointestnetAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'likecointestnet',
  assets: [
    {
      description: 'EKIL is the native token for LikeCoin Testnet',
      denom_units: [
        {
          denom: 'nanoekil',
          exponent: 0,
        },
        {
          denom: 'ekil',
          exponent: 9,
        },
      ],
      base: 'nanoekil',
      name: 'LikeCoin',
      display: 'ekil',
      symbol: 'EKIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg',
        },
      ],
    },
  ],
};
