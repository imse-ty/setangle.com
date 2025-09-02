<!-- Outer wrapper: sets background, centers all content, and applies padding/margins -->
<div
	class="flex min-h-screen flex-col items-center bg-[#111111] px-4 py-12 font-body text-set-white"
>
	<!-- Video/Image Banner Box, think this can go at the end maybe -->
	<section>
		<div
			class="mb-8 flex aspect-video w-full max-w-3xl items-center justify-center rounded-md bg-[#141a23]"
		>
			<!-- Swap the span below for an <img> or <video> if you have a real asset -->
			<span class="text-3xl text-gray-600">VIDEO</span>
		</div>
	</section>

	<section>
		<!-- Outer container: max width, centered -->
		<div
			class="relative mx-auto mb-12 grid w-full max-w-[1280px] grid-cols-1 border border-gray-500 p-12 md:grid-cols-[4fr_5fr]"
		>
			<!-- Divider: perfectly at 4/9, full height -->
			<div
				class="absolute top-0 bottom-0 hidden border-l border-gray-500 md:block"
				style="right:46%;"
			></div>

			<!-- Left column: uses min-w-0 for clean ellipsis and pr-12 on desktop -->
			<div class="min-w-0 md:pr-12">
				<h1 class="mb-8 font-display text-[4rem] leading-none font-extrabold tracking-tight">
					KAISER<br />PERMANENTE
				</h1>
				<p class="text-lg leading-snug text-gray-400">
					Ribbon banner animation for their healthcare client Kaiser Permanente's arena and stadium
					displays in collaboration with LA Clippers.
				</p>
			</div>

			<!-- Right column: details and stats, starts after divider -->
			<div
				class="relative z-10 flex flex-col justify-between space-y-4 pl-0 text-sm text-gray-200 md:pl-36 xl:pl-40"
			>
				<div>
					<div>
						<div class="flex items-center justify-between border-b border-gray-600 py-2">
							<span class="tracking-wide text-gray-400">CLIENT</span>
							<span class="font-medium">KAISER PERMANENTE</span>
						</div>
						<div class="flex items-center justify-between border-b border-gray-600 py-2">
							<span class="tracking-wide text-gray-400">AGENCY</span>
							<span class="font-medium">GAMEDAY CREATIVE</span>
						</div>
						<div class="flex items-center justify-between border-b border-gray-600 py-2">
							<span class="tracking-wide text-gray-400">TIMELINE</span>
							<span class="font-medium">ONE WEEK</span>
						</div>
					</div>
      <div class="flex justify-between gap-12 pt-6 text-lg font-bold">
        <div class="text-left">
          <span class="block text-gray-400 text-xs mb-1">Created for a</span>
          <span class="font-extrabold text-white text-2xl leading-none">2,935,296 pixel</span>
          <span class="block text-gray-400 text-xs mt-1">stadium canvas</span>
        </div>
        <div class="text-left">
          <span class="block text-gray-400 text-xs mb-1">Was seen by</span>
          <span class="font-extrabold text-white text-2xl leading-none">18,000 fans</span>
          <span class="block text-gray-400 text-xs mt-1">at the Intuit Dome</span>
        </div>
      </div>
				</div>
			</div>
		</div>
	</section>

	<!-- PROBLEM section -->
<section class="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-start gap-8 px-4 md:px-0 py-20">
  <!-- Left: Label aligned with paragraph top -->
  <div class="min-w-[140px]">
    <span class="block uppercase text-s text-gray-300 tracking-widest md:mt-[0.4em]">
      PROBLEM
    </span>
  </div>

  <!-- Right: Big paragraph, clean line height, strong left alignment -->
  <div class="flex-1">
    <p class="font-sans text-[2rem] leading-tight text-white md:text-[2.6rem] md:leading-[1.13] font-normal tracking-tight">
      Partnering with Gray Media and Gameday, Set Angle delivered a versatile design system for live broadcasts. This case study highlights how we approached combining technical adaptability with striking visuals, from R&amp;D to client feedback.
    </p>
  </div>
</section>

	<!-- IMAGE PLACEHOLDER (can be multiple) -->
	<section>
		<div>IMAGE PLACEHOLDER</div>
	</section>

	<!-- SOLUTION section -->
	<section>
		<h2>SOLUTION</h2>
		<p>Lorem ipsum dolor sit amet...</p>
	</section>

	<!-- MORE IMAGES -->
	<section>
		<div>IMAGE PLACEHOLDER</div>
		<div>IMAGE PLACEHOLDER</div>
	</section>

	<!-- PROOF section -->
	<section>
		<h2>PROOF</h2>
		<p>Lorem ipsum dolor sit amet...</p>
	</section>

	<!-- EVEN MORE IMAGES -->
	<section>
		<div>IMAGE PLACEHOLDER</div>
		<div>IMAGE PLACEHOLDER</div>
	</section>

	<!-- TALK section (near the end) -->
	<section>
		<h2>LETS TALK</h2>
		<p>
			We help brands shine by creating soulful animated visuals for marketing campaigns and events.
		</p>
		<button>BOOK A CALL</button>
		<button>SEND AN EMAIL</button>
	</section>
</div>