import * as React from 'react';
import { Grid } from 'patternfly-react';

import Definition from '../components/Definition';

function HomePage() {
  const graphql_uri = process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000/graphql';

  return (
    <Grid fluid className="container-pf-nav-pf-vertical">
      <Grid.Row>
        <Grid.Col xs={12}>
          <div className="page-header">
            <h1>Overview</h1>
          </div>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={12}>This web application is the visual representation of the App-Interface.</Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={12}>
          <Definition
            items={[
              ['Data', <a href={process.env.REACT_APP_DATA_DIR_URL}>{process.env.REACT_APP_DATA_DIR_URL}</a>],
              ['Docs', <a href={process.env.REACT_APP_DOCS_BASE_URL}>{process.env.REACT_APP_DOCS_BASE_URL}</a>],
              ['Schemas', <a href={process.env.REACT_APP_SCHEMAS_DIR}>{process.env.REACT_APP_SCHEMAS_DIR}</a>],
              ['GraphQL', <a href={graphql_uri}>{graphql_uri}</a>]
            ]}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
}

export default HomePage;
