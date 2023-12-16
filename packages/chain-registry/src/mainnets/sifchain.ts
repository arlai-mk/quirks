import type { Chain, AssetLists } from '../types';

export const sifchain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sifchain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://sifchain.finance/',
  pretty_name: 'Sifchain',
  chain_id: 'sifchain-1',
  bech32_prefix: 'sif',
  daemon_name: 'sifnoded',
  node_home: '$HOME/.sifnoded',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'rowan',
        low_gas_price: 1000000000000,
        average_gas_price: 1500000000000,
        high_gas_price: 2000000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'rowan',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/Sifchain/sifnode.git',
    recommended_version: 'v1.0.14-beta',
    compatible_versions: ['v1.0.14-beta'],
    binaries: {
      'linux/amd64':
        'https://github.com/Sifchain/sifnode/releases/download/v1.0.14-beta/sifnoded-v1.0.14-beta-linux-amd64.zip',
    },
    genesis: {
      genesis_url:
        'https://github.com/Sifchain/networks/blob/master/betanet/sifchain-1/genesis.json.gz?raw=true',
    },
    versions: [
      {
        name: 'v1.0.14-beta',
        recommended_version: 'v1.0.14-beta',
        compatible_versions: ['v1.0.14-beta'],
        binaries: {
          'linux/amd64':
            'https://github.com/Sifchain/sifnode/releases/download/v1.0.14-beta/sifnoded-v1.0.14-beta-linux-amd64.zip',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
  },
  peers: {
    seeds: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'sifchain-mainnet-seed.autostake.com:26686',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:13256',
        provider: 'Polkachu',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '0d4981bdaf4d5d73bad00af3b1fa9d699e4d3bc0',
        address: '44.235.108.41:26656',
      },
      {
        id: 'bcc2d07a14a8a0b3aa202e9ac106dec0bef91fda',
        address: '13.55.247.60:26656',
      },
      {
        id: '663dec65b754aceef5fcccb864048305208e7eb2',
        address: '34.248.110.88:26656',
      },
      {
        id: '0120f0a48e7e81cc98829ef4f5b39480f11ecd5a',
        address: '52.76.185.17:26656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'sifchain-mainnet-peer.autostake.com:26686',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://sifchain-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc-sifchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://sifchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://sifchain-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    rest: [
      {
        address: 'https://api-sifchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://sifchain-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://sifchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://sifchain-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    grpc: [
      {
        address: 'grpc-sifchain-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'sifchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'sifchain-grpc.polkachu.com:13290',
        provider: 'Polkachu',
      },
      {
        address: 'sifchain-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/sifchain',
      tx_page: 'https://app.ezstaking.io/sifchain/txs/${txHash}',
      account_page:
        'https://app.ezstaking.io/sifchain/account/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/sifchain',
      tx_page: 'https://ping.pub/sifchain/tx/${txHash}',
    },
    {
      kind: 'explorers.guru',
      url: 'https://sifchain.explorers.guru',
      tx_page: 'https://sifchain.explorers.guru/transaction/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sifchain',
      tx_page: 'https://atomscan.com/sifchain/transactions/${txHash}',
      account_page: 'https://atomscan.com/sifchain/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
    },
  ],
};

export const sifchainAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'sifchain',
  assets: [
    {
      description:
        "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom: 'rowan',
          exponent: 0,
        },
        {
          denom: 'ROWAN',
          exponent: 18,
        },
      ],
      base: 'rowan',
      name: 'Sifchain Rowan',
      display: 'ROWAN',
      symbol: 'ROWAN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
      },
      coingecko_id: 'sifchain',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
        },
      ],
    },
  ],
};
