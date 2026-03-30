// ─── INSTAGRAM FEED SECTION ────────────────────────────────────────────────
// 4 embedded Instagram posts in a 2×2 grid.
// To swap a post: replace the URL in data-instgrm-permalink and the href.

import Script from 'next/script'

export default function InstagramFeed() {
  return (
    <section className="bg-cream py-24 px-8 md:px-16">

      {/* Instagram's embed script — required for posts to render */}
      <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />

      <div className="max-w-7xl mx-auto">

        {/* Section overline */}
        <p className="label text-mid mb-5">On Instagram</p>

        {/* EDIT THIS TEXT: Section heading */}
        <h2 className="font-cormorant font-light text-ink leading-tight mb-3"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Follow the journey
        </h2>

        {/* EDIT THIS TEXT: Instagram handle link */}
        <p className="font-dm text-mid text-sm font-light mb-12">
          <a
            href="https://www.instagram.com/perryhowardpt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:underline"
          >
            @perryhowardpt
          </a>
          {' '}on Instagram
        </p>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">

          {/* EDIT THIS: Change data-instgrm-permalink to swap posts */}
          <blockquote
            className="instagram-media w-full"
            data-instgrm-permalink="https://www.instagram.com/perryhowardpt/p/DUJiUKPDO5q/"
            data-instgrm-version="14"
            style={{ background:'#FFF', border:'0', borderRadius:'0', boxShadow:'0 0 1px 0 rgba(0,0,0,0.2),0 1px 8px 0 rgba(0,0,0,0.08)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:'0', width:'calc(100% - 2px)' }}
          >
            <a href="https://www.instagram.com/perryhowardpt/p/DUJiUKPDO5q/">View this post on Instagram</a>
          </blockquote>

          <blockquote
            className="instagram-media w-full"
            data-instgrm-permalink="https://www.instagram.com/perryhowardpt/p/DTd6XSXjA2X/"
            data-instgrm-version="14"
            style={{ background:'#FFF', border:'0', borderRadius:'0', boxShadow:'0 0 1px 0 rgba(0,0,0,0.2),0 1px 8px 0 rgba(0,0,0,0.08)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:'0', width:'calc(100% - 2px)' }}
          >
            <a href="https://www.instagram.com/perryhowardpt/p/DTd6XSXjA2X/">View this post on Instagram</a>
          </blockquote>

          <blockquote
            className="instagram-media w-full"
            data-instgrm-permalink="https://www.instagram.com/perryhowardpt/p/DTYZ4nojJuM/"
            data-instgrm-version="14"
            style={{ background:'#FFF', border:'0', borderRadius:'0', boxShadow:'0 0 1px 0 rgba(0,0,0,0.2),0 1px 8px 0 rgba(0,0,0,0.08)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:'0', width:'calc(100% - 2px)' }}
          >
            <a href="https://www.instagram.com/perryhowardpt/p/DTYZ4nojJuM/">View this post on Instagram</a>
          </blockquote>

          <blockquote
            className="instagram-media w-full"
            data-instgrm-permalink="https://www.instagram.com/perryhowardpt/p/DTYS9G4jMr1/"
            data-instgrm-version="14"
            style={{ background:'#FFF', border:'0', borderRadius:'0', boxShadow:'0 0 1px 0 rgba(0,0,0,0.2),0 1px 8px 0 rgba(0,0,0,0.08)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:'0', width:'calc(100% - 2px)' }}
          >
            <a href="https://www.instagram.com/perryhowardpt/p/DTYS9G4jMr1/">View this post on Instagram</a>
          </blockquote>

        </div>
      </div>
    </section>
  )
}
