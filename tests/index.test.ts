import swaggerToTS, { Options } from '../src';

describe('swaggerToTS', () => {
  it('is able to parse a Swagger 2 spec', () => {
    const spec = { definitions: {} };
    const options: Options = { swagger: 2, warning: false };

    expect(swaggerToTS(spec, options)).toBe('declare namespace OpenAPI2 {}\n');
  });

  it('errs on other options', () => {
    const spec = { definitions: {} };
    const options: Options = { swagger: 1, warning: false };
    expect(() => swaggerToTS(spec, options)).toThrowError();
  });

  it('should not render a wrapper when passing false', () => {
    const spec = { definitions: {} };
    const options: Options = { swagger: 2, wrapper: false, warning: false };
    expect(swaggerToTS(spec, options)).toBe('');
  });
});
