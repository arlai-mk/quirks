import type { Chain, AssetList, Versions } from '../types';

export const bitcannadevnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'bitcannadevnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'BitCanna Devnet-1',
  chain_id: 'bitcanna-dev-1',
  bech32_prefix: 'bcna',
  daemon_name: 'bcnad',
  node_home: '$HOME/.bcna',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ubcna',
        fixed_min_gas_price: 0.001,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/BitCannaGlobal/bcna',
    recommended_version: 'v2.0.3',
    compatible_versions: ['v2.0.1-rc6', 'v2.0.2-rc1', 'v2.0.3'],
    binaries: {
      'linux/amd64':
        'https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.3/bcna_linux_amd64.tar.gz',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/devnets/bitcanna-dev-1/genesis.json',
    },
    versions: [
      {
        name: 'vigorous-grow-fix',
        recommended_version: 'v1.6.3',
        compatible_versions: ['v1.6.3'],
        binaries: {
          'linux/amd64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v1.6.3/bcna_linux_amd64.tar.gz',
        },
      },
      {
        name: 'wakeandbake',
        recommended_version: 'v2.0.3',
        compatible_versions: ['v2.0.1-rc6', 'v2.0.2-rc1', 'v2.0.3'],
        binaries: {
          'linux/amd64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.3/bcna_linux_amd64.tar.gz',
        },
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '471341f9befeab582e845d5e9987b7a4889c202f',
        address: '144.91.89.66:26656',
      },
      {
        id: '496ac0ba20188f70f41e0a814dfd4d9a617338f8',
        address: 'bcnadev-seed.ibs.team:16656',
        provider: 'Inter Blockchain Services',
      },
    ],
    persistent_peers: [
      {
        id: '80ee9ed689bfb329cf21b94aa12978e073226db4',
        address: '212.227.151.143:26656',
      },
      {
        id: 'b0c7e5c69aaf00626baaf7c59370029b587a91a4',
        address: '🔥STAVR🔥',
      },
      {
        id: '20ca909b49106aacbf516ba28fa8a2409f825a82',
        address: '212.227.151.106:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-testnet.bitcanna.io',
        provider: 'bitcanna',
      },
      {
        address: 'https://bitcanna-testnet.rpc.kjnodes.com/',
        provider: 'kjnodes.com',
      },
      {
        address: 'https://testnet-bitcanna-rpc.konsortech.xyz/',
        provider: 'konsortech.xyz',
      },
      {
        address: 'https://rpc.bitcanna-dev-1.bitcanna.aviaone.com/',
        provider: 'aviaone.com',
      },
      {
        address: 'https://bitcanna-testnet.nodejumper.io:443',
        provider: 'NODEJUMPER',
      },
      {
        address: 'https://bcna-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
    rest: [
      {
        address: 'https://lcd-testnet.bitcanna.io',
        provider: 'bitcanna',
      },
      {
        address: 'https://testnet-bitcanna-api.konsortech.xyz/',
        provider: 'konsortech.xyz',
      },
      {
        address: 'https://bitcanna.api.dev.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://api.bitcanna-dev-1.bitcanna.aviaone.com/',
        provider: 'aviaone.com',
      },
      {
        address: 'https://bitcanna-testnet.api.kjnodes.com/',
        provider: 'kjnodes.com',
      },
      {
        address: 'https://bitcanna-testnet.nodejumper.io:1317',
        provider: 'NODEJUMPER',
      },
      {
        address: 'https://bcna-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
    grpc: [
      {
        address: 'http://devnet-1.bitcanna.io:9090/',
        provider: 'bitcanna',
      },
      {
        address: 'http://bitcanna-testnet.grpc.kjnodes.com:42090/',
        provider: 'kjnodes.com',
      },
      {
        address: 'http://bitcanna.grpc.dev.stavr.tech:2901',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://bitcanna-testnet.nodejumper.io:9090',
        provider: 'NODEJUMPER',
      },
    ],
  },
  explorers: [
    {
      url: 'https://explorer.thesilverfox.pro/bitcanna',
      tx_page: 'https://explorer.thesilverfox.pro/bitcanna/tx/${txHash}',
    },
    {
      url: 'https://testnets-cosmos.mintthemoon.xyz/bitcanna',
      tx_page: 'https://testnets-cosmos.mintthemoon.xyz/bitcanna/tx/${txHash}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Bitcanna-DEV',
      tx_page: 'https://explorer.stavr.tech/Bitcanna-DEV/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Bitcanna-DEV/account/${accountAddress}',
    },
    {
      url: 'https://explorer.kjnodes.com/bitcanna-testnet',
      tx_page: 'https://explorer.kjnodes.com/bitcanna-testnet/tx/${txHash}',
    },
    {
      url: 'https://explorer.stavr.tech/bitcanna-dev',
      tx_page: 'https://explorer.stavr.tech/bitcanna-dev/tx/${txHash}',
    },
  ],
};

export const bitcannadevnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'bitcannadevnet',
  assets: [
    {
      description:
        'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [
        {
          denom: 'ubcna',
          exponent: 0,
        },
        {
          denom: 'bcna',
          exponent: 6,
        },
      ],
      base: 'ubcna',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet/images/bcna.svg',
      },
      coingecko_id: 'bitcanna',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet/images/bcna.svg',
        },
      ],
    },
  ],
};
