import type { Chain, AssetList, Versions } from '../types';

export const stratos: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'stratos',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.thestratos.org',
  pretty_name: 'Stratos',
  chain_id: 'stratos-1',
  bech32_prefix: 'st',
  daemon_name: 'stchaind',
  node_home: '$HOME/.stchaind',
  key_algos: ['ethsecp256k1'],
  extra_codecs: [],
  slip44: 606,
  fees: {
    fee_tokens: [
      {
        denom: 'wei',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/stratosnet/stratos-chain',
    recommended_version: 'v0.11.2',
    compatible_versions: ['v0.11.2'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/stratosnet/mainnet/main/genesis/genesis.json',
    },
    versions: [
      {
        name: 'v0.11.2',
        recommended_version: 'v0.11.2',
        compatible_versions: ['v0.11.2'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg',
  },
  peers: {
    seeds: [
      {
        id: 'cdbd7ce27584e699d9b9e6d72a1551666c750e4d',
        address: '35.86.41.142:26656',
        provider: 'thestratos.org',
      },
      {
        id: 'ce225e67f7a383b50c91aeb902a86dd3ecb70d65',
        address: '34.84.212.13:26656',
        provider: 'thestratos.org',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:21856',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '8a57d4701e87096c9bf151c376aafa97f9f516c7',
        address: '78.46.174.39:25656',
        provider: '[NODERS]TEAM',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.thestratos.org',
        provider: 'thestratos.org',
      },
      {
        address: 'http://stratos.rpc.nodersteam.com:26657/',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://rpc-stratos.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://stratos-rpc.noders.services:443',
        provider: '[NODERS]TEAM',
      },
    ],
    rest: [
      {
        address: 'https://rest.thestratos.org',
        provider: 'thestratos.org',
      },
      {
        address: 'https://lcd-stratos.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://stratos-api.noders.services:443',
        provider: '[NODERS]TEAM',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.thestratos.org',
        provider: 'thestratos.org',
      },
      {
        address: 'https://grpc.stratos.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'stratos.grpc.nodersteam.com:9090',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'stratos-grpc.noders.services:29090',
        provider: '[NODERS]TEAM',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://web3-rpc.thestratos.org',
        provider: 'thestratos.org',
      },
      {
        address: 'https://jsonrpc.stratos.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://stratos-jsonrpc.noders.services',
        provider: '[NODERS]TEAM',
      },
    ],
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.thestratos.org',
      tx_page: 'https://explorer.thestratos.org/transactions/${txHash}',
      account_page:
        'https://explorer.thestratos.org/accounts/${accountAddress}',
    },
    {
      kind: 'blockscout',
      url: 'https://web3-explorer.thestratos.org',
      tx_page: 'https://web3-explorer.thestratos.org/tx/${txHash}',
      account_page:
        'https://web3-explorer.thestratos.org/address/${accountAddress}',
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/stratos',
      tx_page: 'https://explorer.nodestake.top/stratos/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.top/stratos/accounts/${accountAddress}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/stratos',
      tx_page: 'https://explorer.tcnetwork.io/stratos/transaction/${txHash}',
      account_page:
        'https://explorer.tcnetwork.io/stratos/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg',
    },
  ],
};

export const stratosAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'stratos',
  assets: [
    {
      description:
        'STOS coin is the token for the Stratos (STOS) cosmos based blockchain',
      denom_units: [
        {
          denom: 'wei',
          exponent: 0,
        },
        {
          denom: 'gwei',
          exponent: 9,
        },
        {
          denom: 'stos',
          exponent: 18,
        },
      ],
      base: 'wei',
      name: 'Stratos',
      display: 'stos',
      symbol: 'STOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg',
      },
      coingecko_id: 'stratos',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg',
        },
      ],
    },
  ],
};
