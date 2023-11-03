import { createWebHashHistory, createRouter } from "vue-router";
import contactBook from '@/views/ContactBook.vue'

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: contactBook,
    },
    {
        path: "/contacts",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true
    },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
}) 

export default router;