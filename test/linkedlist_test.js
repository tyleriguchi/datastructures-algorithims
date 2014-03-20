var expect = require('chai').expect,
    LinkedList = require('../data-structures/linkedlist').LinkedList;

describe('Linked list', function() {
  var linkedlist = new LinkedList();

  // beforeEach(function() {
  //   linkedlist = new LinkedList();
  // });

  describe('linkedlist methods', function() {
    it('be empty', function() {
      expect(linkedlist.empty()).to.be.ok;
    })
    it('add values', function() {
      linkedlist.push(5);
      linkedlist.push(1);
      expect(linkedlist.size()).to.be.eql(2);
    });

    it('contain value', function() {
      expect(linkedlist.isElement(5)).to.be.ok;
    });

    it('pop value', function() {
      expect(linkedlist.pop(1)).to.be.eql(5);
    });


  });
});
