import Header from '../../components/Header';
import api from '../../services/api';
import Food, { typeFood } from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [foods, setFoods] = useState<typeFood[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingFood, setEditingFood] = useState<typeFood>({} as typeFood);

  useEffect(() => {
    async function loadFood() {
      const response = await api.get<typeFood[]>('/foods')
        setFoods(response.data)
    }
    loadFood();
  }, []);

  async function handleAddFood(food: typeFood) {
    try {
      const response = await api.post<typeFood>('/foods', {
        ...food,
        available: true,
      });
      setFoods([...foods, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  function handleEditFood(food: typeFood) {
    setEditingFood(food);
    setEditModalOpen(true);
  }

  async function handleUpdateFood(food: typeFood) {
    try {
      const foodUpdated = await api.put<typeFood>(
        `/foods/${editingFood.id}`,
        { ...editingFood, ...food },
      );
      const foodsUpdated = foods.map(f =>
        f.id !== foodUpdated.data.id ? f : foodUpdated.data,
      );
      setFoods(foodsUpdated);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFood(id:number) {
    await api.delete(`/foods/${id}`);
    const foodsFiltered = foods.filter(food => food.id !== id);
    setFoods(foodsFiltered);
  }   

  return (
    <>
         <Header openModal={() => setModalOpen(!modalOpen)} />
         <ModalAddFood
           isOpen={modalOpen}
           setIsOpen={() => setModalOpen(!modalOpen)}
           handleAddFood={handleAddFood}
         />
         <ModalEditFood
           isOpen={editModalOpen}
           setIsOpen={() => setEditModalOpen(!editModalOpen)}
           editingFood={editingFood}
           handleUpdateFood={handleUpdateFood}
         />

         <FoodsContainer data-testid="foods-list">
           {foods &&
             foods.map(food => (
               <Food
                 key={food.id}
                 food={food}
                 handleDelete={handleDeleteFood}
                 handleEditFood={handleEditFood}
               />
             ))}
         </FoodsContainer>
       </>
  )
}

export default Dashboard;
