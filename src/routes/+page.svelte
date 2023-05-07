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
				<h2 class="text-xl font-bold">
					The Most Accurate AI Content Detector and Plagiarism Checker.
				</h2>
			</div>
			<div>
				<h1 class="text-center text-5xl font-bold mb-2 text-white">
					TEXT-<span class="text-accent">GENIUS</span>
				</h1>
			</div>
			<div class="flex flex-col gap-3">
				<p>
					The Outperformer of other existing AI-text detectors on the web, including OpenAI's AI
					Text Classifier.
				</p>
				<p>
					If you are curious about TextGenius or know someone who might be, please reach out to us
					to set up a demo or meeting.
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
			Text Genius is by far the most accurate AI (Chat GPT, GPT-2, GPT-3, GPT-4, Bard and ONLY
			Paraphrase Detection (quillbot)) Content Detection tool on the market. Across a testing data
			set of 1200 data samples it achieved an accuracy of 96% while its closest competitor achieved
			only 35%. One of the reasons it outperforms its competition is that the AI at Originality.AI
			uses A LOT of compute power and does NOT have a free option. While many of the competitors are
			a free tool.
		</p>
		<p class="text-center">
			See the full study here: <a href="#about" class="underline text-accent"
				>AI Content Detection Accuracy</a
			>
		</p>
		<h1 class="text-center font-bold text-4xl">Built For Academia.</h1>
		<p>
			Your needs for a plagiarism checking and AI detection tool are unique. Yet, all the existing
			plagiarism checking tools are built with Academia in mind.
		</p>
		<p>
			Text Genius is built by a team of content marketing and GPT-3 AI experts that deeply
			understands your needs and includes features like Team Management (no more sharing your
			login), Full Site Scan (coming soon), Auto-Billing, Scan History by User and most importantly
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
					These services provide pre-built connectors and tools that enable developers to quickly
					and easily connect different applications and services without having to write custom
					integration code from scratch.
				</p>
			</div>
		</div>
	</section>
	<!-- PRICING -->
	<section
		class="w-full bg-inverted text-skin-inverted text-center flex flex-col items-center justify-center gap-5 p-10 px-20 -md:p-5 text-lg"
		id="pricing"
	>
		<h1 class="text-3xl font-bold">
			Text Genius Is Less Expensive Than Your Current Outdated Plagiarism Checking Tool But Does Way
			More
		</h1>
		<p>
			With Text Genius you can add unlimited team members, unlimited websites and complete unlimited
			scans checking for both Plagiarism and if AI Writing Tools are suspected to have been used.
		</p>
		<p>
			Plus, never worry about adding credits again with automatic billing at the industry-low price
			of $0.01 per 100 words per scan. You can scan for either Plagiarism only, AI only or run both
			scans at the same time.
		</p>
		<a href="#contact-us" class="bg-accent p-2 text-skin-base">Contact Us</a>
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
