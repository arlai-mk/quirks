import type { Chain, AssetList, Versions } from '../types';

export const cosmoshubtestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'cosmoshubtestnet',
  chain_id: 'theta-testnet-001',
  pretty_name: 'Cosmos Hub Public Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'cosmos',
  daemon_name: 'gaiad',
  node_home: '$HOME/.gaia',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uatom',
        fixed_min_gas_price: 0.005,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uatom',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/cosmos/gaia',
    recommended_version: 'v14.1.0',
    compatible_versions: ['v14.1.0-rc0', 'v14.1.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-linux-amd64',
      'linux/arm64':
        'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-linux-arm64',
      'darwin/amd64':
        'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-darwin-amd64',
      'darwin/arm64':
        'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-darwin-arm64',
      'windows/amd64':
        'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-windows-amd64.exe',
      'windows/arm64':
        'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-windows-arm64.exe',
    },
    genesis: {
      genesis_url:
        'https://github.com/cosmos/testnets/raw/master/public/genesis.json.gz',
    },
    versions: [
      {
        name: 'v9.0.1',
        recommended_version: 'v9.0.1',
        compatible_versions: ['v9.0.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-linux-amd64',
          'linux/arm64':
            'https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-linux-arm64',
          'darwin/amd64':
            'https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-darwin-amd64',
          'darwin/arm64':
            'https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-darwin-arm64',
          'windows/amd64':
            'https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-windows-amd64.exe',
        },
      },
      {
        name: 'v10.0.1',
        recommended_version: 'v10.0.1',
        compatible_versions: ['v10.0.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/cosmos/gaia/releases/download/v10.0.1/gaiad-v10.0.1-linux-amd64',
          'linux/arm64':
            'https://github.com/cosmos/gaia/releases/download/v10.0.1/gaiad-v10.0.1-linux-arm64',
          'darwin/amd64':
            'https://github.com/cosmos/gaia/releases/download/v10.0.1/gaiad-v10.0.1-darwin-amd64',
          'darwin/arm64':
            'https://github.com/cosmos/gaia/releases/download/v10.0.1/gaiad-v10.0.1-darwin-arm64',
          'windows/amd64':
            'https://github.com/cosmos/gaia/releases/download/v10.0.1/gaiad-v10.0.1-windows-amd64.exe',
        },
      },
      {
        name: 'v11',
        recommended_version: 'v11.0.0',
        compatible_versions: ['v11.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-linux-amd64',
          'linux/arm64':
            'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-linux-arm64',
          'darwin/amd64':
            'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-darwin-amd64',
          'darwin/arm64':
            'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-darwin-arm64',
          'windows/amd64':
            'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-windows-amd64.exe',
          'windows/arm64':
            'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-windows-arm64.exe',
        },
      },
      {
        name: 'v12',
        recommended_version: 'v12.0.0',
        compatible_versions: ['v12.0.0-rc0', 'v12.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-linux-amd64',
          'linux/arm64':
            'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-linux-arm64',
          'darwin/amd64':
            'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-darwin-amd64',
          'darwin/arm64':
            'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-darwin-arm64',
          'windows/amd64':
            'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-windows-amd64.exe',
          'windows/arm64':
            'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-windows-arm64.exe',
        },
      },
      {
        name: 'v13',
        recommended_version: 'v13.0.0',
        compatible_versions: ['v13.0.0-rc0', 'v13.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-linux-amd64',
          'linux/arm64':
            'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-linux-arm64',
          'darwin/amd64':
            'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-darwin-amd64',
          'darwin/arm64':
            'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-darwin-arm64',
          'windows/amd64':
            'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-windows-amd64.exe',
          'windows/arm64':
            'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-windows-arm64.exe',
        },
      },
      {
        name: 'v14',
        recommended_version: 'v14.1.0',
        compatible_versions: ['v14.1.0-rc0', 'v14.1.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-linux-amd64',
          'linux/arm64':
            'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-linux-arm64',
          'darwin/amd64':
            'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-darwin-amd64',
          'darwin/arm64':
            'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-darwin-arm64',
          'windows/amd64':
            'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-windows-amd64.exe',
          'windows/arm64':
            'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-windows-arm64.exe',
        },
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '639d50339d7045436c756a042906b9a69970913f',
        address: 'seed-01.theta-testnet.polypore.xyz:26656',
        provider: 'Hypha',
      },
      {
        id: '3e506472683ceb7ed75c1578d092c79785c27857',
        address: 'seed-02.theta-testnet.polypore.xyz:26656',
        provider: 'Hypha',
      },
    ],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.sentry-01.theta-testnet.polypore.xyz',
        provider: 'Hypha',
      },
      {
        address: 'https://rpc.sentry-02.theta-testnet.polypore.xyz',
        provider: 'Hypha',
      },
      {
        address: 'https://rpc.state-sync-01.theta-testnet.polypore.xyz',
        provider: 'Hypha',
      },
      {
        address: 'https://rpc.state-sync-02.theta-testnet.polypore.xyz',
        provider: 'Hypha',
      },
      {
        address: 'https://public-cosmos-theta.w3node.com',
        provider: 'Interchain.FM',
      },
      {
        address: 'https://rpc-theta.osmotest5.osmosis.zone/',
        provider: 'Osmosis',
      },
    ],
    rest: [
      {
        address: 'https://rest.sentry-01.theta-testnet.polypore.xyz',
        provider: 'Hypha',
      },
      {
        address: 'https://rest.sentry-02.theta-testnet.polypore.xyz',
        provider: 'Hypha',
      },
      {
        address: 'https://rest.state-sync-01.theta-testnet.polypore.xyz',
        provider: 'Hypha',
      },
      {
        address: 'https://rest.state-sync-02.theta-testnet.polypore.xyz',
        provider: 'Hypha',
      },
      {
        address: 'https://public-cosmos-theta.w3node.com/rest/',
        provider: 'Interchain.FM',
      },
      {
        address: 'https://lcd-theta.osmotest5.osmosis.zone/',
        provider: 'Osmosis',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.sentry-01.theta-testnet.polypore.xyz',
        provider: 'Hypha',
      },
      {
        address: 'https://grpc.sentry-02.theta-testnet.polypore.xyz',
        provider: 'Hypha',
      },
      {
        address: 'https://grpc.state-sync-01.theta-testnet.polypore.xyz',
        provider: 'Hypha',
      },
      {
        address: 'https://grpc.state-sync-02.theta-testnet.polypore.xyz',
        provider: 'Hypha',
      },
    ],
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/cosmoshub-testnet',
      tx_page: 'https://testnet.mintscan.io/cosmoshub-testnet/txs/${txHash}',
    },
    {
      kind: 'Big Dipper',
      url: 'https://explorer.theta-testnet.polypore.xyz/',
      tx_page:
        'https://explorer.theta-testnet.polypore.xyz/transactions/${txHash}',
    },
  ],
};

export const cosmoshubtestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'cosmoshubtestnet',
  assets: [
    {
      description:
        'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denom_units: [
        {
          denom: 'uatom',
          exponent: 0,
        },
        {
          denom: 'atom',
          exponent: 6,
        },
      ],
      base: 'uatom',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
        },
      ],
    },
  ],
};
