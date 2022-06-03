const liked = {
    mounted() {
        if (localStorage.getItem('liked')) {
            try {
              this.$parent.liked = JSON.parse(localStorage.getItem('liked'));
            } catch(e) {
              console.log(e);
            }
        }
    },
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