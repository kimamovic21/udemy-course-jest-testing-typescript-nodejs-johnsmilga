import { OrderService } from './OrderService';

class InventoryServiceStub {
  private inStock: boolean = true;

  setInStock(value: boolean) {
    this.inStock = value;
  };

  checkStock(_productId: string): boolean {
    return this.inStock;
  };
};

type Transaction = { amount: number; status: string };

class FakePaymentGateway {
  private transactions: Transaction[] = [];

  processPayment(amount: number): string {
    this.transactions.push({ amount, status: 'success' });
    return `Processed payment of $${amount}`;
  };

  getTransactions(): Transaction[] {
    return this.transactions;
  };
};

describe('OrderService', () => {
  let fakePaymentGateway: FakePaymentGateway;
  let inventoryStub: InventoryServiceStub;
  let orderService: OrderService;
  let amount: number;
  let productId: string;

  beforeEach(() => {
    fakePaymentGateway = new FakePaymentGateway();
    inventoryStub = new InventoryServiceStub();
    orderService = new OrderService(fakePaymentGateway, inventoryStub);
    amount = 100;
    productId = 'PROD123';
  });

  test('processes payment and calculates bonus points correctly when in stock', () => {
    const result = orderService.checkout(amount, productId);

    expect(result).toBe('Processed payment of $100 - Earned 10 bonus points!');
    expect(fakePaymentGateway.getTransactions()).toEqual([
      { amount, status: 'success' },
    ]);
  });

  test('fails order when product is out of stock', () => {
    inventoryStub.setInStock(false);

    const result = orderService.checkout(amount, productId);

    expect(result).toBe('Order failed: Product out of stock');
    expect(fakePaymentGateway.getTransactions()).toEqual([]);
  });

  test('handles decimal amounts correctly for bonus points', () => {
    amount = 55.99;

    const result = orderService.checkout(amount, productId);

    expect(result).toBe('Processed payment of $55.99 - Earned 5 bonus points!');
    expect(fakePaymentGateway.getTransactions()).toEqual([
      { amount, status: 'success' },
    ]);
  });
});