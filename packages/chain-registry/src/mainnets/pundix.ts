import type { Chain, AssetLists, ChainVersions } from '../types';

export const pundix: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'pundix',
  chain_id: 'PUNDIX',
  website: 'https://pundix.com',
  pretty_name: 'Pundi X Chain',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'px',
  daemon_name: 'pundixd',
  node_home: '$HOME/.pundix',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom:
          'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
        fixed_min_gas_price: 2000000000000,
        low_gas_price: 2000000000000,
        average_gas_price: 2500000000000,
        high_gas_price: 3000000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom:
          'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/pundix/pundix',
    recommended_version: 'v0.2.3',
    compatible_versions: ['v0.2.3'],
    binaries: {
      'linux/amd64':
        'https://github.com/pundix/pundix/releases/download/v0.2.3/pundix_0.2.3_Linux_x86_64.tar.gz',
      'linux/arm64':
        'https://github.com/pundix/pundix/releases/download/v0.2.3/pundix_0.2.3_Linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/pundix/pundix/releases/download/v0.2.3/pundix_0.2.3_Darwin_x86_64.tar.gz',
      'darwin/arm64':
        'https://github.com/pundix/pundix/releases/download/v0.2.3/pundix_0.2.3_Darwin_arm64.tar.gz',
      'windows/amd64':
        'https://github.com/pundix/pundix/releases/download/v0.2.3/pundix_0.2.3_Windows_x86_64.zip',
    },
    genesis: {
      name: 'pxv1',
      genesis_url:
        'https://raw.githubusercontent.com/pundix/pundix/main/public/mainnet/genesis.json',
    },
    cosmos_sdk_version: '0.45.11',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    ibc_go_version: '6.1.0',
    versions: [
      {
        name: 'pxv1',
        tag: 'v0.1.3',
        height: 0,
        next_version_name: 'pxv2',
        recommended_version: 'v0.1.3',
        compatible_versions: ['v0.1.3'],
        binaries: {
          'linux/amd64':
            'https://github.com/pundix/pundix/releases/download/v0.1.3/pundix_0.1.3_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/pundix/pundix/releases/download/v0.1.3/pundix_0.1.3_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/pundix/pundix/releases/download/v0.1.3/pundix_0.1.3_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/pundix/pundix/releases/download/v0.1.3/pundix_0.1.3_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/pundix/pundix/releases/download/v0.1.3/pundix_0.1.3_Windows_x86_64.zip',
        },
      },
      {
        name: 'pxv2',
        tag: 'v0.2.3',
        height: 6869100,
        recommended_version: 'v0.2.3',
        compatible_versions: ['v0.2.3'],
        binaries: {
          'linux/amd64':
            'https://github.com/pundix/pundix/releases/download/v0.2.3/pundix_0.2.3_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/pundix/pundix/releases/download/v0.2.3/pundix_0.2.3_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/pundix/pundix/releases/download/v0.2.3/pundix_0.2.3_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/pundix/pundix/releases/download/v0.2.3/pundix_0.2.3_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/pundix/pundix/releases/download/v0.2.3/pundix_0.2.3_Windows_x86_64.zip',
        },
      },
    ],
  },
  description:
    'Pundi X Chain is a dedicated payment-focused blockchain in the Function X network. It is specially designed to perform high throughput transactions with low latency and low transaction fees. In addition, it provides room for future compliance requirement upgrades, hardware (XPOS) integration, and Point-of-Sales compatibility, with tokenonomics that offer incentives to merchants and payment processors.',
  peers: {
    seeds: [
      {
        id: '78d3eb3f15a20ab1d567660d35776abe0dee71d0',
        address: 'pundix-mainnet-seed-node-1.pundix.com:26656',
        provider: 'Pundi X',
      },
      {
        id: '3c37c6c42dfd9094117549794299a62d49c122eb',
        address: 'pundix-mainnet-seed-node-2.pundix.com:26656',
        provider: 'Pundi X',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '8bd41ea9f8ba7cfee4d19887cab487cdfc1177f4',
        address: 'pundix-mainnet-node-1.pundix.com:26656',
        provider: 'Pundi X',
      },
      {
        id: '6c1738220234a5e1b3caf94403ecd651e9759952',
        address: 'pundix-mainnet-node-2.pundix.com:26656',
        provider: 'Pundi X',
      },
      {
        id: '23abe2346d40f82cf0606e47931e58752f8b9348',
        address: 'pundix-mainnet-node-3.pundix.com:26656',
        provider: 'Pundi X',
      },
      {
        id: '20d275af6d025be144765291db5337ea059cce18',
        address: 'pundix-mainnet-node-4.pundix.com:26656',
        provider: 'Pundi X',
      },
      {
        id: '47f97d7baf028ddfd3b223baab0fa062eae75310',
        address: 'pundix-mainnet-node-5.pundix.com:26656',
        provider: 'Pundi X',
      },
      {
        id: '637077d431f618181597706810a65c826524fd74',
        address: 'pundix.rpc.nodeshub.online:26156',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://px-json.pundix.com',
        provider: 'Pundi X',
      },
      {
        address: 'https://pundix.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
    rest: [
      {
        address: 'https://px-rest.pundix.com',
        provider: 'Pundi X',
      },
      {
        address: 'https://pundix.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
    grpc: [
      {
        address: 'https://px-grpc.pundix.com',
        provider: 'Pundi X',
      },
      {
        address: 'https://pundix.grpc.nodeshub.online',
        provider: 'Nodes Hub',
      },
    ],
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.svg',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.png',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.svg',
  },
  explorers: [
    {
      kind: 'starscan',
      url: 'https://starscan.io',
      tx_page: 'https://starscan.io/pundix/tx/${txHash}',
      account_page: 'https://starscan.io/pundix/address/${accountAddress}',
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/pundix/',
      tx_page: 'https://explorer.nodeshub.online/pundix/tx/${txHash}',
      account_page:
        'https://explorer.nodeshub.online/pundix/accounts/${accountAddress}',
    },
  ],
};

export const pundixAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'pundix',
  assets: [
    {
      description:
        'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS. PUNDIX has several core use cases, including:\n- Payment for goods and services from merchants through XPOS\n- Gas Fee on PundiX Chain\n- Listing tokens in the XPOS\n- Merchant payments for loyalty programs and ads',
      denom_units: [
        {
          denom:
            'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
          exponent: 0,
        },
        {
          denom: 'PUNDIX',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg',
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'fxcore',
            base_denom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            channel_id: 'channel-0',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'fxcore',
            base_denom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg',
        },
      ],
      coingecko_id: 'pundi-x-2',
      socials: {
        website: 'https://pundix.com',
        twitter: 'https://twitter.com/PundiXLabs',
      },
    },
    {
      description:
        'Purse is the decentralised loyalty program for physical stores and merchants. PURSE token shall serve as governance token of the PURSE Merchant loyalty point platform, the gas fee as well as the transaction fee on PURSE Merchant platform. To launch any merchant loyalty tokens and do transaction on the merchant platform, users and merchants need Purse tokens.',
      denom_units: [
        {
          denom: 'bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
          exponent: 0,
        },
        {
          denom: 'PURSE',
          exponent: 18,
        },
      ],
      type_asset: 'sdk.coin',
      base: 'bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
      name: 'PURSE Token',
      display: 'PURSE',
      symbol: 'PURSE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg',
      },
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
            contract: '0x84238c00c8313920826D798e3cF6793Ef4F610ad',
          },
          provider: 'Function X',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        },
      ],
      coingecko_id: 'pundi-x-purse',
      socials: {
        website: 'https://purse.land',
        twitter: 'https://twitter.com/Purse_Land',
      },
    },
  ],
};
