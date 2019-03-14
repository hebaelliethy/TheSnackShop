export class Isnack {
    id: number;
    name: string;
    photoUrl: string;
    description: string;
    price: number;

}
export interface IsnackRoot {
    items: Isnack[];
}