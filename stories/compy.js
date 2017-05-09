import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CompyComponent from '../src/components/compy';
import ConnectedCompyComponent from '../src/components/';

storiesOf('CompyComponent', module)
  .add('connected to store', () => <ConnectedCompyComponent />)
  .add('enabled', () => <CompyComponent status="enabled" />)
  .add('disabled', () => <CompyComponent status="disabled" />);
