import type { Chain, AssetLists } from '../types';

export const gateway: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'gateway',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://wormhole.com',
  pretty_name: 'Wormhole Gateway',
  chain_id: 'wormchain',
  bech32_prefix: 'wormhole',
  daemon_name: 'wormchaind',
  node_home: '$HOME/.wormchaind',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'utest',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uworm',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/wormhole-foundation/wormhole',
    recommended_version: 'v2.23.0',
    cosmos_sdk_version:
      'github.com/wormhole-foundation/cosmos-sdk@v0.45.9-wormhole-2',
    consensus: {
      type: 'tendermint',
      version: 'github.com/tendermint/tendermint@v0.34.24',
    },
    cosmwasm_version:
      'github.com/wormhole-foundation/wasmd@v0.30.0-wormchain-2',
    cosmwasm_enabled: true,
    ibc_go_version: '4.2.2',
    ics_enabled: ['ics20-1'],
    genesis: {
      name: 'v1',
      genesis_url:
        'https://github.com/wormhole-foundation/wormhole/blob/main/wormchain/mainnet/genesis.json',
    },
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/gateway_logo.png',
      theme: {
        primary_color_hex: '#0F0C48',
      },
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/gateway_logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/wormhole_logo.svg',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/gateway_logo.png',
  },
  peers: {
    seeds: [
      {
        id: '8e7a0485dd956491a63cea0fac598e7588ef46f7',
        address: '35.207.119.54:26656',
        provider: 'Jump Crypto',
      },
    ],
    persistent_peers: [
      {
        id: '8e7a0485dd956491a63cea0fac598e7588ef46f7',
        address: '35.207.119.54:26656',
        provider: 'Jump Crypto',
      },
      {
        id: 'b4f2e07e01222307faabce24b1e8dc2736e96c53',
        address: '194.169.245.254:26656',
        provider: 'ChainLayer',
      },
      {
        id: '2b457d275d6f75867bd1fcc859f52db0dbd39324',
        address: '57.128.144.245:26656',
        provider: 'Forbole',
      },
      {
        id: 'ecdd26f15d171073f2c3a1419caee3fbc820cfb2',
        address: '37.120.245.149:26656',
        provider: 'Syncnode',
      },
      {
        id: 'e0a00b061f072ff0b60c03b49d32ee780331e5b8',
        address: '162.19.171.137:36156',
        provider: 'Chainode',
      },
      {
        id: '2fec1a950c29e0b847b50e9cbd081948bf717e8a',
        address: '15.235.53.169:26656',
        provider: 'Figment',
      },
      {
        id: '59e1edf9de1827931ced34ebc5f7737b42a02f31',
        address: '80.190.129.50:49660',
        provider: 'Staking Facilities',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://wormchain-rpc.quickapi.com/',
        provider: 'ChainLayer',
      },
      {
        address: 'https://wormchain.jumpisolated.com:443',
        provider: 'Jump Crypto',
      },
    ],
    rest: [
      {
        address: 'https://wormchain-lcd.quickapi.com/',
        provider: 'ChainLayer',
      },
    ],
    grpc: [
      {
        address: 'grpc.wormchain-mainnet.tm.p2p.org:443',
        provider: 'P2P',
      },
    ],
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/wormhole',
      tx_page: 'https://bigdipper.live/wormhole/transactions/${txHash}',
      account_page:
        'https://bigdipper.live/wormhole/accounts/${accountAddress}',
    },
  ],
  keywords: ['bridge'],
};

