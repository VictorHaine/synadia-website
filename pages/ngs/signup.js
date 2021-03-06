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
          <h2>What do you want to connect today?</h2>
          <h3>
            We appreciate you signing up for NGS. In a few short steps we'll
            have you up and running and sending messages.
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

          <CopyCode content="$ curl https://downloads.synadia.com/ngs/install.py -sSf | python" />

          <p>
            This will install the <span className="highlight">ngs</span> utility
            into ~/.ngs/bin. Follow the instructions provided by the ngs utility
            after the download completes to get signed up, and to send your
            first message!
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

          <h3 className="inner">Paid plans</h3>

          <p>
            Signing up for paid plans is similar to signing up for the free plan
            except with a few more steps. In addition to finding plan
            information on{' '}
            <a href="https://synadia.com/ngs/pricing">
              synadia.com/ngs/pricing
            </a>
            , you can view information about current plans locally with the
            following command:
          </p>

          <CopyCode content="$ ngs account plans" />

          <p>
            You'll see the list of available plans, select the one that most
            closely matches your requirements. If your needs exceed any of the
            plans listed, contact us at{' '}
            <a href="mailto:info@synadia.com">info@synadia.com</a> and we’d be
            happy to help create a custom plan for you.
          </p>

          <CopyCode content="$ ngs signup" />

          <p>
            Check your email, within a minute or so you will receive an email
            with a link to a secure payment page. There you can enter your
            payment information and activate your account. Follow the
            instructions to complete the signup process with{' '}
            <span className="highlight">ngs signup</span>. If you leave ngs
            signup running, it will auto-complete. Otherwise you can check your
            account status with:
          </p>

          <CopyCode content="$ ngs account status" />

          <p>
            Information about your NGS account status will be displayed. We bill
            on a monthly basis, so you will see a four week expiry, which will
            be renewed on the next automatic credit card payment.
          </p>

          <p>
            The signup process will generate the necessary credentials to
            activate your account. To test that everything is working, let's
            send our first message.
          </p>

          <CopyCode content="$ ngs demo echo <some text>" />

          <p>
            If successful, you will see something like the following:
          </p>
            <code>
              > ngs demo echo HELLO <br />
              Published [ngs.echo] : 'HELLO'
              <br />
              Received [_INBOX.IUAKVmH8SZfgJc6M666obM.wn1hGbsk] : '[California,
              US]: "HELLO"'
            </code>
          <p>
            Congratulations! You have succesfully registered with NGS and sent your first message on the NGS secure global messaging system.
          </p>

          <p>
            The ngs tool also has built in publishers, subscribers,
	    queue subscribers and request and reply. Feel free to try
	    them out and join the <a href="https://join.slack.com/t/natsio/shared_invite/enQtMzE2NDkxNDI2NTE1LTc5ZDEzYTkwYWZkYWQ5YjY1MzBjMWZmYzA5OGQxMzlkMGQzMjYxNGM3MWYxMjNiYmNjNzIwMTVjMWE2ZDgxZGM"><span className="highlight">NATS Slack Channel</span></a> to get help and information.
          </p>

	  <code>
	    > ngs tool -h<br/>
	    Use one of the NATS tools: pub, sub, qsub, req<br/><br/>

	    Usage:<br/>
	    &nbsp;&nbsp;ngs tool [command]<br/><br/>

	    Available Commands:<br/>
	      &nbsp;&nbsp;pub&nbsp;&nbsp;&nbsp;&nbsp; Publish to a subject on your NGS account<br/>
	      &nbsp;&nbsp;qsub&nbsp;&nbsp;&nbsp;      Subscribe to a subject, as part of a queue, on your NGS account<br/>
	      &nbsp;&nbsp;reply&nbsp;&nbsp;           Listen on a subject on your NGS account, and reply to messages<br/>
	      &nbsp;&nbsp;req&nbsp;&nbsp;&nbsp;&nbsp; Send a request to a subject on your NGS account<br/>
	      &nbsp;&nbsp;sub&nbsp;&nbsp;&nbsp;&nbsp; Subscribe to a subject on your NGS account<br/>
	  </code>

	  <p>
	    When you are ready to program your own NGS client, you can
	    get started with one of our NGS aware clients. We have
	    support
	    for <a href="https://github.com/nats-io/go-nats#new-authentication-nkeys-and-user-credentials"><span className="highlight">Go </span></a>
	    and <a href="https://github.com/nats-io/node-nats#new-authentication-nkeys-and-user-credentials"><span className="highlight">Node.js </span></a>
	    for launch, with more clients to be released soon.
	  </p>

	  <code>
            // Go client
            <br />
            nc, err := Connect(url, UserCreds(“~/.nkeys/synadia/accounts/ngs/users/ngs.creds”)
            <br />
            <br />
            // Node.js client
            <br />
            var nc = NATS.connect(url, NATS.creds('~/.nkeys/synadia/accounts/ngs/users/ngs.creds'));
          </code>

          <p>
	    To learn more about NGS and the NATS technology, please visit <a href="/ngs/how-it-works"><span className="highlight">How it Works</span></a>.
          </p>

	  <p></p>
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
            text-align: left;
          }

          h2 {
            margin-top: -1em;
            margin-bottom: 2em;
          }

          p,
          h2,
          h3,
          h4 {
            display: block;
            max-width: none;
            text-align: left;
          }

          h3.inner {
            font-weight: 600;
            color: var(--color-secondary);
            margin-top: 2em;
          }

          p {
            font-size: 1.5rem;
            max-width: 80%;
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
            text-align: left;
            min-width: none;
          }

          @media (min-width: 1024px) {
            code {
              max-width: 80%;
            }
          }
        `}</style>
      </main>
    );
  }
}
