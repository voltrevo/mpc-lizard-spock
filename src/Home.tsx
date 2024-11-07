import './Home.css';
import Ctx from './Ctx';
import isKey from './isKey';
import gameDiagramSrc from './assets/GameDiagram.svg';

export default function Home() {
  const ctx = Ctx.use();
  const hasUrlKey = isKey(window.location.hash.slice(1));

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='title'>Rock Paper Scissors Lizard Spock</div>
      <h2>Rules</h2>
      <div>
        This game is similar to rock paper scissors, but with two extra options:
      </div>
      <img style={{ width: 'calc(0.7 * var(--aw))', alignSelf: 'center' }} src={gameDiagramSrc} />
      <h2>How it Works</h2>
      <ol style={{ margin: 0 }}>
        <li>
          <a href='#' onClick={() => {
            ctx.page.set('Share');
          }}>
            Share
          </a>
          &nbsp;this app with your friend.
        </li>
        <li>Host a session.</li>
        <li>Get your friend to join.</li>
        <li>Choose between rock/paper/etc.</li>
        <li>Result will be calculated.</li>
      </ol>
      <h2>Cryptography</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7em' }}>
        <div>
          This app uses&nbsp;
          <a href='https://github.com/voltrevo/mpc-framework'>
            secure MPC
          </a> to calculate the result while keeping your input secret.
        </div>
        <div>
          That probably sounds a little strange, and that's because it is.
        </div>
        <div>
          The purpose of this app is to open your mind to the power of this
          counter-intuitive technology.
        </div>
      </div>
      <div className='main buttons'>
        <button disabled={hasUrlKey} onClick={() => ctx.page.set('Host')}>
          Host
        </button>
        <button onClick={() => {
          const urlKey = window.location.hash.slice(1);

          if (isKey(urlKey)) {
            ctx.page.set('AutoJoin');
          } else {
            ctx.page.set('Join');
          }
        }}>
          Join
        </button>
      </div>
    </div>
  );
}
