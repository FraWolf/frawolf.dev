<script lang="ts">
	import SocialIcon from '$lib/icons/SocialIcon.svelte';

	export let socials: { name: string; icon: string; url: string }[];
</script>

<div class="my-28 md:flex md:items-center md:justify-center">
	<img
		src="https://cdn.shibe.online/shibes/83f29eec04f71fdf398a669d67bd0964837ac5da.jpg"
		alt="Me"
		class="mx-auto mb-1 h-32 w-32 rounded-full object-cover md:mx-4 md:mb-0"
	/>
	<div>
		<h1 class="text-center text-4xl font-bold text-white md:text-left">
			<span class="underline decoration-green-400 decoration-wavy decoration-2">Francesco</span>
			Lombardo
		</h1>
		<h3 class="mt-2 text-center text-2xl italic text-white md:text-left">
			Junior Full Stack Developer @
			<a
				href="https://aryel.io"
				class="underline decoration-[#ff00cf] decoration-wavy decoration-1 transition-colors duration-150 hover:text-[#ff00cf] hover:decoration-white"
				target="_blank"
				rel="noreferrer"
			>
				Aryel
			</a>
		</h3>
		<div class="mt-1 flex items-center space-x-3 text-center md:text-left">
			{#each socials as social}
				<SocialIcon name={social.name} icon={social.icon} url={social.url} />
			{/each}
		</div>
	</div>
</div>
