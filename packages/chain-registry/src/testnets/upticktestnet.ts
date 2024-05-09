import type { Chain, AssetList, Versions } from '../types';

export const upticktestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'upticktestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.uptickproject.com/',
  pretty_name: 'Uptick',
  chain_id: 'uptick_7000-2',
  bech32_prefix: 'uptick',
  daemon_name: 'uptickd',
  node_home: '$HOME/.uptickd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'auptick',
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/UptickNetwork/uptick',
    recommended_version: 'v0.2.6',
    compatible_versions: ['v0.2.6'],
    cosmos_sdk_version: '0.46.5',
    consensus: {
      type: 'tendermint',
      version: '0.34.23',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/UptickNetwork/uptick-testnet/main/uptick_7000-2/genesis.json',
    },
    versions: [
      {
        name: 'v0.2.6',
        recommended_version: 'v0.2.6',
        compatible_versions: ['v0.2.6'],
        cosmos_sdk_version: '0.46.5',
        consensus: {
          type: 'tendermint',
          version: '0.34.23',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/UptickNetwork/uptick/releases/download/v0.2.6/uptick-linux-amd64-v0.2.6.tar.gz',
        },
      },
    ],
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '67a39373f4b88156887e724a8e819b001823b663',
        address: '65.108.195.29:26616',
        provider: 'Staketab',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://uptick-7000-2-rpc.staketab.org:443',
        provider: 'Staketab',
      },
    ],
    rest: [
      {
        address: 'https://uptick-7000-2-rest.staketab.org',
        provider: 'Staketab',
      },
    ],
    grpc: [
      {
        address: 'services.staketab.com:9004',
        provider: 'Staketab',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.testnet.uptick.network/uptick-network-testnet',
      tx_page:
        'https://explorer.testnet.uptick.network/uptick-network-testnet/tx/${txHash}',
    },
    {
      kind: 'Nodes.Guru',
      url: 'https://uptick.explorers.guru/',
      tx_page: 'https://uptick.explorers.guru/transaction/${txHash}',
    },
  ],
};

export const upticktestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'upticktestnet',
  assets: [
    {
      description: 'The native token of Uptick',
      denom_units: [
        {
          denom: 'auptick',
          exponent: 0,
        },
        {
          denom: 'uptick',
          exponent: 18,
        },
      ],
      base: 'auptick',
      name: 'Uptick',
      display: 'uptick',
      symbol: 'UPTICK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/upticktestnet/images/uptick.png',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/upticktestnet/images/uptick.png',
        },
      ],
    },
  ],
};
