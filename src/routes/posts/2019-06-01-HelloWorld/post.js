export default {
    title: `Hello World`,
    tags: ['general'],
    spoiler: "My first blog post",
    getContent: () => import('./HelloWorld.mdx'),
}