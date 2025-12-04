
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AvatarCircles } from "@/components/ui/avatar-circles"

export default function Home() {
  // A helper function to find an image by its ID
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

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
          <div className="logo">
            <Image
              src="https://delhi.motorkhan.com/images/logo/motor-khan-rithala-rohini-delhi-darktheme.png"
              alt="Motor Khan Logo"
              width={100}
              height={33}
            />
          </div>
        </div>
        <div className="section-nav">
          <a className="section-nav-item" data-index="0">
            <span className="section-nav-item-number">01</span>
            <span>WELCOME</span>
          </a>
          <a className="section-nav-item" data-index="1">
            <span className="section-nav-item-number">02</span>
            <span>COLLECTION</span>
          </a>
          <a className="section-nav-item" data-index="2">
            <span className="section-nav-item-number">03</span>
            <span>EXPERIENCE</span>
          </a>
          <a className="section-nav-item" data-index="3">
            <span className="section-nav-item-number">04</span>
            <span>PROMISE</span>
          </a>
          <a className="section-nav-item" data-index="4">
            <span className="section-nav-item-number">05</span>
            <span>LEGACY</span>
          </a>
          <a className="section-nav-item" data-index="5">
            <span className="section-nav-item-number">06</span>
            <span>REVIEWS</span>
          </a>
          <a className="section-nav-item" data-index="6">
            <span className="section-nav-item-number">07</span>
            <span>CONTACT</span>
          </a>
          <a className="section-nav-item" data-index="7">
            <span className="section-nav-item-number">08</span>
            <span>GET IN TOUCH</span>
          </a>
          <a className="section-nav-item" data-index="8">
            <span className="section-nav-item-number">09</span>
            <span>ADDRESS</span>
          </a>
          <a className="section-nav-item" data-index="9">
            <span className="section-nav-item-number">10</span>
            <span>MAIN WEBSITE</span>
          </a>
        </div>
        <div className="left-menu-bottom">
          <a href="https://wa.me/918595853918" target="_blank" rel="noopener noreferrer" className="whatsapp-icon" aria-label="Chat on WhatsApp">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{width: '24px', height: '24px', fill: 'var(--color-text-muted)'}}><path d="m16 0c-8.836 0-16 7.163-16 16s7.164 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zm0 0" /></svg>
          </a>
          <div className="copyright">© MotorKhan 2025</div>
        </div>
      </div>

      <div className="page-container">
        <div className="horizontal-container">
          <div className="panels-container">
            {/* First panel: Editorial split */}
            <section className="panel panel-split editorial-split" data-index="0">
              <div className="editorial-content">
                <div className="panel-content">
                  <div className="chapter">Welcome to Motor Khan: Rithala's Trusted Car Dealer</div>
                  <h1 className="title split-text">Your Journey to the Perfect Drive Begins in Delhi. At Motor Khan, your trusted car dealer in Rithala, we don't just sell used cars; we deliver dreams.</h1>
                  <div className="text">
                    <p className="split-text">Motor Khan is Delhi's premier car dealer for quality second hand cars. Our curated collection in Rohini features the finest affordable used cars for sale, ensuring an unparalleled driving experience.</p>
                  </div>
                </div>
              </div>
              <div className="editorial-image">
                <div className="image-wrapper">
                  <Image src={getImage('welcome-car')?.imageUrl ?? ''} alt="Luxury car showroom" className="parallax" data-speed="0.3" fill style={{objectFit: 'cover'}} data-ai-hint="luxury car" />
                </div>
              </div>
            </section>

            {/* Second panel: Full background */}
            <section className="panel panel-full" data-index="1">
              <div className="image-wrapper">
                <Image src={getImage('fleet-car')?.imageUrl ?? ''} alt="Sleek sports car" className="panel-full-background parallax" data-speed="0.2" fill style={{objectFit: 'cover'}} data-ai-hint="sports car" />
              </div>
              <div className="panel-full-overlay"></div>
              <div className="panel-full-content">
                <div className="chapter">Our Hand-Picked Used Car Collection</div>
                <h2 className="title split-text">Find a Wide Selection of Used Cars for Sale in Rohini.</h2>
                <div className="text">
                  <p className="split-text">Searching for a 'used car near me'? From powerful SUVs to elegant sedans, our inventory is hand-picked to meet the highest standards of quality and performance. Discover the best affordable second hand cars right here in Delhi.</p>
                </div>
              </div>
            </section>

            {/* Third panel: Fixed panel */}
            <section className="panel panel-fixed" data-index="2">
              <div className="image-wrapper">
                <Image src={getImage('experience-car')?.imageUrl ?? ''} alt="Car interior" className="panel-fixed-image parallax" data-speed="0.25" fill style={{objectFit: 'cover'}} data-ai-hint="car interior" />
              </div>
              <div className="panel-fixed-content">
                <div className="space-text">EXPERIENCE</div>
              </div>
            </section>

            {/* Fourth panel: Editorial split reversed */}
            <section className="panel panel-split editorial-split" data-index="3">
              <div className="editorial-image">
                <div className="image-wrapper">
                  <Image src={getImage('promise-car')?.imageUrl ?? ''} alt="Open road" className="parallax" data-speed="0.3" fill style={{objectFit: 'cover'}} data-ai-hint="open road" />
                </div>
              </div>
              <div className="editorial-content">
                <div className="panel-content">
                  <div className="chapter">Our Promise to You</div>
                  <h2 className="title split-text">Transparency, Trust, and a Commitment to Quality Used Cars.</h2>
                  <div className="text">
                    <p className="split-text">At Motor Khan, a leading car dealer in Rohini, we believe in building lasting relationships. Every second hand car undergoes a rigorous inspection to ensure it meets our exacting standards. Your satisfaction is our ultimate benchmark for success.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Fifth panel: Full background with COSMOS */}
            <section className="panel panel-full" data-index="4">
              <div className="image-wrapper">
                <Image src={getImage('legacy-car')?.imageUrl ?? ''} alt="Classic car" className="panel-full-background parallax" data-speed="0.2" fill style={{objectFit: 'cover'}} data-ai-hint="classic car" />
              </div>
              <div className="panel-full-overlay"></div>
              <div className="panel-full-content">
                <div className="beyond-text">LEGACY</div>
                <div className="text">
                  <p className="split-text">Founded in 1995 by Shahnawaz Khan in Delhi, Motor Khan has grown from a small shop to a pillar of the automotive community. Our legacy as a top car dealer is built on a passion for cars and an unwavering dedication to our clients looking to buy or sell a car in Rithala.</p>
                </div>
              </div>
            </section>

            {/* Sixth panel: Reviews */}
            <section className="panel panel-full" data-index="5">
              <div className="panel-full-content">
                <div className="chapter">Hear From Our Happy Clients</div>
                <h2 className="title split-text">The Voices of Our Community.</h2>
                <div className="text">
                  <p className="split-text">Our greatest pride is the satisfaction of our clients and the stories they share on the road with their affordable second-hand car.</p>
                </div>
                <div style={{marginTop: 'var(--space-8)'}}>
                  <AvatarCircles
                    numPeople={99}
                    avatarUrls={[
                      {
                        imageUrl: "https://avatars.githubusercontent.com/u/16860528",
                        profileUrl: "https://github.com/dillionverma",
                      },
                      {
                        imageUrl: "https://avatars.githubusercontent.com/u/1024025",
                        profileUrl: "https://github.com/vercel",
                      },
                      {
                        imageUrl: "https://avatars.githubusercontent.com/u/59521846",
                        profileUrl: "https://github.com/shadcn",
                      },
                      {
                        imageUrl: "https://avatars.githubusercontent.com/u/3889938?v=4",
                        profileUrl: "https://github.com/rauchg",
                      },
                      {
                        imageUrl: "https://avatars.githubusercontent.com/u/810438?v=4",
                        profileUrl: "https://github.com/gaearon",
                      },
                      {
                        imageUrl: "https://avatars.githubusercontent.com/u/67109815?v=4",
                        profileUrl: "https://github.com/t3dotgg",
                      },
                      {
                        imageUrl: "https://avatars.githubusercontent.com/u/1500684?v=4",
                        profileUrl: "https://github.com/leerob",
                      }
                    ]}
                  />
                </div>
              </div>
            </section>

            {/* Seventh panel: Contact */}
            <section className="panel panel-full" data-index="6">
              <div className="image-wrapper">
                  <Image src={getImage('contact-car')?.imageUrl ?? ''} alt="Contact background" className="panel-full-background parallax" data-speed="0.2" fill style={{objectFit: 'cover'}} data-ai-hint="dealership interior" />
              </div>
              <div className="panel-full-overlay"></div>
              <div className="panel-full-content">
                <div className="contact-container">
                  <div className="contact-content">
                    <div className="contact-name red-text">CONTACT</div>
                      <div className="email-wrapper">
                        <a href="mailto:motorkhandelhi@gmail.com" className="email">motorkhandelhi@gmail.com</a>
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
              </div>
            </section>

            {/* Eighth panel: Get in Touch */}
            <section className="panel panel-full" data-index="7">
              <div className="image-wrapper">
                  <Image src={getImage('contact-car')?.imageUrl ?? ''} alt="Contact background" className="panel-full-background parallax" data-speed="0.2" fill style={{objectFit: 'cover'}} data-ai-hint="dealership interior" />
              </div>
              <div className="panel-full-overlay"></div>
              <div className="panel-full-content">
                <div className="contact-container">
                  <div className="contact-content">
                    <div className="contact-name red-text">GET IN TOUCH</div>
                      <div className="email-wrapper" style={{flexDirection: 'column', gap: 'var(--space-4)'}}>
                        <a href="tel:+91987135670" className="email">+91 9871 356 70</a>
                        <a href="tel:+918595853918" className="email">+91 8595 853 918</a>
                      </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Ninth panel: Address */}
            <section className="panel panel-full" data-index="8">
              <div className="image-wrapper">
                  <Image src={getImage('contact-car')?.imageUrl ?? ''} alt="Contact background" className="panel-full-background parallax" data-speed="0.2" fill style={{objectFit: 'cover'}} data-ai-hint="dealership interior" />
              </div>
              <div className="panel-full-overlay"></div>
              <div className="panel-full-content">
                <div className="contact-container">
                  <div className="contact-content">
                    <div className="contact-name red-text">ADDRESS</div>
                      <div className="email-wrapper" style={{flexDirection: 'column', gap: 'var(--space-4)', padding: 'var(--space-5)', textAlign: 'center'}}>
                        <a href="https://maps.app.goo.gl/Fhc6WW14PG33r8Rh7" target="_blank" rel="noopener noreferrer" className="email" style={{textDecoration: 'none'}}>
                          <p className="email" style={{fontSize: 'var(--text-lg)', lineHeight: '1.5'}}>
                            Shop No 12, near Rice Mill, Vijay vihar Phase I, Block B, Rithala, Rohini, New Delhi, Delhi, 110085
                          </p>
                        </a>
                      </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tenth panel: Main Website */}
            <section className="panel panel-video" data-index="9">
              <video className="video-background" autoPlay loop muted playsInline>
                <source src="https://delhi.motorkhan.com/videos/motor-khan-rithala-rohini-delhi.mp4" type="video/mp4" />
              </video>
              <div className="panel-video-overlay"></div>
              <div className="panel-video-content">
                <a href="https://motorkhan.com/" target="_blank" rel="noopener noreferrer" className="main-website-link">
                  <div className="mega-text" style={{ lineHeight: 1.2 }} dangerouslySetInnerHTML={{ __html: 'MAIN<br />WEBSITE' }}></div>
                </a>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
