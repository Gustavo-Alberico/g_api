export default interface ITransactionManager {
  execute<T>(fn: (tx: any) => Promise<T>): Promise<T>;
}

export const TRANSACTION_MANAGER = Symbol('ITransactionManager');
