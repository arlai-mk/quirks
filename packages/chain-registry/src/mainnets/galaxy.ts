import type { Chain, AssetList, Versions } from '../types';

export const galaxy: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'galaxy',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://galaxychain.zone/',
  pretty_name: 'Galaxy',
  chain_id: 'galaxy-1',
  bech32_prefix: 'galaxy',
  daemon_name: 'galaxyd',
  node_home: '$HOME/.galaxy',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uglx',
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.035,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uglx',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/galaxies-labs/galaxy',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_linux_amd64.tar.gz',
      'darwin/amd64':
        'https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_darwin_amd64.tar.gz',
    },
    genesis: {
      genesis_url:
        'https://github.com/OrbisWorlds/networks/raw/main/galaxy-1/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_linux_amd64.tar.gz',
          'darwin/amd64':
            'https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_darwin_amd64.tar.gz',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg',
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '10f7caa39969dc36450b138848a06e7deabe6fed',
        address: '95.111.244.128:26656',
        provider: 'Pathrocknetwork',
      },
      {
        id: '8b447bd4fa1e56d8252538a6e23573e5e78924fa',
        address: '161.97.155.94:26656',
        provider: '3Tekos',
      },
    ],
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: [],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.postcapitalist.io/Galaxy',
      tx_page: 'https://explorer.postcapitalist.io/Galaxy/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg',
    },
  ],
};

export const galaxyAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'galaxy',
  assets: [
    {
      description: 'GLX is the staking token of the Galaxy Chain',
      denom_units: [
        {
          denom: 'uglx',
          exponent: 0,
        },
        {
          denom: 'glx',
          exponent: 6,
        },
      ],
      base: 'uglx',
      name: 'Galaxy',
      display: 'glx',
      symbol: 'GLX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg',
        },
      ],
    },
  ],
};
