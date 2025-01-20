import type { CollectionConfig } from 'payload'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'polymorphic',
      type: 'relationship',
      relationTo: ['pages', 'products'],
      hasMany: true,
    },
  ],
  versions: {
    drafts: true,
  },
}
