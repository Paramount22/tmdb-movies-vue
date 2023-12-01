import { createRouter, createWebHistory } from 'vue-router';

/* import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Post from '../views/Post.vue'; */
import Movies from '../views/Movies.vue';
import People from '../views/People.vue';
import MovieSingle from '../components/Movies/MovieSingle.vue';
import PersonSingle from '../components/People/PersonSingle.vue';

const routes = [
  { path: '/', redirect: '/movies' },
  /* { path: '/post/:id', name: 'Post', component: Post },
  { path: '/about', name: 'About', component: About }, */
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,
  },
  {
    path: '/people',
    name: 'People',
    component: People,
  },
  { path: '/movie/:id', name: 'MovieSingle', component: MovieSingle },
  { path: '/person/:id', name: 'PersonSingle', component: PersonSingle },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
