const Home = () => import(/* webpackChunkName: "Home" */ 'cps/Home')
const Page404 = () => import(/* webpackChunkName: "Page404" */ 'cps/Page404')
const Component = () => import(/* webpackChunkName: "Component" */ 'cps/Component');
const Echart = () => import(/* webpackChunkName: "Echart" */ 'cps/Echart');
const Editor = () => import(/* webpackChunkName: "Editor" */ 'cps/Editor');
const Ztree = () => import(/* webpackChunkName: "Ztree" */ 'cps/Ztree');


const routes = [
  {
    path:'/',
    redirect:'Home'
  },
  {
    path:'/home',
    name:'Home',
    component:Home,
  },
  {
    path:'/component',
    name:'Component',
    component:Component,
    redirect:'/component/echart',
    children:[
      {
        path:'echart',
        name:'Echart',
        component:Echart,
      },
      {
        path:'editor',
        name:'Editor',
        component:Editor,
      },
      {
        path:'ztree',
        name:'Ztree',
        component:Ztree,
      }
    ]
  },
  {
    path:'/404',
    name:'Page404',
    component:Page404
  },
  {
    path:'*',
    redirect:'/404'
  }
]
export default routes;