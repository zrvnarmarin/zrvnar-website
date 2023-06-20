interface Link {
    id: number
    value: string
    href: string
}
  
export const links: Link[] = [
    { id: 1, value: 'Home', href: '/' },
    { id: 2, value: 'Blog', href: '/blog' },
    { id: 3, value: 'Projects', href: '/projects' },
    { id: 4, value: 'Resources', href: '/resources' },
]
  