<script lang="ts">
	import '../app.postcss';
	import Logo from '$lib/images/logo.png';
	import ChevronRight from '$lib/svg/ChevronRight.svelte';
	import { onMount } from 'svelte';
	let toggleNav = false;
	let hyperlinks = [
		{
			name: 'Home',
			href: '#home',
			active: true,
			class: 'home-btn'
		},
		{
			name: 'About',
			href: '#about',
			active: false,
			class: 'about-btn'
		},
		{
			name: 'Pricing',
			href: '#pricing',
			active: false,
			class: 'pricing-btn'
		},
		{
			name: 'Overview',
			href: '#overview',
			active: false,
			class: 'overview-btn'
		}
	];
</script>

<header
	class="sticky top-0 h-20 px-10 shadow flex justify-between items-center -sm:h-16 z-30 bg-white"
>
	<button
		class="absolute md:hidden left-2"
		on:click={() => {
			toggleNav = true;
		}}
	>
		<i class="fas fa-bars text-skin-base fa-lg" />
	</button>
	<div class="flex items-center gap-2">
		<img class="w-12 -sm:w-10" src={Logo} alt="src" />
		<div class="flex flex-col">
			<h1 class="font-secondary text-2xl -sm:text-base font-medium">Text Genius</h1>
			<span class="text-xs">Plagiarism Checker and AI Detector</span>
		</div>
	</div>
	<nav
		class="-md:bg-dominant -md:fixed -md:top-0 -md:left-0 -md:h-screen -md:w-[50%] -md:p-5 -md:-translate-x-full {toggleNav &&
			'-md:translate-x-0'} transition-all duration-200 ease-in-out"
	>
		<ul class="flex justify-center gap-10 -md:gap-5 -md:flex-col">
			<li class="md:hidden self-end">
				<button
					on:click={() => {
						toggleNav = false;
					}}
				>
					<i class="fas fa-times" />
				</button>
			</li>
			{#each hyperlinks as hyperlink}
				<li>
					<a href={hyperlink.href}>{hyperlink.name}</a>
				</li>
			{/each}
			<a
				class="p-1 -lg:py-2 -lg:text-center px-2 text-xs bg-accent text-skin-inverted font-medium hover:scale-[1.05] transition-all duration-200 rounded-xl"
				href="#contact-us">Contact Us</a
			>
		</ul>
	</nav>
</header>
<slot><!-- optional fallback --></slot>
<form
	class="w-screen h-[70vh] bg-[url('/src/lib/images/wave-inverted.png')] bg-cover relative text-skin-inverted p-2"
	id="contact-us"
	action="https://formsubmit.co/nsvegur01@gmail.com"
	method="POST"
>
	<div class="absolute w-full h-full inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
	<div class="absolute w-full inset-0 flex -sm:flex-col items-center">
		<div
			class="min-h-[theme(spacing.32)] w-1/2 flex flex-col items-center justify-center -sm:w-full"
		>
			<h1 class="font-heading font-bold text-3xl">Write us your need.</h1>
			<h2 class="font-secondary">Our expertise works to set up a demo or meeting</h2>
		</div>
		<div class="flex flex-col gap-4 w-1/2 p-10 -sm:w-full -sm:p-2">
			<input type="hidden" name="_subject" value="New submission!" />
			<div>
				<label for="name">Name: </label>
				<div class="flex gap-2 mt-2">
					<input
						class="w-full h-9 text-skin-base outline-none p-1 rounded-lg"
						type="text"
						id="first"
						name="first"
						placeholder="First Name"
						required
					/>
					<input
						class="w-full h-9 text-skin-base outline-none p-1 rounded-lg"
						type="text"
						id="last"
						name="last"
						placeholder="Last Name"
						required
					/>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<div class="flex flex-col w-full gap-2">
					<label for="email">Email: </label>
					<input
						class="w-full h-9 p-1 outline-none text-skin-base rounded-lg"
						type="email"
						id="email"
						name="email"
						required
					/>
				</div>
				<div class="flex flex-col w-full gap-2">
					<label for="phone">Phone: </label>
					<input
						class="w-full h-9 p-1 outline-none text-skin-base rounded-lg"
						type="tel"
						id="phone"
						name="phone"
						required
					/>
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<label for="company">Company / Organization / Event: </label>
				<input
					class="w-full h-9 p-1 outline-none text-skin-base rounded-lg"
					type="text"
					id="company"
					name="company"
					required
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label for="message">Message: </label>
				<textarea
					class="outline-none text-skin-base p-1 rounded-lg"
					name="message"
					id="message"
					cols="30"
					rows="2"
					required
				/>
			</div>
			<button
				class="flex items-center self-start bg-dominant border-[1px] border-dominant text-accent p-2 font-secondary hover:text-dominant hover:bg-transparent transition-all duration-200 rounded-2xl"
				type="submit">Send Message<ChevronRight /></button
			>
		</div>
	</div>
</form>
<footer class="w-full bg-muted text-skin-muted">
	<div
		class="grid grid-cols-3 p-4 justify-items-center -md:grid-cols-2 -sm:grid-cols-1 -md:gap-10 -sm:justify-items-start"
	>
		<div class="flex flex-col gap-5">
			<div class="flex gap-1 items-center">
				<img class="w-12" src={Logo} alt="logo" />
				<span class="font-secondary text-skin-base font-bold">Text Genius</span>
			</div>
			<p class="w-60">
				TextGenius provides you with an accurate classification of whether the text is fully,
				partially, or not at all written by AI.
			</p>
		</div>
		<div>
			<h1 class="font-secondary font-bold text-xl text-skin-base">Quick Links</h1>
			<ul class="mt-5 flex flex-col gap-1">
				{#each hyperlinks as hyperlink}
					<li class="hover:text-accent hover:scale-105 transition-all duration-200">
						<a href={hyperlink.href}>{hyperlink.name}</a>
					</li>
				{/each}
				<li class="hover:text-accent hover:scale-105 transition-all duration-200">
					<a href="#contact-us">Contact Us</a>
				</li>
			</ul>
		</div>
		<div class="-md:col-span-2 -sm:col-span-1">
			<h1 class="font-secondary font-bold text-xl text-skin-base">Contact Us</h1>
			<p class="w-60 mt-5">Montreal, Quebec, Canada.</p>
		</div>
	</div>
	<div
		class="w-full flex flex-col justify-center items-center py-5 gap-3 border-t-[1px] border-light-muted"
	>
		<h4 class="-sm:text-sm">© 2023 Text Genius | Powered by Text Genius</h4>
		<ul class="flex gap-5 -sm:text-sm" />
	</div>
</footer>
