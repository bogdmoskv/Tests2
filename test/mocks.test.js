const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Matrix = require('../Matrix');
const expect = chai.expect;

chai.use(sinonChai);

describe('matrix', () => {
    let instance;
    beforeEach(() => {
        instance = new Matrix(3);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should print a matrix', () => {
        const writeSpy = sinon.spy(process.stdout, 'write');
        const logSpy = sinon.spy(console, 'log');

        instance.printm();

        expect(writeSpy).to.have.callCount(15);
        expect(logSpy).to.have.been.callCount(3);
    });

    it('should get the number of rows', () => {
        const rows = instance.get_rows();
        expect(rows).to.equal(3);
    });

    it('should get the number of columns', () => {
        const cols = instance.get_cols();
        expect(cols).to.equal(4);
    });

    it('should add rows', () => {
        instance.mull_add(0, 1, 2);
        const result = instance.get(0, 2);
        expect(result).to.equal(0);
    });

    it('should detect wrong rows', () => {
        const result = instance.exists_wrong_row();
        expect(result).to.be.false;
    });

    it('should detect zero rows', () => {
        const result = instance.exists_zero_row();
        expect(result).to.be.true;
    });

    it('should swap rows with non-zero elements', () => {
        instance.set(0, 1, 1);
        instance.swap_with_nonzero_row(0);
        const result = instance.get(0, 1);
        expect(result).to.equal(1);
    });

    it('should get a specific element', () => {
        instance.set(2, 3, 5);
        const result = instance.get(2, 3);
        expect(result).to.equal(5);
    });

    it('should set a specific element', () => {
        instance.set(1, 2, 3);
        const result = instance.get(1, 2);
        expect(result).to.equal(3);
    });
});
