import type { CollectionConfig } from 'payload'

export const productsSlug = 'products'

export const ProductsCollection: CollectionConfig = {
  slug: productsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
  versions: {
    drafts: true,
  },
}
