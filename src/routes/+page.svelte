<script lang="ts">
	import AIDetectionAccuracy from '$lib/images/AI-Detection-Accuracy-Test-Summary.webp';
	import Overview from '$lib/videos/TextGenius_FINAL.mp4';
</script>

<main>
	<!-- HOME -->
	<section
		class="bg-[url('/src/lib/images/wave.png')] w-screen bg-top bg-cover h-[70vh] -sm:h-[calc(100vh-theme(spacing.16))] relative text-center"
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
				<h1 class="text-center text-5xl font-bold mb-2">
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
		<div class="absolute w-full h-full inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
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
		<div class="flex justify-center">
			<img src={AIDetectionAccuracy} alt="accuracy test" class="w-[60%]" />
		</div>
		<h1 class="text-center font-bold text-4xl">
			Built With Serious Web Publishers In Mind And Not For Academia
		</h1>
		<p>
			Your needs, as a serious web publisher, for a plagiarism checking and AI detection tool are
			unique. Yet, all the existing plagiarism checking tools are built with Academia in mind.
		</p>
		<p>
			Originality.AI is built by a team of content marketing and GPT-3 AI experts that deeply
			understands your needs and includes features like Team Management (no more sharing your
			login), Full Site Scan (coming soon), Auto-Billing, Scan History by User and most importantly
			an AI Writing Detection tool.
		</p>
		<p>It will be a massive improvement to your business if you are a…</p>
		<div class="grid grid-cols-3 gap-2 justify-evenly items-start my-10 -md:grid-cols-1">
			<div
				class="flex flex-col gap-5 items-center bg-muted h-full p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
			>
				<div
					class="w-10 h-10 rounded-full flex items-center justify-center bg-accent text-skin-inverted"
				>
					<i class="fas fa-globe-americas" />
				</div>
				<h1 class="text-xl font-bold">Web Publisher</h1>
				<h2>
					Do you need to make sure your content is original, meaning: plagiarism free and written by
					a human writer and not AI?
				</h2>
				<p class="text-skin-muted">
					You can now have all your content scanned with a record of who scanned it, when it was
					scanned, if AI is suspected and if any plagiarism was found all saved for reference later.
					You will no longer need to rely on their promise that it is plagiarism free, original
					content or waste time scanning it yourself. With the team management function and activity
					history it puts you or your editor in firm control of your plagiarism checking.
				</p>
			</div>
			<div
				class="flex flex-col gap-5 items-center bg-muted h-full p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
			>
				<div
					class="w-10 h-10 rounded-full flex items-center justify-center bg-accent text-skin-inverted"
				>
					<i class="fas fa-user-friends" />
				</div>
				<h1 class="text-xl font-bold">Content Agency</h1>
				<h2>
					Do you need to manage a large team and verify at scale that original content is being
					produced?
				</h2>
				<p class="text-skin-muted">
					Large teams scanning thousands of articles per month produce unique challenges. With
					Originality.AI’s “Team Management” module it allows you to add/remove and monitor team
					members activity easily. Plus, with the auto-billing feature for credits you will never
					have your team at a stand-still waiting for credits again. You can now provide increased
					confidence to your clients that content is produced by humans and is plagiarism free. Win
					business from your competitors not using Originality.AI
				</p>
			</div>
			<div
				class="flex flex-col gap-5 items-center bg-muted h-full p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
			>
				<div
					class="w-10 h-10 rounded-full flex items-center justify-center bg-accent text-skin-inverted"
				>
					<i class="fas fa-cubes" />
				</div>
				<h1 class="text-xl font-bold">Website Buyer</h1>
				<h1>
					Do you need to check an ENTIRE site to make sure content is Original (plagiarism free and
					not created by AI?)
				</h1>
				<p class="text-skin-muted">
					Full Site scan (coming soon)! No more spot checking only the top pages of a site before
					you purchase it. With the Originality.AI website scanner it crawls the entire site and
					then completes a full Plagiarism Check and AI Detection Check on all the content. Get a
					complete picture on a sites plagiarism and AI content risk quickly. Whether a site has 10,
					100 or 1000+ articles Originality.AI will check them all!
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
		<div class="flex gap-10 items-center -lg:flex-col">
			<div class="bg-muted w-[50%] -lg:w-full h-full p-10 text-left flex flex-col gap-5">
				<h1 class="text-xl font-bold">
					AI Content Detection Accuracy – GPTZero vs Writer vs Open AI vs CopyLeaks vs Text Genius –
					Detecting Chat GPT AI Content Accuracy
				</h1>
				<p>
					In this detailed post, our team looks at the accuracy of our AI detection and its ability
					to accurately detect Chat GPT, GPT-4, paraphrased and other popular NLP models.
					Additionally, we compare the accuracy of Originality.AI to other AI detection tools
					including Open AI’s classifier, GPTZero, Writer.AI and CopyLeaks. We try and provide a lot
					[…]
				</p>
				<p>
					<span class="text-skin-muted">By </span>Ruthwik
					<span class="text-skin-muted">Categories: </span>Case Study
				</p>
				<a href="/" class="bg-accent text-skin-inverted p-2 w-max font-medium">Continue Reading</a>
			</div>
			<div class="w-[50%] -lg:w-full">
				<img src={AIDetectionAccuracy} alt="accuracy-test" />
			</div>
		</div>
	</section>
</main>
