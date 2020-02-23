import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Topic from '../pages/Topic/Topic.vue'
import Buycar from '../pages/Buycar/Buycar.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import MailLogin from '../pages/Personal/MailLogin/MailLogin.vue'

export default[
    {
        path: '/home',
        component:Home,
        meta: {
            isShowFooter: true
          }
    },
    {
        path: '/classify',
        component:Classify,
        meta: {
            isShowFooter: true
          }
    },
    {
        path: '/topic',
        component:Topic,
        meta: {
            isShowFooter: true
          }
    },
    {
        path: '/buycar',
        component:Buycar,
        meta: {
            isShowFooter: true
          }
    },
    {
        path: '/personal',
        component:Personal,
        meta: {
            isShowFooter: false
          }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            isShowFooter: false
          }
    },
    {
        path: '/login',
        component: MailLogin,
        meta: {
          isShowFooter: false
        }
      },
    {
        path: '/',
        redirect: '/home'
    }
]
