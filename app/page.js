import BlogCard from "@/components/BlogCard";
import getBlogMetadata from "@/utils/getBlogMetadata";

export default function Home() {
    const blog_metadata = getBlogMetadata('blogs')
    return (
        <main>
            <div className="postsContainer">
                {blog_metadata.map((blog, blog_index) => {
                    return (
                        <BlogCard key={blog_index} blog={blog} />
                    )
                })}
            </div>
        </main>
    );
}