import showBlogs from './components/showBlogs.vue';
import add from './components/addBlog.vue';
import singleBlog from './components/singleBlog.vue';


export default [
  {path: '/', component: showBlogs },
  {path: '/add', component: add },
  {path: '/blog/:id', component: singleBlog}
]