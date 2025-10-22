import { defineCollection, z } from 'astro:content'

const sections = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('hero'),
    eyebrow: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    actions: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    image: z.object({
      src: z.string(), width: z.number(), height: z.number(),
      alt: z.string().optional(), priority: z.boolean().optional()
    }).optional()
  }),
  z.object({
    type: z.literal('features'),
    title: z.string(),
    items: z.array(z.object({ title: z.string(), body: z.string() }))
  }),
])

export const collections = {
  pages: defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      path: z.string(),   // '/', '/pricing', etc.
      sections: z.array(sections)
    })
  })
}
