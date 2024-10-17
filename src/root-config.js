export default `
  <single-spa-router>
    <nav>
      <a href='/editorial'>Editorial</a>
      <a href='/media-library'>Media Library</a>
      <a href='/role-access'>Role Access</a>
      <a href='/real-time-editor'>Real-Time Editor</a>
    </nav>
    <main>
      <route path="/editorial" exact>
        <application name="cms-react-editorial"></application>
      </route>
      <route path="/media-library" exact>
        <application name="cms-vue-media"></application>
      </route>
      <route path="/role-access" exact>
        <application name="cms-angular-auth"></application>
      </route>
      <route path="/real-time-editor" exact>
        <application name="cms-svelte-collab"></application>
      </route>
    </main>
  </single-spa-router>
`;
