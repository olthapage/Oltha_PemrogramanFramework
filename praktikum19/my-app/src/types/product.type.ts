export type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    
};
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export {};