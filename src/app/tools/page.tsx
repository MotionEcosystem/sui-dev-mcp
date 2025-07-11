'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  Bot,
  Code2,
  Cpu,
  Database,
  Eye,
  GitBranch,
  Play,
  Shield,
  Terminal,
  Wrench,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ToolsPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const tools = [
    {
      id: 'ask-sui-move-expert',
      name: 'Ask Sui Move Expert',
      icon: Bot,
      category: 'AI Expert',
      description:
        'Expert AI assistant specialized in Sui Move smart contract development, patterns, and best practices',
      features: [
        'Move language expertise',
        'Smart contract architecture guidance',
        'Code review and optimization',
        'Pattern recognition and suggestions',
        'Advanced Move concepts explanation',
      ],
      useCases: [
        'Smart contract development',
        'Move language learning',
        'Architecture planning',
        'Code optimization',
      ],
      example: {
        query: 'How do I implement a staking mechanism with time-locked rewards?',
        response: `🚀 **Sui Move Staking Implementation:**

\`\`\`move
module staking::rewards {
    use sui::clock::{Self, Clock};
    use sui::coin::{Self, Coin};
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    struct StakingPool<phantom T> has key {
        id: UID,
        total_staked: u64,
        reward_rate: u64, // rewards per second
        last_update: u64,
        reward_per_token: u64,
    }

    struct StakePosition<phantom T> has key {
        id: UID,
        amount: u64,
        stake_time: u64,
        lock_duration: u64,
        user_reward_per_token: u64,
        pending_rewards: u64,
    }

    public entry fun stake<T>(
        pool: &mut StakingPool<T>,
        stake_coin: Coin<T>,
        lock_duration: u64,
        clock: &Clock,
        ctx: &mut TxContext
    ) {
        let amount = coin::value(&stake_coin);
        let current_time = clock::timestamp_ms(clock);

        // Update pool rewards
        update_rewards(pool, clock);

        let position = StakePosition<T> {
            id: object::new(ctx),
            amount,
            stake_time: current_time,
            lock_duration,
            user_reward_per_token: pool.reward_per_token,
            pending_rewards: 0,
        };

        pool.total_staked = pool.total_staked + amount;

        // Transfer stake coin to pool (implement treasury logic)
        coin::destroy_zero(stake_coin); // Simplified

        transfer::transfer(position, tx_context::sender(ctx));
    }

    fun update_rewards<T>(pool: &mut StakingPool<T>, clock: &Clock) {
        let current_time = clock::timestamp_ms(clock);
        if (pool.total_staked > 0) {
            let time_diff = current_time - pool.last_update;
            let rewards = (time_diff * pool.reward_rate) / 1000; // Convert to seconds
            pool.reward_per_token = pool.reward_per_token +
                (rewards * 1000000) / pool.total_staked; // Scale for precision
        };
        pool.last_update = current_time;
    }
}
\`\`\`

**🔑 Key Features:**
- Time-locked positions prevent early withdrawal
- Rewards accumulate based on staking duration
- Efficient reward calculation using per-token tracking
- Clock-based timestamp validation`,
      },
    },
    {
      id: 'sui-documentation-search',
      name: 'Sui Documentation Search',
      icon: BookOpen,
      category: 'Research',
      description:
        'AI-powered search through comprehensive Sui documentation with context understanding',
      features: [
        'Semantic search across all Sui docs',
        'Real-time documentation updates',
        'Context-aware results',
        'Code example extraction',
        'API reference lookup',
      ],
      useCases: [
        'Find specific API documentation',
        'Search for implementation patterns',
        'Lookup Move language features',
        'Get transaction examples',
      ],
      example: {
        query: 'Find information about dynamic fields and object composition',
        response: `📚 **Dynamic Fields & Object Composition Documentation:**

**🔍 Dynamic Fields Overview:**
- **Location:** sui.io/concepts/dynamic-fields
- Dynamic fields allow objects to be extended with additional data
- Fields are stored separately but accessible through the parent object
- Useful for scalable data structures and upgradeable contracts

**💻 Code Example:**
\`\`\`move
use sui::dynamic_field as df;

struct Parent has key {
    id: UID,
}

struct Child has store {
    value: u64,
}

// Add a dynamic field
public fun add_child(parent: &mut Parent, name: String, child: Child) {
    df::add(&mut parent.id, name, child);
}

// Access a dynamic field
public fun get_child(parent: &Parent, name: String): &Child {
    df::borrow(&parent.id, name)
}
\`\`\`

**🏗️ Object Composition Patterns:**
1. **Hierarchical Objects:** Parent-child relationships
2. **Modular Design:** Separate concerns into different objects
3. **Extensible Structures:** Use dynamic fields for flexibility
4. **Capability-based Access:** Control field modifications

**⚠️ Best Practices:**
- Use typed keys for better type safety
- Consider gas costs for deep nesting
- Implement proper access controls
- Plan for field removal and cleanup`,
      },
    },
    {
      id: 'ask-sui-sdk-expert',
      name: 'Ask Sui SDK Expert',
      icon: Code2,
      category: 'Development',
      description: 'Expert guidance for Sui TypeScript/JavaScript SDK integration and usage',
      features: [
        'TypeScript SDK expertise',
        'Transaction building guidance',
        'Client configuration help',
        'Best practices for dApp integration',
        'Error handling patterns',
      ],
      useCases: [
        'Frontend dApp development',
        'Transaction construction',
        'Wallet integration',
        'RPC client setup',
      ],
      example: {
        query: 'Show me how to create and sign a programmable transaction in TypeScript',
        response: `🔧 **Programmable Transaction in TypeScript:**

\`\`\`typescript
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';

// Initialize client and keypair
const client = new SuiClient({
  url: getFullnodeUrl('testnet')
});
const keypair = Ed25519Keypair.generate();

async function createProgrammableTransaction() {
  // Create a new transaction block
  const txb = new TransactionBlock();

  // Example: Multi-step transaction
  // Step 1: Split coins
  const [coin1, coin2] = txb.splitCoins(txb.gas, [
    txb.pure(1000000000), // 1 SUI
    txb.pure(500000000),  // 0.5 SUI
  ]);

  // Step 2: Transfer coins to different recipients
  txb.transferObjects([coin1], txb.pure('0x...recipient1'));
  txb.transferObjects([coin2], txb.pure('0x...recipient2'));

  // Step 3: Call a Move function
  txb.moveCall({
    target: '0x...package::module::function',
    arguments: [
      txb.object('0x...shared_object'),
      txb.pure('some_parameter'),
    ],
    typeArguments: ['0x2::sui::SUI'],
  });

  // Set gas budget
  txb.setGasBudget(10000000);

  // Sign and execute
  const result = await client.signAndExecuteTransactionBlock({
    signer: keypair,
    transactionBlock: txb,
    options: {
      showEffects: true,
      showObjectChanges: true,
      showEvents: true,
    },
  });

  console.log('Transaction result:', result);
  return result;
}

// Error handling wrapper
async function executeWithRetry() {
  try {
    return await createProgrammableTransaction();
  } catch (error) {
    if (error.message.includes('InsufficientGas')) {
      console.log('Retrying with higher gas budget...');
      // Implement retry logic
    }
    throw error;
  }
}
\`\`\`

**🎯 Key Features:**
- **Batch Operations:** Multiple actions in one transaction
- **Gas Optimization:** Single transaction reduces costs
- **Atomic Execution:** All operations succeed or fail together
- **Type Safety:** Full TypeScript support`,
      },
    },
    {
      id: 'sui-error-explainer',
      name: 'Sui Error Explainer',
      icon: AlertCircle,
      category: 'Debugging',
      description: 'Decode and explain Sui transaction errors with actionable solutions',
      features: [
        'Error message translation',
        'Root cause analysis',
        'Solution suggestions',
        'Common patterns database',
        'Debug workflow guidance',
      ],
      useCases: [
        'Transaction debugging',
        'Development troubleshooting',
        'User support',
        'Error monitoring',
      ],
      example: {
        query: "Explain 'InvalidObjectOwner' error and how to fix it",
        response: `🚨 **InvalidObjectOwner Error Analysis:**

**🔍 Error Explanation:**
The \`InvalidObjectOwner\` error occurs when a transaction tries to use an object that:
- Doesn't exist at the specified address
- Is owned by a different address than expected
- Has been consumed/deleted in a previous transaction
- Has incorrect ownership type (owned vs shared vs immutable)

**💡 Common Causes:**

1. **Stale Object References:**
   \`\`\`typescript
   // ❌ Problem: Using old object reference
   const txb = new TransactionBlock();
   txb.moveCall({
     target: 'package::module::transfer',
     arguments: [txb.object('0x123...')], // Object may be consumed
   });
   \`\`\`

2. **Ownership Confusion:**
   \`\`\`move
   // ❌ Problem: Trying to mutate owned object as shared
   public entry fun wrong_function(obj: &mut MyObject) {
     // This expects a shared object but receives owned
   }
   \`\`\`

**🛠️ Solutions:**

1. **Refresh Object Data:**
   \`\`\`typescript
   // ✅ Solution: Get fresh object data
   const object = await client.getObject({
     id: objectId,
     options: { showOwner: true, showContent: true }
   });

   if (object.data?.owner?.AddressOwner) {
     // Use the fresh object reference
     txb.transferObjects([txb.object(objectId)], recipient);
   }
   \`\`\`

2. **Check Ownership Type:**
   \`\`\`typescript
   // ✅ Solution: Verify ownership before use
   const objectInfo = await client.getObject({ id: objectId });
   const owner = objectInfo.data?.owner;

   if (owner === 'Shared') {
     // Handle as shared object
   } else if (owner?.AddressOwner) {
     // Handle as owned object
   }
   \`\`\`

3. **Use Dynamic Object Queries:**
   \`\`\`typescript
   // ✅ Solution: Query owned objects dynamically
   const ownedObjects = await client.getOwnedObjects({
     owner: address,
     filter: { StructType: 'package::module::MyObject' }
   });
   \`\`\`

**🔧 Debug Checklist:**
- ✅ Verify object exists at given address
- ✅ Check current ownership status
- ✅ Ensure object hasn't been consumed
- ✅ Validate ownership type matches usage
- ✅ Refresh object references before transactions`,
      },
    },
    {
      id: 'sui-best-practices-guide',
      name: 'Sui Best Practices Guide',
      icon: Shield,
      category: 'Security',
      description: 'Security best practices and optimization guidelines for Sui development',
      features: [
        'Security audit guidance',
        'Gas optimization techniques',
        'Architecture recommendations',
        'Testing strategies',
        'Deployment best practices',
      ],
      useCases: [
        'Security reviews',
        'Performance optimization',
        'Architecture planning',
        'Protocol development',
      ],
      example: {
        query: 'What are security best practices for DeFi protocols on Sui?',
        response: `🛡️ **DeFi Security Best Practices on Sui:**

**🔐 Core Security Principles:**

1. **Capability-Based Access Control:**
   \`\`\`move
   struct AdminCap has key, store { id: UID }

   public entry fun admin_function(
       _: &AdminCap,
       protocol: &mut Protocol,
       ctx: &mut TxContext
   ) {
       // Only admin can execute
   }
   \`\`\`

2. **Input Validation:**
   \`\`\`move
   public fun swap(
       pool: &mut Pool<X, Y>,
       input_coin: Coin<X>,
       min_output: u64,
   ): Coin<Y> {
       let input_amount = coin::value(&input_coin);
       assert!(input_amount > 0, EInvalidAmount);

       let output_amount = calculate_output(pool, input_amount);
       assert!(output_amount >= min_output, ESlippageTooHigh);

       // Execute swap...
   }
   \`\`\`

**💰 Economic Security:**

1. **Slippage Protection:**
   - Always implement minimum output checks
   - Use deadline parameters for time-sensitive operations
   - Protect against sandwich attacks

2. **Oracle Security:**
   \`\`\`move
   public fun get_price_with_validation(
       oracle: &PriceOracle,
       max_age: u64,
       clock: &Clock
   ): u64 {
       let (price, timestamp) = oracle::get_price_data(oracle);
       let current_time = clock::timestamp_ms(clock);

       assert!(current_time - timestamp <= max_age, EPriceStale);
       assert!(price > 0, EInvalidPrice);

       price
   }
   \`\`\`

**🏗️ Architecture Security:**

1. **Module Separation:**
   - Core logic in separate modules
   - Admin functions isolated
   - Clear dependency hierarchy

2. **Upgrade Patterns:**
   \`\`\`move
   struct UpgradeCap has key, store { id: UID }

   public entry fun authorize_upgrade(
       _: &UpgradeCap,
       policy: &mut UpgradePolicy,
       new_package: vector<u8>
   ) {
       // Implement time-delayed upgrades
       // Multi-sig requirements
       // Emergency pause mechanisms
   }
   \`\`\`

**🧪 Testing & Validation:**

1. **Comprehensive Test Coverage:**
   - Unit tests for all functions
   - Integration tests for workflows
   - Stress tests for edge cases
   - Fuzzing for input validation

2. **Formal Verification:**
   - Use Move's built-in verification
   - Property-based testing
   - Invariant checking

**⚡ Gas Optimization:**

1. **Efficient Data Structures:**
   \`\`\`move
   // ✅ Good: Use appropriate types
   struct OptimizedPool {
       reserves_x: u128, // Sufficient precision
       reserves_y: u128,
       fee_rate: u64,    // Smaller type for fee
   }

   // ❌ Avoid: Oversized types
   struct WastefulPool {
       reserves_x: u256, // Unnecessary precision
       reserves_y: u256,
   }
   \`\`\`

2. **Batch Operations:**
   - Group related operations
   - Minimize object transfers
   - Use shared objects efficiently

**🚨 Emergency Procedures:**
- Implement pause mechanisms
- Multi-sig governance
- Time-locked critical operations
- Emergency withdrawal functions`,
      },
    },
  ]

  const categories = ['All', 'AI Expert', 'Research', 'Development', 'Debugging', 'Security']

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTools =
    activeCategory === 'All' ? tools : tools.filter(tool => tool.category === activeCategory)

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
              <Wrench className='h-5 w-5 text-blue-600' />
              <span className='font-bold text-zinc-900'>Sui Developer MCP</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className='container relative z-20 mx-auto px-6 py-12 lg:px-8'>
        {/* Hero Section */}
        <div className='mb-16 text-center'>
          <h1 className='mb-6 text-5xl font-black tracking-tight text-zinc-900'>
            Sui Developer MCP Tools
          </h1>
          <p className='mx-auto max-w-3xl text-xl leading-relaxed text-zinc-600'>
            AI-powered tools that integrate directly into your IDE to accelerate Sui development.
            Access expert knowledge, documentation search, SDK guidance, and debugging help through
            the Model Context Protocol.
          </p>
          <div className='mt-8 flex justify-center gap-3'>
            <Link href='/docs'>
              <Button className='bg-blue-600 text-white hover:bg-blue-700'>
                <BookOpen className='mr-2 h-4 w-4' />
                Setup Guide
              </Button>
            </Link>
            <Link href='https://sui-developer-mcp.vercel.app/mcp' target='_blank'>
              <Button variant='outline' className='border-blue-600 text-blue-600 hover:bg-blue-50'>
                <Terminal className='mr-2 h-4 w-4' />
                MCP Server
              </Button>
            </Link>
          </div>
        </div>

        {/* Category Filter */}
        <div className='mb-12 flex flex-wrap justify-center gap-3'>
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'border-zinc-300 text-zinc-700 hover:text-zinc-900'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className='mb-16 grid gap-8 lg:grid-cols-2'>
          {filteredTools.map(tool => (
            <Card
              key={tool.id}
              className='group border-zinc-200/50 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg'
            >
              <CardHeader>
                <div className='flex items-start justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100'>
                      <tool.icon className='h-6 w-6 text-blue-600' />
                    </div>
                    <div>
                      <CardTitle className='text-xl font-bold text-zinc-900'>{tool.name}</CardTitle>
                      <Badge variant='secondary' className='mt-1'>
                        {tool.category}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => setActiveDemo(activeDemo === tool.id ? null : tool.id)}
                    className='border-zinc-300 text-zinc-700'
                  >
                    <Play className='mr-2 h-4 w-4' />
                    {activeDemo === tool.id ? 'Hide' : 'Demo'}
                  </Button>
                </div>
                <CardDescription className='mt-4 leading-relaxed text-zinc-600'>
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-6'>
                  {/* Features */}
                  <div>
                    <h4 className='mb-3 font-semibold text-zinc-900'>Key Features</h4>
                    <ul className='space-y-2'>
                      {tool.features.map((feature, index) => (
                        <li key={index} className='flex items-start gap-2 text-zinc-700'>
                          <div className='mt-2.5 h-1.5 w-1.5 rounded-full bg-blue-600' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className='mb-3 font-semibold text-zinc-900'>Use Cases</h4>
                    <div className='flex flex-wrap gap-2'>
                      {tool.useCases.map((useCase, index) => (
                        <Badge key={index} variant='outline' className='text-xs'>
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Demo */}
                  {activeDemo === tool.id && (
                    <div className='rounded-xl border border-zinc-200 bg-zinc-50 p-6'>
                      <h4 className='mb-4 flex items-center gap-2 font-semibold text-zinc-900'>
                        <Terminal className='h-4 w-4' />
                        Interactive Demo
                      </h4>
                      <div className='space-y-4'>
                        <div>
                          <p className='mb-2 text-sm text-zinc-600'>Query:</p>
                          <div className='rounded-lg border bg-white p-3 font-mono text-sm'>
                            {tool.example.query}
                          </div>
                        </div>
                        <div>
                          <p className='mb-2 text-sm text-zinc-600'>Response:</p>
                          <div className='overflow-x-auto rounded-lg bg-zinc-900 p-4 font-mono text-sm text-zinc-300'>
                            <pre className='whitespace-pre-wrap'>{tool.example.response}</pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Guide */}
        <Card className='mb-16 border-blue-200/50 bg-gradient-to-r from-blue-50 to-indigo-50'>
          <CardHeader>
            <CardTitle className='flex items-center gap-3 text-2xl font-bold text-zinc-900'>
              <Zap className='h-6 w-6 text-blue-600' />
              How to Use These Tools
            </CardTitle>
            <CardDescription className='text-lg text-zinc-700'>
              Get started with Sui Developer MCP in your development environment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-6 md:grid-cols-3'>
              <div className='text-center'>
                <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white'>
                  1
                </div>
                <h3 className='mb-2 font-semibold text-zinc-900'>Install MCP Server</h3>
                <p className='text-sm text-zinc-600'>
                  Configure the Sui Developer MCP server in Claude Desktop, Cursor, or Windsurf
                </p>
              </div>
              <div className='text-center'>
                <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white'>
                  2
                </div>
                <h3 className='mb-2 font-semibold text-zinc-900'>Ask Questions</h3>
                <p className='text-sm text-zinc-600'>
                  Use natural language to ask Sui development questions directly in your IDE
                </p>
              </div>
              <div className='text-center'>
                <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white'>
                  3
                </div>
                <h3 className='mb-2 font-semibold text-zinc-900'>Get Expert Help</h3>
                <p className='text-sm text-zinc-600'>
                  Receive specialized Sui knowledge, code examples, and debugging assistance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Stats */}
        <div className='mb-16 grid gap-6 md:grid-cols-4'>
          <Card className='border-zinc-200/50 bg-white/80 text-center backdrop-blur-sm'>
            <CardContent className='pt-6'>
              <Database className='mx-auto mb-4 h-8 w-8 text-blue-600' />
              <div className='mb-2 text-2xl font-bold text-zinc-900'>5+</div>
              <p className='text-sm text-zinc-600'>Specialized AI tools</p>
            </CardContent>
          </Card>
          <Card className='border-zinc-200/50 bg-white/80 text-center backdrop-blur-sm'>
            <CardContent className='pt-6'>
              <Cpu className='mx-auto mb-4 h-8 w-8 text-blue-600' />
              <div className='mb-2 text-2xl font-bold text-zinc-900'>&lt;2s</div>
              <p className='text-sm text-zinc-600'>Average response time</p>
            </CardContent>
          </Card>
          <Card className='border-zinc-200/50 bg-white/80 text-center backdrop-blur-sm'>
            <CardContent className='pt-6'>
              <Eye className='mx-auto mb-4 h-8 w-8 text-blue-600' />
              <div className='mb-2 text-2xl font-bold text-zinc-900'>3</div>
              <p className='text-sm text-zinc-600'>Supported IDEs</p>
            </CardContent>
          </Card>
          <Card className='border-zinc-200/50 bg-white/80 text-center backdrop-blur-sm'>
            <CardContent className='pt-6'>
              <GitBranch className='mx-auto mb-4 h-8 w-8 text-blue-600' />
              <div className='mb-2 text-2xl font-bold text-zinc-900'>24/7</div>
              <p className='text-sm text-zinc-600'>Available assistance</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <Card className='mx-auto max-w-2xl bg-zinc-900 text-white'>
            <CardContent className='pt-8'>
              <h3 className='mb-4 text-2xl font-bold'>Ready to Accelerate Your Sui Development?</h3>
              <p className='mb-6 leading-relaxed text-zinc-300'>
                Install the Sui Developer MCP server and start building with specialized AI assistance
              </p>
              <div className='flex justify-center gap-3'>
                <Link href='/docs'>
                  <Button className='bg-white text-zinc-900 hover:bg-zinc-100'>
                    <BookOpen className='mr-2 h-4 w-4' />
                    Setup Guide
                  </Button>
                </Link>
                <Link href='https://sui-developer-mcp.vercel.app/mcp' target='_blank'>
                  <Button
                    variant='outline'
                    className='border-zinc-600 text-white hover:bg-zinc-800'
                  >
                    <Terminal className='mr-2 h-4 w-4' />
                    MCP Server
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
