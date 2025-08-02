import { Link } from 'react-router-dom';
import shopData from '../data/shop';
import type { ShopItem } from '../type/shop';

export default function ShopPage() {
  return (
    <div>
      <h1>Shop Items</h1>
      <ul>
        {shopData.map((item: ShopItem) => (
          <li key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
