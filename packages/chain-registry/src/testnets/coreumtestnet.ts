import type { Chain, AssetList, Versions } from '../types';

export const coreumtestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'coreumtestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.coreum.com',
  pretty_name: 'Coreum',
  chain_id: 'coreum-testnet-1',
  bech32_prefix: 'testcore',
  daemon_name: 'cored',
  node_home: '$HOME/.core/coreum-testnet-1',
  key_algos: ['secp256k1'],
  slip44: 990,
  fees: {
    fee_tokens: [
      {
        denom: 'utestcore',
        fixed_min_gas_price: 0.03125,
        low_gas_price: 0.0625,
        average_gas_price: 0.0625,
        high_gas_price: 62.5,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'utestcore',
      },
    ],
    lock_duration: {
      time: '168h',
    },
  },
  codebase: {
    git_repo: 'https://github.com/CoreumFoundation/coreum',
    recommended_version: 'v0.1.1',
    compatible_versions: ['v0.1.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/CoreumFoundation/coreum/releases/download/v0.1.1/cored-linux-amd64?checksum=sha256:21db2ea1b31d9e8202e0d11f2bee0de78d2e677c07fd75a7db1f3958bf49146c',
      'linux/arm64':
        'https://github.com/CoreumFoundation/coreum/releases/download/v0.1.1/cored-linux-arm64?checksum=sha256:7d383d1a1bc9185677b25c05ebbe01cf20dd6c779ca4301065359ea6e3bcefa3',
    },
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.30',
    cosmwasm_enabled: true,
    genesis: {
      name: 'v0',
      genesis_url:
        'https://raw.githubusercontent.com/CoreumFoundation/coreum/master/genesis/coreum-testnet-1.json',
    },
    versions: [
      {
        name: 'v0',
        tag: 'v0.1.1',
        height: 0,
        recommended_version: 'v0.1.1',
        compatible_versions: ['v0.1.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v0.1.1/cored-linux-amd64?checksum=sha256:21db2ea1b31d9e8202e0d11f2bee0de78d2e677c07fd75a7db1f3958bf49146c',
          'linux/arm64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v0.1.1/cored-linux-arm64?checksum=sha256:7d383d1a1bc9185677b25c05ebbe01cf20dd6c779ca4301065359ea6e3bcefa3',
        },
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
      },
    ],
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
      theme: {
        primary_color_hex: '#25d695',
      },
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
  },
  peers: {
    seeds: [
      {
        id: '64391878009b8804d90fda13805e45041f492155',
        address: 'seed-sirius.testnet-1.coreum.dev:26656',
        provider: 'Coreum Foundation',
      },
      {
        id: '53f2367d8f8291af8e3b6ca60efded0675ff6314',
        address: 'seed-antares.mainnet-1.coreum.dev:26656',
        provider: 'Coreum Foundation',
      },
      {
        id: '496ac0ba20188f70f41e0a814dfd4d9a617338f8',
        address: 'coreum-testnet-seed.ibs.team:16660',
        provider: 'Inter Blockchain Services',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://full-node.testnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://full-node-eris.testnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://coreum-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
    grpc: [
      {
        address: 'https://full-node.testnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://full-node-eris.testnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation',
      },
    ],
    rest: [
      {
        address: 'https://full-node.testnet-1.coreum.dev:1317',
        provider: 'Coreum',
      },
      {
        address: 'https://coreum-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
  },
  explorers: [
    {
      kind: 'Coreum',
      url: 'https://explorer.testnet-1.coreum.dev/coreum',
      tx_page:
        'https://explorer.testnet-1.coreum.dev/coreum/transactions/${txHash}',
      account_page:
        'https://explorer.testnet-1.coreum.dev/coreum/account/${accountAddress}',
    },
  ],
  keywords: ['dex', 'staking', 'wasm', 'assets', 'nft'],
};

export const coreumtestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'coreumtestnet',
  assets: [
    {
      description: 'The native token of Coreum',
      denom_units: [
        {
          denom: 'utestcore',
          exponent: 0,
        },
        {
          denom: 'testcore',
          exponent: 6,
        },
      ],
      base: 'utestcore',
      name: 'Coreum',
      display: 'testcore',
      symbol: 'TESTCORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
      },
      coingecko_id: 'coreum',
      keywords: ['dex', 'staking', 'wasm', 'assets', 'nft'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
        },
      ],
    },
  ],
};
