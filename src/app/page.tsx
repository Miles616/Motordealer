import HorizontalScroll from '@/components/HorizontalScroll';

export default function Home() {
  return (
    <>
      <div className="left-menu">
        <div className="left-menu-top">
          <button className="menu-btn" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="left-menu-middle">
          <div className="logo">SPACE</div>
        </div>
        <div className="section-nav">
          <a className="section-nav-item" data-index="0">
            <span className="section-nav-item-number">01</span>
            <span>Introduction</span>
          </a>
          <a className="section-nav-item" data-index="1">
            <span className="section-nav-item-number">02</span>
            <span>Matthew</span>
          </a>
          <a className="section-nav-item" data-index="2">
            <span className="section-nav-item-number">03</span>
            <span>Beyond</span>
          </a>
          <a className="section-nav-item" data-index="3">
            <span className="section-nav-item-number">04</span>
            <span>Rick</span>
          </a>
          <a className="section-nav-item" data-index="4">
            <span className="section-nav-item-number">05</span>
            <span>Cosmos</span>
          </a>
          <a className="section-nav-item" data-index="5">
            <span className="section-nav-item-number">06</span>
            <span>Dialogue</span>
          </a>
          <a className="section-nav-item" data-index="6">
            <span className="section-nav-item-number">07</span>
            <span>Infinite</span>
          </a>
          <a className="section-nav-item" data-index="7">
            <span className="section-nav-item-number">08</span>
            <span>Vision</span>
          </a>
          <a className="section-nav-item" data-index="8">
            <span className="section-nav-item-number">09</span>
            <span>Contact</span>
          </a>
        </div>
      </div>

      <div className="page-container">
        <div className="horizontal-container">
          <div className="panels-container">
            {/* First panel: Editorial split */}
            <section className="panel panel-split editorial-split" data-index="0">
              <div className="editorial-content">
                <div className="panel-content">
                  <div className="chapter">The Conversation</div>
                  <h1 className="title split-text">When you look up at the stars, you're really looking at the past. Our time here is brief, but our gaze is eternal</h1>
                  <div className="text">
                    <p className="split-text">The vast emptiness of space offers us perspective. It reminds us how small we are in the grand scheme of things. Yet somehow, that doesn't diminish us – it elevates our existence into something miraculous.</p>
                  </div>
                </div>
              </div>
              <div className="editorial-image">
                <div className="image-wrapper">
                  <img src="https://cdn.cosmos.so/996569d5-2f19-40e9-9504-af3009286f9f.jpeg" alt="Space perspective" className="parallax" data-speed="0.3" />
                </div>
              </div>
            </section>

            {/* Second panel: Full background */}
            <section className="panel panel-full" data-index="1">
              <div className="image-wrapper">
                <img src="https://cdn.cosmos.so/6828e15d-6b7e-4116-ba62-99493fa821cf.jpeg" alt="Cave opening" className="panel-full-background parallax" data-speed="0.2" />
              </div>
              <div className="panel-full-overlay"></div>
              <div className="panel-full-content">
                <div className="chapter">Matthew</div>
                <h2 className="title split-text">The universe doesn't care about our plans. It only rewards our presence</h2>
                <div className="text">
                  <p className="split-text">We think we know what's out there, but man, we've barely scratched the surface. It's like we're children opening our eyes for the first time. Every discovery is just the beginning of ten thousand more questions.</p>
                </div>
              </div>
            </section>

            {/* Third panel: Fixed panel */}
            <section className="panel panel-fixed" data-index="2">
              <div className="image-wrapper">
                <img src="https://cdn.cosmos.so/47895928-9611-45a3-b94d-0d8ef8ac02dc.jpeg" alt="Galaxy view" className="panel-fixed-image parallax" data-speed="0.25" />
              </div>
              <div className="panel-fixed-content">
                <div className="space-text">BEYOND</div>
              </div>
            </section>

            {/* Fourth panel: Editorial split reversed */}
            <section className="panel panel-split editorial-split" data-index="3">
              <div className="editorial-image">
                <div className="image-wrapper">
                  <img src="https://cdn.cosmos.so/a28a9abc-6d7a-4160-a44b-2d9968c689c6.jpeg" alt="Space explorer" className="parallax" data-speed="0.3" />
                </div>
              </div>
              <div className="editorial-content">
                <div className="panel-content">
                  <div className="chapter">Rick</div>
                  <h2 className="title split-text">Silence is the canvas where the universe reveals itself</h2>
                  <div className="text">
                    <p className="split-text">There's something profound about the emptiness. It's not empty at all. It's full of potential. The space between things – that's where the magic happens. We're drawn to explore not because we want to conquer, but because we yearn to understand.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Fifth panel: Full background with COSMOS */}
            <section className="panel panel-full" data-index="4">
              <div className="image-wrapper">
                <img src="https://cdn.cosmos.so/e3817e25-3312-43ea-b666-75aa0bc4b5ae.jpeg" alt="Deep space" className="panel-full-background parallax" data-speed="0.2" />
              </div>
              <div className="panel-full-overlay"></div>
              <div className="panel-full-content">
                <div className="beyond-text">COSMOS</div>
                <div className="text">
                  <p className="split-text">Sometimes I think about how every atom in our bodies was forged in the heart of a dying star. We're not just in the universe – the universe is in us. That connection, that's what drives us forward.</p>
                </div>
              </div>
            </section>

            {/* Sixth panel: Split with quotes */}
            <section className="panel panel-split" data-index="5">
              <div className="panel-left">
                <div className="panel-content">
                  <div className="direction-label">Matthew</div>
                  <div className="quote-container">
                    <div className="quote">"I've always approached the cosmos with a sense of wonder. It's like looking at your reflection in a mirror that stretches into infinity. You see yourself, but you also see beyond yourself."</div>
                    <div className="author">INTERSTELLAR, 2014</div>
                  </div>
                  <div className="image-container">
                    <div className="image-wrapper">
                      <img src="https://cdn.cosmos.so/f22462ad-b33d-448d-aa08-cfbbbe79ef42.jpeg" alt="Space journey" className="parallax" data-speed="0.15" />
                    </div>
                  </div>
                  <div className="conclusion-text">
                    <p className="split-text">Looking out there is really looking in here. The questions we ask about the stars are really questions about ourselves.</p>
                  </div>
                </div>
              </div>
              <div className="panel-right">
                <div className="panel-content">
                  <div className="direction-label">Rick</div>
                  <div className="quote-container">
                    <div className="quote">"Great art creates space. Great space creates perspective. When we stand at the edge of the known, that's where true creativity begins."</div>
                    <div className="author">CREATIVE PROCESS, 2022</div>
                  </div>
                  <div className="full-quote">
                    "The universe doesn't rush, yet everything gets done. That's the paradox we're trying to understand – infinite patience paired with constant evolution."
                  </div>
                  <div className="text">
                    <p className="split-text">What we discover out there transforms everything down here. Each revelation about a distant galaxy reshapes how we see ourselves on this pale blue dot.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seventh panel: New big text with image */}
            <section className="panel panel-full" data-index="6">
              <div className="image-wrapper">
                <img src="https://cdn.cosmos.so/ee8be9fb-15f6-4f3b-a13f-309cbf5453c2.jpeg" alt="Space infinite" className="panel-full-background parallax" data-speed="0.3" />
              </div>
              <div className="panel-full-overlay"></div>
              <div className="panel-full-content">
                <div className="mega-text">INFINITE</div>
                <div className="text">
                  <p className="split-text">The universe expands in all directions at once, infinitely complex and infinitely simple. We are but a momentary gathering of stardust, witnessing the cosmic dance.</p>
                </div>
              </div>
            </section>

            {/* Eighth panel: Video with text */}
            <section className="panel panel-video" data-index="7">
              <video className="video-background" autoPlay loop muted playsInline>
                <source src="https://cdn.cosmos.so/fdfc1996-66fd-4536-8d36-0ad173a4acff.mp4" type="video/mp4" />
              </video>
              <div className="panel-video-overlay"></div>
              <div className="panel-video-content">
                <div className="mega-text">VISION</div>
              </div>
            </section>

            {/* Ninth panel: Contact */}
            <section className="panel panel-contact" data-index="8">
              <div className="contact-container">
                <div className="contact-content">
                  <div className="space-text contact-name">GET IN TOUCH</div>
                  <div className="email-wrapper">
                    <a href="mailto:hi@filip.fyi" className="email">hi@filip.fyi</a>
                    <button className="copy-email" title="Copy email" aria-label="Copy email to clipboard">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </button>
                    <span className="copy-tooltip">Copied!</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="navigation">
        <div className="nav-text">SCROLL</div>
        <div className="nav-progress">
          <div className="nav-progress-fill"></div>
        </div>
        <div className="nav-text">01 / 09</div>
      </div>
      <HorizontalScroll />
    </>
  );
}
