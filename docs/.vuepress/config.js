module.exports = {
	base: '/document3/',
    title: 'Tiny3.0',
    description:"让移动开发更简单易用 高效 原生技术 极致体验",
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档中心', link: '/guide/'},
            { text: '杭州长亮', link: 'http://www.mtiny.cn/tiny/index.html' },
        ],
        sidebarDepth: 0,
        smoothScroll: true,
        sidebar: [
            {
                title: 'Tags',
                collapsable: true,
                children: [
                    '/Tags/tml',
                    '/Tags/div',
                    '/Tags/body',
                    '/Tags/head',
                    '/Tags/script',
                    '/Tags/style',
                    '/Tags/input',
                    '/Tags/label',
                    '/Tags/list',
                    '/Tags/scroller',
                    '/Tags/paging',
                    '/Tags/image',
                    '/Tags/select',
                    '/Tags/webview',
                    '/Tags/tabBar'
                ]
            },
            {
                title: 'TinyJS',
                children: [
                    '/Tags/system',
                    '/Tags/window',
                    '/Tags/navigator',
                    '/Tags/encrypt',
                    '/Tags/document',
                    '/Tags/element',
                    '/Tags/request',
                    '/Tags/Multipicker',
                    '/Tags/actionsheet'
                ]
            },
            {
                title: '其他',
                children: [
                    '/Tags/advert',
                    '/Tags/mvvm',
                    '/Tags/page',
                    '/Tags/Flex',
                    '/Tags/node',
                    '/Tags/tinyBuilder',
                    '/Tags/TinyList'
                ]
            }
        ]
    }
}
