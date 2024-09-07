import Link from "next/link";

export default function BlogCard(props) {
    const { blog } = props
    return (
        <Link className="unstyled" href={`/blog/${blog.slug}`}>
            <div className="postCard">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <div className="statsContainer">
                    <div>
                        <h5>Date</h5>
                        <p>{blog.date}</p>
                    </div>
                </div>
            </div>
        </Link> 
    )
}