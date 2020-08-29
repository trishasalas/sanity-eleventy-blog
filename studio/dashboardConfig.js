export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f4a9ddd46d5ad89ce179074',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-j6cygomc',
                  apiId: '0488ea1f-d7dc-403f-ad60-81612da56d51'
                },
                {
                  buildHookId: '5f4a9ddd5bf930c7e7ad3193',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-211jf4i9',
                  apiId: '9e3bd26f-801f-46bc-9e91-cd99817d1fe0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trishasalas/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-211jf4i9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
