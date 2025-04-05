import React, { useEffect } from "react";
import "./UpsellPage.css";

const UpsellPage: React.FC = () => {
  useEffect(() => {
    const addStylesheet = (
      href: string,
      integrity?: string,
      crossOrigin?: string
    ) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      if (integrity) link.integrity = integrity;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    };

    addStylesheet(
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
      "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
      "anonymous"
    );
    addStylesheet(
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
      "anonymous"
    );
    addStylesheet(
      "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css"
    );

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <>
      <section id="upsell">
        <div className="wrapper">
          {/* ------------------------- Main Title / Intro -------------------------- */}
          <div className="title">
            <h3>
              <strong>STOP STRUGGLING with your TEEN!</strong>
            </h3>
            <div className="separator"></div>
            <p className="subtitle">
              Do you want to connect MORE and argue LESS with your teen?
            </p>

            <p>A Complete, Easy-to-Use Guide for Parents of Pre-teens and Teens</p>

            <p>
              <strong>Don't just hope for</strong>{" "}
              <strong>a better relationship – take action now!</strong>
            </p>

            <p>
              Begin the same journey that has helped hundreds of thousands of parents,
            </p>

            <p>
              Discover how to stand your ground and at the same time reconnect and
              rebuild a strong, loving relationship with your teen.
            </p>

            <h4>
              <strong>
                The Stop Struggling books sold over a quarter of a million copies.
              </strong>
            </h4>

            <h3>
              <strong>
                Do You Want to Reconnect &amp; Build a Stronger Relationship With Your
                Teen?
              </strong>
            </h3>

            <ul>
              <li>
                <strong>This book is a complete program</strong> mapped out… rich
                with examples of real life issues with step by step solutions.
              </li>
              <li>
                <strong>A proven guide</strong> to help you reconnect with your
                teenager.
              </li>
              <li>
                <strong>Actionable strategies</strong> and{" "}
                <strong>easy-to-follow exercises</strong> for immediate results.
              </li>
              <li>
                it's a <strong>complete toolkit</strong> for raising resilient and
                happy kids.
              </li>
            </ul>

            <p>Don't waste another day struggling with your 8-18 year old</p>

            <h4>
              <strong>
                Invest in your relationship and enjoy the teenage years
              </strong>
            </h4>

            <p>
              <strong>Limited Time Offer:</strong> Grab Your eBook Now Plus
              Bonuses
            </p>
          </div>

          {/* ---------------------------- Description Block 1 ---------------------------- */}
          <div className="desc full">
            <h4>
              <strong>
                Is constant fighting with your teenager making you feel like this?
              </strong>
            </h4>

            <div className="feelings-list">
              <ul>
                <li>
                  <strong>Frustrated:</strong> My teen just doesn't listen.
                </li>
                <li>
                  <strong>Overwhelmed:</strong> I can't handle it all.
                </li>
                <li>
                  <strong>Angry:</strong> I'm furious!
                </li>
                <li>
                  <strong>Fearful:</strong> What if I can't protect my teen?
                </li>
              </ul>

              <ul>
                <li>
                  <strong>Helpless:</strong> I feel so disconnected from my teen.
                </li>
                <li>
                  <strong>Disappointed:</strong> My kid surely is not the child I
                  expected.
                </li>
                <li>
                  <strong>Confused:</strong> I don't know what else to do. I've
                  tried everything
                </li>
              </ul>
            </div>

            <p>
              <strong>You're not alone.</strong>
              <br />
              Countless parents struggle to communicate effectively with their
              teens.
              <br />
              When parents are in pain, they want solutions, not theory. And this
              is the exact promise of <em>Stop Struggling with Your Teen</em>.
            </p>

            <p>
              As <em>St. Louis Post Dispatch</em> columnist said, "
              <em>Stop Struggling with Your Teen</em> can be read in an hour and
              applied in the next."
            </p>

            <p>How can that possibly work?</p>

            <p>
              <u>By learning the 4 step Stop Struggling approach:</u>
            </p>

            <ul>
              <li>
                <strong>Think Differently by changing your language.</strong>
              </li>
              <li>
                <strong>
                  Turn Responsibility Over with love-not using fear-based tactics.
                </strong>
              </li>
              <li>
                <strong>
                  Tap into parents' rights by addressing your part of the problem.
                </strong>
              </li>
              <li>
                <strong>
                  Take a stand in a no-nonsense and respectful manner.
                </strong>
              </li>
            </ul>

            <p>
              You will quickly see that, <em>Stop Struggling With Your Teen</em>{" "}
              provides you with solutions so you will be able to rebuild your
              relationship, reduce fighting and revitalize healthy communication
              with your teen.
            </p>
          </div>

          {/* ---------------------------- Description Block 2 ---------------------------- */}
          <div className="desc">
            <p>
              As a result, you'll be able to strike that delicate balance between
              setting limits while encouraging your teen's independence...
            </p>

            <ul>
              <li>Stopping unnecessary power struggles without yelling.</li>
              <li>
                Letting go of{" "}
                <u>
                  teen's problem in a way that you don't feel like you have given
                  in or given up
                </u>
                .
              </li>
              <li>
                Raising teens who are equipped with the skills necessary to become
                responsible, well-adjusted adults.
              </li>
              <li>
                Creating your own action plan using the included{" "}
                <em>Stop Struggling With Your Teen Companion Workbook.</em>
              </li>
              <li>Being tough on the problem while tender with your teen.</li>
            </ul>
          </div>

          {/* ---------------------------- Description Block 3 ---------------------------- */}
          <div className="desc">
            <p>
              Many years ago, I met with a Dad and his high school senior son in a
              joint session. It wasn't going well at all. I saw them each try to
              have a one-upmanship — they were in the throes of what I would call
              then a power struggle. The dad became so irate that he got up to
              leave the session.
            </p>

            <p>
              At the moment, the teen said the words that are etched in my heart.
              "If you ever gave a sh*t about me, you will sit down and listen."
            </p>

            <p>
              His dad turned around, saw his son's face and sat back down."Dad,
              sometimes I don't even want to live anymore. Nothing makes any sense
              to me. Last week when you were gone, I went searching for your
              guns."
            </p>

            <p>
              The dad's face was one of anguish and fear. His anger was gone. He
              moved his chair closer to his son and at that moment, the road of
              recovery had begun. And for me, that was the moment my life changed.
              I wanted to help both parents and teens never to feel so hopeless,
              so desperate. How? By educating parents to develop a way both
              parents and teens feel empowered. Not just one or the other, but
              both. Empowered Parenting, Empowered Teen.
            </p>

            <p>
              I realized my mission of{" "}
              <strong>
                <em>
                  Empowered, Parent, Empowered Teen was more important than ever
                  in this day and age which is why I wrote the book.
                </em>
              </strong>
            </p>

            <p>
              Evonne is a sought-after relationship therapist, a certified Imago
              couples counselor and an award-winning parenting author.
            </p>

            <p>
              Her expertise and humor-filled style have landed her numerous guest
              spots on <em>The Today Show</em>, <em>Good Morning America</em> and
              the <em>Oprah Winfrey show</em>, plus being featured in{" "}
              <em>Family Circle</em>, McCall's,{" "}
              <em>Woman's Day Working Mother</em> and showcased as a teacher in
              the movie- <em>Breakthrough</em>: <em>A Conscious Documentary</em>.
            </p>

            <p>
              Her books <em>Stop Struggling with Your Teen</em> and{" "}
              <em>Stop Struggling With Your Child</em> have together sold more
              than a quarter of a million copies worldwide.
            </p>

            <p>Discover more about Evonne Weinhaus at www.evonneweinhaus.com</p>
          </div>

          {/* ---------------------------- Book Intro Title ---------------------------- */}
          <h3>
            <strong>Stop Struggling with your Teen:</strong>
          </h3>
          <p>
            A Complete, Easy-to-Use Guide to Reconnect &amp; Rebuild Your
            Relationship with Your Child
          </p>
          <p>
            Grab Your Copy of the eBook Now With Exclusive Bonuses Only Available
            on This Page
          </p>

          {/* ---------------------------- Testimonials Carousel ---------------------------- */}
          <div className="testimonial">
            <div className="container">
              <div className="row">
                <div id="testimonial-slider" className="owl-carousel">
                <div className="testimonial-item">
                <div className="pic">
                      <img
                        src="https://static.pexels.com/photos/529928/pexels-photo-529928.jpeg"
                        alt="Woman's Day"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        "If you've tried everything from guidance to bribery and
                        nothing works, you are ready for Stop Struggling With Your
                        Teen."
                      </p>
                    </div>
                    <h3 className="testimonial-title">
                      <a href="#">Woman's Day</a>
                      <small> - Magazine Feature</small>
                    </h3>
                  </div>
                  <div className="testimonial-item">
                  <div className="pic">
                      <img
                        src="https://static.pexels.com/photos/529928/pexels-photo-529928.jpeg"
                        alt="Charley"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        "I was inspired to start using these new skills
                        immediately and best of all they worked. Thank you,
                        Evonne!"
                      </p>
                    </div>
                    <h3 className="testimonial-title">
                      <a href="#">Charley</a>
                      <small> - Parent</small>
                    </h3>
                  </div>

                  <div className="testimonial-item">
                  <div className="pic">
                      <img
                        src="https://static.pexels.com/photos/529928/pexels-photo-529928.jpeg"
                        alt="Aga M."
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        "I LOVED this book. Now that I've read it once, I'm going
                        to follow all the guides and workbooks. Your method has
                        been LIFE CHANGING."
                      </p>
                    </div>
                    <h3 className="testimonial-title">
                      <a href="#">Aga M.</a>
                      <small> - Reader</small>
                    </h3>
                  </div>

                  <div className="testimonial-item">
                  <div className="pic">
                      <img
                        src="https://static.pexels.com/photos/529928/pexels-photo-529928.jpeg"
                        alt="Cindy"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        "I'm not sure my son would be in one piece today if it
                        were not for the 'Stop Struggling With Your Teen'
                        approach."
                      </p>
                    </div>
                    <h3 className="testimonial-title">
                      <a href="#">Cindy</a>
                      <small> - Grateful Mom</small>
                    </h3>
                  </div>
                </div>
              </div>

              <p>There's zero risk for you with our 100% money back guarantee</p>

              <div className="desc">
                <div className="bonuses">
                  <h4>Bonuses:</h4>
                  <ul>
                    <li>
                      <em>
                        A PDF copy of the updated and expanded national best
                        seller- Stop Struggling With Your Teen-immediately
                        available upon signing up.
                      </em>
                    </li>
                    <li>
                      <em>
                        This PDF copy includes Evonne's complete, easy-to-use
                        workbook- Resolving Conflict Without Blame- a companion
                        workbook that helps you adapt the Stop Struggling
                        parenting action plan with your own situations.
                      </em>
                    </li>
                    <li>
                      <em>
                        Recorded 1:1 client session of Evonne working 1:1 with a
                        mom who has a very inventive and strong-willed teen. See
                        first hand how this mom successfully stops struggling with
                        her teen. (audio version)
                      </em>
                    </li>
                    <li>
                      <em>
                        Parent- Teen Quiz featured on the Today show. If you are
                        at your wit's end with your teen, take this quiz and
                        discover how to handle common every day problems
                        differently.
                      </em>
                    </li>
                    <li>
                      <em>
                        How to talk to Your Kid about Homework- 2 package audio
                        course. If you want a quick and effective solution that
                        encourages your kids to complete their homework, this 2
                        lessons audio course is for you.
                      </em>
                    </li>
                    <li>
                      <em>
                        PDF transcript of the audio lesson for those who prefer
                        reading to listening.
                      </em>
                    </li>
                    <li>
                      <em>
                        Mini video course-Screen Time Limits- 3 videos- 7 minutes
                        total. Learn effective communication tools and easy
                        routines to set healthy screen time limits that you can
                        implement immediately.
                      </em>
                    </li>
                    <li>
                      <em>60 minute presentation Live.</em>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="desc">
                <div className="benefits">
                  <div className="desc">
                    <div className="benefits">
                      <h4>Benefits:</h4>
                      <li>
                        <em>
                          Develop a systematic four step parenting action plan
                          that helps you stand your ground and, at the same time,
                          set limits with your teen.
                        </em>
                      </li>
                      <li>
                        <em>
                          Stop power struggles with your teen without giving in.
                        </em>
                      </li>
                      <li>
                        <em>Empower yourself and your teen.</em>
                      </li>
                      <li>
                        <em>Build trust and respect with each other.</em>
                      </li>
                      <li>
                        <em>Transform your attitude by changing your language</em>
                      </li>
                      <li>
                        <em>
                          Establish the credibility of your word by following
                          through with follow-through.
                        </em>
                      </li>
                      <li>
                        <em>
                          Create a proactive plan to get through to your teen in
                          critical situations where a bad choice can lead to
                          devastating outcomes.
                        </em>
                      </li>
                      <li>
                        <em>
                          How to let go of your teen's problem with love — not
                          feeling like you've just given in or given up
                        </em>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="desc full">
                  <h2>
                    <strong>
                      "Great Resource for Grandparents Raising Teenage
                      Grandchildren"
                    </strong>
                  </h2>
                  <p>
                    Where was this when I was raising my children? Great
                    information for my second time around — negotiating and
                    setting boundaries. Excellent read.
                  </p>

                  <h3>
                    <strong>
                      Evonne Asks...
                      <br />
                      What If You Could Begin to Act Differently?
                    </strong>
                  </h3>

                  <p>
                    Many parents base their success on how their teens behave.
                    Does my kid listen to me? How are their grades in school? How
                    can I stop my teen from hanging out with a rough crowd? The
                    result of this kind of thinking leads to parents feeling
                    guilty, angry and frustrated. They think they they have failed
                    as parents. What if you could ….. Begin to act differently.
                  </p>

                  <p>
                    When parents issue orders, make threats and demands — they
                    can't follow through with, teens learn to wait them out.
                    Teenagers know they can, will and do outlast their parents.
                    Parents will either cave in or teens will sneak, lie and do
                    what they want anyway. All trust is lost. Parents don't trust
                    their teens, most certainly teens don't trust their parents
                    and if truth be known, parents don't trust themselves. What if
                    you… Find another way to demonstrate your love for your teens
                    and learn how to let go of a problem in a way that reflects a
                    loving, respectful attitude.
                  </p>

                  <p>
                    When parents become desperate to make their kids listen, to
                    obey and to respect them, many parents do something drastic.
                    They may go "on strike" or take away all their kids'
                    electronics. Usually teens still tune them out and parents end
                    up feeling angrier, more unheard, and more unappreciated. Most
                    parents don't realize being tough with your teen is quite
                    different from being tough on the problem. What if you… learn
                    how to "Be tough on the problem — not on your teen"
                  </p>
                </div>

                <div className="desc full">
                  <img
                    src="https://d1yei2z3i6k35z.cloudfront.net/7161068/6622714df152f_Screenshot2024-04-19152337.png"
                    alt=""
                  />

                  <h3>Frequently asked questions</h3>

                  <div className="faq">
                    <div className="faq-item">
                      <h4>What if my teen refuses to cooperate?</h4>
                      <p>
                        The beauty of this guide is the focus is on how you can
                        change yourself instead of waiting for your teen to
                        change. That could take a lifetime.
                      </p>
                    </div>

                    <div className="faq-item">
                      <h4>Is this appropriate for all ages?</h4>
                      <p>
                        Yes! This book is geared towards pre-teens and teens but
                        also can be applied to all ages. I had one client tell me
                        they used these Stop Struggling skills to negotiate buying
                        a new home.
                      </p>
                    </div>

                    <div className="faq-item">
                      <h4>
                        Will this guide help me communicate better with my teen?
                      </h4>
                      <p>
                        Absolutely. Our guide teaches specific communication
                        skills along with concrete examples in handling
                        parent-teen issues such as homework, drugs and chores.
                      </p>
                    </div>

                    <div className="faq-item">
                      <h4>
                        How much time does it take to implement the strategies in
                        the guide?
                      </h4>
                      <p>
                        "It can be read in an hour and applied in the next," says
                        a St. Louis Post Dispatch columnist, Doris Helmering.
                      </p>
                    </div>

                    <div className="faq-item">
                      <h4>Are there any additional resources available online?</h4>
                      <p>Got any more questions?</p>
                      <p>Please email me at support@evonneweinhaus.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpsellPage;