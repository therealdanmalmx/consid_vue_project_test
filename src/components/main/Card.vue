<template>
    <a-card
        :style="cardStyle"
    >
        <a-image
            :style="imgStyle"
            :src="product.images[0]"
            :alt="product.title"
            :preview=false
        />
    <a-card-meta :title="title(product.title)" />
    </a-card>
</template>

<script>
    export default {
        props: ['product'],

        computed: {
            cardStyle() {
            const width = "20rem";
            const height = "15rem";

            return {
                width,
                height,
                objectFit: "cover",
                cursor: "pointer",
            };
            },
            imgStyle() {
            const width = "100%";
            const height = "10rem";

            return {
                width,
                height,
                objectFit: "cover",
            };
            },
            size() {
            const height = '500px';
            const width = "100%";

            return {
                height,
                width
            }
            }
        },
        methods: {
            title(title) {
                let titleName = title;
                if (title && title.startsWith("-")) {
                    titleName = title.split('-')[1].trim();
                }
                if (title && title.includes('.')) {
                    titleName = title.split('.')[0].trim();
                }
                return titleName.toUpperCase();
            }
        }
    }

</script>

<style>
  .ant-card-meta-title {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>