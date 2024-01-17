import classes from "./AvailabelMeals.module.css";
import Card from "../UI/Card/Card";
import MealForm from "./MealForm";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Idly Sam[w]ghee 2pcs    ",
    description: " Idli Sambar is a delicious dish, idlis dipped with sambar & garnished with onions and ghee.    ",
    price: 40,
  },
  {
    id: "m2",
    name: "Ghee Roast    ",
    description: "Ghee Roast is a dry curry made using freshly ground spices and ghee    ",
    price: 120,
  },
  {
    id: "m3",
    name: "Onion Uthappam    ",
    description: "Onion Uthappam is made by spreading fermented    ",
    price: 100,
  },
  {
    id: "m4",
    name: "Curd Vadai [2 Pcs]    ",
    description: " Curd vadai is a traditional chaat and a great snack that can be enjoyed by all    ",
    price: 50,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((val) => {
          return (
            <Card>
              <li >
                <div key={val.id}>
                  <h2>{val.name}</h2>
                  <p>{val.description}</p>
                  <b>₹{val.price.toFixed(2)}</b>
                </div>
                <div className="formContainer">
                  <MealForm id={val.id} dishName={val.name} dishPrice= {val.price.toFixed(2)} dishDescription={val.description}></MealForm>
                </div>
              </li>
            </Card>
          );
        })}
      </ul>
    </section>
  );
};

export default AvailableMeals;
