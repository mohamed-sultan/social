import TextTitle from './textTitle';
import {cleanup, render} from 'react-native-testing-library';

describe('Home', () => {
  afterEach(cleanup); //Unmounts React trees that were mounted with render to prevent memory leak.
  it('should render correctly', () => {
    const {toJSON} = render( <TextTitle  />);
    expect(toJSON()).toMatchSnapshot(); 
  });
});