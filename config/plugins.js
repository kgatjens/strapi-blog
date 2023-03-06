module.exports = ({ env }) => ({
    // ...
  
    "fuzzy-search": {
      enabled: true,
      config: {
        contentTypes: [
          {
            uid: "api::article.article",
            modelName: "article",
            transliterate: true,
            
            fuzzysortOptions: {
              characterLimit: 300,
              limit: 10,
              keys: [
                {
                  name: "title",
                  weight: 100,
                },
                {
                  name: "content",
                  weight: 100,
                },
              ],
            },
          },
          {
            uid: "api::capability.capability",
            modelName: "capability",
            fuzzysortOptions: {
              characterLimit: 10,
              keys: [
                {
                  name: "HeaderMainTitle",
                  weight: 200,
                },
                {
                  name: "HeaderSecondaryText",
                  weight: -200,
                },
              ],
            },
          },
        ],
      },
    },
  
    // ...
  });