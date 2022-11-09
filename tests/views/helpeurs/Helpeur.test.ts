import Helpeur from '../../../src/views/helpeurs/Helpeur';

describe('Test addLeadingZero function', () => {
  test('Simple number, 10', () => {
    expect(Helpeur.addLeadingZero(10)).toStrictEqual('10');
  });

  test('Dificult number, 8', () => {
    expect(Helpeur.addLeadingZero(8)).toStrictEqual('08');
  });

  test('Others Dificult number, -4', () => {
    expect(Helpeur.addLeadingZero(-4)).toStrictEqual('-4');
  });
});
