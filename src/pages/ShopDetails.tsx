import { useParams } from 'react-router-dom';
import shopData from '../data/shop';
import type { ShopItem } from '../type/shop';

interface Params extends Record<string, string | undefined> {
  id: string;
}

export default function ShopDetails() {
  const { id } = useParams<Params>();
  const item = shopData.find((item: ShopItem) => item.id === Number(id));

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <h2>ID: {item.id}</h2>
      <p> NAME: {item.name}</p>
      <p> DESCRIPTION: {item.description}</p>
      <p>Price: ₦{item.price}</p>
    </div>
  );
}
