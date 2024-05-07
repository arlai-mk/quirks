import type { Chain, AssetList, Versions } from '../types';

export const starname: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'starname',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.starname.me/',
  pretty_name: 'Starname',
  chain_id: 'iov-mainnet-ibc',
  bech32_prefix: 'star',
  slip44: 234,
  alternative_slip44s: [118],
  fees: {
    fee_tokens: [
      {
        denom: 'uiov',
        low_gas_price: 1,
        average_gas_price: 2,
        high_gas_price: 3,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uiov',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/iov-one/starnamed',
    recommended_version: 'v0.11.7',
    compatible_versions: ['v0.11.7'],
    genesis: {
      genesis_url:
        'https://gist.githubusercontent.com/davepuchyr/6bea7bf369064d118195e9b15ea08a0f/raw/genesis.json',
    },
    versions: [
      {
        name: 'v0.10',
        recommended_version: 'v0.10.18',
        compatible_versions: ['v0.10.17', 'v0.10.18'],
        next_version_name: 'v0.11',
      },
      {
        name: 'v0.11',
        recommended_version: 'v0.11.7',
        compatible_versions: ['v0.11.7'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg',
  },
  description:
    'Starname is the best way to claim your part of the blockchain. You can use it for decentralized identification, payments, ownership and applications. Starname can be integrated into digital wallets, dapps and exchanges.',
  peers: {
    seeds: [
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '9aabe0ac122f3104d8fc098e19c66714c6f1ace9',
        address: '3.37.140.5:26656',
      },
      {
        id: '68d03f2594a4d7ae2aa9d27f208dbea4de77b048',
        address: '34.65.26.71:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-starname-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://rpc.starname.app',
        provider: 'Chainmasters',
      },
    ],
    rest: [
      {
        address: 'https://api-starname-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://rest.starname.app',
        provider: 'Chainmasters',
      },
    ],
    grpc: [
      {
        address: 'grpc-starname-ia.cosmosia.notional.ventures:443',
        provider: 'starname',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/starname',
      tx_page: 'https://ping.pub/starname/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/starname',
      tx_page: 'https://atomscan.com/starname/transactions/${txHash}',
      account_page: 'https://atomscan.com/starname/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg',
    },
  ],
};

export const starnameAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'starname',
  assets: [
    {
      description:
        'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [
        {
          denom: 'uiov',
          exponent: 0,
        },
        {
          denom: 'iov',
          exponent: 6,
        },
      ],
      base: 'uiov',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg',
      },
      coingecko_id: 'starname',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg',
        },
      ],
      socials: {
        website: 'https://app.starname.me/',
        twitter: 'https://twitter.com/starname_me',
      },
    },
  ],
};
