import {createRouter, createWebHistory} from 'vue-router'
import ToxicForm from './../components/ToxicForm'
import CommunityForm from './../components/CommunityForm'
import NoteForm from './../components/NoteForm'
import MyProfile from './../components/MyProfile'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ToxicForm,
    },
    {
        path: '/notes',
        name: 'Notes',
        component: NoteForm,
    },
    {
        path: '/community',
        name: 'Community',
        component: CommunityForm,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: MyProfile,
    },
]

const router = createRouter({history: createWebHistory(), routes})

export default router