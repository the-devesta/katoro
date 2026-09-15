import React from "react";

export default function Page() {
  return (
    <>



<div className="topbar">
  <div className="wrap">
    <span>Vadodara · Delivery only</span>
    <span><img className="emoji" src="/assets/emoji/timer_clock.png" alt="" />Open Daily – 11AM to 11PM</span>
    <span><img className="emoji" src="/assets/emoji/seedling.png" alt="" />100% Veg · Jain-safe · Vegan-tagged</span>
  </div>
</div>


<section className="hero dark" id="Hero">
  <div className="wrap">
    <nav className="nav">
      <a className="logo" href="#Hero"><img className="emblem" src="/assets/logo-reversed.png" alt="Katoro emblem" />Katoro</a>
      <div className="menu">
        <a href="#About">About</a><a href="#Menu">Ingredients</a><a href="#How">How it works</a><a href="#Order">Order</a>
      </div>
      <a className="btn btn-orange nav-contact" href="#Contact">Contact Us</a>
      <button className="burger-btn" aria-label="Open menu"><span></span></button>
    </nav>

    <div className="hero-mid">
    <div className="hero-stage">
      <h1 className="h1-anim">Craft Your Own Bowl</h1>
      <div className="track">
        <div className="slide" data-theme="red">
          <img className="food" src="/assets/ai/hero-1.png" alt="Sesame-Soy bowl" draggable="false" />
          <span className="tag" data-r="-12" style={{"--x":'-300px',"--y":'24px'} as React.CSSProperties}>Jain-safe</span>
          <span className="tag" data-r="18" style={{"--x":'-258px',"--y":'69px'} as React.CSSProperties}>Sesame-Soy</span>
          <span className="tag" data-r="10.6" style={{"--x":'-190px',"--y":'-16px'} as React.CSSProperties}>Silky</span>
          <span className="emo emo-big" style={{"--x":'145px',"--y":'173px'} as React.CSSProperties}><img src="/assets/emoji/steaming_bowl.png" alt="" draggable="false" /></span>
          <span className="emo emo-sm" style={{"--x":'261px',"--y":'148px'} as React.CSSProperties}><img src="/assets/emoji/chopsticks.png" alt="" draggable="false" /></span>
        </div>
        <div className="slide" data-theme="green">
          <img className="food" src="/assets/ai/hero-2.png" alt="Chilli-Ginger bowl" draggable="false" />
          <span className="tag" data-r="-12" style={{"--x":'-300px',"--y":'24px'} as React.CSSProperties}>Vegan</span>
          <span className="tag" data-r="18" style={{"--x":'-258px',"--y":'69px'} as React.CSSProperties}>Chilli-Ginger</span>
          <span className="tag" data-r="10.6" style={{"--x":'-190px',"--y":'-16px'} as React.CSSProperties}>Fiery</span>
          <span className="emo emo-big" style={{"--x":'145px',"--y":'173px'} as React.CSSProperties}><img src="/assets/emoji/hot_pepper.png" alt="" draggable="false" /></span>
          <span className="emo emo-sm" style={{"--x":'261px',"--y":'148px'} as React.CSSProperties}><img src="/assets/emoji/broccoli.png" alt="" draggable="false" /></span>
        </div>
        <div className="slide" data-theme="ink">
          <img className="food" src="/assets/ai/hero-3.png" alt="Peanut Satay bowl" draggable="false" />
          <span className="tag" data-r="-12" style={{"--x":'-300px',"--y":'24px'} as React.CSSProperties}>No onion</span>
          <span className="tag" data-r="18" style={{"--x":'-258px',"--y":'69px'} as React.CSSProperties}>Peanut Satay</span>
          <span className="tag" data-r="10.6" style={{"--x":'-190px',"--y":'-16px'} as React.CSSProperties}>Nutty</span>
          <span className="emo emo-big" style={{"--x":'145px',"--y":'173px'} as React.CSSProperties}><img src="/assets/emoji/peanuts.png" alt="" draggable="false" /></span>
          <span className="emo emo-sm" style={{"--x":'261px',"--y":'148px'} as React.CSSProperties}><img src="/assets/emoji/lemon.png" alt="" draggable="false" /></span>
        </div>
      </div>
      <button className="arrow arrow-l" aria-label="Previous"><i className="ico ico-chev-l"></i></button>
      <button className="arrow arrow-r" aria-label="Next"><i className="ico ico-chev-r"></i></button>
    </div>

    <div className="hero-copy">
      <p className="lead words-anim">Base, protein, veg, sauce, spice, crunch. Your bowl, your grams.</p>
      <div className="btns hero-btns">
        <a className="btn btn-orange" href="#Menu">Build a Bowl</a>
        <a className="btn btn-cream" href="#How">How it works</a>
      </div>
    </div>
    </div>
  </div>
  <div className="tear tear-down"></div>
</section>


<section className="about" id="About">
  <div className="wrap">
    <div className="collage">
      <div data-pop className="torn t1"><i></i><img src="/assets/ai/about-1.jpg" alt="Noodle bowl topped with bok choy and chilli" /></div>
      <div data-pop className="torn t2" style={{"--px":'-120px'} as React.CSSProperties}><i></i><img src="/assets/ai/about-2.jpg" alt="Friends sharing bowls of noodles" /></div>
      <div data-pop className="torn t3"><i></i><img src="/assets/ai/about-3.jpg" alt="Rice noodle salad with fresh vegetables" /></div>
    </div>
    <div className="about-copy">
      <h2 data-split>About</h2>
      <p data-up>Katoro is a pure-vegetarian, Jain-safe, vegan-tagged noodle bowl brand from Vadodara. You assemble your own bowl – base, protein, vegetables, sauce, spice and crunch – and pay only for what you put in, by the gram.</p>
      <p data-up>Every ingredient on the menu is safe for a Jain customer to eat. No onion, no garlic, no root vegetables, no meat, no egg. So no one has to ask, filter or worry. Choice without compromise.</p>
      <a data-up className="btn btn-orange" href="#Menu">Explore The Ingredients</a>
    </div>
  </div>
</section>


<section className="specials center" id="Featured">
  <div className="wrap">
    <h2 data-split>Starter<br />Builds</h2>
    <div className="dishes">
      <div data-pop className="dish">
        <div className="dish-img"><img src="/assets/ai/starter-1.jpg" alt="Simple glass noodle bowl" /></div>
        <h3>The Light One</h3><span className="price">from ₹100</span>
      </div>
      <div data-pop className="dish">
        <div className="dish-img"><img src="/assets/ai/starter-2.jpg" alt="Rice noodles with paneer, bok choy and sesame-soy" /></div>
        <h3>The Classic</h3><span className="price">~₹300</span>
      </div>
      <div data-pop className="dish">
        <div className="dish-img"><img src="/assets/ai/starter-3.jpg" alt="Loaded bowl with tofu, chilli oil and crunch" /></div>
        <h3>The Loaded</h3><span className="price">₹450+</span>
      </div>
    </div>
  </div>
</section>


<section className="slogan dark rel">
  <div className="tear tear-up"></div>
  <div className="wrap">
    <div className="big" data-split>
      Choice without<br />compromise
      <span className="emo e1" data-fly style={{"--fx":'-282px',"--fy":'-112px'} as React.CSSProperties}><img src="/assets/emoji/seedling.png" alt="" /></span>
      <span className="emo e2" data-fly style={{"--fx":'-124px',"--fy":'6px'} as React.CSSProperties}><img src="/assets/emoji/face_savoring_food.png" alt="" /></span>
      <span className="emo e3" data-fly style={{"--fx":'256px',"--fy":'-64px'} as React.CSSProperties}><img src="/assets/emoji/check_mark_button.png" alt="" /></span>
      <span className="emo e4" data-fly style={{"--fx":'168px',"--fy":'-2px'} as React.CSSProperties}><img src="/assets/emoji/leafy_green.png" alt="" /></span>
    </div>
    <p className="sub" data-up>One sauce system. Every ingredient Jain-safe. Nothing to get wrong.</p>
  </div>
</section>


<section className="menu-sec dark" id="Menu">
  <div className="wrap">
    <div className="menu-card" data-menu>
      <div className="menu-head">
        <h2>Ingredients</h2>
        <div className="stats">
          <span><i className="ico ico-star"></i>Priced per 50 g</span>
          <span><i className="ico ico-heart"></i>All Jain-safe</span>
        </div>
      </div>
      <div className="menu-body">
        <div>
          <div className="cat"><div className="h">Base</div>
            <div className="item"><h3>Rice Noodles</h3><span className="dots"></span><span className="price">₹40</span></div>
            <div className="item"><h3>Glass Noodles</h3><span className="dots"></span><span className="price">₹45</span></div>
            <div className="item"><h3>Hakka Noodles</h3><span className="dots"></span><span className="price">₹35</span></div>
            <div className="item"><h3>Udon</h3><span className="dots"></span><span className="price">₹50</span></div>
            <div className="item"><h3>Jasmine Rice</h3><span className="dots"></span><span className="price">₹30</span></div>
          </div>
          <div className="cat"><div className="h">Protein</div>
            <div className="item"><h3>Paneer <img className="emoji" src="/assets/emoji/cheese_wedge.png" alt="contains dairy" /></h3><span className="dots"></span><span className="price">₹60</span></div>
            <div className="item"><h3>Tofu</h3><span className="dots"></span><span className="price">₹55</span></div>
            <div className="item"><h3>Soya Chunks</h3><span className="dots"></span><span className="price">₹40</span></div>
            <div className="item"><h3>Edamame</h3><span className="dots"></span><span className="price">₹65</span></div>
            <div className="item"><h3>Tempeh</h3><span className="dots"></span><span className="price">₹70</span></div>
          </div>
          <div className="cat"><div className="h">Vegetables</div>
            <div className="item"><h3>Bok Choy</h3><span className="dots"></span><span className="price">₹30</span></div>
            <div className="item"><h3>Broccoli</h3><span className="dots"></span><span className="price">₹35</span></div>
            <div className="item"><h3>Bell Peppers</h3><span className="dots"></span><span className="price">₹30</span></div>
            <div className="item"><h3>Baby Corn</h3><span className="dots"></span><span className="price">₹30</span></div>
            <div className="item"><h3>Mushroom</h3><span className="dots"></span><span className="price">₹40</span></div>
            <div className="item"><h3>Zucchini</h3><span className="dots"></span><span className="price">₹30</span></div>
            <div className="item"><h3>Cabbage</h3><span className="dots"></span><span className="price">₹20</span></div>
            <div className="item"><h3>French Beans</h3><span className="dots"></span><span className="price">₹25</span></div>
          </div>
        </div>
        <div>
          <div className="cat"><div className="h">Sauce</div>
            <div className="item"><h3>Sesame-Soy</h3><span className="dots"></span><span className="price">₹35</span></div>
            <div className="item"><h3>Chilli-Ginger <img className="emoji" src="/assets/emoji/hot_pepper.png" alt="spicy" /></h3><span className="dots"></span><span className="price">₹35</span></div>
            <div className="item"><h3>Peanut Satay</h3><span className="dots"></span><span className="price">₹45</span></div>
            <div className="item"><h3>Sweet Chilli <img className="emoji" src="/assets/emoji/hot_pepper.png" alt="spicy" /></h3><span className="dots"></span><span className="price">₹30</span></div>
          </div>
          <div className="cat"><div className="h">Spice</div>
            <div className="item"><h3>Chilli Oil <img className="emoji" src="/assets/emoji/hot_pepper.png" alt="spicy" /></h3><span className="dots"></span><span className="price">₹20</span></div>
            <div className="item"><h3>Sichuan Pepper <img className="emoji" src="/assets/emoji/hot_pepper.png" alt="spicy" /></h3><span className="dots"></span><span className="price">₹20</span></div>
            <div className="item"><h3>White Pepper</h3><span className="dots"></span><span className="price">₹15</span></div>
            <div className="item"><h3>Green Chilli <img className="emoji" src="/assets/emoji/hot_pepper.png" alt="spicy" /></h3><span className="dots"></span><span className="price">₹15</span></div>
          </div>
          <div data-pop className="promo">
            <span className="date"><i className="ico ico-clock"></i>Launch week</span>
            <div className="h">₹50 off your first build in the Katoro app</div>
            <a className="btn btn-dark" href="#Order">Get the App</a>
          </div>
          <div className="cat"><div className="h">Crunch</div>
            <div className="item"><h3>Roasted Peanuts</h3><span className="dots"></span><span className="price">₹25</span></div>
            <div className="item"><h3>Crispy Noodles</h3><span className="dots"></span><span className="price">₹20</span></div>
            <div className="item"><h3>Toasted Sesame</h3><span className="dots"></span><span className="price">₹15</span></div>
            <div className="item"><h3>Nori Flakes</h3><span className="dots"></span><span className="price">₹30</span></div>
          </div>
          <div className="cat"><div className="h">Sips</div>
            <div className="item"><h3>Lemon Iced Tea</h3><span className="dots"></span><span className="price">₹60</span></div>
            <div className="item"><h3>Lychee Cooler</h3><span className="dots"></span><span className="price">₹80</span></div>
            <div className="item"><h3>Jasmine Cold Brew</h3><span className="dots"></span><span className="price">₹70</span></div>
            <div className="item"><h3>Tender Coconut</h3><span className="dots"></span><span className="price">₹60</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="ticker dark">
  <div className="t-row" data-x="-48"><div className="t-track">
    <span>Pure Veg</span><img className="emoji" src="/assets/emoji/leafy_green.png" alt="" />
    <span>Jain Safe</span><img className="emoji" src="/assets/emoji/check_mark_button.png" alt="" />
    <span>Vegan Tagged</span><img className="emoji" src="/assets/emoji/seedling.png" alt="" />
  </div></div>
  <div className="t-row rev" data-x="-48"><div className="t-track">
    <span>No Onion</span><img className="emoji" src="/assets/emoji/prohibited.png" alt="" />
    <span>No Garlic</span><img className="emoji" src="/assets/emoji/prohibited.png" alt="" />
    <span>Pay Per Gram</span><img className="emoji" src="/assets/emoji/hundred_points.png" alt="" />
  </div></div>
  <div className="t-row" data-x="-48"><div className="t-track">
    <span>Sauce On The Side</span><img className="emoji" src="/assets/emoji/takeout_box.png" alt="" />
    <span>Built In The App</span><img className="emoji" src="/assets/emoji/mobile_phone.png" alt="" />
    <span>Made In Vadodara</span><img className="emoji" src="/assets/emoji/steaming_bowl.png" alt="" />
  </div></div>
</section>


<section className="values dark" id="Values">
  <div className="wrap">
    <h2 data-split>Why<br />Katoro</h2>
    <p className="sub" data-up>Noodle bowls, done the Jain-safe way.</p>
    <div className="feats">
      <div data-pop className="feat"><i className="ico ico-heart"></i><h3>Jain-safe by default</h3><p>Every sauce and ingredient. One menu, nothing to filter.</p></div>
      <div data-pop className="feat"><i className="ico ico-star"></i><h3>Pay per gram</h3><p>No fixed bowl price. Add what you want, at the amount you want.</p></div>
      <div data-pop className="feat"><i className="ico ico-alarm"></i><h3>Delivery-proof</h3><p>Rice and glass noodles that survive the ride. Sauce packed separately.</p></div>
      <div data-pop className="feat"><i className="ico ico-fire"></i><h3>House sauces</h3><p>Sesame-soy, chilli-ginger, peanut satay. Made in-house, no onion, no garlic.</p></div>
    </div>
    <div data-pop className="torn"><i></i><img src="/assets/ai/values.jpg" alt="Wok-tossed noodles with mushrooms and vegetables" /></div>
    <a data-up className="btn btn-orange" href="#How">See How It Works</a>
  </div>
  <div className="tear tear-down"></div>
</section>


<section className="reviews" id="How">
  <div className="wrap">
    <div className="rev-head">
      <h2 data-split>How it<br />works</h2>
      <span data-up="24"><i className="ico ico-thumb"></i>Six steps, one bowl</span>
    </div>
    <div className="rev-grid">
      <div className="rev-col">
        <div data-pop className="story">
          <img className="shot" src="/assets/ai/app.jpg" alt="Katoro bowl builder app" />
          <div className="bars"><i></i><i></i><i></i></div>
          <div className="who"><img src="/assets/logo-primary.png" alt="" />katoro.app <i className="ico ico-check"></i></div>
          <div className="bubble"><img src="/assets/emoji/steaming_bowl.png" alt="" /></div>
        </div>
        <div data-pop className="rev" style={{marginTop:'24px'} as React.CSSProperties}>
          <div className="who"><img src="/assets/emoji/cooked_rice.png" alt="" />Step 1 · Base</div>
          <q>Pick rice, glass, hakka or udon noodles. Set the grams. Watch the bowl fill.</q>
          <div className="stars"><i className="ico ico-star"></i></div>
        </div>
      </div>
      <div className="rev-col">
        <div data-pop className="rev">
          <div className="who"><img src="/assets/emoji/cheese_wedge.png" alt="" />Step 2 · Protein</div>
          <q>Paneer, tofu, soya, edamame or tempeh. Only paneer is flagged non-vegan.</q>
          <div className="stars"><i className="ico ico-star"></i><i className="ico ico-star"></i></div>
        </div>
        <div data-pop className="rev">
          <div className="who"><img src="/assets/emoji/broccoli.png" alt="" />Step 3 · Vegetables</div>
          <q>Bok choy, broccoli, peppers, baby corn, mushroom. No root vegetables, ever.</q>
          <div className="stars"><i className="ico ico-star"></i><i className="ico ico-star"></i><i className="ico ico-star"></i></div>
        </div>
        <div data-pop className="rev">
          <div className="who"><img src="/assets/emoji/hot_pepper.png" alt="" />Step 5 · Spice</div>
          <q>Chilli oil, sichuan pepper, green chilli. The heat meter moves as you add.</q>
          <div className="stars"><i className="ico ico-star"></i><i className="ico ico-star"></i><i className="ico ico-star"></i><i className="ico ico-star"></i><i className="ico ico-star"></i></div>
        </div>
      </div>
      <div className="rev-col">
        <div data-pop className="rev">
          <div className="who"><img src="/assets/emoji/salt.png" alt="" />Step 4 · Sauce</div>
          <q>Sesame-soy, chilli-ginger or peanut satay. Poured on opening, so the build stays alive.</q>
          <div className="stars"><i className="ico ico-star"></i><i className="ico ico-star"></i><i className="ico ico-star"></i><i className="ico ico-star"></i></div>
        </div>
        <div data-pop className="rev">
          <div className="who"><img src="/assets/emoji/peanuts.png" alt="" />Step 6 · Crunch</div>
          <q>Peanuts, crispy noodles, sesame, nori. Then the zoom-and-shine reveal, and checkout.</q>
          <div className="stars"><i className="ico ico-star"></i><i className="ico ico-star"></i><i className="ico ico-star"></i><i className="ico ico-star"></i><i className="ico ico-star"></i><i className="ico ico-star"></i></div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="gallery center" id="Gallery">
  <div className="wrap">
    <h2 data-split>Katoro<br />in the bowl</h2>
    <p className="sub" data-up>Real ingredients. Real builds.</p>
  </div>
  <div className="g-row" data-x="48"><div className="g-track">
    <div data-pop className="g-card"><img src="/assets/ai/g1.jpg" alt="Glass noodles" /></div>
    <div data-pop className="g-card"><img src="/assets/ai/g2.jpg" alt="Udon with vegetables" /></div>
    <div data-pop className="g-card"><img src="/assets/ai/g3.jpg" alt="Sauces and condiments" /></div>
    <div data-pop className="g-card emo-card"><img src="/assets/emoji/steaming_bowl.png" alt="" /></div>
    <div data-pop className="g-card"><img src="/assets/ai/g4.jpg" alt="Bowls on a table" /></div>
    <div data-pop className="g-card"><img src="/assets/ai/g5.jpg" alt="Noodles with lime" /></div>
    <div data-pop className="g-card"><img src="/assets/ai/g6.jpg" alt="Vegetable spring rolls" /></div>
    <div data-pop className="g-card"><img src="/assets/ai/starter-3.jpg" alt="Wok in the kitchen" /></div>
  </div></div>
</section>


<section className="benefits dark" id="Benefits">
  <div className="tear tear-up"></div>
  <div className="wrap">
    <div className="ben-head">
      <h2 data-split>Why we build<br />different</h2>
      <div className="ben-cta">
        <h3 data-up>Your bowl, your rules</h3>
        <p data-up>A bowl with only glass noodles and one veg is about ₹100. Load it up and it grows. You always see the total, live.</p>
        <a data-up className="btn btn-orange" href="#Order">Start Building</a>
      </div>
    </div>
    <div className="ben-grid">
      <div data-pop className="ben"><span className="emo"><img src="/assets/emoji/check_mark_button.png" alt="" /></span><h3>One Sauce System</h3><p>No separate Jain menu. Everything is Jain-safe, so nothing can go wrong.</p></div>
      <div data-pop className="ben"><span className="emo"><img src="/assets/emoji/hundred_points.png" alt="" /></span><h3>Priced Per Gram</h3><p>Every ingredient costed per 50 g. Every gram covers its own cost. No bundles.</p></div>
      <div data-pop className="ben"><span className="emo"><img src="/assets/emoji/mobile_phone.png" alt="" /></span><h3>Live Bowl Preview</h3><p>Layers drop in as you choose. The bowl wobbles, the steam rises, the price updates.</p></div>
      <div data-pop className="ben"><span className="emo"><img src="/assets/emoji/takeout_box.png" alt="" /></span><h3>Sauce On The Side</h3><p>Packed separately, poured on opening. Better texture, better build feeling.</p></div>
      <div data-pop className="ben"><span className="emo"><img src="/assets/emoji/motor_scooter.png" alt="" /></span><h3>Own App, No Commission</h3><p>Order direct. No aggregator cut, so more goes into the bowl.</p></div>
      <div data-pop className="ben"><span className="emo"><img src="/assets/emoji/cup_with_straw.png" alt="" /></span><h3>Vadodara Palate</h3><p>Milder, a touch sweeter, paired with cold brews and coolers, not beer.</p></div>
    </div>

    <div className="chef">
      <div className="h" data-up="24"><img className="emoji" src="/assets/emoji/red_heart.png" alt="" />Founder’s Builds</div>
      <p className="sub" data-up="24">Two bowls we keep coming back to.</p>
      <div className="dishes">
        <div data-pop className="dish">
          <div className="dish-img"><img src="/assets/ai/founder-1.jpg" alt="Udon with vegetables and sesame-soy" /></div>
          <h3>Sesame Udon</h3><span className="price">~₹320</span>
        </div>
        <div data-pop className="dish">
          <div className="dish-img"><img src="/assets/ai/founder-2.jpg" alt="Rice noodles with peanut satay and lime" /></div>
          <h3>Satay Rice Noodles</h3><span className="price">~₹340</span>
        </div>
      </div>
      <a data-up className="btn btn-orange" href="#Menu">See Ingredients</a>
    </div>
  </div>
  <div className="strip">
    <div className="t-row"><div className="m-track">
      <img className="emoji" src="/assets/emoji/steaming_bowl.png" alt="" /><span>Vadodara’s build-your-own noodle bowl</span>
      <img className="emoji" src="/assets/emoji/green_heart.png" alt="" /><span>Pure veg, Jain-safe, vegan-tagged</span>
      <img className="emoji" src="/assets/emoji/hot_pepper.png" alt="" /><span>House sauces, no onion, no garlic</span>
      <img className="emoji" src="/assets/emoji/leafy_green.png" alt="" /><span>Fresh every single day</span>
      <img className="emoji" src="/assets/emoji/motor_scooter.png" alt="" /><span>Delivery across the city</span>
      <img className="emoji" src="/assets/emoji/mobile_phone.png" alt="" /><span>Build it in the app</span>
    </div></div>
  </div>
</section>


<section className="order" id="Order">
  <div className="wrap">
    <div>
      <div className="big" data-split>
        Order<br />your<br />own<br />bowl
        <span className="emo e1" data-fly style={{"--fx":'300px',"--fy":'-20px'} as React.CSSProperties}><img src="/assets/emoji/takeout_box.png" alt="" /></span>
        <span className="emo e2" data-fly style={{"--fx":'-80px',"--fy":'50px'} as React.CSSProperties}><img src="/assets/emoji/face_savoring_food.png" alt="" /></span>
        <span className="emo e3" data-fly style={{"--fx":'120px',"--fy":'60px'} as React.CSSProperties}><img src="/assets/emoji/red_heart.png" alt="" /></span>
      </div>
      <p data-up>Skip the aggregators and build straight in the Katoro app. Live preview, live price, Jain-safe by default, delivered hot across Vadodara.</p>
      <div className="btns" data-up>
        <a className="btn btn-orange" href="#Contact">Get the Katoro App</a>
        <a className="btn btn-dark" href="https://wa.me/919000000000" target="_blank" rel="noopener">Order on WhatsApp</a>
      </div>
    </div>
    <div className="collage">
      <div data-pop className="torn t1"><i></i><img src="/assets/ai/g3.jpg" alt="Bowls and sides on a table" /></div>
      <div data-pop className="torn t2"><i></i><img src="/assets/ai/about-2.jpg" alt="Vegetable spring rolls" /></div>
      <div data-pop className="torn t3"><i></i><img src="/assets/ai/g2.jpg" alt="Sauces and toppings" /></div>
    </div>
  </div>
</section>


<section className="contact" id="Contact">
  <div className="wrap">
    <div>
      <h2 data-split>Let’s<br />connect</h2>
      <div className="c-block" data-up>
        <div className="h">Find Us</div>
        <span><i className="ico ico-pin"></i>Vadodara, Gujarat · Delivery only</span>
        <span><i className="ico ico-clock"></i>Open Daily – 11AM to 11PM</span>
      </div>
      <div className="c-block" data-up>
        <div className="h">Email Us</div>
        <a href="mailto:hello@katoro.in"><i className="ico ico-mail"></i>hello@katoro.in</a>
      </div>
      <div className="c-block" data-up>
        <div className="h">Call Us</div>
        <a href="tel:+919000000000"><i className="ico ico-phone"></i>+91 90000 00000</a>
      </div>
    </div>
    <div data-pop className="c-photo"><img src="/assets/ai/contact.jpg" alt="Street food stall at night" /></div>
  </div>
</section>

<div className="strip">
  <div className="t-row"><div className="m-track">
    <img className="emoji" src="/assets/emoji/steaming_bowl.png" alt="" /><span>Vadodara’s build-your-own noodle bowl</span>
    <img className="emoji" src="/assets/emoji/green_heart.png" alt="" /><span>Pure veg, Jain-safe, vegan-tagged</span>
    <img className="emoji" src="/assets/emoji/hot_pepper.png" alt="" /><span>House sauces, no onion, no garlic</span>
    <img className="emoji" src="/assets/emoji/leafy_green.png" alt="" /><span>Fresh every single day</span>
    <img className="emoji" src="/assets/emoji/motor_scooter.png" alt="" /><span>Delivery across the city</span>
    <img className="emoji" src="/assets/emoji/mobile_phone.png" alt="" /><span>Build it in the app</span>
  </div></div>
</div>


<footer className="dark">
  <div className="wrap">
    <a className="logo" href="#Hero"><img className="emblem" src="/assets/logo-reversed.png" alt="Katoro emblem" />Katoro</a>
    <div className="f-links">
      <a href="#About">About</a><a href="#Menu">Ingredients</a><a href="#How">How it works</a><a href="#Order">Order</a><a href="#Contact">Contact Us</a>
    </div>
    <div className="f-links dim">
      <a href="#">Privacy Policy</a><a href="#Hero">Back to Top</a><span>FSSAI Lic. No. XXXXXXXXXXXXXX</span>
    </div>
    <div className="f-social">
      <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener"><i className="ico ico-ig"></i></a>
      <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener"><i className="ico ico-fb"></i></a>
      <a href="https://x.com/" aria-label="X" target="_blank" rel="noopener"><i className="ico ico-x"></i></a>
    </div>
  </div>
  <div className="f-giant" data-giant>Katoro</div>
</footer>

<div className="particles" aria-hidden="true"></div>

<div className="mobile-menu">
  <button className="close" aria-label="Close menu">✕</button>
  <a href="#About">About</a><a href="#Menu">Ingredients</a><a href="#How">How it works</a><a href="#Order">Order</a><a href="#Contact">Contact</a>
</div>


    </>
  );
}
