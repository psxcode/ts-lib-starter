import {expect} from 'chai';
import {main} from './'

describe('main test', function () {

  it('should greet you', function () {

    expect(main('Doge')).eq('Hello Doge')
  });
});
