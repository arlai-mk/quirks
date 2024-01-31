import type { Chain, AssetLists, ChainVersions } from '../types';

export const commercionetwork: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'commercionetwork',
  chain_id: 'commercio-3',
  pretty_name: 'Commercio.network',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'did:com:',
  daemon_name: 'commercionetworkd',
  node_home: '$HOME/.commercionetwork',
  key_algos: ['secp256k1'],
  slip44: 701,
  fees: {
    fee_tokens: [
      {
        denom: 'ucommercio',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/commercionetwork/commercionetwork',
    recommended_version: 'v5.0.0',
    compatible_versions: ['v5.0.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/commercionetwork/chains/master/commercio-3/genesis.json',
    },
    versions: [
      {
        name: 'v4.0.0',
        recommended_version: 'v4.1.0',
        compatible_versions: ['v4.0.0', 'v4.1.0'],
      },
      {
        name: 'v4.2.0',
        recommended_version: 'v4.2.1',
        compatible_versions: ['v4.2.0', 'v4.2.1'],
      },
      {
        name: 'v5.0.0',
        recommended_version: 'v5.0.0',
        compatible_versions: ['v5.0.0'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg',
  },
  peers: {
    seeds: [
      {
        id: '8d3ac30a774245019f7b94d7a0713fd8caccaa03',
        address: 'seed-01.commercio.network:26656',
      },
      {
        id: '68ccfc9a1574923e344993d49253d8169f592f9e',
        address: 'seed-02.commercio.network:26656',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '3f26a7d3269e352574e760d4b08d045aa40ebbf2',
        address: 'persistent-01.commercio.network:26656',
      },
      {
        id: '15767f4961b501eb67e740aa60c1608bf65679f3',
        address: 'persistent-02.commercio.network:26656',
      },
      {
        id: 'd6e07b5f0a69bd4d6f4e6e931f00fbcb992a8654',
        address: 'persistent-04.commercio.network:26656',
      },
      {
        id: '542a55fff599ea07e2b4841febff4a78cf8db2aa',
        address: 'persistent-05.commercio.network:26656',
      },
      {
        id: '49fdf20f845573429a695c15729c60f52bb5ab19',
        address: '84.46.241.230:26656',
      },
      {
        id: 'e2bd5ac83f0d2fde72571568b9a4203f7e76067d',
        address: '64.225.95.231:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mainnet.commercio.network',
      },
    ],
    rest: [
      {
        address: 'https://lcd-mainnet.commercio.network',
      },
    ],
  },
  explorers: [
    {
      kind: 'almerico',
      url: 'https://mainnet.commercio.network',
      tx_page:
        'https://mainnet.commercio.network/transactions/detail/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg',
    },
  ],
};

export const commercionetworkAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'commercionetwork',
  assets: [
    {
      description: 'The native token of Commercio.network',
      denom_units: [
        {
          denom: 'ucommercio',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'commercio',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'ucommercio',
      display: 'commercio',
      name: 'Commercio',
      symbol: 'COM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg',
        },
      ],
    },
    {
      description: 'The cash credit token of Commercio.network',
      denom_units: [
        {
          denom: 'uccc',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'ccc',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'uccc',
      display: 'ccc',
      name: 'Commercio Cash Credit',
      symbol: 'CCC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/ccc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/ccc.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/ccc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/ccc.svg',
        },
      ],
    },
  ],
};
