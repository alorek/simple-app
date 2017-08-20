import { titleize } from './textUtils';

describe('titleize', () => {
    it('returns titleized version of the string', () => {
        expect(titleize('hello world')).toBe('Hello World');
        expect(titleize('HELLO WORLD')).toBe('Hello World');
        expect(titleize(true)).toBe('True');
        expect(titleize(1)).toBe('1');
        expect(titleize(undefined)).toBe('Undefined');
        expect(titleize('hello-world')).toBe('Hello-World');
    });
});
