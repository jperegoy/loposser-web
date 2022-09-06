export default {
  name: "screenshot",
  title: "Screenshot",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "screenshot",
      title: "Screenshot",
      type: "image",
    },
    {
      name: "alt",
      type: "string",
      title: "Alt text",
      validation: Rule => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
