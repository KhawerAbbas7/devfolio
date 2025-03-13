module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://khawi.vercel.app/`,
    // Your Name
    name: 'Khawer Abbas',
    // Main Site Title
    title: `Khawer Abbas | Backend Dev`,
    // Description that goes under your name in main bio
    description: `"Self-taught" coder from Pakistan, expert in pointless projects, now wants "serious" work. Prepare for chaos.`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/KhawerAbbas7`,
    email: `akhawer875@gmail.com`
    // Optional: LinkedIn account URL
    //linkedin: `https://github.com/RyanFitzgerald/devfolio`,
    // Content of the About Me section
    about: `Khawer Abbas, DGK-bred, Rawalpindi-based. I'm a boredom-battling enthusiast who stumbled into coding through sheer curiosity. Java was my first playground, leading to some unexpected articles. Now? I'm hooked on building Discord bots – turning 'what if?' into 'check this out!' If you're looking for someone who tackles problems with a dash of 'why not?' and a whole lot of code, let's connect.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Crichub',
        description:
          'A discord bot which allows players to play 11v11 cricket games.',
        link: 'https://top.gg/bot/1181911831258877962',
      },
      {
        name: 'Aucbot',
        description:
          'Unfortunately an abandoned project but was a useful one as long as it lasted, It allowed users to conduct auctions like back in the day they did for bla...',
        link: 'https://top.gg/bot/1030022687969513482',
      },
      {
        name: 'Net Run Rate Scenarios Calculator',
        description:
          `A blessing for Royal Challengers Bangalore and Pakistan Cricket Team\'s fans, they can now calculate in how many they have to chase a particular target in order to reach Airport ✈️`,
        link: 'https://netrunrate.github.io',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Sports Side',
        description: 'Cheif Operating Officer, February 2022 - March 2024',
        link: 'https://thesportsside.com/',
      },
      {
        name: 'Green Team',
        description: 'Events Head, March 2022- February 2023',
        link: 'https://greenteam1992.com',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'Sqlite, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Content Creation, Copy writing, Article writing',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
