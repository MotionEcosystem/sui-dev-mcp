'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ArrowLeft,
  Check,
  Code2,
  Copy,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  Package,
  Play,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ExamplesPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('smart-contracts')

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const categories = [
    { id: 'smart-contracts', title: 'Smart Contracts', icon: Code2 },
    { id: 'frontend', title: 'Frontend Integration', icon: Package },
    { id: 'defi', title: 'DeFi Examples', icon: Zap },
    { id: 'nft', title: 'NFT & Gaming', icon: FileText },
    { id: 'tools', title: 'Developer Tools', icon: GitBranch },
  ]

  const smartContractExamples = [
    {
      title: 'Simple Coin Contract',
      description: 'Create a custom coin with minting capabilities',
      difficulty: 'Beginner',
      code: `module my_coin::my_coin {
    use sui::coin::{Self, Coin, TreasuryCap};
    use sui::url::{Self, Url};

    /// The type identifier of coin. The coin will have a type
    /// tag of kind: \`Coin<package_object::mycoin::MYCOIN>\`
    /// Make sure that the name of the type matches the module's name.
    struct MYCOIN has drop {}

    /// Module initializer is called once on module publish. A treasury
    /// cap is sent to the publisher, who then controls minting and burning
    fun init(witness: MYCOIN, ctx: &mut TxContext) {
        let (treasury, metadata) = coin::create_currency<MYCOIN>(
            witness,
            9,
            b"MYCOIN",
            b"My Coin",
            b"My custom coin on Sui",
            option::some<Url>(url::new_unsafe_from_bytes(b"https://example.com/icon.png")),
            ctx
        );
        transfer::public_freeze_object(metadata);
        transfer::public_transfer(treasury, tx_context::sender(ctx));
    }

    public entry fun mint(
        treasury_cap: &mut TreasuryCap<MYCOIN>,
        amount: u64,
        recipient: address,
        ctx: &mut TxContext,
    ) {
        coin::mint_and_transfer(treasury_cap, amount, recipient, ctx);
    }

    public entry fun burn(treasury_cap: &mut TreasuryCap<MYCOIN>, coin: Coin<MYCOIN>) {
        coin::burn(treasury_cap, coin);
    }
}`,
      files: ['sources/my_coin.move', 'Move.toml'],
    },
    {
      title: 'NFT Collection',
      description: 'Complete NFT collection with metadata and minting',
      difficulty: 'Intermediate',
      code: `module nft_collection::collection {
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use sui::url::{Self, Url};
    use std::string::{Self, String};
    use sui::event;

    /// The NFT structure
    struct NFT has key, store {
        id: UID,
        name: String,
        description: String,
        image_url: Url,
        creator: address,
        edition: u64,
    }

    /// Collection information
    struct Collection has key {
        id: UID,
        name: String,
        description: String,
        creator: address,
        total_supply: u64,
        max_supply: u64,
    }

    /// Event emitted when an NFT is minted
    struct NFTMinted has copy, drop {
        nft_id: address,
        creator: address,
        recipient: address,
        edition: u64,
    }

    /// Create a new collection
    public entry fun create_collection(
        name: vector<u8>,
        description: vector<u8>,
        max_supply: u64,
        ctx: &mut TxContext
    ) {
        let collection = Collection {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            creator: tx_context::sender(ctx),
            total_supply: 0,
            max_supply,
        };
        transfer::share_object(collection);
    }

    /// Mint a new NFT
    public entry fun mint_nft(
        collection: &mut Collection,
        name: vector<u8>,
        description: vector<u8>,
        image_url: vector<u8>,
        recipient: address,
        ctx: &mut TxContext
    ) {
        assert!(collection.total_supply < collection.max_supply, 0);
        assert!(tx_context::sender(ctx) == collection.creator, 1);

        collection.total_supply = collection.total_supply + 1;

        let nft = NFT {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            image_url: url::new_unsafe_from_bytes(image_url),
            creator: collection.creator,
            edition: collection.total_supply,
        };

        let nft_id = object::id_address(&nft);

        event::emit(NFTMinted {
            nft_id,
            creator: collection.creator,
            recipient,
            edition: collection.total_supply,
        });

        transfer::public_transfer(nft, recipient);
    }
}`,
      files: ['sources/collection.move', 'Move.toml'],
    },
  ]

  const frontendExamples = [
    {
      title: 'Connect to Sui Wallet',
      description: 'Basic wallet connection and transaction signing',
      difficulty: 'Beginner',
      code: `import { ConnectButton, useWallet } from '@suiet/wallet-kit';
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
import { TransactionBlock } from '@mysten/sui.js/transactions';

function App() {
  const wallet = useWallet();

  const client = new SuiClient({
    url: getFullnodeUrl('devnet')
  });

  const handleMintNFT = async () => {
    if (!wallet.connected) {
      alert('Please connect your wallet first');
      return;
    }

    try {
      const txb = new TransactionBlock();

      // Replace with your package ID and function
      txb.moveCall({
        target: \`\${PACKAGE_ID}::nft::mint\`,
        arguments: [
          txb.pure("My NFT"),
          txb.pure("A beautiful NFT"),
          txb.pure("https://example.com/image.png"),
        ],
      });

      const result = await wallet.signAndExecuteTransactionBlock({
        transactionBlock: txb,
        options: {
          showEffects: true,
          showObjectChanges: true,
        },
      });

      console.log('Transaction result:', result);
      alert('NFT minted successfully!');
    } catch (error) {
      console.error('Error minting NFT:', error);
      alert('Failed to mint NFT');
    }
  };

  return (
    <div>
      <ConnectButton />
      {wallet.connected && (
        <div>
          <p>Connected: {wallet.address}</p>
          <button onClick={handleMintNFT}>
            Mint NFT
          </button>
        </div>
      )}
    </div>
  );
}

export default App;`,
      files: ['src/App.tsx', 'package.json'],
    },
    {
      title: 'Query Objects and Events',
      description: 'Fetch and display blockchain data in React',
      difficulty: 'Intermediate',
      code: `import React, { useState, useEffect } from 'react';
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';

const PACKAGE_ID = 'YOUR_PACKAGE_ID';

function NFTGallery({ ownerAddress }: { ownerAddress: string }) {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);

  const client = new SuiClient({
    url: getFullnodeUrl('devnet')
  });

  useEffect(() => {
    fetchNFTs();
  }, [ownerAddress]);

  const fetchNFTs = async () => {
    if (!ownerAddress) return;

    setLoading(true);
    try {
      // Get all objects owned by the address
      const objects = await client.getOwnedObjects({
        owner: ownerAddress,
        filter: {
          StructType: \`\${PACKAGE_ID}::collection::NFT\`
        },
        options: {
          showContent: true,
          showDisplay: true,
        }
      });

      const nftData = objects.data.map(obj => {
        const content = obj.data?.content;
        if (content?.dataType === 'moveObject') {
          return {
            id: obj.data.objectId,
            name: content.fields.name,
            description: content.fields.description,
            image_url: content.fields.image_url,
            edition: content.fields.edition,
          };
        }
        return null;
      }).filter(Boolean);

      setNfts(nftData);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading NFTs...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {nfts.map((nft) => (
        <div key={nft.id} className="border rounded-lg p-4">
          <img
            src={nft.image_url}
            alt={nft.name}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="font-bold mt-2">{nft.name}</h3>
          <p className="text-gray-600">{nft.description}</p>
          <p className="text-sm text-gray-500">Edition #{nft.edition}</p>
        </div>
      ))}
    </div>
  );
}

export default NFTGallery;`,
      files: ['src/NFTGallery.tsx', 'src/types.ts'],
    },
  ]

  const defiExamples = [
    {
      title: 'Liquidity Pool',
      description: 'AMM-style liquidity pool with swapping functionality',
      difficulty: 'Advanced',
      code: `module defi::liquidity_pool {
    use sui::object::{Self, UID};
    use sui::coin::{Self, Coin};
    use sui::balance::{Self, Balance};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use sui::math;

    /// Liquidity pool for two coins
    struct Pool<phantom CoinA, phantom CoinB> has key {
        id: UID,
        coin_a: Balance<CoinA>,
        coin_b: Balance<CoinB>,
        lp_supply: u64,
        fee_rate: u64, // Fee in basis points (100 = 1%)
    }

    /// LP Token representing share in the pool
    struct LPCoin<phantom CoinA, phantom CoinB> has drop {}

    /// Create a new liquidity pool
    public entry fun create_pool<CoinA, CoinB>(
        coin_a: Coin<CoinA>,
        coin_b: Coin<CoinB>,
        ctx: &mut TxContext
    ) {
        let coin_a_value = coin::value(&coin_a);
        let coin_b_value = coin::value(&coin_b);

        assert!(coin_a_value > 0 && coin_b_value > 0, 0);

        let lp_supply = math::sqrt(coin_a_value * coin_b_value);

        let pool = Pool<CoinA, CoinB> {
            id: object::new(ctx),
            coin_a: coin::into_balance(coin_a),
            coin_b: coin::into_balance(coin_b),
            lp_supply,
            fee_rate: 30, // 0.3% fee
        };

        transfer::share_object(pool);
    }

    /// Swap CoinA for CoinB
    public entry fun swap_a_to_b<CoinA, CoinB>(
        pool: &mut Pool<CoinA, CoinB>,
        coin_a: Coin<CoinA>,
        min_coin_b: u64,
        ctx: &mut TxContext
    ) {
        let coin_a_value = coin::value(&coin_a);
        assert!(coin_a_value > 0, 1);

        let coin_a_reserve = balance::value(&pool.coin_a);
        let coin_b_reserve = balance::value(&pool.coin_b);

        // Calculate output using constant product formula
        let coin_a_with_fee = coin_a_value * (10000 - pool.fee_rate);
        let numerator = coin_a_with_fee * coin_b_reserve;
        let denominator = coin_a_reserve * 10000 + coin_a_with_fee;
        let coin_b_out = numerator / denominator;

        assert!(coin_b_out >= min_coin_b, 2);
        assert!(coin_b_out < coin_b_reserve, 3);

        // Update reserves
        balance::join(&mut pool.coin_a, coin::into_balance(coin_a));
        let coin_b_balance = balance::split(&mut pool.coin_b, coin_b_out);

        transfer::public_transfer(
            coin::from_balance(coin_b_balance, ctx),
            tx_context::sender(ctx)
        );
    }

    /// Add liquidity to the pool
    public entry fun add_liquidity<CoinA, CoinB>(
        pool: &mut Pool<CoinA, CoinB>,
        coin_a: Coin<CoinA>,
        coin_b: Coin<CoinB>,
        ctx: &mut TxContext
    ) {
        let coin_a_value = coin::value(&coin_a);
        let coin_b_value = coin::value(&coin_b);

        let coin_a_reserve = balance::value(&pool.coin_a);
        let coin_b_reserve = balance::value(&pool.coin_b);

        // Calculate optimal amounts
        let coin_a_optimal = coin_a_value;
        let coin_b_optimal = (coin_a_optimal * coin_b_reserve) / coin_a_reserve;

        assert!(coin_b_optimal <= coin_b_value, 4);

        // Add to reserves
        balance::join(&mut pool.coin_a, coin::into_balance(coin_a));
        balance::join(&mut pool.coin_b, coin::into_balance(coin_b));

        // Calculate LP tokens to mint
        let lp_tokens = (coin_a_optimal * pool.lp_supply) / coin_a_reserve;
        pool.lp_supply = pool.lp_supply + lp_tokens;

        // Transfer LP tokens to user (simplified - in real implementation,
        // you'd create actual LP token coins)
    }
}`,
      files: ['sources/liquidity_pool.move', 'sources/math.move'],
    },
  ]

  const getCurrentExamples = () => {
    switch (activeCategory) {
      case 'smart-contracts':
        return smartContractExamples
      case 'frontend':
        return frontendExamples
      case 'defi':
        return defiExamples
      case 'nft':
        return [
          {
            title: 'Gaming NFT with Attributes',
            description: 'RPG-style NFT with dynamic attributes and leveling',
            difficulty: 'Advanced',
            code: `module gaming::character {
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use std::string::String;
    use sui::event;

    struct Character has key, store {
        id: UID,
        name: String,
        class: String,
        level: u8,
        experience: u64,
        strength: u8,
        agility: u8,
        intelligence: u8,
        owner: address,
    }

    struct LevelUp has copy, drop {
        character_id: address,
        new_level: u8,
    }

    public entry fun mint_character(
        name: vector<u8>,
        class: vector<u8>,
        ctx: &mut TxContext
    ) {
        let character = Character {
            id: object::new(ctx),
            name: string::utf8(name),
            class: string::utf8(class),
            level: 1,
            experience: 0,
            strength: 10,
            agility: 10,
            intelligence: 10,
            owner: tx_context::sender(ctx),
        };

        transfer::public_transfer(character, tx_context::sender(ctx));
    }

    public entry fun gain_experience(
        character: &mut Character,
        exp_gained: u64,
        ctx: &mut TxContext
    ) {
        assert!(character.owner == tx_context::sender(ctx), 0);

        character.experience = character.experience + exp_gained;

        // Level up logic
        let exp_needed = (character.level as u64) * 100;
        if (character.experience >= exp_needed) {
            character.level = character.level + 1;
            character.experience = character.experience - exp_needed;

            // Increase stats on level up
            character.strength = character.strength + 1;
            character.agility = character.agility + 1;
            character.intelligence = character.intelligence + 1;

            event::emit(LevelUp {
                character_id: object::id_address(character),
                new_level: character.level,
            });
        }
    }
}`,
            files: ['sources/character.move', 'sources/game_logic.move'],
          },
        ]
      case 'tools':
        return [
          {
            title: 'Package Deployment Script',
            description: 'Automated deployment and verification script',
            difficulty: 'Intermediate',
            code: `#!/bin/bash

# Sui Package Deployment Script
set -e

NETWORK="devnet"
PACKAGE_PATH="."
CONFIG_FILE="deploy.config"

echo "🚀 Starting Sui package deployment..."

# Check if sui CLI is installed
if ! command -v sui &> /dev/null; then
    echo "❌ Sui CLI not found. Please install it first."
    exit 1
fi

# Load configuration if exists
if [ -f "$CONFIG_FILE" ]; then
    source "$CONFIG_FILE"
    echo "✅ Loaded configuration from $CONFIG_FILE"
fi

# Build the package
echo "🔨 Building package..."
sui move build --path "$PACKAGE_PATH"

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Package built successfully"

# Deploy the package
echo "📦 Deploying to $NETWORK..."
DEPLOY_OUTPUT=$(sui client publish --gas-budget 100000000 --json)

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed!"
    exit 1
fi

# Extract package ID
PACKAGE_ID=$(echo "$DEPLOY_OUTPUT" | jq -r '.objectChanges[] | select(.type == "published") | .packageId')

echo "✅ Package deployed successfully!"
echo "📄 Package ID: $PACKAGE_ID"

# Save deployment info
cat > "deployment.json" << EOF
{
  "network": "$NETWORK",
  "packageId": "$PACKAGE_ID",
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "deployer": "$(sui client active-address)"
}
EOF

echo "💾 Deployment info saved to deployment.json"

# Verify deployment
echo "🔍 Verifying deployment..."
PACKAGE_INFO=$(sui client object "$PACKAGE_ID" --json)

if [ $? -eq 0 ]; then
    echo "✅ Package verification successful"
    echo "🎉 Deployment complete!"
else
    echo "⚠️  Package verification failed, but deployment may still be successful"
fi`,
            files: ['scripts/deploy.sh', 'deploy.config', 'package.json'],
          },
        ]
      default:
        return smartContractExamples
    }
  }

  return (
    <div className="min-h-screen bg-white font-['Inter',ui-sans-serif,system-ui] text-zinc-900 antialiased">
      {/* Noise texture overlay */}
      <div
        className='pointer-events-none fixed inset-0 z-10 opacity-[0.015]'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className='sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl'>
        <div className='container mx-auto px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Link
                href='/'
                className='flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Home
              </Link>
            </div>
            <div className='flex items-center gap-2'>
              <Code2 className='h-5 w-5 text-blue-600' />
              <span className='font-bold text-zinc-900'>Examples & Tutorials</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className='container relative z-20 mx-auto px-6 py-12 lg:px-8'>
        {/* Hero Section */}
        <div className='mb-16 text-center'>
          <h1 className='mb-6 text-5xl font-black tracking-tight text-zinc-900'>
            Code Examples & Tutorials
          </h1>
          <p className='mx-auto max-w-3xl text-xl leading-relaxed text-zinc-600'>
            Learn Sui development with practical examples, from basic smart contracts to complex
            DeFi protocols. All examples are production-ready and thoroughly tested.
          </p>
        </div>

        {/* Category Navigation */}
        <div className='mb-12 flex flex-wrap justify-center gap-3'>
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'border-zinc-300 text-zinc-700 hover:text-zinc-900'
              }`}
            >
              <category.icon className='h-4 w-4' />
              {category.title}
            </Button>
          ))}
        </div>

        {/* Examples Grid */}
        <div className='space-y-8'>
          {getCurrentExamples().map((example, index) => (
            <Card
              key={index}
              className='border-zinc-200/50 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg'
            >
              <CardHeader>
                <div className='flex items-start justify-between'>
                  <div>
                    <CardTitle className='mb-2 text-2xl font-bold text-zinc-900'>
                      {example.title}
                    </CardTitle>
                    <CardDescription className='text-lg leading-relaxed text-zinc-600'>
                      {example.description}
                    </CardDescription>
                  </div>
                  <Badge
                    variant='outline'
                    className={`${
                      example.difficulty === 'Beginner'
                        ? 'border-green-300 text-green-700'
                        : example.difficulty === 'Intermediate'
                          ? 'border-yellow-300 text-yellow-700'
                          : 'border-red-300 text-red-700'
                    }`}
                  >
                    {example.difficulty}
                  </Badge>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {example.files.map((file, fileIndex) => (
                    <Badge key={fileIndex} variant='secondary' className='text-xs'>
                      {file}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className='relative rounded-xl bg-zinc-900 p-6'>
                  <div className='mb-4 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-red-400' />
                      <div className='h-3 w-3 rounded-full bg-yellow-400' />
                      <div className='h-3 w-3 rounded-full bg-green-400' />
                      <span className='ml-2 font-mono text-sm text-zinc-400'>
                        {example.files[0]}
                      </span>
                    </div>
                    <div className='flex gap-2'>
                      <Button
                        size='sm'
                        variant='ghost'
                        onClick={() => copyCode(example.code, `example-${index}`)}
                        className='text-zinc-400 hover:bg-zinc-800 hover:text-white'
                      >
                        {copiedCode === `example-${index}` ? (
                          <Check className='h-4 w-4' />
                        ) : (
                          <Copy className='h-4 w-4' />
                        )}
                      </Button>
                      <Button
                        size='sm'
                        variant='ghost'
                        className='text-zinc-400 hover:bg-zinc-800 hover:text-white'
                      >
                        <Download className='h-4 w-4' />
                      </Button>
                    </div>
                  </div>
                  <pre className='max-h-96 overflow-x-auto font-mono text-sm leading-relaxed text-zinc-300'>
                    {example.code}
                  </pre>
                </div>
                <div className='mt-6 flex gap-3'>
                  <Button variant='outline' size='sm' className='border-zinc-300 text-zinc-700'>
                    <Play className='mr-2 h-4 w-4' />
                    Run Example
                  </Button>
                  <Button variant='outline' size='sm' className='border-zinc-300 text-zinc-700'>
                    <ExternalLink className='mr-2 h-4 w-4' />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-20 text-center'>
          <Card className='mx-auto max-w-2xl border-blue-200/50 bg-blue-50/50'>
            <CardContent className='pt-8'>
              <h3 className='mb-4 text-2xl font-bold text-zinc-900'>
                Need Help with Your Project?
              </h3>
              <p className='mb-6 leading-relaxed text-zinc-600'>
                Can&apos;t find what you&apos;re looking for? Ask the Sui Developer MCP directly in
                your IDE for personalized code examples and guidance.
              </p>
              <div className='flex justify-center gap-3'>
                <Link href='/docs'>
                  <Button className='bg-blue-600 text-white hover:bg-blue-700'>
                    Read Documentation
                  </Button>
                </Link>
                <Link href='/'>
                  <Button variant='outline' className='border-zinc-300 text-zinc-700'>
                    Get Started
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
