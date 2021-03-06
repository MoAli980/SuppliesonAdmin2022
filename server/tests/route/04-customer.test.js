import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../../index';
import Customer from '../../models/customer.model';
import Supplier from '../../models/supplier.model';


const debug = require('debug')('app:customer.test');

chai.config.includeStack = true;

describe('## Customers', () => {
  describe('# POST /api/customers/invite', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'ahmed@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should invite customer ', (done) => {
      request(app)
        .post('/api/customers/invite')
        .set('Authorization', `Bearer ${token}`)
        .send({
          customerEmail: 'contact@supplieson.com',
          exceedPaymentDate: true,
          exceedCreditLimit: true
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });
  describe('# POST /api/customers/invite', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'ahmed@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should invite customer ', (done) => {
      request(app)
        .post('/api/customers/invite')
        .set('Authorization', `Bearer ${token}`)
        .send({
          customerEmail: 'kh.haboub@gmail.com',
          exceedPaymentDate: true,
          exceedCreditLimit: true
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });
  describe('# POST /api/customers/invite', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'mohammed.a@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should invite customer ', (done) => {
      request(app)
        .post('/api/customers/invite')
        .set('Authorization', `Bearer ${token}`)
        .send({
          customerEmail: 'contact@supplieson.com',
          exceedPaymentDate: true,
          exceedCreditLimit: true
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });
  describe('# POST /api/customers/invite', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'ahmed@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should invite customer ', (done) => {
      request(app)
        .post('/api/customers/invite')
        .set('Authorization', `Bearer ${token}`)
        .send({
          customerEmail: 'm.nasrallah@indielabs.sa',
          exceedPaymentDate: true,
          exceedCreditLimit: true
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });
  describe('# POST /api/customers/invite', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'ahmed@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should invite customer ', (done) => {
      request(app)
        .post('/api/customers/invite')
        .set('Authorization', `Bearer ${token}`)
        .send({
          customerEmail: 'nagy@indielabs.sa',
          exceedPaymentDate: true,
          exceedCreditLimit: true
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });

  describe('# POST /api/customers/invite', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'mohammed.a@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should invite customer ', (done) => {
      request(app)
        .post('/api/customers/invite')
        .set('Authorization', `Bearer ${token}`)
        .send({
          customerEmail: 'asma@indielabs.sa',
          exceedPaymentDate: true,
          exceedCreditLimit: true
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });


  describe('# POST /api/customers', () => {
    it('should be created user and customer object- supplieson Customer', (done) => {
      request(app)
        .post('/api/customers')
        .send({
          coordinates: ['26.316458', '50.146796'],
          representativeName: 'supplieson customer',
          commercialRegister: '1113335556',
          commercialRegisterPhoto: 'data:image/jpeg;base64,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',
          commercialRegisterExpireDate: '2018-01-01',
          userEmail: 'contact@supplieson.com',
          userMobilePhone: '966552367688',
          userFirstName: 'supplieson',
          userLastName: 'customer',
          userPassword: 'asd12345',
          address: 'customer\'s address',
          language: 'ar',
          photo: '1fbdcdb97fbfdf5852f5dd7934d9a7e3',
          coverPhoto: '1fbdcdb97fbfdf5852f5dd7934d9a7e3'
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });
  describe('# POST /api/customers', () => {
    it('should be created user and customer object- haboub customer', (done) => {
      request(app)
        .post('/api/customers')
        .send({
          coordinates: ['26.316458', '50.146678'],
          representativeName: 'khaleel haboub',
          commercialRegister: '1113332386',
          commercialRegisterPhoto: 'data:image/jpeg;base64,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',
          commercialRegisterExpireDate: '2018-01-01',
          userEmail: 'kh.haboub@gmail.com',
          userMobilePhone: '966551567688',
          userFirstName: 'haboub',
          userLastName: 'khaleel',
          userPassword: 'asd12345',
          address: 'Mecca',
          language: 'en',
          photo: '1fbdcdb97fbfdf5852f5dd7934d9a7e3',
          coverPhoto: '1fbdcdb97fbfdf5852f5dd7934d9a7e3'
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });
  describe('# POST /api/customers', () => {
    it('should be created user and customer object - customerTesting customer', (done) => {
      request(app)
        .post('/api/customers')
        .send({
          coordinates: ['26.316458', '50.146796'],
          representativeName: 'customerTesting',
          commercialRegister: '1113343543',
          commercialRegisterPhoto: 'data:image/jpeg;base64,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',
          commercialRegisterExpireDate: '2018-01-01',
          userEmail: 'm.nasrallah@indielabs.sa',
          userMobilePhone: '966514026588',
          userFirstName: 'testing',
          userLastName: 'customer',
          userPassword: 'asd12345',
          address: 'Mecca',
          language: 'ar',
          photo: '1fbdcdb97fbfdf5852f5dd7934d9a7e3',
          coverPhoto: '1fbdcdb97fbfdf5852f5dd7934d9a7e3'
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });
  describe('# POST /api/customers', () => {
    it('should be created user and customer object - customerTesting customer', (done) => {
      request(app)
        .post('/api/customers')
        .send({
          coordinates: ['26.316458', '50.146796'],
          representativeName: 'Attalla',
          commercialRegister: '1113343863',
          commercialRegisterPhoto: 'data:image/jpeg;base64,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',
          commercialRegisterExpireDate: '2018-01-01',
          userEmail: 'asma@indielabs.sa',
          userMobilePhone: '966514035988',
          userFirstName: 'Attalla',
          userLastName: 'customer',
          userPassword: 'asd12345',
          address: 'Mecca',
          language: 'ar',
          photo: '1fbdcdb97fbfdf5852f5dd7934d9a7e3',
          coverPhoto: '1fbdcdb97fbfdf5852f5dd7934d9a7e3'
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });
  describe('# POST /api/customers', () => {
    it('should be created user and customer object- GuestCustomer customer', (done) => {
      request(app)
        .post('/api/customers')
        .send({
          coordinates: ['26.316458', '50.146796'],
          representativeName: 'Guest_Nagy_Hasab',
          commercialRegister: '1148563543',
          commercialRegisterPhoto: 'data:image/jpeg;base64,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',
          commercialRegisterExpireDate: '2018-01-01',
          userEmail: 'nagy.hasab@hotmail.com',
          userMobilePhone: '966511436588',
          userFirstName: 'Nagy',
          userLastName: 'Hasab',
          userPassword: 'asd12345',
          address: 'Mecca',
          language: 'ar',
          photo: '1fbdcdb97fbfdf5852f5dd7934d9a7e3',
          coverPhoto: '1fbdcdb97fbfdf5852f5dd7934d9a7e3'
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.body.status).to.includes('Failure');
          }
          done();
        });
    });
  });
  describe('# POST /api/customers', () => {
    it('should be created user and customer object', (done) => {
      request(app)
        .post('/api/customers')
        .send({
          coordinates: ['26.316458', '50.146796'],
          representativeName: 'Nagy',
          commercialRegister: '1113444556',
          commercialRegisterPhoto: 'data:image/jpeg;base64,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',
          commercialRegisterExpireDate: '2018-01-01',
          userEmail: 'nagy@indielabs.sa',
          userMobilePhone: '966512224576',
          userFirstName: 'Nagy',
          userLastName: 'hasab',
          userPassword: 'asd12345',
          address: 'Mecca',
          language: 'ar',
          photo: '1fbdcdb97fbfdf5852f5dd7934d9a7e3',
          coverPhoto: '1fbdcdb97fbfdf5852f5dd7934d9a7e3'
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });


  describe('# GET /api/customers - [Supplier Token]', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'ahmed@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should get list of customers', (done) => {
      request(app)
        .get('/api/customers?skip=0&limit=10')
        .set('Authorization', `Bearer ${token}`)

        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });
  describe('# GET /api/customers - [Admin Token]', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'khaleel@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should get list of customers', (done) => {
      request(app)
        .get('/api/customers?skip=0&limit=10')
        .set('Authorization', `Bearer ${token}`)

        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });

  describe('# GET /api/customers/:customerId - [Supplier Token]', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'ahmed@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should get customer', (done) => {
      Customer.find({ representativeName: 'khaleel haboub' })
        .then((customer) => {
          const customerId = customer.map(c => c._id);
          request(app)
            .get(`/api/customers/${customerId}`)
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
              if (err) { debug(err); } else {
                expect(res.status).to.equal(200);
                expect(res.body.status).to.includes('Success');
              }
              done();
            });
        });
    });
  });


  describe('# GET /api/customers/:customerId', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'ahmed@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should get a specific customer', (done) => {
      Customer.find({ representativeName: 'khaleel haboub' })
        .then((customer) => {
          const customerId = customer.map(c => c._id);
          request(app)
            .get(`/api/customers/${customerId}`)
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
              if (err) { debug(err); } else {
                expect(res.status).to.equal(200);
                expect(res.body.status).to.includes('Success');
              }
              done();
            });
        });
    });
  });
  describe('# GET /api/customers/current', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'contact@supplieson.com',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should get current customer', (done) => {
      request(app)
        .get('/api/customers/current')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });

  describe('# PUT /api/customers', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'kh.haboub@gmail.com',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should update customer ', (done) => {
      request(app)
        .put('/api/customers')
        .set('Authorization', `Bearer ${token}`)
        .send({
          representativeName: 'khaleel haboub',
          commercialRegister: '1113333555',
          commercialRegisterPhoto: 'data:image/jpeg;base64,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',
          commercialRegisterExpireDate: '2018-01-01',
          user: {
            email: 'kh.haboub@gmail.com',
            mobileNumber: '0514024576',
            firstName: 'khaleel',
            lastName: 'al haboub',
            type: 'Customer',
            language: 'en'
          },
          coverPhoto: '1fbdcdb97fbfdf5852f5dd7934d9a7e3',
          location: {
            address: 'Mecca',
            coordinates: [
              26.256458,
              50.125466
            ]
          },
          photo: '1fbdcdb97fbfdf5852f5dd7934d9a7e3'
        })
        .end((err, res) => {
          if (err) { debug(err); } else {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.includes('Success');
          }
          done();
        });
    });
  });
  describe('# PUT api/customers/supplier/:customerId', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'ahmed@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should update supplier\'s relation to customer', (done) => {
      Customer.find({ representativeName: 'khaleel haboub' })
        .then((customer) => {
          const customerId = customer.map(c => c._id);
          request(app)
            .put(`/api/customers/supplier/${customerId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
              status: 'Active',
              creditLimit: 100000,
              paymentInterval: 'Monthly',
              productPrices: []
            })
            .end((err, res) => {
              if (err) { debug(err); } else {
                expect(res.status).to.equal(200);
                expect(res.body.status).to.includes('Success');
              }
              done();
            });
        });
    });
  });

  describe('# PUT /api/customers/block/customerId- Block Customer', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'ahmed@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should block customer ', (done) => {
      Customer.find({ representativeName: 'customertesting' })
        .then((customer) => {
          const customerId = customer.map(c => c._id);

          request(app)
            .put(`/api/customers/block/${customerId}`)
            .set('Authorization', `Bearer ${token}`)

            .end((err, res) => {
              if (err) { debug(err); } else {
                expect(res.status).to.equal(200);
                expect(res.body.status).to.includes('Success');
              }
              done();
            });
        });
    });
  });
  describe('# PUT /api/customers/unblock/customerId - Unblock supplier', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'ahmed@indielabs.sa',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should unblock customer', (done) => {
      Customer.find({ representativeName: 'customertesting' })
        .then((customer) => {
          const customerId = customer.map(c => c._id);

          request(app)
            .put(`/api/customers/unblock/${customerId}`)
            .set('Authorization', `Bearer ${token}`)

            .end((err, res) => {
              if (err) { debug(err); } else {
                expect(res.status).to.equal(200);
                expect(res.body.status).to.includes('Success');
              }
              done();
            });
        });
    });
  });

  describe('# GET /api/suppliers/:supplierId - [Customer Auth]', () => {
    let token = null;
    before((done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'contact@supplieson.com',
          password: 'asd12345'
        })
        .expect(httpStatus.OK)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should get supplier', (done) => {
      Supplier.findOne({ representativeName: 'zieny\'s supplies' })
        .then((supplier) => {
          const supplierId = supplier._id;
          request(app)
            .get(`/api/suppliers/${supplierId}`)
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
              if (err) { debug(err); } else {
                expect(res.status).to.equal(200);
                expect(res.body.status).to.includes('Success');
              }
              done();
            });
        });
    });
  });
});
