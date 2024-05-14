// page1.tsx
import React, { useState } from "react";
import styles from './page1.module.css';

type MenuItem = {
  id: number;
  name: string;
  price: number;
};

function Page1() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 15 },
    { id: 3, name: "Item 3", price: 20 },
  ]);
  const [clientOrder, setClientOrder] = useState<MenuItem[]>([]);

  const addToOrder = (item: MenuItem) => {
    setClientOrder([...clientOrder, item]);
  };

  const removeItem = (index: number) => {
    const newOrder = [...clientOrder];
    newOrder.splice(index, 1);
    setClientOrder(newOrder);
  };

  const calculateTotal = () => {
    return clientOrder.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className={styles.container}>
      <h1>Cardápio</h1>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.id} className={styles.menuItem}>
            {item.name} - R$ {item.price.toFixed(2)}{" "}
            <button className={styles.addButton} onClick={() => addToOrder(item)}>Adicionar à conta</button>
          </li>
        ))}
      </ul>
      <h2>Conta do Cliente</h2>
      <ul className={styles.orderList}>
        {clientOrder.map((item, index) => (
          <li key={index} className={styles.orderItem}>
            {item.name} - R$ {item.price.toFixed(2)}{" "}
            <button className={styles.removeButton} onClick={() => removeItem(index)}>Remover</button>
          </li>
        ))}
      </ul>
      <p className={styles.total}>Total: R$ {calculateTotal().toFixed(2)}</p>
    </div>
  );
}

export default Page1;
