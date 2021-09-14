import 'normalize.css';
import 'sakura.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import App from './App.vue';
import About from '@/components/About.vue';
import QuoteWall from '@/components/quotes/QuoteWall.vue';
import type { QuoteModel } from './components/quotes/QuoteWall.vue';

const QUOTES: QuoteModel[] = [
    {
        "id": "1",
        "quote": "You give me steps to climb, I redesign. I made some bleachers.",
        "artist": {
            "name": "Oddisee",
            "url": "https://open.spotify.com/artist/72tRiBHei5G9M8it4h4sfC"
        },
        "source": {
            "name": "No Trouble",
            "url": "https://open.spotify.com/album/5kCNU9ouaRoRtQNJrtfavl",
            "image": "https://i.scdn.co/image/ab67616d0000b27357641c5581a8d6527741748a"
        }
    },
    {
        "id": "2",
        "quote": "From the get-go, this pop can cause a panic at the disco.",
        "artist": {
            "name": "Method Man",
            "url": "https://open.spotify.com/artist/40bYADRV0yxAAW8C5EJUVm"
        },
        "source": {
            "name": "Hard Living",
            "url": "https://open.spotify.com/album/7q3ff38RxgNN0HbG5WNDWF",
            "image": "https://i.scdn.co/image/ab67616d0000b2739b7da1018417380cf15e54b9"
        }
    },
    {
        "id": "3",
        "quote": "The boy's slick like three kids stacked in an overcoat at a twenty-one and over show.",
        "artist": {
            "name": "Aesop Rock",
            "url": "https://open.spotify.com/artist/2fSaE6BXtQy0x7R7v9IOmZ"
        },
        "source": {
            "name": "Lice Team, Baby",
            "url": "https://open.spotify.com/album/3KJsSVL5vtJlb11tLHjdQN",
            "image": "https://i.scdn.co/image/ab67616d0000b273b7ddccc528879dbacb7662bb"
        }
    },
    {
        "id": "4",
        "quote": "Y'all wearing dresses and purses, dressing in Birkins, fam. I put a cap in that gown - pop and circumstance.",
        "artist": {
            "name": "Joell Ortiz",
            "url": "https://open.spotify.com/artist/1q13yHC6Syg5Y8iPLrRnCq"
        },
        "source": {
            "name": "Black Rock",
            "url": "https://open.spotify.com/album/5kCNU9ouaRoRtQNJrtfavl",
            "image": "https://i.scdn.co/image/ab67616d0000b27357641c5581a8d6527741748a"
        }
    }
];

const routes: RouteRecordRaw[] = [
    { path: '/', component: QuoteWall, props: { quotes: QUOTES } },
    { path: '/about', component: About }
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes: routes
});

createApp(App)
    .use(router)
    .mount(document.body);
