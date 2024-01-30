<script lang="ts">
    export let data;
    type Anime = {
        title: String;
        episode: String;
        year: String;
        genres: String;
        plot: String;
        embed_url: String;
        thumbnail: String;
    }

    const {animes}:any = data;
</script>

<div>
    {JSON.stringify(animes)}
</div>