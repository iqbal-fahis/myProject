import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'
test("First snapshot testt", ()=>{
  const component=renderer.create(
    <App/>
  
  );
  let tree=component.toJSON();
  expect(tree).toMatchSnapshot();
})