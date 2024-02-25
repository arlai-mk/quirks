import type { Chain, AssetLists, ChainVersions } from '../types';

export const dydxtestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dydxtestnet',
  status: 'live',
  website: 'https://dydx.trade/',
  network_type: 'testnet',
  pretty_name: 'dYdX Protocol',
  chain_id: 'dydx-testnet-4',
  bech32_prefix: 'dydx',
  daemon_name: 'dydxprotocold',
  node_home: '$HOME/.dydxprotocol',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'adv4tnt',
        fixed_min_gas_price: 12500000000,
        low_gas_price: 12500000000,
        average_gas_price: 12500000000,
        high_gas_price: 20000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'adv4tnt',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/dydxprotocol/v4-chain/',
    recommended_version: 'v2.0.0',
    compatible_versions: ['v2.0.0'],
    cosmos_sdk_version: 'v0.47.4',
    cosmwasm_enabled: false,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/dydxopsdao/networks/main/dydx-mainnet-1/genesis.json',
    },
    versions: [
      {
        name: 'v2',
        recommended_version: 'v2.0.0',
        compatible_versions: ['v2.0.0'],
        cosmos_sdk_version: 'v0.47.4',
      },
    ],
  },
  description:
    'Our goal is to build open source code that can power a first class product and trading experience.',
  peers: {
    seeds: [
      {
        id: 'a9cae4047d5c34772442322b10ef5600d8e54900',
        address:
          '19d38bb5cea1378db3e16615e63594dc26119a1a@dydx-testnet4-seednode.allthatnode.com:26656',
        provider: 'DSRV',
      },
      {
        id: '4f20c3e303c9515051b6276aeb89c0b88ee79f8f',
        address:
          '87ee8de5f0f82af6ee6740a30f8844bbe6434413@seed.dydx-testnet.cros-nest.com:26656',
        provider: 'Crosnest',
      },
      {
        id: 'c2c2fcb5e6e4755e06b83b499aff93e97282f8e8',
        address:
          '38e5a5ec34c578dc323cbdd9b98330abb448d586@tenderseed.ccvalidators.com:29104',
        provider: 'CryptoCrew',
      },
      {
        id: '65b740ee326c9260c30af1f044e9cda63c73f7c1',
        address:
          '80a1a6cd086634c34008c6457d3f7441cfc05c47@seeds.kingnodes.com:27056',
        provider: 'KingNodes',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address:
          '20e1000e88125698264454a884812746c2eb4807@seeds.lavenderfive.com:23856',
        provider: 'Lavender Five',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://dydx-rpc-testnet.enigma-validator.com',
        provider: 'Enigma',
      },
      {
        address: 'https://testnet-dydx-rpc.lavenderfive.com',
        provider: 'Lavender Five',
      },
      {
        address: 'https://test-dydx.kingnodes.com',
        provider: 'KingNodes',
      },
      {
        address: 'https://dydx-testnet-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://dydx-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    rest: [
      {
        address: 'https://dydx-lcd-testnet.enigma-validator.com',
        provider: 'Enigma',
      },
      {
        address: 'https://testnet-dydx-api.lavenderfive.com',
        provider: 'Lavender Five',
      },
      {
        address: 'https://dydx-testnet-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://dydx-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    grpc: [
      {
        address: 'https://testnet-dydx-rpc.lavenderfive.com',
        provider: 'Lavender Five',
      },
      {
        address: 'https://dydx-testnet-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'dydx-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/dydx-testnet',
      tx_page: 'https://www.mintscan.io/dydx-testnet/txs/${txHash}',
      account_page:
        'https://www.mintscan.io/dydx-testnet/account/${accountAddress}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
  },
  images: [
    {
      image_sync: {
        chain_name: 'dydx',
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
    },
  ],
};

export const dydxtestnetAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dydxtestnet',
  assets: [
    {
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [
        {
          denom: 'adv4tnt',
          exponent: 0,
        },
        {
          denom: 'dv4tnt',
          exponent: 18,
        },
      ],
      base: 'adv4tnt',
      name: 'dYdX',
      display: 'dv4tnt',
      symbol: 'DV4TNT',
      traces: [
        {
          type: 'test-mintage',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx',
          },
          provider: 'Dydx',
        },
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true,
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
      },
    },
  ],
};
