<script lang="ts">
	import Overview from '$lib/videos/TextGenius_FINAL.mp4';
</script>

<main>
	<!-- HOME -->
	<section
		class="bg-[url('/src/lib/images/blob-scene.png')] w-screen bg-top bg-cover h-[70vh] -sm:h-[calc(100vh-theme(spacing.16))] relative text-center"
		id="home"
	>
		<div
			class="w-full h-full flex flex-col items-center justify-center gap-6 absolute inset-0 z-10 text-skin-inverted"
		>
			<div>
				<h2 class="text-xl font-bold">The Most Accurate AI Content Detector.</h2>
			</div>
			<div>
				<h1 class="text-center text-5xl font-bold mb-2 text-white">
					TEXT-<span class="text-accent">GENIUS</span>
				</h1>
			</div>
			<div class="flex flex-col gap-3">
				<p>
					Empowering educators with AI-powered text detection for student success.
				</p>
				<p>
					Take the next step in your learning journey, reach out to us.
				</p>
			</div>
			<a
				href="/about"
				class="flex items-center p-2 text-skin-inverted bg-accent border-[1px] border-accent transition-all duration-200 rounded-2xl px-3 hover:bg-transparent hover:text-skin-inverted"
				>Contact Us</a
			>
		</div>
		<div class="absolute w-full h-full inset-0 bg-black bg-opacity-60" />
	</section>
	<!-- ABOUT -->
	<section
		id="about"
		class="w-full p-10 px-28 -lg:px-5 flex flex-col gap-10 justify-center items-center text-center text-lg"
	>
		<h1 class="text-center font-bold text-4xl">
			<span class="text-accent">Text Genius</span> is the next generation AI detection tool.
		</h1>
		<p class="text-center">
			Unleash the power of the world's most advanced AI detection tool - Text Genius.
			Introducing to you the most accurate AI (Chat GPT, GPT-2, GPT-3, GPT-4, Bard etc.) detection tool. 
			Powered by advanced algorithms, TextGenius excels at detecting and analyzing text like never before.
			Now no one can cheat on you using AI 😉 .       		
		</p>
<!-- 		<p class="text-center">
			See the full study here: <a href="#about" class="underline text-accent"
				>AI Content Detection Accuracy</a
			>
		</p> -->
		<h1 class="text-center font-bold text-4xl">Built For Academia.</h1>
		<p>
			Text Genius is built by a team of content marketing and GPT-3 AI experts that deeply
			understands your needs and includes features like Team Management (no more sharing your
			login), Full Site Scan (coming soon),Plagiarism Check (Coming soon)  Auto-Billing, Scan History by User and most importantly
			an AI Writing Detection tool.
		</p>
		<div class="grid grid-cols-1 gap-2 justify-evenly items-start my-10 -md:grid-cols-1">
			<div
				class="flex flex-col gap-5 items-center bg-muted h-full p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
			>
				<div
					class="w-10 h-10 rounded-full flex items-center justify-center bg-accent text-skin-inverted"
				>
					<i class="fas fa-server" />
				</div>
				<h1 class="text-xl font-bold">API Integration</h1>
				<h2>
					How to use?, No sweat we provide a fast API service which integrates easily anywhere.
				</h2>
				<p class="text-skin-muted">
					API integration services make it even easier to connect different systems using APIs.
					Our services provide pre-built connectors and tools that enable developers to quickly
					and easily connect different applications and services without having to write any custom integration code.
				</p>
			</div>
		</div>
	</section>
	<!-- PRICING -->
	<section
		class="px-10 grid grid-cols-3 gap-5 justify-evenly items-start my-10 -md:grid-cols-1"
		id="pricing"
	>
		<div
			class="bg-muted h-full rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 text-center"
		>
			<div class="h-2 w-full bg-[#EB733C]" />
			<div class="p-5 flex flex-col items-center justify-center gap-3">
				<i class="far fa-handshake text-skin-muted text-xl" />
				<h1 class="text-xl font-bold">Individual</h1>
				<p class="text-skin-muted">
					Restricted to 100,000 words/month only for a single user.
				</p>
				<h1 class="text-3xl font-bold">$29.99 <span class="text-base">/mo</span></h1>
				<p>Or <span>$299/year</span>(14% discount)</p>
				<button class="p-3 bg-[#EB733C] text-skin-inverted">BUY NOW</button>
				<div>
					<i class="fas fa-users" />
				</div>
<!-- 				<p></p> -->
				<a href="/" class="underline">Request a demo for your team.</a>
			</div>
		</div>
		<div
			class="bg-muted h-full rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 text-center"
		>
			<div class="h-2 w-full bg-[#4A96C5]" />
			<div class="p-5 flex flex-col items-center justify-center gap-3">
				<i class="fas fa-user-tie text-skin-muted text-xl" />
				<h1 class="text-xl font-bold">Team</h1>
				<p class="text-skin-muted">
					Restricted to 1,000,000 words/month upto five users.
				</p>
				<h1 class="text-3xl font-bold">$ 99.99 <span class="text-base">/mo</span></h1>
				<p>Or <span>$999/year</span>(17% discount)</p>
				<button class="p-3 bg-[#4A96C5] text-skin-inverted">BUY NOW</button>
				<div>
					<i class="fas fa-users" />
				</div>
<!-- 				<p>5 users or more?</p> -->
				<a href="/" class="underline">Request a demo for your team.</a>
			</div>
		</div>
		<div
			class="bg-muted h-full rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 text-center"
		>
			<div class="h-2 w-full bg-[#314A56]" />
			<div class="p-5 flex flex-col items-center justify-center gap-3">
				<i class="fas fa-building text-skin-muted text-xl" />
				<h1 class="text-xl font-bold">Enterprise</h1>
<!-- 				<p class="text-skin-muted">
					Custom pricing for enterprises comprising of schoools,universities or other larger organizations.
				</p> -->
				<h2 class="font-medium mb-5">Custom pricing for enterprises comprising of schoools,universities or other larger organizations.</h2>
				<button class="p-3 bg-[#314A56] text-skin-inverted">CONTACT SALES</button>
			</div>
		</div>
	</section>
	<!-- OVERVIEW -->
	<section
		class="w-full p-10 px-28 -lg:px-5 flex flex-col gap-10 text-center items-center justify-center"
		id="overview"
	>
		<h1 class="text-4xl font-bold mb-5 -md:mb-0">See How Text Genius Works.</h1>
		<video controls class="h-auto w-full">
			<source src={Overview} type="video/mp4" />
			<track kind="captions" />
			Your browser does not support the video tag.
		</video>
	</section>
</main>
