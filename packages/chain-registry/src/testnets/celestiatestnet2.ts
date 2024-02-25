import type { Chain, AssetLists, ChainVersions } from '../types';

export const celestiatestnet2: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'celestiatestnet2',
  chain_id: 'arabica-11',
  pretty_name: 'Arabica Testnet',
  status: 'live',
  network_type: 'devnet',
  bech32_prefix: 'celestia',
  daemon_name: 'celestia-appd',
  node_home: '$HOME/.celestia-app',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'utia',
        fixed_min_gas_price: 0,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.1,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/celestiaorg/celestia-app',
    recommended_version: 'v1.6.0',
    compatible_versions: ['v1.3.0', 'v1.4.0', 'v1.5.0', 'v1.6.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/celestiaorg/networks/master/arabica-11/genesis.json',
    },
    versions: [
      {
        name: 'v1.3.0',
        recommended_version: 'v1.6.0',
        compatible_versions: ['v1.3.0', 'v1.4.0', 'v1.5.0', 'v1.6.0'],
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '827583022cc6ce65cf762115642258f937c954cd',
        address: 'validator-1.celestia-arabica-11.com',
        provider: 'Celestia Labs',
      },
      {
        id: '74e42b39f512f844492ff09e30af23d54579b7bc',
        address: 'validator-2.celestia-arabica-11.com',
        provider: 'Celestia Labs',
      },
      {
        id: '00d577159b2eb1f524ef9c37cb389c020a2c38d2',
        address: 'validator-3.celestia-arabica-11.com',
        provider: 'Celestia Labs',
      },
      {
        id: 'b2871b6dc2e18916d07264af0e87c456c2bba04f',
        address: 'validator-4.celestia-arabica-11.com',
        provider: 'Celestia Labs',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://validator-1.celestia-arabica-11.com/',
        provider: 'Celestia Labs',
      },
    ],
    rest: [
      {
        address: 'https://api.celestia-arabica-11.com/',
        provider: 'Celestia Labs',
      },
    ],
  },
  explorers: [
    {
      kind: 'Ping.Pub',
      url: 'https://explorer.celestia-arabica-11.com/arabica-11',
      tx_page:
        'https://explorer.celestia-arabica-11.com/arabica-11/tx/${txHash}',
    },
  ],
};

export const celestiatestnet2AssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'celestiatestnet2',
  assets: [
    {
      description: '',
      denom_units: [
        {
          denom: 'utia',
          exponent: 0,
        },
        {
          denom: 'tia',
          exponent: 6,
        },
      ],
      base: 'utia',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet2/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet2/images/celestia.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet2/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet2/images/celestia.png',
        },
      ],
    },
  ],
};
