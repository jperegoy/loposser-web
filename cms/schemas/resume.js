export default {
  name: "resume",
  title: "Resumé",
  type: "document",
  fields: [
    {
      name: "education",
      title: "Education",
      type: "array",
      of: [
        {
          name: "thing",
          title: "thing",
          type: "document",
          fields: [
            {
              name: "degree",
              title: "Degree",
              type: "string",
            },
            {
              name: "discipline",
              title: "Discipline",
              type: "string",
            },
            {
              name: "school",
              title: "school",
              type: "string",
            },
            {
              name: "years",
              title: "Years",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "proficiencies",
      title: "Proficiencies",
      type: "array",
      of: [
        {
          name: "proficiency",
          title: "proficiency",
          type: "string",
        },
      ],
    },
    {
      name: "interests",
      title: "Interests",
      type: "array",
      of: [
        {
          title: "interest",
          type: "string",
        },
      ],
    },
    {
      name: "experience",
      title: "Experience",
      type: "array",
      of: [
        {
          name: "item",
          title: "Item",
          type: "document",
          fields: [
            {
              name: "position",
              title: "Position",
              type: "string",
            },
            {
              name: "company",
              title: "Company",
              type: "string",
            },
            {
              name: "tenure",
              title: "Tenure",
              type: "string",
            },
            {
              name: "abstract",
              title: "Abstract",
              type: "text",
              rows: 4,
            },
            {
              name: "highlights",
              title: "Highlights",
              type: "array",
              of: [
                {
                  name: "highlight",
                  title: "Highlight",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
