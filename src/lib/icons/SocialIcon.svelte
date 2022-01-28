<script lang="ts">
	export let icon: string;
	export let url: string;
</script>

<a
	href={url}
	class="transform text-2xl text-gray-600 transition-colors duration-200 hover:text-gray-500"
	target="_blank"
	rel="noreferrer"
>
	<i class={icon} />
</a>
