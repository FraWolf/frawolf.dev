<script lang="ts">
	export let name: string;
	export let icon: string;
	export let url: string;

	let test = icon.replace('file:', '/static/');
</script>

<a
	href={url}
	class="transform text-2xl text-gray-600 transition-colors duration-200 hover:text-gray-500"
	target="_blank"
	rel="noreferrer"
>
	{#if icon.startsWith('file:')}
		<img src={test} class="h-6" alt={name} />
	{:else}
		<i class={icon} alt={name} />
	{/if}
</a>
