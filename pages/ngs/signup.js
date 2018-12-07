import React from 'react';
import Header from '../../components/Header';
import CopyCode from '../../components/CopyCode';
import Footer from '../../components/Footer';

export default class Pricing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header internal />
        <section>
          <h2>Signing up for NGS</h2>
          <h3>
            We appreciate you signing up for NGS. In a few short steps we'll
            have you up and running.
          </h3>

          <h3 className="inner">Installation of the NGS utility</h3>

          <p>
            The first thing you'll need to do is install the NGS{' '}
            <span className="highlight">CLI</span> (Command Line Interface). The{' '}
            <span className="highlight">ngs</span> utility is used to signup and
            administer your NGS account.
          </p>

          <p>
            The installation process is straightforward. Open up a command
            prompt and type the following:
          </p>

          <CopyCode content="$ curl -L https://downloads.synadia.com/ngs/install.py | python" />

          <p>
            This will install the <span className="highlight">ngs</span> utility
            into a ~/.ngscli/bin directory. Follow the instructions provided by
            the ngs utility after the download completes to setup your
            environment.
          </p>

          <p>
            You can get usage help anytime by executing{' '}
            <span className="highlight">ngs -h</span>.
          </p>

          <h3 className="inner">The Free Plan</h3>

          <p>
            To sign up for a free account you'll use the{' '}
            <span className="highlight">ngs signup</span> command
          </p>

          <CopyCode content="$ ngs signup --free" />

          <p>
            You'll see information about creating your private account on the
            NGS global digital service. Follow the instructions provided by the
            ngs utility, and in no time your free global service subscription
            will be set up. Your account token will automatically be uploaded to
            the global service allowing you to connect.
          </p>

          <p>
            After the project has been created, be sure to{' '}
            <span className="highlight">securely backup the private nkeys</span>{' '}
            generated by the signup process.
          </p>

          <h3 className="inner">Paid plans</h3>

          <p>
            Signing up for paid plans is similar to signing up for the free plan
            except with a few more steps. In addition to finding plan
            information on synadia.com/ngs/pricing, you can view information
            about current plans locally with the following command:
          </p>

          <CopyCode content="$ ngs account plans" />

          <p>
            You'll see a list of available plans. Check out the plan details and
            choose one you'd like to subscribe to - we'll ask you which one in
            the next step when we create your account.
          </p>

          <CopyCode content="$ ngs signup" />

          <p>
            You'll see the list of available plans, select the one that most
            closely matches your requirements. If your needs exceed any of the
            plans listed, contact us at{' '}
            <a href="mailto:info@synadia.com">info@synadia.com</a> and we’d be
            happy to help create a custom plan for you.
          </p>

          <p>
            The signup process will generate your nkeys and show you where they
            are stored. An account token will automatically be uploaded and
            signed by an operator allowing you to connect once activated.
          </p>

          <p>
            First you’ll be prompted to choose a plan, followed by a request
            for an email; enter the email for which you'd like to get the NGS
            project confirmation and account updates. You’ll be able to
            confirm the plan you’ve selected; select OK if everything is
            accurate.
          </p>

          <p>
            Check your email! Within a few minutes you will receive an email
            with a link to a secure payment. There you can enter your payment
            information and activate your account. Follow the instructions to
            complete the signup process with{' '}
            <span className="highlight">ngs signup</span>. If you leave ngs
            signup running, it will auto-complete. Otherwise you can check your
            account status with:
          </p>

          <CopyCode content="$ ngs account status" />

          <p>
            Information about your NGS subscription account status will be
            displayed. We bill on monthly basis, so you will see a four week
            expiry, which will be renewed on the next automatic credit card
            payment.
          </p>

          <p>
            After the project has been created, be sure to{' '}
            <span className="highlight">securely backup the private nkeys</span>{' '}
            generated by the signup process.
          </p>
        </section>

        <Footer simple />
        <style jsx>{`
          main {
            padding-top: 25vh;
            position: relative;
            background-image: url('/static/images/bg.png');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: 50% 2%;
          }

          section {
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem;
          }

          h2 {
            margin-top: -1em;
            margin-bottom: 2em;
          }

          p,
          h2,
          h3 {
            display: block;
            text-align: left;
            max-width: none;
          }

          h3.inner {
            font-weight: 600;
            color: var(--color-secondary);
            margin-top: 2em;
          }

          p {
            font-size: 1.25rem;
          }

          p:last-of-type {
            margin-bottom: 8rem;
          }

          .highlight {
            color: var(--color-secondary);
          }

          code {
            display: block;
            padding: 1.2em 1.3em;
            background-color: #1a1c1d;
            color: var(--color-secondary);
          }

          @media (min-width: 1024px) {
            code {
              width: 60%;
            }
          }
        `}</style>
      </main>
    );
  }
}
