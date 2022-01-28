<script lang="ts">
	import Button from '$lib/buttons/Button.svelte';
	import Tag from '$lib/tab/Tag.svelte';
	export let title: string;
	export let description: string;
	export let tags: any[];
</script>

<div
	class="mx-2 my-2 rounded-lg bg-white px-8 py-4 shadow-md dark:bg-gray-800 md:mx-0 md:my-0 md:max-w-md"
>
	<div class="flex items-center space-x-2">
		{#each tags as tag}
			<Tag name={tag.name} color={tag.color} />
		{/each}
	</div>

	<div class="mt-2">
		<scan
			class="text-xl font-bold text-gray-700 hover:text-gray-600 dark:text-white dark:hover:text-gray-200"
		>
			{title}
		</scan>

		<p class="mt-2 text-gray-600 dark:text-gray-300">
			{description}
		</p>
	</div>

	<div class="mt-4 flex items-center justify-end">
		<Button>Informations</Button>
	</div>
</div>
