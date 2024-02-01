import Quantity from './Quantity';
type GroceryProps = {
  name: string;
  quantity: number;
  id: number;
  onDelete: (id: number) => void;
  onQuantityChange: (id: number, data: number) => void;
};

const Grocery = ({
  name,
  quantity,
  id,
  onDelete,
  onQuantityChange,
}: GroceryProps) => {
  return (
    <div className='grocery'>
      <span className='grocery-name'>
        <button className='remove-grocery' onClick={() => onDelete(id)}>
          X
        </button>
        {name}
      </span>
      <Quantity
        quantity={quantity}
        id={id}
        onQuantityChange={onQuantityChange}
      />
    </div>
  );
};

export default Grocery;
