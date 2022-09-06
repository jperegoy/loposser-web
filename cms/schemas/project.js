export default {
  name: "projects",
  title: "Projects",
  // icon: ...,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          validation: Rule => Rule.required(),
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 5,
      validation: Rule =>
        Rule.max(164).error(
          "SEO desxcriptions perform best when < 160 characters"
        ),
    },
    {
      name: "heading",
      title: "Heading",
      type: "text",
      validation: Rule => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: Rule => Rule.required(),
    },
    {
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "screenshot" },
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "categories" } }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "poster",
    },
  },
};
