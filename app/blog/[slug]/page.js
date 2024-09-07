import fs from 'fs'
import React from "react"
import matter from "gray-matter"
import Markdown from "markdown-to-jsx"
import getBlogMetadata from "@/utils/getBlogMetadata"

export const dynamic = 'force-dynamic'

/* gets raw content from markdown file */
function getBlogContent(slug) {
    const directory = 'blogs/'
    const file = directory + `${slug}.md`
    const content = fs.readFileSync(file, 'utf-8')

    return matter(content)
}

/* creates a url for every blog post */
export const generateStaticParams = async () => {
    const blogs = getBlogMetadata('blogs')
    return blogs.map((blog) => { slug: blog.slug })
} 

export async function generateMetadata({params, search_params}) {
    const id = params?.slug ? ' · ' + params?.slug : ''
    return {
        title: `BAC ${id.replaceAll('_', ' ')}`
    }
}


export default function BlogPage(props) {
    const slug = props.params.slug
    const blog = getBlogContent(slug)
    return (
        <main>
            <article>
                <Markdown>
                    {blog.content}
                </Markdown>
            </article>
        </main>
    )
}