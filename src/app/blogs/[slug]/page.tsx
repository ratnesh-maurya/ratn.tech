import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const filePath = path.join(blogContentPath, `${params.slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    
    return {
        title: `${data.title} - Ratnesh Maurya`,
        description: data.description,
        keywords: data.keywords,
        openGraph: {
            title: `${data.title} - Ratnesh Maurya`,
            description: data.description,
            type: 'article',
            url: `https://ratn.tech/blogs/${params.slug}`,
            images: 
                {
                url: `${data.image}`,
                    width: 1200,
                    height: 630,
                    alt: `${data.title} - Ratnesh Maurya`,
                },
            
        },
        twitter: {
            card: 'summary_large_image',
            site: '@ratnesh_maurya_',
            title: `${data.title} - Ratnesh Maurya`,
            description: data.description,
            creator: '@ratnesh_maurya_',
            images: {
                url: `${data.image}`,
                width: 1200,
                height: 630,
                alt: `${data.title} - Ratnesh Maurya`,
            },
            
        },
    };
}


const blogContentPath = path.join(process.cwd(), 'src', 'blogContent');


export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const filePath = path.join(blogContentPath, `${slug}.md`);


    if (!fs.existsSync(filePath)) {
        return notFound();
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContent);


    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypePrettyCode, {
            theme: 'ayu-dark',
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
        })
        .process(content)
        .then((file) => file.toString());

 
    return (
        <article className=" max-w-3xl mx-auto px-4 mb font-sans shadow-2xl dark:bg-gray-950/70 shadow-black p-4 backdrop-blur-xl rounded-xl  mr-1.5 ml-1.5 ">
            <div className="text-s text-gray-600 dark:text-gray-50 mb-6">
                <Link href="/blogs" className="text-teal-600 dark:text-orange-500 dark:hover:text-orange-600 hover:text-teal-800">
                    blogs
                </Link>
                <span className="mx-2">/</span>
                <span>{slug}</span>
            </div>
            <header className="mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 font-merriweather dark:text-teal-500 text-teal-700">{data.title}</h1>

                <div className="text-lg text-gray-700 dark:text-gray-500 mb-6 font-sans border-l-4 border-gray-200 pl-4">
                    &quot;{data.description}&quot;
                </div>
                <div className="flex items-center dark:text-gray-300 text-gray-600 mb-4">
                    <div className="mr-4">
                        <span className="font-medium font-sans">By: </span>
                        {data.author}
                    </div>
                    <div>
                        <span className="font-medium font-sans mb">Published: </span>
                        {new Date(data.date).toLocaleDateString()}
                    </div>
                </div>
            </header>
            <div
                className="prose max-w-none font-sans dark:text-gray-300
             dark:prose-headings:text-teal-500
             prose-headings:text-teal-700
             dark:prose-strong:text-white
             prose-strong:text-gray-700
             prose-a:text-teal-700
             dark:prose-code:text-orange-600"
                dangerouslySetInnerHTML={{ __html: file }}
            />
        </article>
    );
}
