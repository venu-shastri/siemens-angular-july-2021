import { ContactClass } from "./contact";

describe('Contact class tests', () => {
  let contact : ContactClass|null;
  //Executes beforeEach function before each test case
  beforeEach(() => {
    contact = new ContactClass();
  });

  it('should have a valid constructor', () => {
      expect(contact).not.toBeNull();
  });

  it('should set name correctly through constructor', () => {
    contact = new ContactClass('venu');
    expect(contact.name).toEqual('venu');
    });
  //Executes afterEach function after each test case
  afterEach(() => {
    contact = null;
  });
})
