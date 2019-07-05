import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CounterButton, GithubButton } from 'components';
import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

@connect(state => ({
  online: state.online
}))
class Home extends Component {
  static propTypes = {
    online: PropTypes.bool.isRequired
  };

  render() {
    const { online } = this.props;
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home" />
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage} alt="presentation" />
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>

            <p>
              <a
                className={styles.github}
                href="https://github.com/bertho-zero/react-redux-universal-hot-example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" /> View on Github
              </a>
            </p>
            {online && (
              <GithubButton
                user="bertho-zero"
                repo="react-redux-universal-hot-example"
                type="star"
                width={160}
                height={30}
                count
                large
              />
            )}
            {online && (
              <GithubButton
                user="bertho-zero"
                repo="react-redux-universal-hot-example"
                type="fork"
                width={160}
                height={30}
                count
                large
              />
            )}

            <p className={styles.humility}>
              Created by{' '}
              <a href="https://twitter.com/erikras" target="_blank" rel="noopener noreferrer">
                @erikras
              </a>{' '}
              and maintained by{' '}
              <a href="https://github.com/bertho-zero" target="_blank" rel="noopener noreferrer">
                @bertho-zero
              </a>
              .
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.counterContainer}>
            <CounterButton multireducerKey="counter1" />
            <CounterButton multireducerKey="counter2" />
            <CounterButton multireducerKey="counter3" />
          </div>

          <p>This starter boilerplate app uses the following technologies:</p>

          <ul>
            <li>
              <del>Isomorphic</del>{' '}
              <a href="https://medium.com/@mjackson/universal-javascript-4761051b7ae9">Universal</a> rendering
            </li>
            <li>Both client and server make calls to load data from separate API server</li>
            <li>
              <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">
                React
              </a>
            </li>
            <li>
              <a href="https://github.com/rackt/react-router" target="_blank" rel="noopener noreferrer">
                React Router
              </a>
            </li>
            <li>
              <a href="http://expressjs.com" target="_blank" rel="noopener noreferrer">
                Express
              </a>
            </li>
            <li>
              <a href="http://babeljs.io" target="_blank" rel="noopener noreferrer">
                Babel
              </a>{' '}
              for ES6 and ES7 magic
            </li>
            <li>
              <a href="http://webpack.github.io" target="_blank" rel="noopener noreferrer">
                Webpack
              </a>{' '}
              for bundling
            </li>
            <li>
              <a
                href="http://webpack.github.io/docs/webpack-dev-middleware.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Webpack Dev Middleware
              </a>
            </li>
            <li>
              <a href="https://github.com/glenjamin/webpack-hot-middleware" target="_blank" rel="noopener noreferrer">
                Webpack Hot Middleware
              </a>
            </li>
            <li>
              <a href="https://github.com/rackt/redux" target="_blank" rel="noopener noreferrer">
                Redux
              </a>
              's futuristic{' '}
              <a
                href="https://facebook.github.io/react/blog/2014/05/06/flux.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flux
              </a>{' '}
              implementation
            </li>
            <li>
              <a href="https://github.com/gaearon/redux-devtools" target="_blank" rel="noopener noreferrer">
                Redux Dev Tools
              </a>{' '}
              for next generation DX (developer experience). Watch{' '}
              <a href="https://www.youtube.com/watch?v=xsSnOQynTHs" target="_blank" rel="noopener noreferrer">
                Dan Abramov's talk
              </a>
              .
            </li>
            <li>
              <a href="https://github.com/rackt/redux-router" target="_blank" rel="noopener noreferrer">
                Redux Router
              </a>{' '}
              Keep your router state in your Redux store
            </li>
            <li>
              <a href="http://eslint.org" target="_blank" rel="noopener noreferrer">
                ESLint
              </a>{' '}
              to maintain a consistent code style
            </li>
            <li>
              <a href="https://github.com/erikras/react-final-form" target="_blank" rel="noopener noreferrer">
                react-final-form
              </a>{' '}
              to manage form state
            </li>
            <li>
              <a href="https://github.com/erikras/multireducer" target="_blank" rel="noopener noreferrer">
                multireducer
              </a>{' '}
              combine several identical reducer states into one key-based reducer
            </li>
            <li>
              <a href="https://github.com/webpack/style-loader" target="_blank" rel="noopener noreferrer">
                style-loader
              </a>{' '}
              and{' '}
              <a href="https://github.com/jtangelder/sass-loader" target="_blank" rel="noopener noreferrer">
                sass-loader
              </a>{' '}
              to allow import of stylesheets
            </li>
            <li>
              <a href="https://github.com/shakacode/bootstrap-sass-loader" target="_blank" rel="noopener noreferrer">
                bootstrap-sass-loader
              </a>{' '}
              to customize Bootstrap
            </li>
            <li>
              <a href="https://github.com/FortAwesome/Font-Awesome" target="_blank" rel="noopener noreferrer">
                font-awesome
              </a>
            </li>
            <li>
              <a href="http://socket.io/">socket.io</a> for real-time communication
            </li>
          </ul>

          <h3>Features demonstrated in this project</h3>

          <dl>
            <dt>Multiple components subscribing to same redux store slice</dt>
            <dd>
              The <code>App.js</code> that wraps all the pages contains an <code>InfoBar</code> component that fetches
              data from the server initially, but allows for the user to refresh the data from the client.{' '}
              <code>About.js</code> contains a<code>MiniInfoBar</code> that displays the same data.
            </dd>
            <dt>Server-side data loading</dt>
            <dd>
              The <Link to="/chat">Chat page</Link> demonstrates how to fetch data asynchronously from some source that
              is needed to complete the server-side rendering. <code>Chat.js</code>
              's
              <code>provideHooks()</code> function is called before the chat page is loaded, on either the server or the
              client, allowing all the widget data to be loaded and ready for the page to render.
            </dd>
            <dt>Session based login</dt>
            <dd>
              On the <Link to="/login">Login page</Link> you can submit a username which will be sent to the server and
              stored in the session. Subsequent refreshes will show that you are still logged in.
            </dd>
            <dt>Redirect after state change</dt>
            <dd>
              After you log in, you will be redirected to a Login Success page. This <strike>magic</strike> logic is
              performed in <code>getDerivedStateFromProps()</code> in <code>App.js</code>, but it could be done in any
              component that listens to the appropriate store slice, via Redux's <code>@connect</code>, and pulls the
              router from the context.
            </dd>
            <dt>Auth-required views</dt>
            <dd>
              The aforementioned Login Success page is only visible to you if you are logged in. If you try to{' '}
              <Link to="/login-success">go there</Link> when you are not logged in, you will be forwarded back to this
              home page. This
              <strike>magic</strike> logic is performed by the
              <code>onEnter</code> hook within
              <code>routes.js</code>.
            </dd>
            <dt>WebSockets / socket.io</dt>
            <dd>
              The <Link to="/chat">Chat</Link> uses the socket.io technology for real-time communication between
              clients.
            </dd>
          </dl>

          <h3>From the author</h3>

          <p>
            I cobbled this together from a wide variety of similar "starter" repositories. As I post this in June 2015,
            all of these libraries are right at the bleeding edge of web development. They may fall out of fashion as
            quickly as they have come into it, but I personally believe that this stack is the future of web development
            and will survive for several years. I'm building my new projects like this, and I recommend that you do,
            too.
          </p>

          <p>Thanks for taking the time to check this out.</p>

          <p>– Erik Rasmussen</p>
        </div>
      </div>
    );
  }
}

export default Home;
