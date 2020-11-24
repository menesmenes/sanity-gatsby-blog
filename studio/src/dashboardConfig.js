export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fbd3d3d5c23454551c212ac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yii9d2ne',
                  apiId: '66a673c2-a47c-436f-b708-99fa9a551cb5'
                },
                {
                  buildHookId: '5fbd3d3df7d4444797ec5a05',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-n89rmymc',
                  apiId: '20d75de8-1233-4d7c-b657-b07f54fed7a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/menesmenes/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-n89rmymc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
