import type { Chain, AssetLists } from '../types';

export const irisnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'irisnet',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'IRISnet',
  chain_id: 'irishub-1',
  bech32_prefix: 'iaa',
  daemon_name: 'iris',
  node_home: '$HOME/.iris',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uiris',
        low_gas_price: 0.2,
        average_gas_price: 0.3,
        high_gas_price: 0.4,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uiris',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/irisnet/irishub',
    recommended_version: 'v2.0.3',
    compatible_versions: ['v2.0.3'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/irisnet/mainnet/master/config/genesis.json',
    },
    versions: [
      {
        name: 'v1.3.0',
        next_version_name: 'v1.4.1',
        recommended_version: 'v1.3.0',
        compatible_versions: ['v1.3.0'],
      },
      {
        name: 'v1.4.1',
        next_version_name: 'v2.0.0',
        recommended_version: 'v1.4.1',
        compatible_versions: ['v1.4.1'],
      },
      {
        name: 'v2.0.0',
        next_version_name: 'v2.1.0',
        recommended_version: 'v2.0.3',
        compatible_versions: ['v2.0.3'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
  },
  peers: {
    seeds: [
      {
        id: '6a6de770deaa4b8c061dffd82e9c7f4d40c2165d',
        address: 'seed-1.mainnet.irisnet.org:26656',
      },
      {
        id: 'a17d7923293203c64ba75723db4d5f28e642f469',
        address: 'seed-2.mainnet.irisnet.org:26656',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: '445b38a181d147c243185d94567412e5c5f1a22c',
        address: 'seed-irisnet-01.stakeflow.io:1906',
        provider: 'Stakeflow',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'iris.rpc.kjnodes.com:16659',
        provider: 'kjnodes',
      },
    ],
    persistent_peers: [
      {
        id: '83b3f989f3ce089afdf733f8aa06e792d7e00c08',
        address: '3.34.6.30:26656',
        provider: 'cosmostation',
      },
      {
        id: '445b38a181d147c243185d94567412e5c5f1a22c',
        address: 'peer-irisnet-01.stakeflow.io:1906',
        provider: 'Stakeflow',
      },
      {
        id: '3ddf22082bda8607289bd94b649e0e2595f1fffd',
        address: 'iris-mainnet.peers.l0vd.com:19656',
        provider: 'L0vd.com ❤️',
      },
      {
        id: 'a19022cc07010836ed2a9c77dd56968965edb454',
        address: 'mainnet-iris.konsortech.xyz:30656',
        provider: 'KonsorTech',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-iris.keplr.app',
        provider: 'chainapsis',
      },
      {
        address: 'https://rpc-irisnet-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://rpc-irisnet-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://irisnet-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://iris-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://iris-rpc.highstakes.ch:26657/',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://iris-mainnet.rpc.l0vd.com:443',
        provider: 'L0vd.com ❤️',
      },
      {
        address: 'https://mainnet-iris-rpc.konsortech.xyz',
        provider: 'KonsorTech',
      },
    ],
    rest: [
      {
        address: 'https://lcd-iris.keplr.app',
        provider: 'chainapsis',
      },
      {
        address: 'https://api-irisnet-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://api-irisnet-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://irisnet-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://iris-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://iris-api.highstakes.ch:1317/',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://iris-mainnet.api.l0vd.com:443',
        provider: 'L0vd.com ❤️',
      },
      {
        address: 'https://mainnet-iris-api.konsortech.xyz',
        provider: 'KonsorTech',
      },
    ],
    grpc: [
      {
        address: 'grpc-irisnet-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'grpc-irisnet-01.stakeflow.io:1902',
        provider: 'Stakeflow',
      },
      {
        address: 'irisnet-grpc.w3coins.io:22690',
        provider: 'w3coins',
      },
      {
        address: 'iris-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'iris.grpc.kjnodes.com:443',
        provider: 'kjnodes',
      },
      {
        address: 'https://grpc-irisnet.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'iris-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com ❤️',
      },
      {
        address: 'mainnet-iris.konsortech.xyz:30090',
        provider: 'KonsorTech',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://iris-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://mainnet-iris-evm.konsortech.xyz',
        provider: 'KonsorTech',
      },
    ],
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/irisnet',
      tx_page: 'https://app.ezstaking.io/irisnet/txs/${txHash}',
      account_page:
        'https://app.ezstaking.io/irisnet/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/iris',
      tx_page: 'https://www.mintscan.io/iris/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/iris/accounts/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/iris-network',
      tx_page: 'https://ping.pub/iris-network/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/iris-network',
      tx_page: 'https://atomscan.com/iris-network/transactions/${txHash}',
      account_page:
        'https://atomscan.com/iris-network/accounts/${accountAddress}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/irisnet',
      account_page: 'https://stakeflow.io/irisnet/accounts/${accountAddress}',
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/iris',
      tx_page: 'https://exp.nodeist.net/iris/tx/${txHash}',
    },
    {
      kind: 'L0vd.com ❤️',
      url: 'https://explorers.l0vd.com/iris-mainnet',
      tx_page: 'https://explorers.l0vd.com/iris-mainnet/tx/${txHash}',
    },
    {
      kind: 'KonsorTech',
      url: 'https://explorer.konsortech.xyz/iris',
      tx_page: 'https://explorer.konsortech.xyz/iris/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
    },
  ],
};

export const irisnetAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'irisnet',
  assets: [
    {
      description:
        'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [
        {
          denom: 'uiris',
          exponent: 0,
        },
        {
          denom: 'iris',
          exponent: 6,
        },
      ],
      base: 'uiris',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
      },
      coingecko_id: 'iris-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
        },
      ],
    },
  ],
};
