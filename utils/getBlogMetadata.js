import fs from 'fs'
import matter from 'gray-matter'

export default function getBlogMetadata(bpath) {
    const directory = bpath + '/'
    const files = fs.readdirSync(directory)
    const md_blogs = files.filter(file => file.endsWith('.md'))

    const blogs = md_blogs.map((fname) => {
        const file_content = fs.readFileSync(`${bpath}/${fname}`, 'utf8')
        const matter_result = matter(file_content)
        return {
            title: matter_result.data.title,
            date: matter_result.data.date,
            description: matter_result.data.description,
            slug: fname.replace('.md', '')
        }
    })

    return blogs
}