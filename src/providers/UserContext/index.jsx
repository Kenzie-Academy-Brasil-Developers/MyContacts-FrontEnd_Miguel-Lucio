import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [contactsList, setContactsList] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(user)
  console.log(contactsList)

  const navigate = useNavigate();
  const pathname = window.location.pathname;

  const userLogin = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      const { data } = await api.post("/login", formData);

      localStorage.setItem("@tokenMyContacts", data.token);
      setUser(data.user);
      setContactsList(data.user.contacts);
     

      toast.success("Usuário válido");
      reset();
      navigate("/dashboard");
    } catch (error) {
      
      if (error.response?.data.message === "Invalid credentials.") {
        toast.error("Email e/ou senha incorretos");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        contactsList,
        setContactsList,
        loading,
        userLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
