const liked = {
    template: `
            <div>
                <section class="cats">
                    <cat 
                        v-for="cat of this.$root.liked"
                        :key="cat.id"
                        :cat="cat"
                    >
                    </cat>
                </section>
            </div>
    `
}