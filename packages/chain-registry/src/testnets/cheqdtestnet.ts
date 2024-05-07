import type { Chain, AssetList, Versions } from '../types';

export const cheqdtestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'cheqdtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'cheqd',
  chain_id: 'cheqd-testnet-6',
  bech32_prefix: 'cheqd',
  daemon_name: 'cheqd-noded',
  node_home: '$HOME/.cheqdnode',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ncheq',
        fixed_min_gas_price: 25,
        low_gas_price: 50,
        average_gas_price: 75,
        high_gas_price: 100,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/cheqd/cheqd-node',
    recommended_version: 'v1.4.0',
    compatible_versions: ['v1.2.5', 'v1.3.0', 'v1.4.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-linux-amd64.tar.gz',
      'linux/arm64':
        'https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-linux-arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-darwin-amd64.tar.gz',
      'darwin/arm64':
        'https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-darwin-arm64.tar.gz',
    },
    cosmos_sdk_version: '0.46.10',
    consensus: {
      type: 'tendermint',
      version: '0.34.26',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/cheqd/cheqd-node/main/networks/testnet/genesis.json',
    },
    versions: [
      {
        name: 'v1.4.0',
        recommended_version: 'v1.4.0',
        compatible_versions: ['v1.2.5', 'v1.3.0', 'v1.4.0'],
        cosmos_sdk_version: '0.46.10',
        consensus: {
          type: 'tendermint',
          version: '0.34.26',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-linux-arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-darwin-amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-darwin-arm64.tar.gz',
        },
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '658453f9578d82f0897f13205ca2e7ad37279f95',
        address: 'seed1-eu.cheqd.network:26656',
        provider: 'cheqd',
      },
      {
        id: '32d626260f74f3c824dfa15a624c078f27fc31a2',
        address: 'seed1-ap.cheqd.network:26656',
        provider: 'cheqd',
      },
    ],
    persistent_peers: [
      {
        id: '8c45237d435247270b95edae33fd1a69341eb1bb',
        address: 'sentry1-eu.cheqd.network:26656',
        provider: 'cheqd',
      },
      {
        id: '355d3e577b9b1eaadf438694e86364425cf4bb0e',
        address: 'sentry1-ap.cheqd.network:26656',
        provider: 'cheqd',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cheqd.network',
        provider: 'cheqd',
      },
    ],
    rest: [
      {
        address: 'https://api.cheqd.network',
        provider: 'cheqd',
      },
    ],
    grpc: [
      {
        address: 'grpc.cheqd.network:443',
        provider: 'cheqd',
      },
    ],
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://testnet-explorer.cheqd.io/',
      tx_page: 'https://testnet-explorer.cheqd.io/transactions/${txHash}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg',
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg',
    },
  ],
};

export const cheqdtestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'cheqdtestnet',
  assets: [
    {
      description: 'Native token for the cheqd network',
      denom_units: [
        {
          denom: 'ncheq',
          exponent: 0,
        },
        {
          denom: 'cheq',
          exponent: 9,
        },
      ],
      base: 'ncheq',
      display: 'cheq',
      name: 'cheqd',
      symbol: 'CHEQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cheqdtestnet/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cheqdtestnet/images/cheq.svg',
      },
      coingecko_id: 'cheqd-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cheqdtestnet/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cheqdtestnet/images/cheq.svg',
        },
      ],
    },
  ],
};
