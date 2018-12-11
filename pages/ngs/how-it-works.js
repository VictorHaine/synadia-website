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
          <h2>How it works/FAQ</h2>

          <h3 className="inner">Concepts</h3>

          <p>
            NGS is a communications system built on{' '}
            <a hre="https://nats.io">NATS.io</a>. It allows digital systems,
            services and devices to communicate through the exchange of
            messages. To connect to the system, users need a single worldwide
            accessible url, and their credentials. Once connected, messages are
            sent and received via subjects. Subjects are comprised of one or
            more tokens. See{' '}
            <a href="https://nats.io/documentation/writing_applications/subjects/">
              NATS subjects
            </a>{' '}
            for more information. Subscribers in the system that subscribe to a
            matching subject will receive the message. Subscribers can listen to
            subjects that have wildcards that can match multiple publish
            subjects. Core NATS is an At-Most-Once QoS system. NGS/NATS supports
            three basic communication primitives. Publish/Subscribe,
            Request/Reply, and Distributed Queues. See{' '}
            <a href="https://nats.io/documentation/writing_applications/concepts/">
              NATS Concepts
            </a>{' '}
            for mor information.
          </p>

          <h3 className="inner">Authentication and Authorization</h3>

          <p>
            When connecting to NGS, the system will identify the user associated
            with the credentials for your account. NGS uses a security mechanism
            where you do not give the system your private keys, only public
            keys. The keys are an encoded form of Ed25519 key used to represent
            identities in NATS, known as nkeys. The Nkey seeds generated by the
            signup process are <span className="highlight">SECRET</span>. Do not
            share them with anyone you do not trust, they are yours and yours
            alone. If you lose them, you will lose access to your NGS account
            for that user, so be sure to back them up in a secure place. The NGS
            system never stores or even has access to your secret credentials.
            When you signed up the NGS tool created an Nkey keypair on your
            local computer that has never been shared with the NGS system. We
            will discuss credentials and the process in more depth in a
            following section. By default, users can send and receive messages
            on any subjects they chose. NGS allows fine-grained control of these
            authorizations however, and users can be updated easily to only be
            allowed to publish or subscribe on certain subjects through the
            NGS/NATS authorization primitives.
          </p>

          <h3 className="inner">Creating Additional Users</h3>

          <p>
            You can add new users to your account through{' '}
            <span className="highlight">ngs add user</span> command.
          </p>

          <code>
            $ ngs add user --name bob
            <br />
            Generated user credentials
            "~/.nkeys/synadia/accounts/ngs/users/bob.creds"
          </code>

          <p>
            When you create a new user, an nkey is generated to represent that
            user in NGS/NATS. This Nkey pair allows a user to prove that it is
            who its says it is. The user credemtials will be signed for by the
            account owner, which is your default account that was granted at
            signup. You can setup permissions for a user, set activation time,
            expiration time, and set other limits. For more information, use the{' '}
            <span className="highlight">ngs add user --help</span> command.
          </p>

          <h3 className="inner">Accounts</h3>

          <p>
            When you signed up with NGS, the NGS system created an account for
            you and a default user. The account credentials were signed by the
            operator, in this case Synadia. The account is the owner of the
            users we were creating above. Accounts define the subject space that
            users will operate in. More specifically, by default only users in
            the same account can send and receive messages. This provides a
            default secure isolation context for the subject space.
          </p>

          <h3 className="inner">Accounts and Sharing Options</h3>

          <p>
            NGS is a secure multi-tenant system. Many accounts will be present
            in the system at any given time. As we stated above, the default
            mode is that any messages sent from an account can only be received
            bny users in the same account. However, there are ways to share data
            between accounts in an easy but highly secure way.
          </p>

          <h3 className="inner">Streams and Services</h3>

          <p>
            Streams and Services are concepts we introduce to define which data
            we would like to share. Services are endpoints where we can receive
            a request through a subscriber and respond with the appropriate
            answer. Streams are outbound event streams that result when a user
            publishes a message to a subject. Both of these can be exported for
            other users from a different account to access.
          </p>

          <h3 className="inner">Exports and Imports</h3>

          <p>
            The way an account offers streams and services for use by other
            accounts is through an export statement. And export statement
            specifies which subject ios being exported, if it is a stream or a
            service, and whether or not authorization is required by the account
            owner for another account to access. The way an account would
            consume these streams or services is through an import statement.
            The import statement specifies the source account, the subject and
            type of the import and where the system should map the subject into
            the new accounts subject space. This allows the consuming account to
            maintain ownership and control over its own subject space. Lastly,
            if an export is not considered to be public, the source account must
            sign an authorization for the destination account, subject and type
            that is included, or referenced, in the destination account's import
            statment. Without authroization for non-public exports, the import
            statement will fail once checked by the NGS system.
          </p>

          <h3 className="inner">Stream Exports</h3>

          <p>
            To export a stream or service, add an export statement to the
            specified account.
          </p>

          <code>
            $ ngs add export --account myaccount --subject "weather.CA"
          </code>

          <p>
            This updates and uploads your token. If you publish messages to the
            “weather.CA” subject, any other NGS customer who has imported
            “weather.CA” can consume those messages.
          </p>

          <h3 className="inner">Service Exports</h3>

          <code>
            $ ngs add export --service --account myaccount --subject "ip.geo "
          </code>

          <p>
            This exposes a service for other NGS customers to import, allowing
            your account to send requests to "ip.geo".
          </p>

          <p>
            There are more options for exporting streams and services, see{' '}
            <span className="highlight">ngs add export --help</span> for more
            information.
          </p>

          <h3 className="inner">Imports</h3>

          <p>
            On paid plans, you can import streams and services. There are
            imposed limits to how many, please check your plan type. Doing an
            import is accomplished through the{' '}
            <span className="highlight">ngs add import</span>. You may be
            required to provide an authorization token if the export is not
            public.
          </p>

          <code>$ ngs add import</code>

          <p>
            There are more options for importing streams and services, see{' '}
            <span className="highlight">ngs add import --help</span> for more
            information.
          </p>

          <h3 className="inner">Additional Commands</h3>

          <p>
            The <span className="highlight">ngs</span> utility can be used to
            add, remove, and edit users, imports, and exports. See{' '}
            <span className="highlight">ngs --help</span> for more information.
            Note that while NGS is a general NATS utility, only commands related
            to signup, users, import, and exports will be supported on the
            Synadia operated global digital network.
          </p>

          <h3 className="inner">Connecting an Application</h3>

          <p>
            Supported Clients use the standard NATS APIs, except there is a new
            credentials option available to connect with and accept a
            credentials file. This is required to connect to NGS. The
            credentials file is a chained file with both a user JWT and the
            seed/private Nkey for signing the challenge from the server.
          </p>

          <code>
            // Go client
            <br />
            nc, err := Connect(url,
            UserCreds(“~/.nkeys/synadia/accounts/ngs/users/bob.creds”)
            <br />
            <br />
            // Node.js client
            <br />
            var nc = NATS.connect(uri,
            NATS.creds('~/.nkeys/synadia/accounts/ngs/users/bob.creds'));
          </code>
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

          code {
            min-width: 60%;
            max-width: 80%;
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
            text-align: left;
            max-width: none;
          }

          p {
            max-width: 80%;
          }

          h3.inner {
            font-weight: 600;
            color: var(--color-secondary);
            margin-top: 2em;
          }

          h4 {
            padding-left: 20px;
            font-weight: bold;
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
            min-width: 80%;
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
