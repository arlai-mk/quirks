import type { Chain, AssetLists } from '../types';

export const jackaltestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'jackaltestnet',
  chain_id: 'canine-1',
  website: 'https://jackalprotocol.com',
  pretty_name: 'Jackal',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'jkl',
  daemon_name: 'canined',
  node_home: '$HOME/.canine',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ujkl',
        fixed_min_gas_price: 0,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/JackalLabs/canine-chain',
    recommended_version: 'v1.2.2-alpha.1',
    compatible_versions: ['v1.2.2-alpha.1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/JackalLabs/woof/master/genesis/woof-final.json',
    },
    binaries: {
      'linux/amd64':
        'https://github.com/JackalLabs/canine-chain/releases/download/v1.2.2-alpha.1/canined-Linux',
      'darwin/amd64':
        'https://github.com/JackalLabs/canine-chain/releases/download/v1.2.2-alpha.1/canined-macOS',
    },
    versions: [
      {
        name: 'v1.2.2-alpha.1',
        recommended_version: 'v1.2.2-alpha.1',
        compatible_versions: ['v1.2.2-alpha.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v1.2.2-alpha.1/canined-Linux',
          'darwin/amd64':
            'https://github.com/JackalLabs/canine-chain/releases/download/v1.2.2-alpha.1/canined-macOS',
        },
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '052c498dd1cc603b4d32f772035b6a8ca902def3',
        address: '23.88.73.211:26656',
      },
      {
        id: '0bdeaaa237b41e3b964a027a110c6ab5bf561177',
        address: '209.34.206.38:26656',
      },
      {
        id: 'bf7ee27a24e7d5f45653206fbbda8c4b716b74b1',
        address: '89.58.38.59:26656',
      },
      {
        id: '9eecc498dd2542c862f5bfb84ed7d2e1e3d922ab',
        address: '34.201.48.14:26656',
      },
      {
        id: 'bf62b185eef3c185f8ebf81d5cf54bdc064b21d8',
        address: '85.10.216.157:26656',
      },
      {
        id: '43e800018a5b52ba119a5410ff45cbeb63182cc8',
        address: '207.244.127.5:26656',
      },
      {
        id: '942087a9665e8235f8037d0b9d2a3f8a8c3d562b',
        address: '104.207.138.181:26656',
      },
      {
        id: '9d0094606fe8748f1c06b494f7c0cbbd44808ec6',
        address: '131.153.59.6:26656',
      },
      {
        id: '6071fe2fc7e4f49caa4b1fd1cfe19007152312e0',
        address: '34.76.87.33:26656',
      },
      {
        id: '3f58d7c35ad55ef6cea94f7aa2ffe79df1c01768',
        address: '78.107.253.133:26656',
      },
      {
        id: '46cb18ca32ad7329cb82a10316087794ef12150f',
        address: '185.107.57.74:26656',
      },
    ],
    persistent_peers: [
      {
        id: '052c498dd1cc603b4d32f772035b6a8ca902def3',
        address: '23.88.73.211:26656',
      },
      {
        id: '0bdeaaa237b41e3b964a027a110c6ab5bf561177',
        address: '209.34.206.38:26656',
      },
      {
        id: 'bf7ee27a24e7d5f45653206fbbda8c4b716b74b1',
        address: '89.58.38.59:26656',
      },
      {
        id: '9eecc498dd2542c862f5bfb84ed7d2e1e3d922ab',
        address: '34.201.48.14:26656',
      },
      {
        id: 'bf62b185eef3c185f8ebf81d5cf54bdc064b21d8',
        address: '85.10.216.157:26656',
      },
      {
        id: '43e800018a5b52ba119a5410ff45cbeb63182cc8',
        address: '207.244.127.5:26656',
      },
      {
        id: '942087a9665e8235f8037d0b9d2a3f8a8c3d562b',
        address: '104.207.138.181:26656',
      },
      {
        id: '9d0094606fe8748f1c06b494f7c0cbbd44808ec6',
        address: '131.153.59.6:26656',
      },
      {
        id: '6071fe2fc7e4f49caa4b1fd1cfe19007152312e0',
        address: '34.76.87.33:26656',
      },
      {
        id: '3f58d7c35ad55ef6cea94f7aa2ffe79df1c01768',
        address: '78.107.253.133:26656',
      },
      {
        id: '46cb18ca32ad7329cb82a10316087794ef12150f',
        address: '185.107.57.74:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://testnet-rpc.jackalprotocol.com',
        provider: 'Jackal Labs',
      },
    ],
    rest: [
      {
        address: 'https://testnet-api.jackalprotocol.com',
        provider: 'Jackal Labs',
      },
    ],
    grpc: [
      {
        address: 'https://testnet-grpc.jackalprotocol.com',
        provider: 'Jackal Labs',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/jackal',
      tx_page: 'https://ping.pub/jackal/tx/${txHash}',
    },
  ],
};

export const jackaltestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'jackaltestnet',
  assets: [
    {
      description: 'The native staking and governance token of Jackal.',
      denom_units: [
        {
          denom: 'ujkl',
          exponent: 0,
        },
        {
          denom: 'jkl',
          exponent: 6,
        },
      ],
      base: 'ujkl',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/jackaltestnet/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/jackaltestnet/images/jkl.svg',
      },
      coingecko_id: 'jackal',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/jackaltestnet/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/jackaltestnet/images/jkl.svg',
        },
      ],
    },
  ],
};