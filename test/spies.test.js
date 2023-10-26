const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Matrix = require('../Matrix');
const expect = chai.expect;

chai.use(sinonChai);

describe('matrix class', () => {
    let matrix;
    beforeEach(() => {
        matrix = new Matrix(3);
    });

    it('should have a get_matrix method', () => {
        const spy = sinon.spy(matrix, 'get_matrix');
        matrix.get_matrix(3);
        expect(spy).to.have.been.calledOnce;
        expect(spy).to.have.been.calledWith(3);
        spy.restore();
    });

    it('should have a printm method', () => {
        const spy = sinon.spy(matrix, 'printm');
        matrix.printm();
        expect(spy).to.have.been.calledOnce;
        spy.restore();
    });

    it('should have a get_rows method', () => {
        const spy = sinon.spy(matrix, 'get_rows');
        matrix.get_rows();
        expect(spy).to.have.been.calledOnce;
        spy.restore();
    });

    it('should have a get_cols method', () => {
        const spy = sinon.spy(matrix, 'get_cols');
        matrix.get_cols();
        expect(spy).to.have.been.calledOnce;
        spy.restore();
    });

    it('should have a mull_add method', () => {
        const spy = sinon.spy(matrix, 'mull_add');
        matrix.mull_add(1, 2, 3);
        expect(spy).to.have.been.calledOnce;
        expect(spy).to.have.been.calledWith(1, 2, 3);
        spy.restore();
    });

    it('should have an exists_wrong_row method', () => {
        const spy = sinon.spy(matrix, 'exists_wrong_row');
        matrix.exists_wrong_row();
        expect(spy).to.have.been.calledOnce;
        spy.restore();
    });

    it('should have an exists_zero_row method', () => {
        const spy = sinon.spy(matrix, 'exists_zero_row');
        matrix.exists_zero_row();
        expect(spy).to.have.been.calledOnce;
        spy.restore();
    });

    it('should have a swap_with_nonzero_row method', () => {
        const spy = sinon.spy(matrix, 'swap_with_nonzero_row');
        matrix.swap_with_nonzero_row(1);
        expect(spy).to.have.been.calledOnce;
        expect(spy).to.have.been.calledWith(1);
        spy.restore();
    });

    it('should have a get method', () => {
        const spy = sinon.spy(matrix, 'get');
        matrix.get(1, 2);
        expect(spy).to.have.been.calledOnce;
        expect(spy).to.have.been.calledWith(1, 2);
        spy.restore();
    });

    it('should have a set method', () => {
        const spy = sinon.spy(matrix, 'set');
        matrix.set(1, 2, 3);
        expect(spy).to.have.been.calledOnce;
        expect(spy).to.have.been.calledWith(1, 2, 3);
        spy.restore();
    });
    afterEach(() => {
        sinon.restore();
    });
});
