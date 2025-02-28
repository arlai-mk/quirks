import type { Chain, AssetList, Versions } from '../types';

export const lavaVersions: Versions = {
  $schema: '../versions.schema.json',
  chain_name: 'lava',
  versions: [
    {
      name: 'v0.33.1',
      tag: 'v0.33.1',
      height: 0,
      binaries: {
        'linux/amd64':
          'https://github.com/lavanet/lava/releases/download/v0.33.1/lavad-v0.33.1-linux-amd64?checksum=sha256:ae2e49e53bd8c979ca27c83d3d10a708fc23247dae020840fe46b9b68cb8e925',
      },
    },
  ],
};

export const lava: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'lava',
  status: 'upcoming',
  network_type: 'mainnet',
  website: 'https://lavanet.xyz/',
  update_link:
    'https://raw.githubusercontent.com/lavanet/lava/main/chain.schema.json',
  pretty_name: 'Lava',
  chain_id: 'lava-mainnet-1',
  bech32_prefix: 'lava@',
  daemon_name: 'lavad',
  node_home: '$HOME/.lava',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ulava',
        fixed_min_gas_price: 1e-9,
        low_gas_price: 1e-9,
        average_gas_price: 0.00005,
        high_gas_price: 0.0001,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ulava',
      },
    ],
    lock_duration: {
      time: '1814400s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/lavanet/lava',
    recommended_version: 'v0.33.1',
    compatible_versions: ['v0.33.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/lavanet/lava/releases/download/v0.33.1/lavad-v0.33.1-linux-amd64?checksum=sha256:ae2e49e53bd8c979ca27c83d3d10a708fc23247dae020840fe46b9b68cb8e925',
    },
    go_version: '1.20',
    cosmos_sdk_version: 'github.com/lavanet/cosmos-sdk@v0.47.x-lava',
    consensus: {
      type: 'cometbft',
      version: '0.37.4',
    },
    cosmwasm_enabled: false,
    ibc_go_version: 'v7.2.0',
    ics_enabled: ['ics20-1'],
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava-chain-logo.png',
      theme: {
        primary_color_hex: '#FF3900',
      },
      layout: 'logo',
      text_position: 'right',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png',
      layout: 'logomark',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava-chain-logo.png',
  },
  description:
    'Lava (LAVA) is the data access layer of the modular stack. developers and ecosystems permissionlessly add services to be served or accessed through lava. featuring a fully decentralized open source sdk integrable in frontends and a battle tested fully scalable open source server kit and can be used locally or through managed endpoints. Lava features rpc data access, indexing services, debug apis, archive access and more. Service providers can join the network, earn rewards either in the native token of the chain via token bought subscriptions on chain or through any ibc transferred token via incentive pools created and funded by ecosystems and DAOs. Developers can use the abstraction and go multi chain in seconds, not needing to choose what tools to use, having the access aggregated for them. Build whatever, wherever.',
  peers: {
    seeds: [
      {
        id: 'e023c3892862744081360a99a2666e8111b196d3',
        address: 'lava-seed.y2.finance:26656',
        provider: 'YTWOFUND',
      },
      {
        id: '810b95bb95de712d4f30c2f62738bd976c016831',
        address: 'lava-seed.finteh.org:26656',
        provider: 'finteh',
      },
      {
        id: 'cec848e7d4c5a7ae305b27cda133d213435c110f',
        address: 'seed-lava.ibs.team:16680',
        provider: 'Inter Blockchain Services',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://lava-rpc.w3coins.io:443',
        provider: 'w3coins',
      },
      {
        address: 'https://lava-rpc.finteh.org:443',
        provider: 'finteh',
      },
      {
        address: 'https://lava-rpc.y2.finance:443',
        provider: 'YTWOFUND',
      },
      {
        address: 'https://lava-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
    rest: [
      {
        address: 'https://lava-api.w3coins.io:443',
        provider: 'w3coins',
      },
      {
        address: 'https://lava.api.staking-explorer.com',
        provider: 'Daily DROP',
      },
      {
        address: 'https://lava-api.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
  },
  explorers: [
    {
      kind: 'w3coins',
      url: 'https://lava-explorer.w3coins.io/Lava',
      tx_page: 'https://lava-explorer.w3coins.io/Lava/tx/${txHash}',
      account_page:
        'https://lava-explorer.w3coins.io/Lava/account/${accountAddress}',
    },
  ],
  keywords: [
    'modular',
    'data',
    'data access',
    'rpc',
    'staking',
    'dual staking',
    'indexing',
    'incentivized public rpc',
  ],
};

export const lavaAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'lava',
  assets: [
    {
      description: 'The native token of Lava',
      denom_units: [
        {
          denom: 'ulava',
          exponent: 0,
        },
        {
          denom: 'lava',
          exponent: 6,
        },
      ],
      type_asset: 'sdk.coin',
      base: 'ulava',
      name: 'Lava',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png',
        },
      ],
      keywords: [
        'modular',
        'data',
        'data access',
        'rpc',
        'staking',
        'dual staking',
        'indexing',
        'incentivized public rpc',
      ],
      socials: {
        website: 'https://lavanet.xyz',
        twitter: 'https://twitter.com/lavanetxyz',
      },
    },
  ],
};
