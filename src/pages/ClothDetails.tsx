import { useParams } from 'react-router-dom';
import clothes from '../data/clothes'; 
import type { Cloth } from '../type/cloth';

interface Params extends Record<string, string | undefined> {
  id: string;
}

export default function ClothDetails() {
  const { id } = useParams<Params>();

  const cloth = clothes.find((cloth: Cloth) => cloth.id === Number(id));

  if (!cloth) {
    return <div>Todo not found</div>;
  }

  return (
    <div>
      <h2>Cloth Details</h2>

      <p>ID: {cloth.id}</p>
      <p>NAME: {cloth.name}</p>
      <p>DESCRIPTION: {cloth.description}</p>
    </div>
  );
}
