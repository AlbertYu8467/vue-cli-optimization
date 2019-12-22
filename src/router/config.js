const Home = () => import(/* webpackChunkName: "Home" */ 'cps/Home')
const Page404 = () => import(/* webpackChunkName: "Page404" */ 'cps/Page404')
const Project = () => import(/* webpackChunkName: "Project" */ 'cps/Project')


const routes = [
  {
    path:'/',
    redirect:'Home'
  },
  {
    path:'/home',
    name:'Home',
    component:Home
  },
  {
    path:'/project',
    name:'Project',
    component:Project
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