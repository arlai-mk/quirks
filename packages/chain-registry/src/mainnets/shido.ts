import type { Chain, AssetList, Versions } from '../types';

export const shido: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'shido',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://shido.io/',
  pretty_name: 'Shido',
  chain_id: 'shido_9008-1',
  bech32_prefix: 'shido',
  node_home: '$HOME/.shidod',
  daemon_name: 'shidod',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'shido',
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
        denom: 'shido',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/ShidoGlobal/shidochain',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    cosmos_sdk_version: 'v0.47.4',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2',
    },
    cosmwasm_version: 'v0.45.0',
    cosmwasm_enabled: true,
    ibc_go_version: 'v7.3.0',
    binaries: {
      'linux/amd64':
        'https://github.com/ShidoGlobal/mainnetShidoNodeSync/releases/download/v1.0.0/ubuntu_22.04.tar.gz',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/ShidoGlobal/mainnetShidoNodeSync/main/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0',
        tag: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
        cosmos_sdk_version: 'v0.47.4',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        ibc_go_version: 'v7.3.0',
        binaries: {
          'linux/amd64':
            'https://github.com/ShidoGlobal/mainnetShidoNodeSync/releases/download/v1.0.0/ubuntu_22.04.tar.gz',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg',
  },
  description:
    'Developers use Shido as the Ethereum and Wasm Chain to deploy applications of the future. Get all the functionalities of Ethereum and Wasm with the power of IBC and Interchain composability.',
  peers: {
    seeds: [
      {
        id: '181fcc5672fee87751eb369491744e85ba0651f5',
        address: '18.153.233.126:26656',
        provider: 'SHIDO',
      },
      {
        id: '8d46e292347951d651486611abac77825a0c83f8',
        address: '18.199.25.117:26656',
        provider: 'SHIDO',
      },
      {
        id: 'cdf19a7234ee8ec12519f6ad066408f09e1b73e0',
        address: '15.157.50.94:26656',
        provider: 'SHIDO',
      },
      {
        id: '8793ad6de6efdb6919d31e74e61a1be57a6d6d32',
        address: '3.97.121.236:26656',
        provider: 'SHIDO',
      },
    ],
    persistent_peers: [
      {
        id: '181fcc5672fee87751eb369491744e85ba0651f5',
        address: '18.153.233.126:26656',
        provider: 'SHIDO',
      },
      {
        id: '8d46e292347951d651486611abac77825a0c83f8',
        address: '18.199.25.117:26656',
        provider: 'SHIDO',
      },
      {
        id: 'cdf19a7234ee8ec12519f6ad066408f09e1b73e0',
        address: '15.157.50.94:26656',
        provider: 'SHIDO',
      },
      {
        id: '8793ad6de6efdb6919d31e74e61a1be57a6d6d32',
        address: '3.97.121.236:26656',
        provider: 'SHIDO',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://tendermint.shidoscan.com',
        provider: 'Shido',
      },
      {
        address: 'https://shidochain_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      },
    ],
    rest: [
      {
        address: 'https://swagger.shidoscan.com',
        provider: 'Shido',
      },
      {
        address: 'https://shidochain_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.shidoscan.com',
        provider: 'shido.io',
      },
      {
        address: 'https://grpc-web.shidoscan.com',
        provider: 'shido.io',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://rpc-nodes.shidoscan.com',
        provider: 'Shido',
      },
      {
        address: 'https://rpc-delta-nodes.shidoscan.com',
        provider: 'Shido',
      },
      {
        address: 'https://shidochain_mainnet_evm.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      },
    ],
  },
  explorers: [
    {
      kind: 'shido',
      url: 'https://shidoscan.com',
      tx_page: 'https://shidoscan.com/tx/${txHash}',
      account_page: 'https://shidoscan.com/address/${accountAddress}',
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/shido',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/shido/tx/${txHash}',
      account_page:
        'https://explorer.whenmoonwhenlambo.money/shido/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg',
    },
  ],
};

export const shidoAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'shido',
  assets: [
    {
      description:
        'The native EVM and Wasm, governance and staking token of the Shido Chain',
      denom_units: [
        {
          denom: 'shido',
          exponent: 0,
        },
        {
          denom: 'SHIDO',
          exponent: 18,
        },
      ],
      base: 'shido',
      name: 'Shido',
      display: 'SHIDO',
      symbol: 'SHIDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg',
      },
      coingecko_id: 'shido-2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg',
        },
      ],
      socials: {
        website: 'https://shido.io/',
        twitter: 'https://twitter.com/ShidoGlobal',
      },
    },
  ],
};
