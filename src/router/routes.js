import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Topic from '../pages/Topic/Topic.vue'
import Buycar from '../pages/Buycar/Buycar.vue'
import Personal from '../pages/Personal/Personal.vue'

export default[
    {
        path: '/home',
        component:Home,
    },
    {
        path: '/classify',
        component:Classify,
    },
    {
        path: '/topic',
        component:Topic,
    },
    {
        path: '/buycar',
        component:Buycar,
    },
    {
        path: '/personal',
        component:Personal,
    },
    {
        path: '/',
    redirect: '/home'
    }
]
