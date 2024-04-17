import type { Chain, AssetLists, ChainVersions } from '../types';

export const firmachain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'firmachain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://firmachain.org/',
  pretty_name: 'FirmaChain',
  chain_id: 'colosseum-1',
  bech32_prefix: 'firma',
  slip44: 7777777,
  daemon_name: 'firmachaind',
  node_home: '$HOME/.firmachain',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [
      {
        denom: 'ufct',
        fixed_min_gas_price: 0.1,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ufct',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/firmachain/firmachain',
    recommended_version: 'v0.3.5-patch',
    compatible_versions: ['v0.3.5-patch'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/FirmaChain/mainnet/main/colosseum-1/genesis.json',
    },
    versions: [
      {
        name: 'v0.3.5',
        recommended_version: 'v0.3.5-patch',
        compatible_versions: ['v0.3.5-patch'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg',
  },
  peers: {
    seeds: [
      {
        id: 'f89dcc15241e30323ae6f491011779d53f9a5487',
        address: 'mainnet-seed1.firmachain.dev:26656',
        provider: 'FirmaChain',
      },
      {
        id: '04cce0da4cf5ceb5ffc04d158faddfc5dc419154',
        address: 'mainnet-seed2.firmachain.dev:26656',
        provider: 'FirmaChain',
      },
      {
        id: '940977bdc070422b3a62e4985f2fe79b7ee737f7',
        address: 'mainnet-seed3.firmachain.dev:26656',
        provider: 'FirmaChain',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:16456',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '931a7c680d28c84a8a53e4017a6eae0788ee7cf2',
        address: 'firmachain.ramuchi.tech:57656',
        provider: 'ramuchi.tech',
      },
      {
        id: '35b9e0a0818d2c5e9ef187984872c0ad2dbd447c',
        address: 'firma.peer.stavr.tech:1036',
        provider: '🔥STAVR🔥',
      },
      {
        id: '637077d431f618181597706810a65c826524fd74',
        address: 'firmachain.rpc.nodeshub.online:16456',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://lcd-mainnet.firmachain.dev:26657',
        provider: 'FirmaChain',
      },
      {
        address: 'https://firma.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc.firmachain.chaintools.tech/',
        provider: 'ChainTools',
      },
      {
        address: 'https://firmachain-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://firmachain-rpc.ramuchi.tech',
        provider: 'ramuchi.tech',
      },
      {
        address: 'https://firmachain.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
    rest: [
      {
        address: 'https://lcd-mainnet.firmachain.dev:1317',
        provider: 'FirmaChain',
      },
      {
        address: 'https://firma.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://api.firmachain.chaintools.tech/',
        provider: 'ChainTools',
      },
      {
        address: 'https://firmachain-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://firmachain-api.ramuchi.tech',
        provider: 'ramuchi.tech',
      },
      {
        address: 'https://firmachain.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
    grpc: [
      {
        address: 'firmachain-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'firma.grpc.m.stavr.tech:2030',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://firmachain-grpc.ramuchi.tech:1390',
        provider: 'ramuchi.tech',
      },
      {
        address: 'firmachain.grpc.nodeshub.online',
        provider: 'Nodes Hub',
      },
    ],
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/firmachain',
      tx_page: 'https://ezstaking.app/firmachain/txs/${txHash}',
      account_page:
        'https://ezstaking.app/firmachain/account/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Firmachain-M',
      tx_page: 'https://explorer.stavr.tech/Firmachain-M/txs/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Firmachain-M/account/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://explorer.firmachain.dev',
      tx_page: 'https://explorer.firmachain.dev/transactions/${txHash}',
    },
    {
      kind: 'explorer.ChainTools',
      url: 'https://explorer.chaintools.tech/firmachain',
      tx_page: 'https://explorer.chaintools.tech/firmachain/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/firmachain',
      tx_page: 'https://atomscan.com/firmachain/transactions/${txHash}',
      account_page:
        'https://atomscan.com/firmachain/accounts/${accountAddress}',
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/firmachain/',
      tx_page: 'https://explorer.nodeshub.online/firmachain/tx/${txHash}',
      account_page:
        'https://explorer.nodeshub.online/firmachain/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg',
    },
  ],
};

export const firmachainAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'firmachain',
  assets: [
    {
      description: 'The native token of FirmaChain',
      denom_units: [
        {
          denom: 'ufct',
          exponent: 0,
        },
        {
          denom: 'fct',
          exponent: 6,
        },
      ],
      base: 'ufct',
      name: 'FirmaChain',
      display: 'fct',
      symbol: 'FCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg',
      },
      coingecko_id: 'firmachain',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg',
        },
      ],
    },
  ],
};
