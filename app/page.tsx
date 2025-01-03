"use client";

import React, { useState } from "react";

// Interface for Blog Posts
interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
  category: string;
}

// Sample Blog Data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Smartphone X1 Review",
    date: "January 1, 2025",
    content: "Smartphone X1 is the latest in mobile technology with cutting-edge features, advanced AI integration, and a sleek design. It is a must-have device for tech enthusiasts. Packed with powerful performance, it redefines the smartphone experience.",
    image: "/product1.jpg",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Wireless Headphones Review",
    date: "January 2, 2025",
    content: "The Wireless Headphones provide excellent sound quality with noise cancellation, long battery life, and seamless Bluetooth connectivity. Perfect for audiophiles and those on the go.",
    image: "/product2.jpg",
    category: "Accessories",
  },
  {
    id: 3,
    title: "Gaming Laptop Pro Review",
    date: "January 3, 2025",
    content: "Gaming Laptop Pro comes with a high-end graphics card, an ultra-fast processor, and a 144Hz display. Ideal for gamers and professionals who need top-notch performance.",
    image: "/product3.jpg",
    category: "Electronics",
  },
];

// Categories for filtering
const categories = ["All", "Electronics", "Accessories"];

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]); // Track expanded posts by their IDs

  const filteredPosts = blogPosts.filter(
    (post) => selectedCategory === "All" || post.category === selectedCategory
  );

  const toggleContent = (id: number) => {
    setExpandedPosts((prev) =>
      prev.includes(id) ? prev.filter((postId) => postId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-lightGray">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">
            AN<span className="text-red-500">Blog</span>
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="text-primary hover:text-indigo-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#blog" className="text-primary hover:text-indigo-700">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-secondary text-white py-16 text-center">
        <h2 className="text-4xl font-bold">Welcome to My Blog</h2>
        <p className="text-lg mt-2">Explore the latest reviews and insights into the tech world.</p>
      </section>

  

      {/* Categories and Filter */}
      <section className="container mx-auto px-6 py-4 flex justify-center gap-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 rounded-md border border-gray-300"
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </section>

      {/* Blog Posts Section */}
      <section id="blog" className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="w-full h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                <p className="mt-2 text-gray-700">
                  {expandedPosts.includes(post.id)
                    ? post.content
                    : `${post.content.slice(0, 100)}...`}
                </p>
                <button
                  onClick={() => toggleContent(post.id)}
                  className="text-primary font-semibold mt-4 inline-block"
                >
                  {expandedPosts.includes(post.id) ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white text-center py-4 mt-8">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPage;
