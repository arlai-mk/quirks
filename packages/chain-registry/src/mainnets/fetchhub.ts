import type { Chain, AssetLists, ChainVersions } from '../types';

export const fetchhub: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'fetchhub',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Fetch.ai',
  chain_id: 'fetchhub-4',
  bech32_prefix: 'fetch',
  daemon_name: 'fetchd',
  node_home: '$HOME/.fetchd',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'afet',
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.035,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'afet',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/fetchai/fetchd',
    recommended_version: 'v0.10.5',
    compatible_versions: ['v0.10.5'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/fetchai/genesis-fetchhub/fetchhub-4/fetchhub-4/data/genesis_migrated_5300200.json',
    },
    versions: [
      {
        name: 'v0.10.5',
        recommended_version: 'v0.10.5',
        compatible_versions: ['v0.10.5'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg',
  },
  peers: {
    seeds: [
      {
        id: '17693da418c15c95d629994a320e2c4f51a8069b',
        address: 'connect-fetchhub.fetch.ai:36456',
        provider: 'fetch.ai',
      },
      {
        id: 'a575c681c2861fe945f77cb3aba0357da294f1f2',
        address: 'connect-fetchhub.fetch.ai:36457',
        provider: 'fetch.ai',
      },
      {
        id: 'd7cda986c9f59ab9e05058a803c3d0300d15d8da',
        address: 'connect-fetchhub.fetch.ai:36458',
        provider: 'fetch.ai',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:15256',
        provider: 'Polkachu',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'fetchhub-mainnet-seed.autostake.com:27266',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: '937d7371c9381aa7ae5f411129419a893164becf',
        address: 'seed-fetch.ibs.team:16659',
        provider: 'Inter Blockchain Services',
      },
    ],
    persistent_peers: [
      {
        id: 'e3d21a822e3903a96c14bfd8f8e06132f198d7c4',
        address: 'sentries-fetchhub.fetch.ai:36400',
        provider: 'fetch.ai',
      },
      {
        id: '4be243f5d22403f6069d2ed3c4a79161216f22a0',
        address: 'sentries-fetchhub.fetch.ai:36401',
        provider: 'fetch.ai',
      },
      {
        id: 'd6faadb9e785642b355136ed278d5b5d6b2f87dd',
        address: 'sentries-fetchhub.fetch.ai:36402',
        provider: 'fetch.ai',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'fetchhub-mainnet-peer.autostake.com:27266',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '637077d431f618181597706810a65c826524fd74',
        address: 'fetch.rpc.nodeshub.online:15256',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-fetchhub.fetch.ai:443',
        provider: 'fetch.ai',
      },
      {
        address: 'https://rpc-fetchhub-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://fetch-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://fetchai-rpc.kleomedes.network',
        provider: 'Kleomedes',
      },
      {
        address: 'https://fetch-rpc.antrixy.org',
        provider: 'Antrix',
      },
      {
        address: 'https://rpc-fetch.architectnodes.com',
        provider: 'Architect Nodes',
      },
      {
        address: 'https://fetchhub-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://fetch-rpc.ibs.team',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://fetch-rpc.cosmosrescue.com',
        provider: 'cosmosrescue',
      },
      {
        address: 'https://fetch-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://fetch-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://fetch-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://public.stakewolle.com/cosmos/fetchhub/rpc',
        provider: 'Stakewolle',
      },
      {
        address: 'https://fetch.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
    rest: [
      {
        address: 'https://rest-fetchhub.fetch.ai',
        provider: 'fetch.ai',
      },
      {
        address: 'https://api-fetchhub-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://fetch-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://fetchai-api.kleomedes.network',
        provider: 'Kleomedes',
      },
      {
        address: 'https://fetch-rest.antrixy.org',
        provider: 'Antrix',
      },
      {
        address: 'https://fetchhub-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://rest-fetch.architectnodes.com',
        provider: 'Architect Nodes',
      },
      {
        address: 'https://fetch-api.ibs.team',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://fetch-api.cosmosrescue.com',
        provider: 'cosmosrescue',
      },
      {
        address: 'https://fetch-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://fetch-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://fetch-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://public.stakewolle.com/cosmos/fetchhub/rest',
        provider: 'Stakewolle',
      },
      {
        address: 'https://fetch.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
    grpc: [
      {
        address: 'grpc-fetchhub.fetch.ai:443',
        provider: 'fetch.ai',
      },
      {
        address: 'grpc-fetchhub-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'fetch-grpc.polkachu.com:15290',
        provider: 'Polkachu',
      },
      {
        address: 'fetchhub-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'fetch-grpc.teasel.org:443',
        provider: '𝗧𝗲𝗮𝘀𝗲𝗹',
      },
      {
        address: 'fetch-grpc.antrixy.org:443',
        provider: 'Antrix',
      },
      {
        address: 'fetch-grpc.cosmosrescue.com:9090',
        provider: 'cosmosrescue',
      },
      {
        address: 'fetch-grpc.w3coins.io:15290',
        provider: 'w3coins',
      },
      {
        address: 'fetch-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'fetch.grpc.nodeshub.online',
        provider: 'Nodes Hub',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/fetchai',
      tx_page: 'https://www.mintscan.io/fetchai/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/fetchai/accounts/${accountAddress}',
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/fetchhub',
      tx_page: 'https://ezstaking.app/fetchhub/txs/${txHash}',
      account_page: 'https://ezstaking.app/fetchhub/account/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://explore-fetchhub.fetch.ai',
      tx_page: 'https://explore-fetchhub.fetch.ai/transactions/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/fetchhub',
      tx_page: 'https://ping.pub/fetchhub/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/fetchai',
      tx_page: 'https://atomscan.com/fetchai/transactions/${txHash}',
      account_page: 'https://atomscan.com/fetchai/accounts/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://fetch-explorer.teasel.org',
      tx_page: 'https://fetch-explorer.teasel.org/transactions/${txHash}',
    },
    {
      kind: 'azoyalabs',
      url: 'https://fetchstation.azoyalabs.com/mainnet',
      tx_page:
        'https://fetchstation.azoyalabs.com/mainnet/explorer/transactions/${txHash}',
      account_page:
        'https://fetchstation.azoyalabs.com/mainnet/explorer/address/${accountAddress}',
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/fetchhub/',
      tx_page: 'https://explorer.nodeshub.online/fetchhub/tx/${txHash}',
      account_page:
        'https://explorer.nodeshub.online/fetchhub/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg',
    },
  ],
};

export const fetchhubAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'fetchhub',
  assets: [
    {
      description: 'The native staking and governance token of the Fetch Hub.',
      denom_units: [
        {
          denom: 'afet',
          exponent: 0,
        },
        {
          denom: 'fet',
          exponent: 18,
        },
      ],
      base: 'afet',
      name: 'fetch-ai',
      display: 'fet',
      symbol: 'FET',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg',
      },
      coingecko_id: 'fetch-ai',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg',
        },
      ],
    },
    {
      description:
        'The MOBX coin rewards the use of eco-friendly micromobility transportation.',
      denom_units: [
        {
          denom: 'nanomobx',
          exponent: 0,
        },
        {
          denom: 'mobx',
          exponent: 9,
        },
      ],
      base: 'nanomobx',
      name: 'MOBIX',
      display: 'mobx',
      symbol: 'MOBX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.svg',
        },
      ],
    },
  ],
};
