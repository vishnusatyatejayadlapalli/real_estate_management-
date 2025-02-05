import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
import PropertyList from "../components/PropertyList";

const AdminPanel = () => {
  const { properties, addProperty, editProperty } = useContext(PropertyContext);

  return (
    <div>
      <h1>Admin Panel</h1>
      <PropertyList properties={properties} handleEditProperty={editProperty} />
    </div>
  );
};

export default AdminPanel;
