const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Matrix = require('../Matrix');
const expect = chai.expect;

chai.use(sinonChai);

describe('Test of matrix class with stubs', () => {
    let matrixInstance;

    beforeEach(() => {
        matrixInstance = new Matrix(3);
    });

    afterEach(() => {
        matrixInstance = null;
    });

    it('should create a matrix with the correct dimensions', () => {
        expect(matrixInstance.matrix).to.have.lengthOf(3);
        expect(matrixInstance.matrix[0]).to.have.lengthOf(4);
    });

    it('should correctly print the matrix', () => {
        const writeStub = sinon.stub(process.stdout, 'write');
        const logStub = sinon.stub(console, 'log');

        matrixInstance.printm();

        expect(writeStub).to.have.callCount(12);
        expect(logStub).to.have.callCount(3);

        writeStub.restore();
        logStub.restore();
    });

    it('should return the number of rows', () => {
        const rows = matrixInstance.get_rows();
        expect(rows).to.equal(3);
    });

    it('should return the number of columns', () => {
        const cols = matrixInstance.get_cols();
        expect(cols).to.equal(4);
    });
});
