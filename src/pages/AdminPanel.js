import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
import AddPropertyForm from "../components/AddPropertyForm";

const AdminPanel = () => {
  const { addProperty } = useContext(PropertyContext);

  return (
    <div>
      <h1>Admin Panel</h1>
      <AddPropertyForm handleAddProperty={addProperty} />
    </div>
  );
};

export default AdminPanel;
