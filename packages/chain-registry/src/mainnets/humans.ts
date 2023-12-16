import type { Chain, AssetLists } from '../types';

export const humans: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'humans',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://humans.ai/',
  pretty_name: 'Humans.ai',
  chain_id: 'humans_1089-1',
  bech32_prefix: 'human',
  node_home: '$HOME/.humansd',
  daemon_name: 'humansd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'aheart',
        fixed_min_gas_price: 250000000,
        low_gas_price: 80000000000,
        average_gas_price: 100000000000,
        high_gas_price: 160000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'aheart',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/humansdotai/',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    cosmos_sdk_version: '0.46.11',
    consensus: {
      type: 'cometbft',
      version: '0.34.27',
    },
    genesis: {
      genesis_url:
        'https://github.com/humansdotai/mainnets/blob/main/mainnet/1/genesis_1089-1.json',
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
        consensus: {
          type: 'cometbft',
          version: '0.34.27',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.svg',
  },
  peers: {
    seeds: [
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'humans.rpc.kjnodes.com:12259',
        provider: 'kjnodes',
      },
      {
        id: 'f8006da7d742777eeca0194b94586c8f147be4f6',
        address: 'humans-mainnet-seed.itrocket.net:17656',
        provider: 'itrocket',
      },
      {
        id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
        address: 'seed.rhinostake.com:18456',
        provider: 'RHINO',
      },
    ],
    persistent_peers: [
      {
        id: '5e51671241340f1d1e1409a9e0cc4474820bf782',
        address: 'humans-mainnet-peer.itrocket.net:17656',
        provider: 'itrocket',
      },
      {
        id: '2f8a0bf63e23606dc85bdd11afbf34e68a9f3b74',
        address: 'mainnet-humans.konsortech.xyz:40656',
        provider: 'KonsorTech',
      },
      {
        id: '9193e655f0581b4acf2e87976ac0b55795359742',
        address: '167.235.177.226:26656',
        provider: '[NODERS]TEAM',
      },
      {
        id: '767edc7b5fa144c52703f0e9670ea1eea1a5e0fc',
        address: 'p2p.humans.safeblock.space:26656',
        provider: 'Safe Block',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.humans.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://humans.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'http://humans.rpc.nodersteam.com:22657',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://rpc-humans.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://humans-mainnet-rpc.itrocket.net:443',
        provider: 'itrocket',
      },
      {
        address: 'https://humans-rpc.staketab.org:443',
        provider: 'Staketab',
      },
      {
        address: 'https://rpc-humansai.thenop.io:443',
        provider: 'TheNOP.io',
      },
      {
        address: 'https://humans-rpc.stakeangle.com/',
        provider: 'StakeAngle',
      },
      {
        address: 'https://rpc.humans.stakepool.dev.br',
        provider: 'StakePool',
      },
      {
        address: 'https://humans-rpc.anyvalid.com:26627',
        provider: 'AnyValid',
      },
      {
        address: 'https://mainnet-humans-rpc.konsortech.xyz',
        provider: 'KonsorTech',
      },
      {
        address: 'https://rpc.humans-mainnet.stake-take.com/',
        provider: 'Stake-Take',
      },
      {
        address: 'https://rpc.humans.safeblock.space',
        provider: 'Safe Block',
      },
    ],
    rest: [
      {
        address: 'https://api.humans.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://humans.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'http://humans.api.nodersteam.com:22017',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://api-humans.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://humans-mainnet-api.itrocket.net:443',
        provider: 'itrocket',
      },
      {
        address: 'https://humans-rest.staketab.org',
        provider: 'Staketab',
      },
      {
        address: 'https://api-humansai.thenop.io:443',
        provider: 'TheNOP.io',
      },
      {
        address: 'http://humans-rpc.stakeangle.com:41417',
        provider: 'StakeAngle',
      },
      {
        address: 'https://rest.humans.stakepool.dev.br',
        provider: 'StakePool',
      },
      {
        address: 'https://mainnet-humans-api.konsortech.xyz',
        provider: 'KonsorTech',
      },
      {
        address: 'https://api.humans-mainnet.stake-take.com/',
        provider: 'Stake-Take',
      },
      {
        address: 'https://api.humans.safeblock.space',
        provider: 'Safe Block',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.humans.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'https://humans.grpc.kjnodes.com/',
        provider: 'kjnodes',
      },
      {
        address: 'https://grpc-humans.nodeist.net/',
        provider: 'Nodeist',
      },
      {
        address: 'humans-mainnet-grpc.itrocket.net:17090',
        provider: 'itrocket',
      },
      {
        address: 'http://humans-rpc.stakeangle.com:41490/',
        provider: 'Staketab',
      },
      {
        address: 'humans.grpc.nodersteam.com:9221',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://grpc-humans.cosmos-spaces.cloud:1190',
        provider: 'StakePool',
      },
      {
        address: 'grpc.humans.safeblock.space:9090',
        provider: 'Safe Block',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://jsonrpc.humans.nodestake.top/',
        provider: 'NodeStake',
      },
      {
        address: 'https://humans-mainnet-evm.itrocket.net:443',
        provider: 'itrocket',
      },
      {
        address: 'https://humans-evm-rpc.staketab.org:443',
        provider: 'Staketab',
      },
      {
        address: 'https://evm.humans.stakepool.dev.br',
        provider: 'Stakepool',
      },
      {
        address: 'https://mainnet-humans-evm.konsortech.xyz',
        provider: 'KonsorTech',
      },
      {
        address: 'https://evm.humans.safeblock.space',
        provider: 'Safe Block',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://mintscan.io/humans',
      tx_page: 'https://www.mintscan.io/humans/tx/${txHash}',
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/humans',
      tx_page: 'https://bigdipper.live/humans/transactions/${txHash}',
      account_page: 'https://bigdipper.live/humans/accounts/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/humans',
      tx_page: 'https://ping.pub/humans/tx/${txHash}',
    },
    {
      kind: 'explorers.guru',
      url: 'https://humans.explorers.guru',
      tx_page: 'https://humans.explorers.guru/transaction/${txHash}',
    },
    {
      kind: 'exploreme',
      url: 'https://humansai.exploreme.pro/',
      tx_page: 'https://humans.exploreme.pro/transaction/${txHash}',
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblock.space/humans',
      tx_page: 'https://explorer.safeblock.space/humans/tx/${txHash}',
      account_page:
        'https://explorer.safeblock.space/humans/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.svg',
    },
  ],
};

export const humansAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'humans',
  assets: [
    {
      description: 'The native staking and governance token of Humans.ai.',
      denom_units: [
        {
          denom: 'aheart',
          exponent: 0,
        },
        {
          denom: 'heart',
          exponent: 18,
        },
      ],
      base: 'aheart',
      name: 'HEART',
      display: 'heart',
      symbol: 'HEART',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.svg',
      },
      coingecko_id: 'humans-ai',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.svg',
        },
      ],
    },
  ],
};
