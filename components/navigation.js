const navigation = {
    data () {
        return {
            currentTab: { id: 0, title: "Все котики", to: "/all" },
            tabs: [
                { id: 0, title: "Все котики", to: "/all" }, 
                { id: 1, title: "Любимые котики", to:"/liked" }
            ]
        }
    },

    template: `
        <nav class="router-link">
            <router-link 
                v-for="tab in tabs"
                v-bind:key="tab.id"
                v-bind:class="['router-link__text', { active: currentTab === tab }]"
                v-on:click="currentTab = tab"
                :to=tab.to
            >
                {{ tab.title }}
            </router-link>
        </nav>
    `
}