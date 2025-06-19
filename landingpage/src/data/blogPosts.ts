export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Decentralized Finance: Exploring DeFi 2.0",
    excerpt: "Dive deep into the evolution of DeFi protocols and understand how the next generation of decentralized finance is reshaping traditional banking systems.",
    author: "Alex Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    tags: ["DeFi", "Blockchain", "Finance"],
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "NFT Utility Beyond Art: Real-World Applications",
    excerpt: "Explore how NFTs are evolving beyond digital art into practical applications including identity verification, supply chain management, and digital ownership.",
    author: "Sarah Johnson",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    tags: ["NFTs", "Web3", "Innovation"],
    imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Layer 2 Solutions: Scaling Ethereum for Mass Adoption",
    excerpt: "Understanding the technical innovations behind Layer 2 scaling solutions and their impact on transaction costs and speed in the Ethereum ecosystem.",
    author: "Mike Rodriguez",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    tags: ["Ethereum", "Layer 2", "Scaling"],
    imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Web3 Gaming: The Intersection of Play and Ownership",
    excerpt: "How blockchain technology is revolutionizing gaming through true digital ownership, play-to-earn mechanics, and decentralized game economies.",
    author: "Emma Davis",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    tags: ["Gaming", "Web3", "P2E"],
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop"
  },
  {
    id: 5,
    title: "DAO Governance: Building Decentralized Organizations",
    excerpt: "Learn about Decentralized Autonomous Organizations, their governance mechanisms, and how they're reshaping organizational structures in the digital age.",
    author: "David Kim",
    date: "Dec 5, 2024",
    readTime: "9 min read",
    tags: ["DAO", "Governance", "Decentralization"],
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Cross-Chain Interoperability: Connecting Blockchain Networks",
    excerpt: "Exploring the technologies and protocols that enable different blockchain networks to communicate and transfer value seamlessly.",
    author: "Lisa Zhang",
    date: "Dec 3, 2024",
    readTime: "8 min read",
    tags: ["Interoperability", "Cross-chain", "Protocols"],
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop"
  }
];
