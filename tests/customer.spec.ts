import { Customer, CustomerCollection } from '../src/DSIkea/customer.ts';
import { expect } from 'chai';

describe('Customer', () => {
  it('should create a new instance of Customer', () => {
    const customer = new Customer('1', 'John Doe', 'john@example.com', '123 Main St');
    expect(customer).to.exist;
    expect(customer.getId()).to.equal('1');
    expect(customer.getName()).to.equal('John Doe');
    expect(customer.getContact()).to.equal('john@example.com');
    expect(customer.getAddress()).to.equal('123 Main St');
  });

  it('should update customer details', () => {
    const customer = new Customer('1', 'John Doe', 'john@example.com', '123 Main St');
    customer.setName('Jane Doe');
    customer.setContact('jane@example.com');
    customer.setAddress('456 Elm St');
    expect(customer.getName()).to.equal('Jane Doe');
    expect(customer.getContact()).to.equal('jane@example.com');
    expect(customer.getAddress()).to.equal('456 Elm St');
  });
});

describe('CustomerCollection', () => {
  let customerCollection;

  beforeEach(() => {
    customerCollection = new CustomerCollection();
    customerCollection.addCustomer(new Customer('1', 'John Doe', 'john@example.com', '123 Main St'));
    customerCollection.addCustomer(new Customer('2', 'Jane Doe', 'jane@example.com', '456 Elm St'));
  });

  it('should add customers to the collection', () => {
    expect(customerCollection.getCustomers()).to.have.lengthOf(2);
  });

  it('should find customer index by ID', () => {
    expect(customerCollection.findIndexById('1')).to.equal(0);
    expect(customerCollection.findIndexById('2')).to.equal(1);
    expect(customerCollection.findIndexById('3')).to.equal(-1); // Non-existing ID
  });
});
