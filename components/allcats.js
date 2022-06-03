const cat = Vue.component('cat', {
    data() {
        return {
            src: "https://dummyimage.com/225/E5E5E5/E5E5E5.jpg&text=+",
            isVisibleMenu:false
        }
    },
    props: ['cat'],
    methods: {
        showMenu() {
            this.isVisibleMenu = !this.isVisibleMenu;
        }
    },
    template: `
        <div 
            class="image-block" 
            @mouseover="showMenu()" 
            @mouseout="showMenu()"
        >
            <figure>
                <img class="image-block__img" :src="cat.url" alt="cat">
                <div
                    v-show="isVisibleMenu" 
                    class="image-block__menu"
                >
                    <button 
                        v-if="cat.like === false" 
                        class="image-block__btn" 
                        @click="$parent.addCat(cat)"
                    >
                        <svg width="48" height="48" viewBox="-2 -2 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z" />
                        </svg>    
                    </button>
                    
                    <button 
                        v-else="cat.like === true" 
                        class="image-block__btn image-block__btn-filled" 
                        @click="$root.removeCat(cat)"
                    >
                        <svg width="48" height="48" viewBox="-2 -2 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z" />
                        </svg>    
                    </button>
                </div>
            </figure>
        </div>
    `
});

const allcats =  Vue.component('allcats', {
    data () {
        return {
            cats: []
        }
    },
    mounted () {
        for (let i = 0; i < 15; i++) {
            window.onload = this.showCats(1);
        };
        window.addEventListener('scroll', this.checkPosition);
        window.addEventListener('resize', this.checkPosition);
    },
    destroyed () {
        window.removeEventListener('scroll', this.checkPosition);
        window.removeEventListener('resize', this.checkPosition);
    },
    components: { cat },
    methods: {
        showCats (max) {
            for (let i = 0; i < max; i++) {
                this.$parent.getJson(`https://api.thecatapi.com/v1/images/search`)
                    .then(cat => {
                        if (!this.$root.liked.find(el => el.id === cat.id)) {
                            Vue.set(cat[0], 'like', false);
                            if (!this.cats.find(el => el.id === cat.id)) {
                                this.$data.cats.push(cat[0]);
                            };
                        };
                    });
                break;
            };
        },
        addCat(cat) {
            let find = this.$root.liked.find(el => el.id === cat.id);
            if (!find) {
                cat.like = true;
                this.$root.liked.push(cat);
                this.$parent.saveCats();
            }
        },
        checkPosition () {
            const height = document.body.offsetHeight;
            const screenHeight = window.innerHeight;
            const scrolled = window.scrollY;
            const threshold = height - screenHeight / 4;
            const position = scrolled + screenHeight;
            
            if (position >= threshold) {
                this.showCats(1);
            }
        },
    },
    template: `
            <div>
                <section class="cats">
                    <cat 
                        v-for="cat of cats"
                        :key="cat.id"
                        :cat="cat"
                    >
                    </cat>
                </section>
                <p class="cats__loading">... загружаем еще котиков ...</p>
            </div>
    `
});