export const gatewayAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'gateway',
  assets: [
    {
      description: 'The native fee token of Gateway.',
      denom_units: [
        {
          denom: 'utest',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'test',
          exponent: 6,
          aliases: [],
        },
      ],
      type_asset: 'sdk.coin',
      base: 'utest',
      name: 'Test',
      display: 'test',
      symbol: 'TEST',
    },
    {
      description: 'the native staking token of Gateway.',
      denom_units: [
        {
          denom: 'uworm',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'worm',
          exponent: 6,
          aliases: [],
        },
      ],
      type_asset: 'sdk.coin',
      base: 'uworm',
      name: 'Worm',
      display: 'worm',
      symbol: 'WORM',
    },
    {
      description:
        'Sui (Wormhole), SUI, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
          exponent: 8,
          aliases: [],
        },
      ],
      address:
        'wormhole19hlynxzedrlqv99v6qscww7d3crhl86qtd0vprpltg5g9xx6jk9q6ya33y',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
      display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
      name: 'Sui (Wormhole)',
      symbol: 'SUI',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'sui',
            base_denom: '0x2::sui::SUI',
          },
          provider: 'Wormhole',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'sui',
            base_denom: '0x2::sui::SUI',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg',
      },
    },
    {
      description:
        'Wrapped Ether (Wormhole), WETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
          exponent: 8,
          aliases: [],
        },
      ],
      address:
        'wormhole18csycs4vm6varkp00apuqlsm7v4twg8jsljk8wfdd7cghr7g4rtslwqndm',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
      display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
      name: 'Wrapped Ether (Wormhole)',
      symbol: 'WETH',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          },
          provider: 'Wormhole',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
        },
      ],
    },
    {
      description:
        'Wrapped liquid staked Ether 2.0 (Wormhole), wstETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'wormhole/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b/8',
          exponent: 8,
          aliases: [],
        },
      ],
      address:
        'wormhole1gg6f95cymcfrfzhpek7cf5wl53t5kng52cd2m0krgdlu8k58vd8qezy8pt',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b',
      display: 'wormhole/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b/8',
      name: 'Wrapped liquid staked Ether 2.0 (Wormhole)',
      symbol: 'wstETH',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
          },
          provider: 'Wormhole',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg',
      },
    },
    {
      description:
        'Aptos Coin (Wormhole), APT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
          exponent: 8,
          aliases: [],
        },
      ],
      address:
        'wormhole1f9sxjn0qu8xylcpzlvnhrefnatndqxnrajfrnr5h97hegnmsdqhsh6juc0',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
      display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
      name: 'Aptos Coin (Wormhole)',
      symbol: 'APT',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'aptos',
            base_denom: '0x1::aptos_coin::AptosCoin',
          },
          provider: 'Wormhole',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'aptos',
            base_denom: '0x1::aptos_coin::AptosCoin',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg',
      },
    },
    {
      description:
        'Tether USD (Wormhole), USDT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
          exponent: 6,
          aliases: [],
        },
      ],
      address:
        'wormhole1w27ekqvvtzfanfxnkw4jx2f8gdfeqwd3drkee3e64xat6phwjg0savgmhw',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
      display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
      name: 'Tether USD (Wormhole)',
      symbol: 'USDT',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          },
          provider: 'Wormhole',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
      },
    },
    {
      description:
        'Wrapped SOL (Wormhole), SOL, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
          exponent: 8,
          aliases: [],
        },
      ],
      address:
        'wormhole1wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sca0pvl',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
      display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
      name: 'Wrapped SOL (Wormhole)',
      symbol: 'SOL',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'So11111111111111111111111111111111111111112',
          },
          provider: 'Wormhole',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'So11111111111111111111111111111111111111112',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
      },
    },
    {
      description:
        'Bonk (Wormhole), Bonk, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
          exponent: 5,
          aliases: [],
        },
      ],
      address:
        'wormhole10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7eq9mpu8u',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
      display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
      name: 'Bonk (Wormhole)',
      symbol: 'Bonk',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
          },
          provider: 'Wormhole',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png',
      },
    },
    {
      description:
        'Wrapped BTC (Wormhole), WBTC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'wormhole/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd/8',
          exponent: 8,
          aliases: [],
        },
      ],
      address:
        'wormhole1nz0r0au8aj6dc00wmm3ufy4g4k86rjzlr8wkf92cktdlps5lgfcqxnx9yk',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd',
      display: 'wormhole/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd/8',
      name: 'Wrapped BTC (Wormhole)',
      symbol: 'WBTC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          },
          provider: 'Wormhole',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
      },
    },
    {
      description:
        'tBTC v2 (Wormhole), tBTC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'wormhole/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw/8',
          exponent: 8,
          aliases: [],
        },
      ],
      address:
        'wormhole1nu9wf9dw384attnpu0pwfet5fajn05w2ex4r07mghvk3xcwrt2yq5uutp5',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw',
      display: 'wormhole/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw/8',
      name: 'tBTC v2 (Wormhole)',
      symbol: 'tBTC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
          },
          provider: 'Wormhole',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg',
      },
    },
    {
      description:
        'Dai Stablecoin (Wormhole), DAI, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'wormhole/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1/8',
          exponent: 8,
          aliases: [],
        },
      ],
      address:
        'wormhole1chejx4qqtvwxy6684yrsmf6pylancxqhk3vsmtleg5ta3zrffljqfscg87',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1',
      display: 'wormhole/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1/8',
      name: 'Dai Stablecoin (Wormhole)',
      symbol: 'DAI',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f',
          },
          provider: 'Wormhole',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg',
      },
    },
    {
      description:
        'USD Coin (Wormhole), USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
          exponent: 6,
          aliases: [],
        },
      ],
      address:
        'wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
      display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
      name: 'USD Coin (Wormhole)',
      symbol: 'USDC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          },
          provider: 'Wormhole',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
      },
    },
    {
      description:
        'Pyth Network (Wormhole), PYTH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
          exponent: 0,
          aliases: ['HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3'],
        },
        {
          denom: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
          exponent: 6,
          aliases: ['pyth'],
        },
      ],
      address:
        'wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
      display: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
      name: 'Pyth Network',
      symbol: 'PYTH',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
          },
          provider: 'Wormhole',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg',
      },
    },
  ],
};
