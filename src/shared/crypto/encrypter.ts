export default interface Encrypter {
  hash(plain: string): Promise<string>;
  compare(plain: string, hashed: string): Promise<boolean>;
}

export const ENCRYPTER = Symbol('Encrypter');
