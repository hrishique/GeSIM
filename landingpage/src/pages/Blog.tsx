import BlogCard from "@/components/BlogCard";
import BlogHeader from "@/components/BlogHeader";
import LoadMoreButton from "@/components/LoadMoreButton";
import React, { useEffect, useState } from "react";
import { blogPosts, BlogPost } from "../data/blogPosts";
import TopMenuBlogs from "@/components/TopMenuBlogs";
import WaitlistForm from "@/components/WaitlistForm";

const Blog = () => {
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    // Initial load
    setDisplayedPosts(blogPosts.slice(0, postsPerPage));
  }, []);

  const loadMorePosts = async () => {
    setLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const newPosts = blogPosts.slice(startIndex, endIndex);

    setDisplayedPosts((prev) => [...prev, ...newPosts]);
    setCurrentPage((prev) => prev + 1);
    setLoading(false);
  };

  const hasMorePosts = displayedPosts.length < blogPosts.length;

  return (
    <div>
      <TopMenuBlogs />
      <div className="relative z-10 container mx-auto px-4 py-12">
        <BlogHeader />

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          <LoadMoreButton
            onClick={loadMorePosts}
            loading={loading}
            hasMore={hasMorePosts}
          />
        </main>
      </div>
    </div>
  );
};

export default Blog;
