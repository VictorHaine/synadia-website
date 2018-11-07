import React from 'react';
import AOS from 'aos';
import Header from '../components/Header';
import ParticleWave from '../components/Particles/ParticleWave';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: [
        {
          name: 'Derek Collison',
          position: 'Founder & CEO',
          bio:
            'Entrepreneur, Investor, and Technologist. Creator of @nats_io and @cloudfoundry',
          links: {
            twitter: 'derekcollison',
            linkedin: 'derekcollison',
            github: 'derekcollison'
          }
        },
        {
          name: 'Colin Sullivan',
          position: 'Product Management',
          bio: 'Product Manager',
          links: {
            twitter: 'ColinSullivan01',
            linkedin: 'colinsullivan',
            github: 'ColinSullivan1'
          }
        },
        {
          name: 'Ginger Collison',
          position: 'Community',
          bio: 'Developer Advocate & Community Manager',
          links: {
            twitter: 'crashgingerly',
            linkedin: 'ginger-collison',
            github: 'gcolliso'
          }
        },
        {
          name: 'Ivan Kozlovic',
          position: 'Engineering',
          bio: 'Software Engineer',
          links: {
            twitter: 'ivankozlovic',
            linkedin: 'ivankozlovic',
            github: 'kozlovic'
          }
        },
        {
          name: 'Waldemar Quevedo',
          position: 'Engineering',
          bio: 'Software Engineer',
          links: {
            twitter: 'wallyqs',
            linkedin: 'waldemarquevedo',
            github: 'wallyqs'
          }
        },
        {
          name: 'Alberto Ricart',
          position: 'Engineering',
          bio: 'Software Engineer',
          links: {
            twitter: 'albertoricart',
            linkedin: 'albertoricart',
            github: 'aricart'
          }
        },
        {
          name: 'Stephen Asbury',
          position: 'Engineering',
          bio: 'Software Engineer',
          links: {
            twitter: 'thesasbury',
            linkedin: 'stasbury',
            github: 'sasbury'
          }
        },
        {
          name: 'David Kemper',
          position: 'Engineering',
          bio: 'Software Engineer',
          links: {
            linkedin: 'david-kemper-531bb038',
            github: 'davidkemper'
          }
        }
      ]
    };
  }

  componentDidMount() {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-in-out'
    });
  }

  render() {
    const foregroundParallax = [
      {
        start: 'self',
        startOffset: 0,
        duration: 1000,
        easing: 'easeInOut',
        properties: [
          {
            startValue: -50,
            endValue: 0,
            property: 'translateY'
          }
        ]
      }
    ];

    return (
      <main>
        <Header />
        <section id="home" className="first-fold">
          <ParticleWave />
          <h1>
            Connect Everything
            <div className="freckle">.</div>
          </h1>
        </section>
        <section id="about" className="about">
          <h3>
            At Synadia, we believe there is an opportunity{' '}
            <br className="desktop--only" />
            to create the first decentralized, <br className="desktop--only" />
            <span className="highlight">
              secure global utility,powered by{' '}
              <a className="link" href="https://nats.io">
                NATS.io
              </a>
              ,{' '}
            </span>
            <br className="desktop--only" />
            to connect all digital systems, services and devices.
          </h3>
          <h3>
            This offering will be decentralized by design,{' '}
            <br className="desktop--only" />
            secure by default, globally available,{' '}
            <br className="desktop--only" />
            and easy to use and manage.
          </h3>
        </section>
        <section id="team">
          <h2>Meet the Team</h2>
          <h4>
            With 100+ years of combined experience in engineering and messaging,
            the good people of Synadia provide a wealth of knowledge aimed at
            challenging how the world connects.
          </h4>
          <Team members={this.state.team} />
        </section>
        <Footer />
        <style jsx>{`
          .first-fold {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: 74vh;
            width: 100vw;
            margin: 100px auto 0 auto;
            margin-bottom: 5vh;
          }

          h1 .freckle {
            display: inline-block;
            position: relative;
          }

          h1 .freckle:after {
            position: absolute;
            right: 0;
            bottom: 0;
            height: 1.2rem;
            width: 1.2rem;
            border-radius: 100%;
            background: var(--horizontal-gradient);
            transform: translate(-15%, -65%);
            opacity: 0;
            animation: appear 1s ease 50ms forwards;
          }

          @keyframes appear {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .about {
            margin-bottom: 12rem;
          }

          .highlight {
            color: var(--color-secondary);
          }

          @media (min-width: 768px) {
            .first-fold {
              justify-content: center;
              height: 65vh;
              margin-bottom: 35vh;
            }
            .freckle:after {
              content: '';
            }
          }
        `}</style>
      </main>
    );
  }
}
