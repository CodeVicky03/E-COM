import areaRug from './productImage/area-rug.jpg';
import barCart from './productImage/bar-cart.jpg';
import barStool from './productImage/bar-stool.jpg';
import bedFrame from './productImage/bet-frame.jpg';
import bookCase from './productImage/book-case.jpg';
import chair from './productImage/chair.jpg';
import coffeeTable from './productImage/coffee-table.jpg';
import consoleTable from './productImage/console-table.jpg';
import desk from './productImage/desk.jpg';
import diningChair from './productImage/dining-chair.jpg';
import diningTable from './productImage/dining-table.jpg';
import dresser from './productImage/dresser.jpg';
import entertainmentCenter from './productImage/entertainment-center.jpg';
import loungeChair from './productImage/launge-chair.jpg';
import mirror from './productImage/mirror.jpg';
import officeChair from './productImage/office-chair.jpg';
import ottoman from './productImage/ottoman.jpg';
import patioSet from './productImage/patio-set.jpg';
import sideTable from './productImage/side-table.jpg';
import sofa from './productImage/sofa.jpg';

const furnitureProducts = [
    {
        id: 1,
        title: "Modern Sofa Set",
        productName: "ComfortPlus 3-Piece Sofa Set",
        price: 999.99,
        discount: 10,
        description: "This modern sofa set includes a sofa, loveseat, and chair. Made with premium materials for maximum comfort and durability.",
        availability: "In stock",
        offers: ["Free shipping"],
        review: {
            rating: 4.5,
            numberOfReviews: 120
        },
        image: sofa
    },
    {
        id: 2,
        title: "Elegant Dining Table",
        productName: "Stellar Dining Table",
        price: 499.99,
        discount: 5,
        description: "An elegant dining table crafted from solid wood, featuring a sleek design perfect for both formal and casual dining occasions.",
        availability: "Available for pre-order",
        offers: ["10% off on first purchase"],
        review: {
            rating: 4.8,
            numberOfReviews: 85
        },
        image: diningTable
    },
    {
        id: 3,
        title: "Cozy Armchair",
        productName: "CloudNine Armchair",
        price: 299.99,
        discount: 15,
        description: "Sink into luxury with this cozy armchair, featuring plush cushions and a sturdy hardwood frame for ultimate relaxation.",
        availability: "Out of stock",
        offers: ["Free shipping"],
        review: {
            rating: 4.2,
            numberOfReviews: 45
        },
        image: chair
    },
    {
        id: 4,
        title: "Rustic Coffee Table",
        productName: "Timberland Coffee Table",
        price: 199.99,
        discount: 0,
        description: "Bring the charm of the outdoors into your living room with this rustic coffee table crafted from reclaimed wood.",
        availability: "In stock",
        offers: ["Free shipping"],
        review: {
            rating: 4.6,
            numberOfReviews: 65
        },
        image: coffeeTable
    },
    {
        id: 5,
        title: "Modern Desk",
        productName: "MetroDesk Modern Writing Desk",
        price: 349.99,
        discount: 0,
        description: "Enhance your workspace with this sleek and functional modern writing desk, featuring ample storage and a minimalist design.",
        availability: "Available for pre-order",
        offers: ["Free assembly"],
        review: {
            rating: 4.9,
            numberOfReviews: 30
        },
        image: desk
    },
    {
        id: 6,
        title: "Classic Bookcase",
        productName: "Heritage Oak Bookcase",
        price: 279.99,
        discount: 20,
        description: "Display your book collection in style with this classic oak bookcase, featuring adjustable shelves and a timeless design.",
        availability: "In stock",
        offers: ["20% off clearance sale"],
        review: {
            rating: 4.7,
            numberOfReviews: 55
        },
        image: bookCase
    },
    {
        id: 7,
        title: "Vintage Dresser",
        productName: "Antique Charm Dresser",
        price: 449.99,
        discount: 0,
        description: "Add vintage flair to your bedroom with this charming dresser, featuring intricate detailing and ample storage space.",
        availability: "Out of stock",
        offers: ["Free shipping"],
        review: {
            rating: 4.4,
            numberOfReviews: 40
        },
        image: dresser
    },
    {
        id: 8,
        title: "Contemporary Bar Stool",
        productName: "UrbanScape Bar Stool",
        price: 89.99,
        discount: 15,
        description: "Upgrade your kitchen or bar area with these contemporary bar stools, featuring a sleek design and comfortable seating.",
        availability: "In stock",
        offers: ["Free shipping"],
        review: {
            rating: 4.3,
            numberOfReviews: 75
        },
        image: barStool
    },
    {
        id: 9,
        title: "Outdoor Patio Set",
        productName: "Sunshine Garden Patio Set",
        price: 799.99,
        discount: 10,
        description: "Transform your outdoor space with this stylish patio set, including a table and chairs perfect for entertaining guests.",
        availability: "Available for pre-order",
        offers: ["10% off on first purchase"],
        review: {
            rating: 4.8,
            numberOfReviews: 90
        },
        image: patioSet
    },
    {
        id: 10,
        title: "Executive Office Chair",
        productName: "ExecutiveComfort High-Back Chair",
        price: 299.99,
        discount: 5,
        description: "Stay comfortable during long workdays with this ergonomic executive office chair, featuring lumbar support and adjustable armrests.",
        availability: "In stock",
        offers: ["Free shipping"],
        review: {
            rating: 4.6,
            numberOfReviews: 50
        },
        image: officeChair
    },
    {
        id: 11,
        title: "Modern Entertainment Center",
        productName: "TechTrend Entertainment Center",
        price: 599.99,
        discount: 0,
        description: "Organize your media equipment in style with this modern entertainment center, featuring sleek lines and ample storage.",
        availability: "Out of stock",
        offers: ["Free shipping"],
        review: {
            rating: 4.5,
            numberOfReviews: 60
        },
        image: entertainmentCenter
    },
    {
        id: 12,
        title: "Coastal Side Table",
        productName: "Seaside Breeze Side Table",
        price: 129.99,
        discount: 0,
        description: "Add a touch of coastal charm to any room with this breezy side table, featuring a weathered finish and sturdy construction.",
        availability: "In stock",
        offers: ["Free Returen"],
        review: {
            rating: 4.2,
            numberOfReviews: 35
        },
        image: sideTable
    },
    {
        id: 13,
        title: "Mid-Century Lounge Chair",
        productName: "RetroVibe Lounge Chair",
        price: 399.99,
        discount: 0,
        description: "Channel retro vibes with this mid-century lounge chair, featuring a curved silhouette and plush upholstery for maximum comfort.",
        availability: "Available for pre-order",
        offers: ["Free shipping"],
        review: {
            rating: 4.7,
            numberOfReviews: 70
        },
        image: loungeChair
    },
    {
        id: 14,
        title: "Minimalist Bed Frame",
        productName: "Simplicity Platform Bed",
        price: 599.99,
        discount: 0,
        description: "Create a serene bedroom retreat with this minimalist platform bed, featuring clean lines and a sturdy construction.",
        availability: "In stock",
        offers: ["Free Returen"],
        review: {
            rating: 4.8,
            numberOfReviews: 80
        },
        image: bedFrame
    },
    {
        id: 15,
        title: "Scandinavian Dining Chairs",
        productName: "NordicComfort Dining Chairs",
        price: 199.99,
        discount: 0,
        description: "Bring Scandinavian elegance to your dining area with these stylish and comfortable dining chairs, featuring minimalist design and solid wood construction.",
        availability: "In stock",
        offers: ["Free Returen"],
        review: {
            rating: 4.6,
            numberOfReviews: 45
        },
        image: diningChair
    },
    {
        id: 16,
        title: "Industrial Bar Cart",
        productName: "UrbanForge Industrial Bar Cart",
        price: 249.99,
        discount: 10,
        description: "Add a touch of industrial chic to your home bar with this rugged yet stylish bar cart, featuring metal frame and distressed wood shelves.",
        availability: "Available for pre-order",
        offers: ["Free shipping"],
        review: {
            rating: 4.7,
            numberOfReviews: 35
        },
        image: barCart
    },
    {
        id: 17,
        title: "Bohemian Area Rug",
        productName: "BohoChic Moroccan Rug",
        price: 149.99,
        discount: 5,
        description: "Infuse your living space with Bohemian vibes with this vibrant Moroccan area rug, featuring intricate patterns and soft, durable material.",
        availability: "In stock",
        offers: ["Free shipping"],
        review: {
            rating: 4.4,
            numberOfReviews: 55
        },
        image: areaRug
    },
    {
        id: 18,
        title: "Farmhouse Console Table",
        productName: "RusticFarm Console Table",
        price: 299.99,
        discount: 0,
        description: "Welcome guests into your home with this charming farmhouse console table, featuring a distressed finish and ample storage space.",
        availability: "Out of stock",
        offers: ["Free shipping"],
        review: {
            rating: 4.5,
            numberOfReviews: 25
        },
        image: consoleTable
    },
    {
        id: 19,
        title: "Bohemian Pouf Ottoman",
        productName: "NomadVibe Pouf Ottoman",
        price: 79.99,
        discount: 15,
        description: "Add a pop of color and extra seating to any room with this Bohemian-inspired pouf ottoman, featuring a woven design and plush filling.",
        availability: "In stock",
        offers: ["Free shipping"],
        review: {
            rating: 4.3,
            numberOfReviews: 40
        },
        image: ottoman
    },
    {
        id: 20,
        title: "Glamorous Vanity Mirror",
        productName: "Starlight Glam Vanity Mirror",
        price: 179.99,
        discount: 0,
        description: "Illuminate your beauty routine with this glamorous vanity mirror, featuring LED lights and a sleek design perfect for any makeup enthusiast.",
        availability: "Available for pre-order",
        offers: ["Free shipping"],
        review: {
            rating: 4.8,
            numberOfReviews: 20
        },
        image: mirror
    }
];

export default furnitureProducts;
