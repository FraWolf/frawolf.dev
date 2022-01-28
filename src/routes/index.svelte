<script context="module" lang="ts">
	export async function load() {
		return { props: { files: dataFiles } };
	}
</script>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { generateTags } from '$lib/hooks/hook';
	import ProjectTab from '$lib/projects/ProjectTab.svelte';
	import dataFiles from '../../static/data.json';

	export let files;
</script>

<svelte:head>
	<title>Home | Francesco Lombardo</title>
</svelte:head>

<Header socials={files.socials} />

<div class="mb-10 flex items-center justify-center justify-items-center">
	<div>
		<h3 class="mb-4 text-center text-3xl font-bold uppercase tracking-wider text-white">
			My Projects
		</h3>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			{#each files.projects as project}
				<ProjectTab
					title={project.name}
					description={project.short_description}
					tags={generateTags(project.tags)}
				/>
			{/each}
		</div>
	</div>
</div>
