import BlogCard from "@/components/shared/cards/BlogCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import H2 from "@/components/ui/H2";

const Blog = () => {
  return (
    <section id="blogs" className="py-16 bg-white px-4 lg:px-0">
      <div className="container-custom">
        <div className="flex justify-between items-start mb-[60px] flex-col md:flex-row gap-5">
          <div>
            <Badge>Our Blog</Badge>
            <H2 color="primary">Latest Blogs</H2>
          </div>
          <Button className="px-8 py-4 rounded-[10px] text-lg font-medium leading-[1.21] border-none cursor-pointer transition-opacity duration-300 inline-flex items-center justify-center gap-2.5 whitespace-nowrap min-w-fit bg-primary text-white hover:opacity-90">
            See All Blogs
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          <BlogCard
            src="/images/blog-1.png"
            title="Choosing the Right Logistics Partner"
            subtitle="Facilisis nulla lacus at ultrices praesent scelerisque facilisis massa."
            date="October 23, 2025"
          />
          <BlogCard
            src="/images/blog-2.png"
            title="The Future of Global Shipping"
            subtitle="Facilisis nulla lacus at ultrices praesent scelerisque facilisis massa."
            date="November 5, 2025"
          />
          <BlogCard
            src="/images/blog-3.png"
            title="Efficient Supply Chain Management"
            subtitle="Facilisis nulla lacus at ultrices praesent scelerisque facilisis massa."
            date="December 12, 2025"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
