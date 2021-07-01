export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60de10d71f7a9a085932697c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-edbrobbt',
                  apiId: '52bda0df-7300-4550-974b-f3b544d3a674'
                },
                {
                  buildHookId: '60de10d7d51fe51079b51ba5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9t827vsj',
                  apiId: '4cf71e45-551e-44f8-8ee6-95febeb16618'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fblthp/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9t827vsj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
