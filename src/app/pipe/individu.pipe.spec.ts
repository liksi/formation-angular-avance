import { IndividuPipe } from './individu.pipe';

describe('IndividuPipe', () => {
  it('create an instance', () => {
    const pipe = new IndividuPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new IndividuPipe();
    const value = pipe.transform( {
      firstname: 'Teddy',
      surname: 'Bear'
    });

    expect(value).toEqual('Teddy Bear');
  });
});
