
import "./App.css";
import { useState } from "react";

function App() {
  // const [firstName,setFirstName]=useState("");
  // const [lastName,setLastName]=useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstNameHandler(event){
  //   // console.log("Printing First name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   // console.log("Printing Last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);

  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar:"",
  });


  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event){
    event.preventDefault();
    //print
    console.log("Printing entire details of Form are:");
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br></br>

        <input
          type="text"
          placeholder="First name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br></br>
        <br></br>

        <input
          type="text"
          placeholder="Last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br></br>
        <br></br>

        <input
          type="email"
          placeholder="Enter email here"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br></br>
        <br></br>

        <textarea
          placeholder="Enter your comments here"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        <br></br>
        <br></br>

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">I Am Visible ?</label>

        <br></br>
        <br></br>

        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            id="online-mode"
            value="online-mode"
            checked={formData.mode === "online-mode"}
          />
          <label htmlFor="online-mode">OnLine Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            id="offline-mode"
            value="offline-mode"
            checked={formData.mode === "offline-mode"}
          />
          <label htmlFor="offline-mode">OffLine Mode</label>
        </fieldset>

        <br></br>

        <label htmlFor="favCar">Select Your Favrouite Car</label>
        <select
        onChange={changeHandler}
        id="favCar"
        name="favCar"
        value={formData.favCar}>
          <option value="scarpio">Scarpio</option>
          <option value="fortunor">fortunor</option>
          <option value="tharr">Tharr</option>
          <option value="Maruthi suzuki">Maruthi suzuki</option>
        </select>

        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
