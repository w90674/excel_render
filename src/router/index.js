import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tableDialog from '@/components/tableDialog'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/tabledialog',
            name: 'table',
            component: tableDialog
        },
        {
            path: '/test/:id',
            name: 'count',
            component: resolve => require(['../components/count'], resolve)
        },
        //虚拟滚动条组件
        {
            path: '/scroll',
            component: resolve => require(['../components/virtualScroll'], resolve)
        },
        {
            path: '/excel',
            component: resolve => require(['../components/excel'], resolve)
        },
        {
            path: '/exceldemo',
            component: resolve => require(['../components/exceldemo'], resolve)
        }
    ]
})