import type { Chain, AssetLists, ChainVersions } from '../types';

export const impacthub: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'impacthub',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.ixo.world/',
  pretty_name: 'Impacts Hub',
  chain_id: 'ixo-5',
  bech32_prefix: 'ixo',
  daemon_name: 'ixod',
  node_home: '$HOME/.ixod',
  key_algos: ['secp256k1', 'ed25519'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uixo',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uixo',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/ixofoundation/ixo-blockchain',
    recommended_version: 'v3.0.0',
    compatible_versions: ['v3.0.0'],
    cosmos_sdk_version: 'v0.45.16',
    ibc_go_version: 'v4.4.1',
    consensus: {
      type: 'cometbft',
      version: 'v0.34.27',
    },
    genesis: {
      genesis_url:
        'https://github.com/ixofoundation/genesis/raw/bc042e1223d551b22d55c155de06e662ca24d2f2/ixo-5/genesis.json.tar.gz',
    },
    versions: [
      {
        name: 'v0.20.0',
        proposal: 403,
        height: 1254500,
        recommended_version: 'v0.20.1',
        compatible_versions: ['v0.20.0', 'v0.20.1'],
        cosmos_sdk_version: 'v0.45.12',
        ibc_go_version: 'v4.3.0',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.24',
        },
        next_version_name: 'v2',
      },
      {
        name: 'v2',
        proposal: 439,
        height: 2383000,
        recommended_version: 'v2.0.0',
        compatible_versions: ['v2.0.0'],
        cosmos_sdk_version: 'v0.45.16',
        ibc_go_version: 'v4.4.1',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27',
        },
        next_version_name: 'v3',
      },
      {
        name: 'v3',
        proposal: 447,
        height: 6556300,
        recommended_version: 'v3.0.0',
        compatible_versions: ['v3.0.0'],
        cosmos_sdk_version: 'v0.45.16',
        ibc_go_version: 'v4.4.1',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
  },
  peers: {
    seeds: [
      {
        id: '36e4738c7efcf353d3048e5e6073406d045bae9d',
        address: '80.64.208.43:26656',
        provider: 'simplyvc',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:16656',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: '9194ed56c5b93a0a7e3bdbcad8f62467f7137f56',
        address: 'seed-ixo.ibs.team:16662',
        provider: 'Inter Blockchain Services',
      },
    ],
    persistent_peers: [
      {
        id: '36e4738c7efcf353d3048e5e6073406d045bae9d',
        address: '80.64.208.43:26656',
        provider: 'simplyvc',
      },
      {
        id: 'd4448c5b10b43d444034533ede7d2e66cbf9e519',
        address: 'ixo.peer.stavr.tech:1016',
        provider: '🔥STAVR🔥',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://proxies.sifchain.finance/api/impacthub-3/rpc',
        provider: 'sifchain',
      },
      {
        address: 'https://impacthub.ixo.world/rpc/',
        provider: 'ixoworld',
      },
      {
        address: 'https://ixo.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc-ixo-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://impacthub-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://ixo-rpc.ibs.team',
        provider: 'Inter Blockchain Services',
      },
    ],
    rest: [
      {
        address: 'https://proxies.sifchain.finance/api/impacthub-3/rest',
        provider: 'sifchain',
      },
      {
        address: 'https://impacthub.ixo.world/rest/',
        provider: 'ixoworld',
      },
      {
        address: 'https://ixo.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://api-ixo-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://impacthub-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://ixo-api.ibs.team',
        provider: 'Inter Blockchain Services',
      },
    ],
    grpc: [
      {
        address: 'grpc-ixo-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'ixo.grpc.m.stavr.tech:2010',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'impacthub-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
    ],
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/ixo',
      tx_page: 'https://ezstaking.app/ixo/txs/${txHash}',
      account_page: 'https://ezstaking.app/ixo/account/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/IXO-Mainnet',
      tx_page: 'https://explorer.stavr.tech/IXO-Mainnet/txs/${txHash}',
      account_page:
        'https://explorer.stavr.tech/IXO-Mainnet/account/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://blockscan.ixo.world',
      tx_page: 'https://blockscan.ixo.world/transactions/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/ixo',
      tx_page: 'https://ping.pub/ixo/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/ixo',
      tx_page: 'https://atomscan.com/ixo/transactions/${txHash}',
      account_page: 'https://atomscan.com/ixo/accounts/${accountAddress}',
    },
    {
      kind: 'Mintscan',
      url: 'https://www.mintscan.io/ixo',
      tx_page: 'https://www.mintscan.io/ixo/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/ixo/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
    },
  ],
};

export const impacthubAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'impacthub',
  assets: [
    {
      description: 'The native token of IXO Chain',
      denom_units: [
        {
          denom: 'uixo',
          exponent: 0,
        },
        {
          denom: 'ixo',
          exponent: 6,
        },
      ],
      base: 'uixo',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
      },
      coingecko_id: 'ixo',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
        },
      ],
    },
  ],
};
